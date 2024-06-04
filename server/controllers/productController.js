const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");

const getAllProducts = async (req, res) => {
    try {
        const db = getDb();
        const productCollection = db.collection("products");
        const { page = 1, limit = 10 } = req.query;
        const products = await productCollection
            .find()
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit))
            .toArray();
        const count = await productCollection.countDocuments();

        res.status(200).json({ products, totalPages: Math.ceil(count / limit), currentPage: page });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const db = getDb();
        const productCollection = db.collection("products");
        const product = await productCollection.findOne({ _id: new ObjectId(req.params.id) });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const db = getDb();
        const productCollection = db.collection("products");
        const product = req.body;

        await productCollection.insertOne(product);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const db = getDb();
        const productCollection = db.collection("products");
        const updatedProduct = req.body;

        await productCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedProduct });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const db = getDb();
        const productCollection = db.collection("products");

        await productCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
