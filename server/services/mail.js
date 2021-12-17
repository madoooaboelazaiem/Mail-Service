const { config } = require('../config');
const fs = require('fs');
const path = require('path');

/* eslint-disable no-console */
const sendEmail = async (emails, message) => {
  const mailInputs = emails.map((email) => ({
    Email: email,
    Name: email.split('@')[0],
  }));
  const mailjet = require('node-mailjet').connect(
    config.mailjetPublic,
    config.mailjetPrivate,
  );
  const html = fs
    .readFileSync(path.resolve(__dirname, 'email.html'), 'utf8')
    .toString()
    .replace(/\$\{message\}/g, message);
  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'madooo98@gmail.com',
            Name: 'Mohamed',
          },
          To: mailInputs,
          Subject: 'Greetings from Mailjet.',
          TextPart: 'Feedback',
          HTMLPart: html,
        },
      ],
    });
    if (request.body) return true;
    else return false;
  } catch (e) {
    return false;
  }
};

module.exports = { sendEmail };
