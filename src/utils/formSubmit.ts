import { formConfig } from '../data/config';
import { uploadAttachmentToSupabase, insertProjectInquiry, insertCareerApplication } from './supabaseClient';

export interface LeadFormData {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    category: 'Hospitality & F&B' | '3D & Architecture' | 'Enterprise Systems' | 'AI & Automation' | string;
    message: string;
    attachment?: File | null;
    formType?: string;
    submittedAt?: string;
    sourceUrl?: string;
}

export interface SubmitOptions {
    subject?: string;
    formType?: string;
}

export const submitForm = async (
    data: LeadFormData | FormData | Record<string, any>,
    options?: SubmitOptions
): Promise<{ success: boolean; error?: string }> => {
    const provider = formConfig.provider;

    try {
        // Normalize payload into standard CRM/Supabase structure
        let payload: FormData | Record<string, any>;
        const metadata = {
            formType: options?.formType || 'Lead Inquiry',
            subject: options?.subject || 'New Client Brief',
            submittedAt: new Date().toISOString(),
            sourceUrl: typeof window !== 'undefined' ? window.location.href : ''
        };

        if (data instanceof FormData) {
            payload = data;
            if (options?.subject) payload.append('subject', options.subject);
            if (options?.formType) payload.append('formType', options.formType);
            payload.append('submittedAt', metadata.submittedAt);
            payload.append('sourceUrl', metadata.sourceUrl);
        } else {
            // Check if there is an attachment file
            const hasFile = data.attachment instanceof File;
            if (hasFile) {
                const fd = new FormData();
                Object.entries({ ...data, ...metadata }).forEach(([key, val]) => {
                    if (val instanceof File) {
                        fd.append(key, val, val.name);
                    } else if (val !== null && val !== undefined) {
                        fd.append(key, String(val));
                    }
                });
                payload = fd;
            } else {
                payload = { ...data, ...metadata };
            }
        }

        // 1. Supabase Provider
        if (provider === 'supabase') {
            let fields: Record<string, any> = {};
            let fileAttachment: File | null = null;

            if (data instanceof FormData) {
                data.forEach((val, key) => {
                    if (val instanceof File && val.size > 0) {
                        fileAttachment = val;
                    } else if (typeof val === 'string') {
                        fields[key] = val;
                    }
                });
            } else {
                fields = { ...data };
                if (data.attachment instanceof File) {
                    fileAttachment = data.attachment;
                }
            }

            let attachmentUrl: string | undefined = undefined;
            if (fileAttachment) {
                const uploadRes = await uploadAttachmentToSupabase(fileAttachment);
                if (uploadRes.success) {
                    attachmentUrl = uploadRes.url;
                }
            }

            if (options?.formType === 'Career Application') {
                return await insertCareerApplication({
                    name: fields.name || fields.fullName || 'Candidate',
                    email: fields.email || '',
                    phone: fields.phone || fields.contact,
                    role: fields.role || fields.position,
                    portfolioUrl: fields.portfolioUrl || fields.portfolio,
                    resumeUrl: attachmentUrl || fields.resumeUrl,
                    notes: fields.message || fields.notes || fields.coverNote
                });
            }

            // Default to Project Inquiry
            return await insertProjectInquiry({
                name: fields.name || fields.fullName || 'Prospective Client',
                email: fields.email || '',
                phone: fields.phone || fields.contact,
                company: fields.company,
                category: fields.category || options?.formType || 'Web Development & AI',
                budget: fields.budget,
                message: fields.message || fields.projectIdea || '',
                attachmentUrl
            });
        }

        // 2. Zoho CRM Provider
        if (provider === 'zoho_crm') {
            const zohoUrl = import.meta.env.VITE_ZOHO_CRM_WEBFORM_URL || 'https://crm.zoho.in/crm/WebToLeadForm';
            let formDataToSend = new FormData();

            if (payload instanceof FormData) {
                formDataToSend = payload;
            } else {
                Object.entries(payload).forEach(([k, v]) => formDataToSend.append(k, String(v)));
            }

            if (import.meta.env.VITE_ZOHO_CRM_XNQSJSIGN) {
                formDataToSend.append('xnQsjsdp', import.meta.env.VITE_ZOHO_CRM_XNQSJSIGN);
            }
            if (import.meta.env.VITE_ZOHO_CRM_XMIND) {
                formDataToSend.append('xmIwtLD', import.meta.env.VITE_ZOHO_CRM_XMIND);
            }

            await fetch(zohoUrl, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Web-to-lead forms are cross-origin opaque
            });
            return { success: true };
        }

        // 3. Formspree Provider
        if (provider === 'formspree') {
            const url = `https://formspree.io/f/${formConfig.formspreeId}`;
            let body: BodyInit;
            const headers: HeadersInit = {
                'Accept': 'application/json'
            };

            if (payload instanceof FormData) {
                body = payload;
            } else {
                body = JSON.stringify(payload);
                headers['Content-Type'] = 'application/json';
            }

            const res = await fetch(url, {
                method: 'POST',
                body,
                headers
            });
            
            return { success: res.ok };
        } 
        
        // 2. Web3Forms Provider
        if (provider === 'web3forms') {
            const url = 'https://api.web3forms.com/submit';
            let body: BodyInit;
            const headers: HeadersInit = {
                'Accept': 'application/json'
            };

            if (payload instanceof FormData) {
                payload.append('access_key', formConfig.web3formsAccessKey);
                body = payload;
            } else {
                body = JSON.stringify({
                    access_key: formConfig.web3formsAccessKey,
                    ...payload
                });
                headers['Content-Type'] = 'application/json';
            }

            const res = await fetch(url, {
                method: 'POST',
                body,
                headers
            });

            return { success: res.ok };
        }

        // 3. EmailJS Provider (SMTP auto-responder support)
        if (provider === 'emailjs') {
            const url = 'https://api.emailjs.com/api/v1.0/email/send';
            
            let templateParams: Record<string, any> = {};
            if (payload instanceof FormData) {
                payload.forEach((value, key) => {
                    if (typeof value === 'string') {
                        templateParams[key] = value;
                    } else if (value instanceof File) {
                        templateParams[key] = `[Attached File: ${value.name}]`;
                    }
                });
            } else {
                templateParams = { ...payload };
            }

            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    service_id: formConfig.emailjs.serviceId,
                    template_id: formConfig.emailjs.templateId,
                    user_id: formConfig.emailjs.publicKey,
                    template_params: templateParams
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return { success: res.ok };
        }

        return { success: false, error: 'Invalid form submission provider configured.' };
    } catch (err: any) {
        return { success: false, error: err?.message || 'Network request failed' };
    }
};
