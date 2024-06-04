const { getDb } = require("../config/mongo");
const bcrypt = require('bcryptjs');

class User {
    static collection = "users";

    static async register({ username, password }) {
        const db = getDb();
        const userCollection = db.collection(this.collection);

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { username, password: hashedPassword };

        const result = await userCollection.insertOne(newUser);
        return result.ops[0];
    }

    static async findOne(query) {
        const db = getDb();
        const userCollection = db.collection(this.collection);
        return await userCollection.findOne(query);
    }

    static async comparePassword(inputPassword, storedPassword) {
        return await bcrypt.compare(inputPassword, storedPassword);
    }
}

module.exports = User;
