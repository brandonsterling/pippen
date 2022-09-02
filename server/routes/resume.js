const express = require("express");
const resume = require("../models/resume");
const router = express.Router();
const Resume = require("../models/resume");
const auth = require("../middleware/auth");
const resumes = require("../controllers/resume");

router.get("/resumes", auth, function (req, res) {
  resumes.getAll(req, res);
});

router.get("/:id", auth, function (req, res) {
  const id = req.params.id;
  Resume.findById(id, function (err, resume) {
    res.send(resume);
  });
});

router.post("/create", auth, (req, res) => {
  resumes.create(req.user.userEmail).then(() => {
    resumes.getAll(req, res);
  });
});

router.post("/:id", function (req, res) {
  const id = req.params.id;
  Resume.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ msg: "resume updates" }))
    .catch((err) => console.log(err));
});

router.delete("/:id", auth, function (req, res) {
  const id = req.params.id;
  resumes.remove(id);
  resumes.getAll(req, res);
});

module.exports = router;
