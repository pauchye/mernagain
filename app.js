// express is a web app framework for node
const express = require('express'); 
// create an express server
const app = express();
//import maongoose 
const mongoose = require('mongoose');
const mongoUri = require('./config/secrets').mongoURI;
const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const dreams = require("./routes/api/dreams");
// body parser to parse the JSON we send to our frontend
const bodyParser = require('body-parser');
const passport = require('passport');

app.get("/", (req, res) => res.send("Hello World again"));
// need to add nodemon to packaje json to watch changes

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
// process.env.PORT - for Heroku, 5000 - local

// setup middleware for bodyparser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/dreams", dreams);

app.use(passport.initialize());
require('./config/passport')(passport);

app.listen(port, () => console.log(`Server is running on port ${port}`));
