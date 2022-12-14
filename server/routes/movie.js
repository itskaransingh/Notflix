const router = require("express").Router();
const verify = require("../middleware/verifytoken");
const Movie = require("../models/movie");

// Create

router.post("/create", verify, async (req, res) => {
  if (req.users.isadmin) {
    if (req.body) {
      const createmovie = new Movie(req.body);
      try {
        const done = await createmovie.save();
        res.status(201).json(done);
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(400).json("All Fields Are Mandatory");
    }
  } else {
    res.status(403).json("You Are Not Authenticated");
  }
});


// update

router.put("/update/:id", verify, async (req, res) => {
  if (req.users.isadmin) {
    if (req.body) {
      try {
        const updating = await Movie.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(201).json(updating);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(400).json("You didn't updated anything");
    }
  } else {
    res.status(403).json("You Are Not Authenticated");
  }
});


// delete

router.delete("/delete/:id", verify, async (req, res) => {
  if (req.users.isadmin) {
    if(req.params.id){
      try {
          await Movie.findByIdAndDelete(req.params.id)
        res.status(201).json("The Movies is has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    }else{
      res.status(401).json("pass a id for deleting");
    }
  } else {
    res.status(403).json("You Are Not Authenticated");
  }
});

// Get all

router.get("/", verify, async (req, res) => {
    try {
      const movies = req.query.new
        ? await Movie.find().sort({ _id: -1 }).limit(req.query.new)
        : await Movie.find().sort({ _id: -1 });
      res.status(201).json(movies);
    } catch (error) {
      res.status(500).json(error);
    }

});

// Get one

router.get("/find/:id", verify, async (req, res) => {
  if (req.users.isadmin) {
    if(req.params.id){
      try {
        const movie =  await Movie.findById(req.params.id)
        res.status(201).json(movie);
      } catch (error) {
        res.status(500).json(error);
      }
    }else{
      res.status(401).json("pass a id");
    }
  } else {
    res.status(403).json("You Are Not Authenticated");
  }
});

//  random for corousal


router.get('/random',async (req,res)=>{
  const ser = req.query.series
  try {
    const citem = await Movie.aggregate([
  {    $match: ser?{ isSeries:true }:{ isSeries:false }},
  {$sample:{size:4}}  ])
  res.status(200).json(citem)
  } catch (error) {
  res.status(500).json(error)
  }

})


module.exports = router;
