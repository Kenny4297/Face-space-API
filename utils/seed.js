const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    //Checking to see if the connection is working
    console.log('connected');

    //Deleting any previous instances of our Models
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    //The error message that will appear if anything goes wrong with the creating of the Model instances
    const handleError = (err) => console.error(err);


    //Where the objects will be stored to be seeded
    const users = [];
    const thoughts = [];
    const reactions = [];

    //Creating individual instances
    const user1 = await User.create(
    {
        username: "Kenny",
        email: "Kenny@gmail.com",
        thoughts: [
            {
                thoughtText: "This is Kenny's thought!",
                createdAt: new Date(),
                username: "Kenny",
                reactions: [
                    {
                        reactionBody: "Oh yeah!",
                        username: "Kenny",
                        createdAt: new Date()
                    }
                ]
            }
        ]
    },
        (err) => (err ? handleError(err) : console.log('Created new document'))
    );

    const thought1 = await Thought.create( 
        {
            thoughtText: "This is a thought",
            createdAt: new Date(),
            username: "Kenny",
            reactions: [
                {
                    reactionBody: "Totally!",
                    username: "Kenny",
                    createdAt: new Date()
                }
            ]
        },
        (err) => (err ? handleError(err) : console.log('Created new document'))
    );

    const reaction1 = await Reaction.create(
        {
            reactionBody: "This is my reaction",
            username: "Kenny",
            createdAt: new Date()
        },
        (err) => (err ? handleError(err) : console.log('Created new document'))
    );

    users.push(user1);
    thoughts.push(thought1);
    reactions.push(reaction1);

    await User.collection.insertMany(users);
    await Thoughts.collection.insertMany(thoughts);
    await Reactions.collection.insertMany(reactions);

    // loop through the saved videos, for each video we need to generate a video response and insert the video responses
    //? Is the following necessary for this seed file?
    // console.table(users);
    // console.table(videos);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});