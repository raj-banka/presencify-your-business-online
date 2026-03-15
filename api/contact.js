import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // CORS setup for production
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, business, phone, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: false, // TLS requires secure: false for port 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // 1. Send Admin Notification
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: `New Contact Request from ${name}`,
            text: `You have received a new contact request from your website!
        
Name: ${name}
Business Name: ${business || 'N/A'}
Phone Number: ${phone || 'N/A'}
Email: ${email || 'N/A'}

Message:
${message}
`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Admin notification sent: %s', info.messageId);

        // 2. Send Acknowledgment Email to the User
        if (email) {
            const ackOptions = {
                from: `"Presencify Team" <${process.env.SMTP_USER}>`,
                to: email, // The user's provided email address
                subject: 'We received your request! - Presencify',
                text: `Hi ${name},\n\nThank you for reaching out to Presencify!\n\nThis is an automated message to confirm that we have successfully received your inquiry regarding ${business || 'your business services'}. Our team is reviewing the details you provided, and we will get back to you within 24 hours.\n\nHere is a copy of your message:\n"${message}"\n\nIf you need any immediate assistance, please feel free to reply directly to this email.\n\nBest regards,\nThe Presencify Team\nhttps://presencify.com`,
            };

            const ackInfo = await transporter.sendMail(ackOptions);
            console.log('User Acknowledgment sent: %s', ackInfo.messageId);
        }

        res.status(200).json({ success: true, message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
