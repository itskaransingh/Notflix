const router = require("express").Router();
const user = require("../models/user");
const cryptojs = require("crypto-js");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const udata = new user({
    username: req.body.username,
    email: req.body.email,
    password: hasher(req.body.password),
  });

  try {
    const sdata = await udata.save();
    res.status(201).json(sdata);
  } catch (error) {
    res.status(403).json("Username Or Email Is Already Taken");
  }
});

router.post("/login", async (req, res) => {
  const userdata = await user.findOne({
    email: req.body.email,
  });

  if (!userdata) {
    res.status(402).json("invalid email");
  } else {
    const { password, ...info } = userdata._doc;
    decoder(password) === req.body.password
      ? res
          .status(200)
          .json({
            ...info,
            accesstoken: jwt.sign(
              { id: info._id, isadmin: info.isadmin },
              "kal",
              { expiresIn: "5d" }
            ),
          })
      : res.status(402).json("wrong password");
  }
});

const hasher = (pass) => {
  const ciphertext = cryptojs.AES.encrypt(pass, "kal").toString();
  return ciphertext;
};
const decoder = (pass) => {
  const bytes = cryptojs.AES.decrypt(pass, "kal");
  const originalText = bytes.toString(cryptojs.enc.Utf8);
  return originalText;
};
module.exports = router;
