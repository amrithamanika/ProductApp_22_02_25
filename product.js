// import mongoose
const mongoose = require('mongoose');

var productSchema= mongoose.Schema({
    Name:String,
    Price:Number,
    Stock:Number,
    Description:String,
    Image:String
})

// create model
var productModel = mongoose.model("product",productSchema);
// export model
module.exports= productModel;