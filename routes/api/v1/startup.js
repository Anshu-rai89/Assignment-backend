const express=require('express');

// using express route
const router=express.Router();
const startupController=require('../../../controllers/api/v1/startupcontroller');



router.get('/getAllStartup',startupController.getALl);
router.post('/registerStartup',startupController.create);


module.exports=router;