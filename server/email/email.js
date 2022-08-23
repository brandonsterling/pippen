const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SG_API_KEY,
  },
});

module.exports = async (content) => {
  const contacts = {
    from: "brandonscottsterling@gmail.com",
    to: "sterlinb@oregonstate.edu",
  };
  const email = Object.assign({}, content, contacts);

  await transporter.sendMail(email);
};
