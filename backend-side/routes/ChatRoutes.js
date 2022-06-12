const express = require('express');
const AuthorizeUser = require('../MiddleWare/Authorize');
const router = express.Router();
const {GetConvo,CreateConvo,UpdateConvo,DeleteConvo} = require('../controllers/ConvoController')
router.route('/createChat').post(AuthorizeUser,CreateConvo);
router.route('/getChat/:userId').get(AuthorizeUser,GetConvo);
router.route('/updateChat/:conversationId').put(AuthorizeUser,UpdateConvo);
router.route('/deleteChat/:conversationId').delete(AuthorizeUser,DeleteConvo);
module.exports = router;