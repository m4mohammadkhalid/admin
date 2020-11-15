



const express=require("express");
const path=require("path");
const ejs=require("ejs");
const viewRoute=require("./routes/viewRoute");
const port=process.env.PORT || 3000;
const index=express();
index.use(express.urlencoded({extended:true}));
index.set('view engine', 'ejs');
index.use(express.static(path.join(__dirname, 'views')));
index.use(viewRoute);
//index.use(userRoute);


index.listen(port,()=>{
    console.log("connected port 3000");
})