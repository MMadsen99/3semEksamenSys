const { json } = require('express');
var express = require('express');
var router = express.Router();
const path = require('path');
const { post } = require('.');
const app = require('../app');
const onlineLager = require('../model/onlineLager');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../views/adminSite.html'));
});

router.get('/onlineLagerData', async function(req, res, next) {

  try {
    const item = await (await onlineLager.find({}));
    console.log(item);
    res.send(JSON.stringify(item));
    
    

  } catch (error) {
    console.log(error)
  }

});

router.get('/onlineLager', async function (req,res, next) {

  res.sendFile(path.join(__dirname, '/../views/adminSiteOnlineLager.html'))

});

  router.get('/OnlineLagerTabel.js', async function (req,res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, '/../jsView/OnlineLagerTabel.js'))
    
  });



router.post("/", async function(req,res){

  let newNote ={
    title: req.body.productNameForm,
    quantity: req.body.quantityForm,
    material: req.body.materialForm,
    klima: req.body.klimaForm,
    category: req.body.categoriesForm
  };

  try {
    const item = await onlineLager.create(newNote);
    res.redirect('/admin');
  } catch (error) {
    console.log(error)
  }


})








module.exports = router;
