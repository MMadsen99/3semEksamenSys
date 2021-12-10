var express = require('express');
var router = express.Router();
const app = require('../app');
const onlineLager = require('../model/onlineLager');



router.post("/", async function(req,res) {
    let response = await req.body
    
    let objektToUpdate = {}
    if(response.title !="") {
        objektToUpdate.title = req.body.title;
    
    } if(response.quantity !="") {
        objektToUpdate.quantity = req.body.quantity;
    
    } if(response.material !="") {
        objektToUpdate.material = req.body.material;
    
    } if(response.klima !="") {
        objektToUpdate.klima = req.body.klima;
    
    } if(response.category !="") {
        objektToUpdate.category = req.body.category;
    
    } 
let id = req.body.ID;
const item = await onlineLager.findOneAndUpdate({_id : id}, objektToUpdate, {new : true, runValidators : true});

if(!item) {res.status(404).json('Error in DB update')}
res.status(200);
res.redirect('/adminSiteOnlineLager.html');
})
















module.exports = router;
