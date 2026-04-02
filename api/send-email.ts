import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const resend = new Resend(apiKey);
  const { type, ...data } = req.body;

  try {
    if (type === 'contact') {
      const { name, email, company, message } = data;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      await resend.emails.send({
        from: 'Engaze Digital <onboarding@resend.dev>',
        to: 'engazedigital@gmail.com',
        subject: `New Contact Form: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
        replyTo: email,
      });

      return res.status(200).json({ success: true });
    }

    if (type === 'questionnaire') {
      const fields = data.fields as Record<string, string>;

      if (!fields || !fields.business_name || !fields.contact_email) {
        return res.status(400).json({ error: 'Business name and email are required' });
      }

      const rows = Object.entries(fields)
        .filter(([_, v]) => v && v.trim() !== '')
        .map(([k, v]) => {
          const label = k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#64748B;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:13px;">${String(v).replace(/\n/g, '<br />')}</td></tr>`;
        })
        .join('');

      await resend.emails.send({
        from: 'Engaze Digital <onboarding@resend.dev>',
        to: 'engazedigital@gmail.com',
        subject: `Client Onboarding: ${fields.business_name}`,
        html: `
          <h2>Client Onboarding Questionnaire</h2>
          <p>A new questionnaire was submitted by <strong>${fields.contact_name || fields.business_name}</strong> (${fields.contact_email}).</p>
          <br />
          <table style="width:100%;border-collapse:collapse;font-family:sans-serif;">
            ${rows}
          </table>
        `,
        replyTo: fields.contact_email,
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: 'Invalid form type' });
  } catch (error: any) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
