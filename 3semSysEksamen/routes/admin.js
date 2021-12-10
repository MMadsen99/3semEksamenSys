var express = require('express');
var router = express.Router();
const path = require('path');
const { post } = require('.');
const app = require('../app');
const onlineLager = require('../model/onlineLager');
var ObjectId = require('mongodb').ObjectId;

/* GET home page. 
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'localhost:3000/adminSite.html'));
});
*/

/*router.get('/onlineLager', async function(req, res, next) {

  try {
    const item = await onlineLager.find({title:"test"});
    console.log(item);
  } catch (error) {
    console.log(error)
  }


  res.sendFile(path.join(__dirname, '/../views/adminSiteOnlineLager.html'));

});
*/

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
    console.log(item)
    res.redirect('localhost:3000/adminSite.html');
    res.status(200).json();
    res.json(item);
  } catch (error) {
    console.log(error)
  }

});

router.patch('/:postId', async (req, res) => {
  try{
const updatedPost = await Post.updateOne({_id: req.params.postId},
  { $set: {title: req.body.title , quantity : req.body.quantity, material : req.body.material, klima : req.body.klima, category : req.body.category}
}
  
  );

  res.json(updatedPost);
  console.log(updatedPost);

}catch(err){
  res.json({message:err})

}
});
/*
router.patch("/:id",async function(req,res){

  var title = req.body.productNameForm;
  var quantity = req.body.quantityForm;
  var material = req.body.materialForm;
  var klima = req.body.klimaForm;
  var category = req.body.categoriesForm;
*/
/*
let UpdatedNote ={
  title: req.body.productNameForm,
  quantity: req.body.quantityForm,
  material: req.body.materialForm,
  klima: req.body.klimaForm,
  category: req.body.categoriesForm
};

const {id:itemId} = req.params;

const updatedItem = await onlineLager.findOneAndUpdate({_id:itemId},UpdatedNote,{new: true, runValidators:true});
res.status(200).json({updatedItem});
*/












module.exports = router;
