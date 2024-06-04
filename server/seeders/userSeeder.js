require('dotenv').config();
const { MongoClient } = require('mongodb');
const { hashPassword } = require('../helpers/bcrypt');
const { connectDB, getDb } = require('../config/mongo');

const users = Array.from({ length: 10 }, (_, i) => ({
    username: `user${i + 1}`,
    password: hashPassword(`password${i + 1}`),
}));

const seedUsers = async () => {
    try {
        await connectDB();
        const db = getDb();
        const userCollection = db.collection('users');

        await userCollection.deleteMany({});
        await userCollection.insertMany(users);
        console.log("Users seeded successfully");
    } catch (error) {
        console.error("Error seeding users:", error);
    }
};

seedUsers();
