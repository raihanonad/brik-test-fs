const { getDb } = require("../config/mongo");

const Product = {
    collection: "products",
    async insertOne(product) {
        const db = getDb();
        const productCollection = db.collection(this.collection);
        return await productCollection.insertOne(product);
    },

    async findOne(query) {
        const db = getDb();
        const productCollection = db.collection(this.collection);
        return await productCollection.findOne(query);
    },

    async find(query) {
        const db = getDb();
        const productCollection = db.collection(this.collection);
        return await productCollection.find(query).toArray();
    },
};

module.exports = Product;
