const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').MONGO_URI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
//We also need to setup a configuration file for Passport (add this after the previous line):
require('./config/passport')(passport);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/users", users);