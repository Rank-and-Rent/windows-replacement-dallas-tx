# SendGrid Dynamic Template Setup Guide

## Steps to Create the Template in SendGrid

1. **Log into SendGrid** → Go to Email API → Dynamic Templates

2. **Create a New Template**
   - Click "Create a Dynamic Template"
   - Give it a name like "Window Replacement Confirmation Email"

3. **Add a Version**
   - Click "Add Version"
   - Select "Code Editor"
   - Choose "Blank Template"

4. **Set the Subject Line**
   - In the subject field, use: `{{subject}}`
   - This will pull from your `brand.subject` field

5. **Paste the HTML**
   - Open `sendgrid-template.html` from this directory
   - Copy the entire contents
   - Paste into the HTML editor in SendGrid
   - **Important**: Make sure to use the Code Editor view, not the visual editor

6. **Test the Template**
   - Click "Test" or "Preview" button
   - Select "Test with JSON"
   - Copy the contents from `sendgrid-test-data.json` and paste it
   - This will show you exactly how the email will look!

7. **Activate the Template**
   - Click "Activate" on the version
   - The template must be activated to work!

8. **Get the Template ID**
   - After activating, you'll see the Template ID (starts with `d-`)
   - Copy this ID
   - Update your `.env.local` file:
     ```
     SENDGRID_TEMPLATE_ID=d-YOUR-NEW-TEMPLATE-ID-HERE
     ```

## Template Variables Used

The template expects these variables in `dynamicTemplateData`:

### Brand Variables:
- `subject` - Email subject line
- `preheader` - Preheader text (hidden preview)
- `company_name` - Company name
- `logo_url` - Logo image URL (optional)
- `city_state` - City and state (e.g., "Dallas, TX")
- `brand_accent` - Accent color (hex code)
- `cta_dark_bg` - Dark CTA button background color
- `bg_color` - Background color
- `text_dark`, `text_muted`, `text_body`, `text_faint` - Text colors
- `border_color` - Border color
- `card_header_bg`, `card_header_text` - Card header colors
- `header_text_color`, `footer_text_color` - Header/footer text colors
- `hero_title`, `hero_subtitle` - Hero section content
- `details_title` - Details card title
- `call_cta_label`, `call_phone`, `call_phone_plain` - Call button
- `site_cta_label`, `site_url` - Site button
- `address_line` - Company address
- `footer_note` - Footer note text
- `submitted_date` - Form submission date

### Lead Variables (nested under `lead`):
- `lead.name` - Customer name
- `lead.email` - Customer email
- `lead.phone` - Customer phone (formatted)
- `lead.phone_plain` - Customer phone (digits only)
- `lead.projectType` - Service type (e.g., "Window Replacement")
- `lead.address` - Property address (optional)
- `lead.city` - City (optional)
- `lead.timeline` - Project timeline (optional)
- `lead.message` - Customer message (optional, uses triple brackets for HTML)

## Important Notes

- **Triple Brackets**: The `lead.message` field uses `{{{lead.message}}}` to properly handle HTML/special characters
- **All other fields** use regular `{{variable}}` syntax
- **Conditional Fields**: Fields wrapped in `{{#if variable}}...{{/if}}` will only show if the variable exists
- **Subject Line**: Must be set in SendGrid's subject field as `{{subject}}` OR passed in the message object

## Testing

After setting up:
1. Submit a test form on your site
2. Check the server logs for SendGrid responses
3. Verify the email arrives with proper formatting
4. Check that all variables are populated correctly

## Troubleshooting

- **Empty emails**: Make sure the template is activated
- **Missing variables**: Check server logs for SendGrid error responses
- **Handlebars warnings**: Make sure HTML content uses `{{{ }}}` instead of `{{ }}`
- **Template not found**: Verify the Template ID matches exactly in your `.env.local`
