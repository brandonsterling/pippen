module.exports = {
  confirm: (id) => ({
    subject: "React Confirm Email",
    html: `
        <a href='http://localhost:3000/auth/confirm/${id}'>
          click to confirm email
        </a>
      `,
    text: `Someone (hopefully you) has created a new Pippen account. Follow the link below to confirm your email address:
    Copy and paste this link: http://localhost:3000/auth/confirm/${id}`,
  }),
};
