const router = require("express").Router();
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const verify = require("../middleware/verifytoken");

const hasher = (pass) => {
  const ciphertext = cryptojs.AES.encrypt(pass, "kal").toString();
  return ciphertext;
};

// update

router.put("/:id", verify, async (req, res) => {
  if (req.params.id === req.users.id || req.users.isadmin) {
    if (req.body.password) {
      req.body.password = hasher(req.body.password);
    }
    try {
      const updated = await user.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(401).json("you can change your own account");
  }
});

// delete

router.delete("/:id", verify, async (req, res) => {
  if (req.params.id === req.users.id || req.users.isadmin) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json("your account has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can delete your own account");
  }
});

// Get
router.get("find/:id", async (req, res) => {
  if (req.params.id) {
    try {
      const oneuser = await user.findById(req.params.id);
      res.status(200).json(oneuser);
    } catch (error) {
      res.status(403).json("Invalid Id");
    }
  }
});

// Get ALL
router.get("/", verify, async (req, res) => {
  if (req.users.isadmin) {
    const query = req.query.new;

    try {
      const users = query
        ? await user.find().sort({ _id: -1 }).limit(query)
        : await user.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Your Not An Admin");
  }
});

module.exports = router;
