const passport = require("passport");
const express = require("express");
const router = express.Router();
const Resume = require("../models/resume");
const auth = require("../services/auth");

router.get("/resumes", auth, function (req, res) {
  Resume.find({ owner: req.user.userEmail }, function (err, resumes) {
    const resumearray = [];
    resumes.forEach(function (resume) {
      resumearray.push(resume);
    });
    res.send(resumearray);
  });
});

router.get("/:id", auth, function (req, res) {
  const id = req.params.id;
  Resume.findById(id, function (err, resume) {
    res.send(resume);
  });
});

router.post("/create", auth, async function (req, res) {
  console.log(req.user);
  const doc = new Resume({
    owner: req.user.userEmail,
    name: "New Resume",
    basics: {
      first_name: "brandon",
      last_name: "sterling",
      title: "new job",
      email: "bslax11@gmail.com",
      url: "google.com",
      phone: "9546542434",
    },
    experience: [
      {
        highlights: ["nice"],
        role: "program manager",
        company: "chime",
        start_date: Date.now(),
        end_date: Date.now(),
        location: {
          city: "Orlando",
          state: "Florida",
        },
        present: true,
        summary: "cool job",
      },
    ],
    education: [
      {
        institution: "Oregon State University",
        location: {
          city: "Orlando",
          state: "FL",
        },
        start_date: "2022-05-01T04:00:00.000Z",
        end_date: "2022-05-01T04:00:00.000Z",
      },
    ],
    projects: [
      {
        highlights: [" "],
        description: " ",
        start_date: "2022-05-01T04:00:00.000Z",
        end_date: "2022-05-01T04:00:00.000Z",
        name: "",
      },
    ],
  });
  await doc.save();
  res.send("success");
});

router.post("/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  Resume.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ msg: "resume updates" }))
    .catch((err) => console.log(err));
});

router.delete("/:id", function (req, res) {
  Resume.findByIdAndRemove(req.params.id, (err, resume) => {
    const response = {
      message: "Resume successfully deleted",
      id: resume._id,
    };
    return res.status(200).send(response);
  });
});

module.exports = router;
