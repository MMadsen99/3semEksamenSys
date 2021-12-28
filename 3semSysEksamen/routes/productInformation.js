var express = require('express');
var router = express.Router();
const onlineLager = require('../model/onlineLager');


router.get("/", async (req,res) => {
    
    const allItemsInDb = await onlineLager.findOne({_id:"61a8d456119a6948a90cf1c4"});
    res.status(200).json({allItemsInDb});
    
    }); 




module.exports = router;


