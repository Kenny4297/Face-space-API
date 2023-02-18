const connection = require('../config/connection');
const { Thought, User, Reaction } = require("../models");
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






//! Old seed file
// const connection = require('../config/connection');
// const { User, Thought, Reaction } = require('../models');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//     //Checking to see if the connection is working
//     console.log('connected');

//     //Deleting any previous instances of our Models
//     await User.deleteMany({});
//     await Thought.deleteMany({});
//     await Reaction.deleteMany({});

//     //The error message that will appear if anything goes wrong with the creating of the Model instances
//     const handleError = (err) => console.error(err);

//     //Where the objects will be stored to be seeded
//     const users = [];
//     const thoughts = [];
//     const reactions = [];

//     //Creating individual instances
//     const reaction1 = await Reaction.create(
//         {
//             reactionBody: "This is my reaction",
//             username: "Kenny",
//             createdAt: new Date()
//         },
//         (err) => (err ? handleError(err) : console.log('Created new document'))
//     );

//     const thought1 = await Thought.create( 
//         {
//             thoughtText: "This is a thought",
//             createdAt: new Date(),
//             username: "Kenny",
//             reactions: [reaction1]
//         },
//         (err) => (err ? handleError(err) : console.log('Created new document'))
//     );

//     const user1 = await User.create(
//     {
//         username: "Kenny",
//         email: "Kenny@gmail.com",
//         thoughts: [thought1]
//     },
//         (err) => (err ? handleError(err) : console.log('Created new document'))
//     );

//     users.push(user1);
//     thoughts.push(thought1);
//     reactions.push(reaction1);

//     await User.collection.insertMany(users);
//     await Thought.collection.insertMany(thoughts);
//     await Reaction.collection.insertMany(reactions);

//     // loop through the saved videos, for each video we need to generate a video response and insert the video responses
//     //? Is the following necessary for this seed file?
//     // console.table(users);
//     // console.table(videos);
//     console.info('Seeding complete! 🌱');
//     process.exit(0);
// });

//Conversation between LA


// Why am I getting the error?
// The issue for yours was that it couldnt read the _id.  I suspect if you checked the db it wouldnt be there at all, so it was null (edited) 

// Kedgard Cordero
//   12:20 PM
// Correct! So if I create an object (on line 24), I can put that object in an array (what I am doing on line38). This obviously doesn't work, but even if I use the 'reactionsArray' that you send me, inside the reactions array (on line 38), it will still be an array! Does this make sence?
// 12:21
// Ah, so what I think you are saying is that when I created the reaction on line 24 of seeds, it contained an _id, and the database didn't like that?
// :bust_in_silhouette:
// thopstadredner
// APP  12:22 PM
// Almost, Im saying that it was never created in the db so the code is not able to see the _id


// Kedgard Cordero
//   12:25 PM
// Bear with me! lol From what I understand, in "reactions.js", line 6, this 'reactionID' is automatically generated (in the db) upon the creation of the instance. In other words, I would not need to create the reactionId. Why then would it never be created in the db?
// 12:26
// Or am I getting this confused with the '_id' that is automatically generated for every instance of an object?
// :bust_in_silhouette:
// thopstadredner
// APP  12:27 PM
// A _id is auto generated on successful insert into the db. If that process is not successful the entry is never made and the id  is now essentially nothing or null


// Kedgard Cordero
//   12:29 PM
// Ok, almost there I think lol. In that case, what exactly made my process unsuccessful, compared to the solution?
// :bust_in_silhouette:
// thopstadredner
// APP  12:31 PM
// The insert was never successful so there was no id for the code to grab. which caused the error.


// Kedgard Cordero
//   12:31 PM
// Do you know why the insert wasn't successful specifically?
// :bust_in_silhouette:
// thopstadredner
// APP  12:35 PM
// because it is looking for an id that doesnt exist.
// 12:37
// Everything here is dependent on the Id


// Kedgard Cordero
//   12:37 PM
// (I think this is where I am confused)
// But I thought the id is generated on creation of the object!? How can the db create the id, and then the id not exist!
// Thank you so much for your patience!  I feel like I am chasing my own tail trying to understand this!
// 12:38
// Didn't the db just create the id?
// New
// :bust_in_silhouette:
// thopstadredner
// APP  12:43 PM
// Okay lets try this. your code is async await, which in layman's terms we can boil down to do everything else while I wait for this to happen.  So if an await fails in this case the creation of the reaction there is no reaction in the db. there is another failure when we try and use that reaction and pass that into a thought using the id except the code cant see the id cause it doesn't exist.