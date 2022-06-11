const express = require('express');
const router = express.Router();
const {Register,LoginNow} = require('../controllers/UserController.js');
router.post('/signUp',Register);
router.post('/login',LoginNow);
module.exports = router ;