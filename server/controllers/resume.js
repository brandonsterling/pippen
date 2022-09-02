const Resume = require("../models/resume");

module.exports = {
  create: async function (email) {
    const doc = new Resume({
      owner: email,
      name: "Your new resume",
      basics: {},
    });
    await doc.save();
  },

  getAll: (req, res) => {
    console.log("getting resys");
    Resume.find({ owner: req.user.userEmail }, (err, resumes) => {
      const resumearray = [];
      resumes.forEach(function (resume) {
        resumearray.push(resume);
      });
      res.send(resumearray);
    });
  },

  remove: (id) => {
    Resume.findByIdAndRemove(id, function (err, resume) {
      if (err) {
        console.log(err);
      } else {
        console.log("Removed resume : ", resume);
      }
    });
  },
};
