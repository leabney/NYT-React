const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/NYTreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Stuck in Soccer Limbo, in the Shadow of the World Cup",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2018/07/02/sports/world-cup/crimea-russia.html"
  },
  {
    title: "For Brazil a Disappointing Start to World Cup",
    date: new Date(Date.now()),
    url:"https://www.nytimes.com/2018/06/17/sports/world-cup/brazil-switzerland-live-score.html"
  },
  {
    title: "Portugal Fights Off Iran to Advance in World Cup",
    date: new Date(Date.now()),
    url:"https://www.nytimes.com/2018/06/25/sports/world-cup/portugal-vs-iran-ronaldo.html"
  }
]

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
