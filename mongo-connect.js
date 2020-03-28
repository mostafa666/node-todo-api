// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// const urlConnect = "mongodb://localhost:27017";
// const dbname = "mongodb";

// const client = new MongoClient(urlConnect);

// client.connect(err => {
//   assert.equal(null, err);
//   console.log("------------connected--------------");
//   const db = client.db(dbname);

//   db.collection("todos").insertOne(
//     {
//       name: "mostafa"
//     },
//     (err, result) => {
//       assert.equal(null, err);
//       console.log(JSON.stringify(result.ops, undefined, 2));
//       console.log(result.ops[0]._id.getTimestamp());
//     }
//   );

//   client.close();
// });

/*
    const { MongoClient, objectId } = require('mongodb')
    const newId = new objectId();

    

*/
// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// const urlConnect = "mongodb://localhost:27017";
// const dbName = "todoApp";

// const client = new MongoClient(urlConnect);

// client.connect((err, client) => {
//   assert.equal(null, err);

//   const db = client.db(dbName);
//   db.collection("todoCollection").insertOne(
//     {
//       text: "this is first text",
//       ended: false
//     },
//     (err, result) => {
//       assert.equal(null, err);
//     }
//   );

//   client.close();
// });

// const { MongoClient } = require("mongodb");
// const assert = require("assert");

// const urlConnect = "mongodb://localhost:27017";
// const dbName = "shopping";

// let client = new MongoClient(urlConnect);

// client.connect((err, client) => {
//   assert.equal(null, err);
//   let db = client.db(dbName);
//   db.collection("users").insertOne({
//     name: "hassan",
//     age: 23
//   });
//   client.close();
// });

const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const urlConnect = "mongodb://localhost:27017";
const dbName = "shopping";

let client = new MongoClient(urlConnect);

client.connect((err, client) => {
  assert.equal(null, err);
  const db = client.db(dbName);
  db.collection("users")
    .find()
    .skip(2)
    .toArray()
    .then(docs => {
      console.log("---------------------------------------");
      console.log(JSON.stringify(docs, undefined, 4));
      console.log("---------------------------------------");
    });
  client.close();
});
