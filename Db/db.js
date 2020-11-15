const mongoose = require('mongoose');


const connection=async()=>{
   await mongoose.connect('mongodb://localhost:27017/Youtube', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connection 100%");
}
connection()

const blogSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
      }, // String is shorthand for {type: String}
    email: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
      },
  });
const Blog = mongoose.model('registration', blogSchema);

  const name="";
  const email="farhan@gmail.com";
  const password="215465asc";
  const parentSchema = new Blog({
    name,
    email,
    password,
})
  parentSchema.save().then(registration=>{
      console.log(registration)
  }).catch=(error)=>{
    console.log(error.nessage)
  };
