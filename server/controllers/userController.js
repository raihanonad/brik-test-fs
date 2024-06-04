const User = require('../models/User');
const { signToken } = require('../helpers/jwt');

class UserController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.register({ username, password });
            res.status(201).json({ message: "User registered successfully", user: { username: user.username } });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
            const isMatch = await User.comparePassword(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
            const token = signToken({ id: user._id });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;
