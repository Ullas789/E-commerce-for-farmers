const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/farmer")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.error('Failed to connect to MongoDB:', e);
    });

const LogInSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
});

const Collection = mongoose.model('Collection', LogInSchema);







const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,

    },
    dl: {
        type: String,
        required: true,
    },
    aadhaar: {
        type: String,
        required: true,

    },
    vnumber: {
        type: String,
        required: true,

    },
});

const Jobcollection = mongoose.model('Jobcollection', JobSchema);

module.exports = {
    Collection: Collection,
    Jobcollection: Jobcollection,
};