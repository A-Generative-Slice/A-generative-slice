import { formConfig } from '../data/config';

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
