var express = require('express');
var router = express.Router();
const onlineLager = require('../model/onlineLager');


router.get("/", async (req,res) => {
    
    const allItemsInDb = await onlineLager.findOne({_id:"61a8d456119a6948a90cf1c4"});
    res.status(200).json({allItemsInDb});
    
    }); 


    /*
    let items = await fetch('http://localhost:3000/items');
    let jsonItem = await items.json();
    JSON.parse(jsonItem).onlineLager.allItemsInDb.find(id,"61a8d456119a6948a90cf1c4");
    let {id:idFind} = req.params;

    const allItemsInDb = await onlineLager.findOne({1});
    res.status(200).json({msg:"Item found"}); */


module.exports = router;


