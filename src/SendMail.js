const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// POST endpoint for sending email
app.post('/send_email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // or your email provider's SMTP host
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'thelaw103@gmail.com', // your email address
      pass: 'IM/18B/1281', // your email password
    },
  });

  // Setup email data
  const mailOptions = {
    from: 'thelaw103@gmail.com', // sender email address
    to: email, // recipient email address
    subject: 'Contact Us Form Submission', // email subject
    html: `<p>Thank you for contacting us. Here are the details:</p>
           <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on http://localhost:3001');
});
