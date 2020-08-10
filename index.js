const MongoClient = require("mongodb").MongoClient;//mongoclient enable us to connect to the mongodb server

const assert = require("assert");/*to check about the truth and false values within our app.*/

const dboper = require("./operations");//to start to connect to the db server

const url = 'mongodb://localhost:27017/';
//the url will be the url where the mongo db server can be accessed +the baby access is the mogogdb...

const dbname = 'conFusion';

//to access the server   url + callback function
MongoClient.connect(url, (err, client)=>{

    assert.equal(err, null);//chech to see if error is equal to null
    console.log("connected correctly to server");
    const db = client.db(dbname);

    //will update this way and use the operation
    /*  const collection = db.collection("dishes");
    collection.insertOne({"name":"emoooooo", "description": "test the database"}, (err, result)=>{
        assert.equal(err, null);//to ensure that error is not null
        console.log('after insert: \n');
        console.log(result.ops); //result value returned carry out and sussesfuly

        //try to search on the all record exist
        collection.find({}).toArray((err, docs)=>{
            assert.equal(err, null);//to ensure that error is not null
            console.log("found:\n");
            console.log(docs);
            db.dropCollection('dishes', (err, result)=>{
                assert.equal(err, null);//to ensure that error is not null
                client.close(); 
            });
        });

    });*/

    dboper.insertDocument(db, {name: "emanelkfrawy2018", description: "test the operation"}, 'dishes', (result) =>{
        //handle the result value
        console.log("insert document:\n",result.ops);
        dboper.findDocuments(db, 'dishes', (docs)=> {
            console.log("found documents:\n", docs);

            dboper.updateDocument(db, {name: 'emanelkfrawy'}, {description: 'updated test'}, 'dishes', (result)=> {
                console.log("updated documents:\n", result.result);

        dboper.findDocuments(db, 'dishes', (docs)=> {
            console.log("found documents:\n", docs);

            db.dropCollection('dishes', (result) => {
                console.log("dropped collection:", result);

                client.close();
                });
                });
            });
        });
    });
});