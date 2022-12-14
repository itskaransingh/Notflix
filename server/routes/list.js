const router = require("express").Router();
const verify = require("../middleware/verifytoken");
const List = require("../models/list");

router.post("/create", verify, async (req, res) => {
  if (req.users.isadmin) {
    if (req.body.title) {
        const listcreate = new List({ title: req.body.title })
      try {
        const done = await listcreate.save();
        res.status(201).json(done);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(400).json("pass a Title");
    }
  } else {
    res.status(403).json("You Are Not Authenticated");
  }
});


router.get("/", verify, async (req, res) => {
  try {
    const lists = req.query.new
      ? await List.find().sort({ _id: -1 }).limit(req.query.new)
      : await List.find().sort({ _id: -1 });
    res.status(201).json(lists);
  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router