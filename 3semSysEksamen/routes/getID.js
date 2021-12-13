var express = require('express');
var router = express.Router();
const onlineLager = require('../model/onlineLager');


router.get("/", async (req,res) => {
const allItemsInDb = await onlineLager.find({});
res.status(200).json({allItemsInDb});

}); 

module.exports = router;

