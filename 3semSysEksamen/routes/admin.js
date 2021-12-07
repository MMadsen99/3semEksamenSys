var express = require('express');
var router = express.Router();
const path = require('path');
const { post } = require('.');
const app = require('../app');
const onlineLager = require('../model/onlineLager');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'localhost:3000/adminSite.html'));
});

router.get('/onlineLager', async function(req, res, next) {

  try {
    const item = await onlineLager.find({title:"test"});
    console.log(item);
  } catch (error) {
    console.log(error)
  }


  res.sendFile(path.join(__dirname, '/../views/adminSiteOnlineLager.html'));

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
    res.redirect('localhost:3000/adminSite.html');
  } catch (error) {
    console.log(error)
  }

})








module.exports = router;
