# How to Create EmailJS Template - Simple Guide

## Step 1: Login to EmailJS
1. Go to https://www.emailjs.com/
2. Login to your account

## Step 2: Go to Email Templates
1. Click on "Email Templates" in the left sidebar
2. Click the "Create New Template" button

## Step 3: Fill in the Template

You'll see a form with these fields:

### Template Name:
Give it a name like: `Student and Business Forms`

### Template ID:
This will be auto-generated. **Copy this ID** - you'll need it later!

### Subject Line:
```
New {{form_type}} from {{from_name}}
```

### Content (Body):
Copy and paste this into the template body:

```
Hello,

You have received a new form submission!

FORM TYPE: {{form_type}}

--- CONTACT INFORMATION ---
Name: {{from_name}}
Email: {{from_email}}

--- STUDENT DETAILS (if applicable) ---
Phone: {{phone}}
Area of Interest: {{interest}}
Career Goals: {{career_goals}}

--- BUSINESS DETAILS (if applicable) ---
Business Name: {{business_name}}
Contact Person: {{contact_person}}
Service Interest: {{service_interest}}
Project Description: {{project_description}}

---
This email was sent from your website form.
```

### To Email:
Leave this as `{{to_email}}` or put your actual email address

## Step 4: Save the Template
1. Click "Save" at the bottom
2. **IMPORTANT: Copy your Template ID** - you'll see it at the top of the page

## Step 5: Test the Template
1. Click "Test it" button
2. Fill in sample data
3. Check if you receive the test email

## What the Variables Mean:

These are placeholders that will be replaced with actual form data:

- `{{form_type}}` - Will show "Student Registration" or "Business Consultation"
- `{{from_name}}` - Student name or contact person name
- `{{from_email}}` - Email address from the form
- `{{phone}}` - Phone number (student form only)
- `{{interest}}` - Area of interest (student form only)
- `{{career_goals}}` - Career goals (student form only)
- `{{business_name}}` - Business name (business form only)
- `{{contact_person}}` - Contact person (business form only)
- `{{service_interest}}` - Service selected (business form only)
- `{{project_description}}` - Project description (business form only)

## After Creating Template:

You'll need THREE things to update in your code:
1. ✅ User ID (from Account section)
2. ✅ Service ID (from Email Services section)
3. ✅ Template ID (from this template you just created)

Write these down! You'll need them in the next step.
