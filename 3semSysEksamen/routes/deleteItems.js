var express = require('express');
var router = express.Router();
const app = require('../app');
const onlineLager = require('../model/onlineLager');

router.get("/:id", async function(req,res) {
console.log('hello');
let {id:idDelete} = req.params;
const item = await onlineLager.findOneAndDelete({_id :idDelete});
res.status(200).json({msg : 'Item deleted'});


});

module.exports = router;