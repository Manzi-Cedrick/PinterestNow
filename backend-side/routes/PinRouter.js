const express = require('express');
const router = express.Router();
const AuthorizeUser = require('../MiddleWare/Authorize');
const {AddNewPin,getPinAll,getPinEach,deletePin,UpdatePin} = require('../controllers/PinController')


router.route('/addNewPin').post(AuthorizeUser,AddNewPin);
router.route('/getallPins').get(AuthorizeUser,getPinAll);
router.route('/getEachPin/:pin_id').get(AuthorizeUser,getPinEach);
router.route('/deleteEachPin/:pin_id').delete(AuthorizeUser,deletePin);
router.route('/updateEachPin/:pin_id').put(AuthorizeUser,UpdatePin);
// router.route('/searchPin/:pin_description').post(AuthorizeUser,UpdatePin);

module.exports = router;