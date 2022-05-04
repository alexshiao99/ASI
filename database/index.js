const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/animelist', { useNewUrlParser: true });


// db.on('error', () => {
//   console.log('mongoose connection error');
// });

// db.once('open', () => {
//   console.log('mongoose connected successfully');
// });
db
  .then(db => console.log(`Connected to: mongodb://localhost:27017/animelist`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: mongodb://localhost:27017/animelist`);
    console.log(err);
  });

module.exports = db;