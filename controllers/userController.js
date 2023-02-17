const User = require('../models/User');

module.exports = {
    //"function" to get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //"function" to get a single user
    async getSingleUser(req, res) {
        try { 
            //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
            const user = await User.findOne({ _id: req.params.userId}).select('-__v');
            if (!user) {
                res.status(404).json({ message: "No user with that ID"});
            } else {
                res.json(user)
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //"function" to get a single user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId},
                req.body,

                //This ensures that the updated User is returned in the response instead of the original User before the update
                { new: true }
            );
            if (!updateUser) {
                res.status(404).json({ message: "No User with that ID "});
            }
            res.json(updatedUser)
            } catch (err) {
                console.log(err);
                res.status(500).json(err)
            }   
    },

    async deleteUser(req, res) {
            try { 
                //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
                const findUserToDelete = await User.deleteOne({ _id: req.params.userId});
                if (!findUserToDelete) {
                    res.status(404).json({ message: "No User with that ID"});
                }
                res.json({ message: "User Deleted" });
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },
}