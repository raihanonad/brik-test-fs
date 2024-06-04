require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

const connectDB = async () => {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true;
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

const getDb = () => {
  if (!isConnected) {
    throw new Error("MongoDB not connected");
  }
  return client.db("Klontong");
};

module.exports = { connectDB, getDb };
