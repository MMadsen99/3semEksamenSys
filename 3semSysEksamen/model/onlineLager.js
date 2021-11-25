const mongoose = require('mongoose');

var categories = db.HarriesPotter.OnlineLager("katalog").categories;

categories.insert([{
    
"_id": "lager"
} , {
    "_id": "potter"
  , "tree": ["lager"]
  , "parent": "lager"
}, {
    "_id": "indedoers"
  , "tree": ["lager","potter"]
  , "parent": "potter"
}, {
    "_id": "udendoers"
  , "tree": ["lager","potter"]
  , "parent": "potter"
}, {
    "_id": "Materialer"
  , "tree": ["lager","potter"]
  , "parent": "potter"
}, {
    "_id": "underskaal"
  , "tree": ["lager",]
  , "parent": "lager"
}, {




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