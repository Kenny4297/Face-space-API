const connection = require('../config/connection');
const { Thought, User } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomThought,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users & thoughts
  const users = [];
  const thoughts = getRandomThought(2);

  // Loop 4 times -- add users to the users array
  for (let i = 0; i < 4; i++) {
    const thoughts = getRandomThought(2);
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts,
    });
    console.log(users);
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
