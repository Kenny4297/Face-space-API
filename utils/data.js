const usernameArray = [
  'gwashington',
  'alincoln',
  'hpotter',
  'jdoe',
  'bobama',
  'cbrown',
  'hstyles',
  'wsmith',
  'jadams',
  'htubman',
  'jmadison',
  'tjefferson',
  'ajackson',
  'jdepp',
  'gclooney',
  'rgosling',
  'bpitt',
  'sjohansson',
  'mjordan',
  'mjackson'
];

const emailArray = [
  'test1@hotmail.com',
  'test2@hotmail.com',
  'test3@hotmail.com',
  'test4@hotmail.com',
  'creative@imagine.com',
  'creativesoul@imagine.com',
  'robot@ai.com',
  'iamnotarobot@futurecom',
  'iamrobot@future.com',
  'coding101@aol.com',
  'coding4dummies@aol.com',
  'helloworld@aol.com',
  'email1@email.com',
  'email2@gmail.com',
  'email3@gmail.com',
  'email4@gmail.com',
  'world@testing.com',
  'galaxy@testing.com',
  'universe@testing.com',
  'earth@testing.com',
];

const thoughtArray = [
  'testing 1 2 3',
  'just thinking',
  'where to start?',
  'testing testing testing',
  'hello there',
  'just a random thought',
  'what is in the future',
  'what is happening',
  'I can not believe this',
  'everyone, everywhere, everytime?',
  'cheers to the governor',
  'onward and upward',
  'here we go',
  'here we go again',
  'round and round',
  'and so we move ahead',
  'live, love, laugh',
  'everyday is a new day',
  'love hard',
  'work hard',
];

const reactionArray = [
  'very cool',
  'super random',
  'very relatable',
  'this is funny',
  'I like it',
  'okay',
  'keep at it',
  "I don't know how to react",
  'this has me thinking',
  'a bit confusing',
  'here we go',
  'alright',
  'yes yes',
  'for sure',
  'no comment',
  'commenting to comment',
  'testing 1, 2',
  'testing 1, 3, 3...',
  'this is great',
  'this is good',
];

// const friendArray = [1, 2, 3, 4];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random username
const getRandomUsername = () => getRandomArrItem(usernameArray);

// get random email
const getRandomEmail = () => getRandomArrItem(emailArray);

// Function to generate random thoughts that we can add to user object.
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtArray),
        reactions: getRandomArrItem(reactionArray),
        // username: getRandomArrItem(usernameArray),
      });
    }
    console.log(results)
    return results;
  };



// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail, getRandomThought };