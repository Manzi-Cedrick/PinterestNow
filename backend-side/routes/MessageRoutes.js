const express = require('express');
const router = express.Router();
const AuthorizeUser = require('../MiddleWare/Authorize');
const {AddNewMessage,GetMessage, UpdateMessage, DeleteMessage} = require('../controllers/MessageController')
router.route('/AddNewMessages').post(AuthorizeUser,AddNewMessage);
router.route('/getMessages/:chatConvoId').get(AuthorizeUser,GetMessage);
router.route('/updateMessage/:MessagesId').put(AuthorizeUser,UpdateMessage);
router.route('/deleteMessages/:MessagesId').delete(AuthorizeUser,DeleteMessage);
module.exports = router ;