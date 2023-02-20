const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,

        //The 'Date.now' is your ordinary JS Date object and is not specific to MongoDB
        default: Date.now,

        //The following returns the current date in a month/day/year format.
        //Keep in mind you would pass in a JS "Date" object as its argument something like 
        //  const date = new Date();
        get: function(createdAt) {
            return createdAt.toLocalDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }
    },
    username: {
        type: String,
        required: true
    },

    //When you create a Thought document and want to associate a reaction with it, you would create a new object following the reactionSchema and push it onto the reactions array of the Thought document.
    reactions: [reactionSchema]
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;