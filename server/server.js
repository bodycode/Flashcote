const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = {
    "exampleUser": { "password": "password123", "email": "user@example.com", "decks": {} }
};

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/send-reset-email', (req, res) => {
    const { email } = req.body;
    let username = null;

    for (let user in users) {
        if (users[user].email === email)
        {
            username = user;
            break;
        }
        }

        if (username) {
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `Hello ${username},\n\nPlease click the following link to reset your password: http://yourdomain.com/reset-password?user=${username}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            return res.status(500).send('Error sending email');
            } else {
            return res.status(200).send('Reset email sent');
            }
        });
        } else {
        return res.status(404).send('Email not found');
        }
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
