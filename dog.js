var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dog_app");

var dogSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Dog = mongoose.model("Dog", dogSchema);

Dog.create({
    name: "toto",
    age: 12
    
}, function(err, dog){
   if(err){
       console.log("Oh NO, Somethink went wrong");
       console.log(err);
   } else {
       console.log(dog);
   }
 
    // body...
});

Dog.find({}, function(err, dogs){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE DOGS.....");
        console.log(dogs);
    }
});