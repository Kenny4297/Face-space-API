const { Schema, model } = require("mongoose");

//'Reactions' are similar to replies
const reactionSchema = new Schema({
    reactionId: {
        // By defining reactionId as a mongoose.Types.ObjectId field, we are ensuring that the value of reactionId will be a valid ObjectId and can be used as a reference to other documents. Awaiting Tutor clarification.
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,

        //We can also use a validation method here, but this I think would be cleaner
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(createdAt) {
          return createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
    },
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;