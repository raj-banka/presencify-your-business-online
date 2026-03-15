import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, // TLS requires secure: false for port 587, true for 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, business, phone, email, message } = req.body;

        const mailOptions = {
            from: process.env.SMTP_USER, // sender address
            to: process.env.SMTP_USER, // list of receivers (send to yourself)
            subject: `New Contact Request from ${name}`, // Subject line
            text: `
      You have received a new contact request from your website!
      
      Name: ${name}
      Business Name: ${business || 'N/A'}
      Phone Number: ${phone || 'N/A'}
      Email: ${email || 'N/A'}
      Message: ${message}
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Admin notification sent: %s', info.messageId);

        // Send Acknowledgment Email to the User
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
});

app.listen(PORT, () => {
    console.log(`Backend Server running on port ${PORT}`);
});
