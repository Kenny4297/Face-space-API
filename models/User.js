const { Schema, model } = require("mongoose");

const userSchema = Schema({
    //!The following are called 'fields'. They are similar to 'columns' in SQL
    //The data type for the schema
    username: {
        type: String,

        //When unique is true, it is used to ensure that a field in a document has a unique value across all documents in the collection.
        unique: true,

        //Makes sure there is something in the top field name
        required: true,

        //Any whitespace characters (e.g., spaces, tabs, newlines) at the beginning or end of the string value will be removed before the document is saved to the database.
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

        //This is the regEx criteria for an email address
        match: /^\S+@\S+\.\S+$/
    },
    thoughts: [{
        //!"Array of _id values referencing the Thought model"
        //This defines a schema for a collection of users. The thoughts field in the schema is an array of ObjectId values that references documents in the Thought collection, while the friends field is an array of ObjectId values that references documents in the User collection. By using type: Schema.Types.ObjectId and ref: 'Thought' or ref: 'User', Mongoose can automatically create relationships between documents in the different collections based on their ObjectId values. This allows you to associate one or more Thought documents with a User document, or to establish friendships between two User documents, creating a many-to-many relationship between the two collections.
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends:[{
        //! Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
});

//Virtual properties are properties that are not stored on the database but rather are computed on-the-fly based on other properties of the document. The 'friendCount' virtual property is computed based on the friends array property of the document. They are particularly useful when we want to compute some value on-the-fly rather than storing it in the database. We can use a get and a set for these properties.
//Once we create "User" object, we can treat this like a method, calling it on a User with "".friendCount"
    //user.friendCount
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//This compiles our Schema into a model. This will be a "User collection". We can now add objects with the criteria designated in the construction of the schema. 
const User = model('user', userSchema);

module.exports = User;

