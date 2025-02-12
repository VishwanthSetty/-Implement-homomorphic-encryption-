const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Database
mongoose
  .connect("mongodb://localhost:27017/plr-enc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db connection error: ", err.message);
  });
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// Routes
app.use("/paillier", require("./routes/paillier"));

// Server port set-up
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
