const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: false,
  },
  first_name: String,
  last_name: String,
  name: String,
  title: String,
  email: String,
  url: String,
  phone: String,
  linkedin_url: String,
  portfolio_url: String,
  experience: [
    {
      highlights: [{ type: String }],
      role: String,
      present: Boolean,
      summary: String,
      company: String,
      start_date: Date,
      end_date: Date,
      location: {
        city: String,
        state: String,
      },
    },
  ],
  education: [
    {
      institution: String,
      start_date: Date,
      end_date: Date,
      location: {
        city: String,
        state: String,
      },
      degree: String,
    },
  ],
  projects: [
    {
      name: String,
      start_date: Date,
      end_date: Date,
      description: String,
      highlights: [{ type: String }],
    },
  ],
});

module.exports =
  mongoose.model.ResumeSchema || mongoose.model("Resume", ResumeSchema);
