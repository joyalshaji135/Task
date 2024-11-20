const { MongoClient } = require('mongodb');

// Replace with your MongoDB Atlas URI
const uri = 'mongodb+srv://joyalshaji755:joyalshaji755@cluster0.xdedi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    return client.db("myDatabase"); // Specify the database name
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
