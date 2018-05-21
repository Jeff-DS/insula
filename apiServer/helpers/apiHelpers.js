/*
    All the db interation logic is in here, to keep api.js nice and tidy ...
*/

const db = require("../models");

exports.getDocuments = (modelName) => (req,res) => {
    // Get all the documents and send them as JSON
    db[modelName].find()
    .then(foundDocuments =>{
        res.json(foundDocuments);   
    })
    .catch(err =>{
        res.send(err);
    })
};

exports.createDocument = (modelName) => (req, res) => {
    // Create a new document from request body, saving to db
    db[modelName].create(req.body)
    .then(newDocument => {
        res.status(201).json(newDocument);  // status 201 indicates something was created on server
    })
    .catch(err => {
        res.send(err);
    })
}

exports.retrieveOne = (modelName) => (req, res) => {
    // Retrieve the document with id specified in query string
    db[modelName].findById(req.params.id)
    .then(foundDocument => {
        res.json(foundDocument)
    })
    .catch(err => {res.send(err)});
};

exports.updateDocument = (modelName) => (req, res) => {
    // Find the document with id specified in query string.
    // For each key value pair in req.body, set the corresponding
    // field in the document to value. 
    db[modelName].findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedDocument => {
        res.json(updatedDocument)
    })
    .catch(err => {res.send(err)});
};

exports.deleteDocument = (modelName) => (req, res) => {
    // Find and delete the document with the id specified in query string
    db[modelName].remove({_id: req.params.id})
    .then(() => {
        res.json({message: "Deleted successfully."})
    })
    .catch(err => {res.send(err)});
};