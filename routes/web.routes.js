const router = require('express').Router();
const webController = require('../controllers/web.controller');

// http://localhost:3000/
router.get("/", webController.getIndex);

// http://localhost:3000/signup
router.get("/signup", webController.getSignUp);

// http://localhost:3000/login
router.get("/login", webController.getLogin);

// http://localhost:3000/favorites
router.get("/favorites", webController.getFavorites);

// http://localhost:3000/profile
router.get("/profile", webController.getProfile);

// http://localhost:3000/users
router.get("/users", webController.getUsers);

// http://localhost:3000/dashboard
router.get("/dashboard", webController.getDashboard);

module.exports = router;