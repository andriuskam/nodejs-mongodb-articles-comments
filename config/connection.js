const mongoose = require('mongoose');

const connection = async() => {
    try {
        const mongodb = await mongoose.connect(process.env.MONGO_DB);
        console.log(`Success! Connected to -> ${mongodb.connection.host}`);
    } catch(e) {
        console.error("Failed! Couldn't connect ->", e);
    }
}

module.exports = connection;

