const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('01-Activities')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});












//! Before activities
// const express = require("express")
// const app = express();
// const mongoose = require('mongoose');
// const User = require("./models/User");
// const Thought = require('./models/Thought');
// const { Reaction } = require('./models/Reaction');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const PORT = 3001;

// mongoose.connect("mongodb://127.0.0.1:27017/social_network", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );


// mongoose.connection.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
// });
  
// run()