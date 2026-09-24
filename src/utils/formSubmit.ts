import { formConfig } from '../data/config';
import { uploadAttachmentToSupabase, insertProjectInquiry, insertCareerApplication } from './supabaseClient';

interface SubmitOptions {
    subject?: string;
    formType?: string;
}

export const submitForm = async (
    data: FormData | Record<string, any>,
    options?: SubmitOptions
): Promise<{ success: boolean; error?: string }> => {
    const provider = formConfig.provider;

    try {
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

        if (provider === 'zoho_crm') {
            const zohoUrl = import.meta.env.VITE_ZOHO_CRM_WEBFORM_URL || 'https://crm.zoho.in/crm/WebToLeadForm';
            let formDataToSend = new FormData();

            if (data instanceof FormData) {
                formDataToSend = data;
            } else {
                Object.entries(data).forEach(([k, v]) => formDataToSend.append(k, String(v)));
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

        if (provider === 'formspree') {
            const url = `https://formspree.io/f/${formConfig.formspreeId}`;
            let body: BodyInit;
            const headers: HeadersInit = {
                'Accept': 'application/json'
            };

            if (data instanceof FormData) {
                // If it's a FormData object, let the browser set the boundary headers automatically
                body = data;
            } else {
                body = JSON.stringify({ ...data, ...options });
                headers['Content-Type'] = 'application/json';
            }

            const res = await fetch(url, {
                method: 'POST',
                body,
                headers
            });
            
            return { success: res.ok };
        } 
        
        if (provider === 'web3forms') {
            const url = 'https://api.web3forms.com/submit';
            let body: BodyInit;
            const headers: HeadersInit = {
                'Accept': 'application/json'
            };

            if (data instanceof FormData) {
                data.append('access_key', formConfig.web3formsAccessKey);
                if (options?.subject) data.append('subject', options.subject);
                if (options?.formType) data.append('form_type', options.formType);
                body = data;
            } else {
                body = JSON.stringify({
                    access_key: formConfig.web3formsAccessKey,
                    ...data,
                    ...options
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

        if (provider === 'emailjs') {
            const url = 'https://api.emailjs.com/api/v1.0/email/send';
            
            // Extract parameters for EmailJS template
            let templateParams: Record<string, any> = {};
            if (data instanceof FormData) {
                data.forEach((value, key) => {
                    if (typeof value === 'string') {
                        templateParams[key] = value;
                    } else if (value instanceof File) {
                        templateParams[key] = `[Attached File: ${value.name}]`;
                    }
                });
            } else {
                templateParams = { ...data };
            }

            // Include extra metadata
            if (options?.subject) templateParams.subject = options.subject;
            if (options?.formType) templateParams.formType = options.formType;

            const body = JSON.stringify({
                service_id: formConfig.emailjs.serviceId,
                template_id: formConfig.emailjs.templateId,
                user_id: formConfig.emailjs.publicKey,
                template_params: templateParams
            });

            const res = await fetch(url, {
                method: 'POST',
                body,
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
