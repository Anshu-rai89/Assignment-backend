const express=require('express');

// using express route
const router=express.Router();

router.use('/startup',require('./startup'));


module.exports=router;