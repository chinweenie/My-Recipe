const express = require("express");
const app = express();
const db = require('./config/keys').MONGO_URI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const recipes = require('./routes/api/recipes');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 5000;
const path = require('path');

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function (req, res) {
        console.log("calling back");
        var token = req.user.token;
        res.redirect("http://localhost:3000/#/?token=" + token);
    }
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/users', users);
app.use('/api/recipes', recipes);

app.listen(port, () => console.log(`Server is running on port ${port}`));