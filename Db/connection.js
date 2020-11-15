


const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connection=async()=>{

   await mongoose.connect('mongodb://localhost:27017/Youtube', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connection 100%")
}

connection()

//Define Scame
const comment = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, match: /[a-z]/ },
    password: { type: Number, min: 18, index: true },
  },{timestamp:true});

// Define Model

const MyModel = mongoose.model('registration',comment);
// const name="farhan";
// const email="akhalid4@gmail.com";
// const password="14300354353535";
// const newuser=new MyModel({
//     name,
//     email,
//     password,
// })
// newuser.save().then(user=>{
//     console.log(user)
// }).catch(error=>{
//     console.log(error.message)
// });
// MyModel.find().then(registration=>{
//     console.log(registration)
// }).catch(error=>{
//     console.log(error.message)
// })