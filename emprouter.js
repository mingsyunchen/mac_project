const express = require('express');
const router = express.Router();
const empcontroller = require('./empcontroller');

router.get('/',(req,res)=>{res.render('home')});
router.get('/queryall',empcontroller.queryall);
router.get('/queryone',empcontroller.queryone);
router.get('/queryname',empcontroller.queryname);
router.post('/update',empcontroller.update);
router.post('/insert',empcontroller.insert);
router.get('/delete',empcontroller.delete);

module.exports = router;