const nodemailer = require('nodemailer');
const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        html: `<p>You have a new message from your portfolio contact form.</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>
               <br>
               <p>Best regards,</p>
               <p>Your Portfolio</p>`
    };    

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Failed to send email.');
    }
});

module.exports = { sendEmail };
