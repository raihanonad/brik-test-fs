const mongodb = require("mongodb");
require("dotenv").config();
const { connectDB, getDb } = require("../config/mongo");

const products = Array.from({ length: 100 }, (_, i) => ({
    CategoryId: Math.floor(Math.random() * 10) + 1,
    categoryName: `Category ${Math.floor(Math.random() * 10) + 1}`,
    sku: Math.random().toString(36).substring(2, 8).toUpperCase(),
    name: `Product ${i + 1}`,
    description: `Description for Product ${i + 1}`,
    weight: Math.floor(Math.random() * 1000),
    width: Math.floor(Math.random() * 100),
    length: Math.floor(Math.random() * 100),
    height: Math.floor(Math.random() * 100),
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    price: Math.floor(Math.random() * 100000),
}));

const seedProducts = async () => {
    try {
        await connectDB();
        const db = getDb();
        const productCollection = db.collection('products');

        await productCollection.deleteMany({});
        await productCollection.insertMany(products);
        console.log("Products seeded successfully");
    } catch (error) {
        console.error("Error seeding products:", error);
    }
};

seedProducts();

