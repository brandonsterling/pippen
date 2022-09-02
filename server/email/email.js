const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_API_KEY);
require("dotenv").config();

module.exports = async (content) => {
  await sgMail.send(content);
};
