const express = require("express");
const app = express();
const db = require('./config/keys').MONGO_URI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 5000;

const path = require('path');

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

app.listen(port, () => console.log(`Server is running on port ${port}`));