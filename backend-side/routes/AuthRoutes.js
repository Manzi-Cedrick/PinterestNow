const express = require('express');
const router = express.Router();
const {Register,LoginNow,ResetPassword,SearchUser} = require('../controllers/UserController.js');
router.post('/signUp',Register);
router.post('/login',LoginNow);
router.post('/resetpassword',ResetPassword);
router.post('/searchUser',SearchUser);
module.exports = router ;