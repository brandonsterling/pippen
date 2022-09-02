module.exports = {
  confirm: (id) => ({
    from: "brandonscottsterling@gmail.com",
    to: "sterlinb@oregonstate.edu",
    subject: "Confirm your email address",
    templateId: "d-260d440d0d794f39a0c8bb1d75c86d64",
    dynamic_template_data: {
      user_id: id,
    },
  }),

  reset: (token) => ({
    from: "brandonscottsterling@gmail.com",
    to: "sterlinb@oregonstate.edu",
    subject: "Your Pippen password request",
    templateId: "d-aaba9628f6f743d693cda1d0a2878e45",
    dynamic_template_data: {
      token: token,
    },
  }),
};
