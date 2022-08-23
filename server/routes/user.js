const express = require("express");
const router = express.Router();
const sendMail = require("../email/email");
const User = require("../models/user");
const templates = require("../email/templates");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
        confirmed: false,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          sendMail(templates.confirm(user._id));
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

router.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(401).send({
              message: "The email or password is invalid",
            });
          }
          // check if user confirmed their email
          if (user.confirmed !== true) {
            return response.status(401).send({
              reason: "UNCONFIRMED",
              message:
                "Please verify your email address using the confirmation email we've sent you",
            });
          }
          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          //   return success response

          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        });
      // catch error if password does not match
      // .catch((error) => {
      //   response.status(400).send({
      //     message: "Passwords does not match",
      //     error,
      //   });
      // });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

router.post("/resend", function (req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(req.body);
      if (user.confirmed !== true) {
        sendMail(templates.confirm(user._id));
        return res.status(201).send({
          message: "We've resent your confirmation email. ",
        });
      }
    })
    .catch((e) => {
      res.status(404).send({
        message: "There was an error",
        e,
      });
    });
});

router.post("/confirm/:id", function (req, res) {
  const id = req.params.id;
  User.findById(id).then((user) => {
    if (!user) {
      res.json({ msg: "not found" });
    } else if (user) {
      User.findByIdAndUpdate(id, { confirmed: true })
        .then(() => res.json({ msg: "confirmed" }))
        .catch((err) => console.log(err));
    }
  });
});

module.exports = router;
