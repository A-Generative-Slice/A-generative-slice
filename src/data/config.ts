export const companyContacts = {
    emails: {
        zoho: 'smdhussain@agenerativeslice.com',
        primary: 'smdhussain@agenerativeslice.com',
        founder: 's.m.d.hussainjoe@gmail.com'
    },
    phones: {
        primary: '+91 78128 91494'
    },
    whatsappUrl: 'https://wa.me/917812891494',
    address: {
        line1: 'No: 144, Valluvar Kottam High Rd',
        area: 'Nungambakkam, Chennai',
        stateZip: 'Tamil Nadu 600034',
        hours: 'Monday to Friday, 9:00 AM to 7:00 PM'
    }
};

export const formConfig = {
    /**
     * The form submission provider to use.
     * Options:
     * - 'supabase' : Direct insert into PostgreSQL + storage uploads (Recommended, ₹0 free tier)
     * - 'zoho_crm' : Push directly into Zoho CRM Leads pipeline (₹0 free tier)
     * - 'formspree': Receive submissions on your email via formspree.io
     * - 'web3forms': Receive submissions on your business mail via web3forms.com
     * - 'emailjs'  : Connect to your custom SMTP server securely via EmailJS.com
     */
    provider: 'web3forms' as 'supabase' | 'zoho_crm' | 'formspree' | 'web3forms' | 'emailjs',

    // Primary business contact emails
    businessEmail: companyContacts.emails.zoho,
    founderEmail: companyContacts.emails.founder,
    mediaEmail: companyContacts.emails.zoho,

    // 1. Formspree Form ID
    formspreeId: import.meta.env.VITE_FORMSPREE_ID || 'xdkogvnp',

    // 2. Web3Forms Access Key
    web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_KEY || '562ef4ca-1ebd-4356-9173-fce4e646cc42',

    // 3. EmailJS Credentials (For Custom SMTP)
    emailjs: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
    }
};
