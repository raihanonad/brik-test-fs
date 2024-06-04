const jwt = require('jsonwebtoken');
const { getDb } = require("../config/mongo");

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const db = getDb();
        const user = await db.collection('users').findOne({ _id: decoded.id });

        if (!user) {
            return res.status(401).json({ message: "Access denied. Invalid token." });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = authenticate;
