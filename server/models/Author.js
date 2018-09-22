var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
//fields
name:{type:String, required: [true, "Min is length"], minlength: 3}
}, {timestamps:true});

mongoose.model('Author', AuthorSchema);