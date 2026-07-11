export const formConfig = {
    /**
     * The form submission provider to use.
     * Options:
     * - 'emailjs'  : Connect to your custom SMTP server securely via EmailJS.com
     * - 'web3forms': Receive submissions on your business mail via web3forms.com (No login/registration required)
     * - 'formspree': Receive submissions on your email via formspree.io (Default)
     */
    provider: 'formspree' as 'formspree' | 'web3forms' | 'emailjs',

    // 1. Formspree Form ID (default was 'xdkogvnp')
    // Change this to your new Formspree Form ID
    formspreeId: 'xdkogvnp',

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
