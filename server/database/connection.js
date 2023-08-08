const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const MONGO_URI = 'mongodb+srv://swethamandapaka82:12345%406789@cluster0.71xdbsr.mongodb.net/?retryWrites=true&w=majority'
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
