const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authenticate = require('../middlewares/authentication');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/protected-route', authenticate, (req, res) => {
    res.status(200).json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
