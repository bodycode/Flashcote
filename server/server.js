const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = {
    "exampleUser": { "password": "password123", "email": "user@example.com", "decks": {} }
};

app.post('/send-reset-email', (req, res) => {
    const { email } = req.body;
    let username = null;

    for (let user in users) {
        if (users
