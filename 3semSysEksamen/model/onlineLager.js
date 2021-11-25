const mongoose = require('mongoose');

var categories = db.HarriesPotter.OnlineLager("katalog").categories;

categories.insert([{
    
"_id": "lager"
} ,{
    "_id": "Materialer"
  , "tree": ["lager"]
  , "parent": "lager"
}, {
    "_id": "underskaal"
  , "tree": ["lager","Materialer"]
  , "parent": "Materialer"
},{
    "_id": "potter"
  , "tree": ["lager", "Materialer"]
  , "parent": "Materialer"
}, {
    "_id": "indedoers"
  , "tree": ["lager","potter"]
  , "parent": "potter"
}, {
    "_id": "udendoers"
  , "tree": ["lager","potter"]
  , "parent": "potter"
}, {
  "_id": "indedoers"
, "tree": ["lager","undersaal"]
, "parent": "undersaal"
}, {
  "_id": "udendoers"
, "tree": ["lager","undersaal"]
, "parent": "undersaal"
},{




}]);



module.exports = mongoose.model('OnlineLager',LagerSchema);

/*
"_id": "lager"
}, {
    "_id": "potter",
    "tree": ["lager"],
    "parent":"lager"
} , {
    "_id": "potter",
    "tree": ["lager"],
    "parent":"lager"
}, {
*/