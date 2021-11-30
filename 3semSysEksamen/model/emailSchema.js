const moongose = require('mongoose');

const emailData = {
    Mail: {type: String, Number, required : true},
    PhoneNumber: {type: Number, required : true},
    Name: {type: String, required : true},
    Message: { type: String, required : true}
}


module.exports = {emailData};