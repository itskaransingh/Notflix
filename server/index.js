const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const usercrud = require("./routes/users");
const listcrud = require("./routes/list");
const moviecrud = require("./routes/movie");
const { default: mongoose } = require("mongoose");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json())

app.use(cors());
dotenv.config();

mongoose.connect(
    process.env.MONGODB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log(`MongoDB Connection Succeeded. `);
    } else {
        console.log("Error in DB connection: " + err);
    }
}
);

app.get("/", (req, res) => res.send("Hello World!"));

app.use('/server/auth',auth)
app.use('/server/users',usercrud)
app.use('/server/lists',listcrud)
app.use('/server/movies',moviecrud)


app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}`)
);
