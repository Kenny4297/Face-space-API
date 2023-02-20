// const Reaction = require('../models/Reaction');

// module.exports = {
//     async getReactions(req, res) {
//         try {
//             const reactions = await Reaction.find();
//             console.log(reactions)
//             res.json(reactions);
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     },

//     async getSingleReaction(req, res) {
//         try { 
//             //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
//             const reaction = await Reaction.findOne({ _id: req.params.reactionId}).select('-__v');
//             if (!reaction) {
//                 res.status(404).json({ message: "No reaction with that ID"});
//             } else {
//                 res.json(reaction)
//             }
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     },

//     async createReaction(req, res) {
//         try {
//             const dbReactionData = await Reaction.create(req.body);
//             res.json(dbReactionData);
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     },

//     async updateReaction(req, res) {
//         try {
//             const updateReaction = await Reaction.findOneAndUpdate(
//                 { _id: req.params.reactionId},
//                 req.body,

//                 //This ensures that the updated reaction is returned in the response instead of the original reaction before the update
//                 { new: true }
//             );
//             if (!updateReaction) {
//                 res.status(404).json({ message: "No reaction with that ID "});
//             }
//             res.json(updatedReaction)
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json(err)
//             }   
//     },

//     async deleteReaction(req, res) {
//             try { 
//                 //The "select('-__v')"  thing here is to avoid finding the "version" field that is added to each document
//                 const findReactionToDelete = await reaction.deleteOne({ _id: req.params.reactionId});
//                 if (!findReactionToDelete) {
//                     res.status(404).json({ message: "No reaction with that ID"});
//                 }
//                 res.json({ message: "Reaction Deleted" });
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json(err);
//             }
//         },
// }
