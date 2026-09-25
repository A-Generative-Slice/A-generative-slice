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
    provider: (import.meta.env.VITE_SUPABASE_URL ? 'supabase' : 'formspree') as 'supabase' | 'zoho_crm' | 'formspree' | 'web3forms' | 'emailjs',

    // 1. Formspree Form ID
    formspreeId: import.meta.env.VITE_FORMSPREE_ID || 'xdkogvnp',

    // 2. Web3Forms Access Key
    // Change this to your Web3Forms Access Key from web3forms.com
    web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

    // 3. EmailJS Credentials (For Custom SMTP)
    // Register at emailjs.com, connect your custom SMTP under "Email Services",
    // create a template under "Email Templates", and fill these details:
    emailjs: {
        serviceId: 'YOUR_EMAILJS_SERVICE_ID',
        templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
        publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
    },

    // Destination email for client-side mailto fallback
    businessEmail: 'agenerativeslice@gmail.com'
};
