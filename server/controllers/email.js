const { sendEmail } = require('../services/mail');

async function sendEmails(req, res, next) {
  try {
    // eslint-disable-next-line no-console
    console.log(req.body);
    const send = await sendEmail(req.body.emails, req.body.message);
    if (send)
      return res.status(200).json({ status: 'success', message: 'Email Sent' });
    else return res.status(400).send('Error Occurred');
  } catch (e) {
    res.status(500).send('Error Occurred');
    next(e);
  }
}
module.exports = {
  sendEmails,
};
