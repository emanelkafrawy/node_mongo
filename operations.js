//view ,delete, add,update the database file

const assert = require('assert');


//exports several methods form the node modules
//1-mongodb connection
//2-documment which i want to insert in it
//3- collection which i want insert the document in it 
//4-callback which will be calle back once that operation is completed

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result)=>{
        assert.equal(err, null);
        console.log("inserted " + result.result.n + " document into collection" + collection );
        callback(result);
    });
};
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);//to ensure that error is not null
        callback(docs);
    });
    
};
exports.removeDocument = (db,document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log("remove the document", document);
        callback(result);
    });
};
exports.updateDocument = (db,document,update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, {$set: update}, null, (err, result) => {
        assert.equal(err, null);
        console.log("updated the document with", update);
        callback(result);
    });
};