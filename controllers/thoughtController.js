const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try { 
            //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
            const thought = await Thought.findOne({ _id: req.params.thoughtId}).select('-__v');
            if (!thought) {
                res.status(404).json({ message: "No thought with that ID"});
            } else {
                res.json(thought)
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const { thoughtText, username, userId } = req.body;
            console.log(username, userId);

            const newThought = await Thought.create({ thoughtText, username });

            const getUser = await User.findByIdAndUpdate(userId,
                { $push: { thoughts: newThought._id }},
                { new: true }
            );

            console.log(getUser);

            res.json(getUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId}, {thoughtText: req.body.thoughtText},
                
                //This ensures that the updated thought is returned in the response instead of the original thought before the update
                { new: true }
            );

            console.log(updatedThought)
            if (!updatedThought) {
                res.status(404).json({ message: "No thought with that ID "});
            }
            res.json(updatedThought)
            } catch (err) {
                console.log(err);
                res.status(500).json(err)
            }   
    },

    async deleteThought(req, res) {
            try { 
                //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
                const findThoughtToDelete = await Thought.deleteOne({ _id: req.params.thoughtId});
                if (!findThoughtToDelete) {
                    res.status(404).json({ message: "No thought with that ID"});
                }
                res.json({ message: "Thought Deleted" });
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },
}
