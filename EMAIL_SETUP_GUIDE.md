# Email Form Setup Guide

Your forms are now configured to send emails using EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

### Template for Student Registration:
```
Subject: New Student Registration - {{from_name}}

You have a new student registration!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Area of Interest: {{interest}}
Career Goals: {{career_goals}}

Form Type: {{form_type}}
```

### Template for Business Consultation:
```
Subject: New Business Inquiry - {{business_name}}

You have a new business consultation request!

Business Name: {{business_name}}
Contact Person: {{contact_person}}
Email: {{from_email}}
Service Interest: {{service_interest}}
Project Description: {{project_description}}

Form Type: {{form_type}}
```

4. Save the template and copy your **Template ID**

## Step 4: Get Your User ID

1. Click on your profile/account in EmailJS dashboard
2. Go to "Account" section
3. Copy your **User ID** (also called Public Key)

## Step 5: Update Your Website Code

Open `script.js` and replace these three values:

1. Find line with `emailjs.init('YOUR_USER_ID');`
   - Replace `YOUR_USER_ID` with your actual User ID

2. Find lines with `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID
   - Do this for BOTH forms (student and business)

### Example:
```javascript
// Before:
emailjs.init('YOUR_USER_ID');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)

// After (with your actual IDs):
emailjs.init('user_abc123xyz');
emailjs.send('service_gmail', 'template_students', formData)
```

## Step 6: Test Your Forms

1. Open your website locally or deploy it
2. Fill out the Student Registration form with test data
3. Click submit
4. Check your email inbox
5. Repeat for Business Consultation form

## Email Address to Receive Forms

The forms will be sent to the email address you connected in Step 2 (your EmailJS email service).

## Troubleshooting

- **Not receiving emails?** Check your spam/junk folder
- **Error messages?** Verify all IDs are correct in script.js
- **Form not submitting?** Open browser console (F12) to see error messages

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Unlimited templates
- Basic support

If you need more, upgrade to a paid plan.

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

Once configured, both your Student Registration and Business Consultation forms will automatically send you an email when someone submits them!
