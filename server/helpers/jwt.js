const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

function signToken(payload) {
    const token = jwt.sign(payload, secret);
    return token;
}

function verifyToken(token) {
    const verify = jwt.verify(token, secret);
    return verify;
}

module.exports = { signToken, verifyToken };
