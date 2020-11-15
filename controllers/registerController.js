const { response } = require("express");
const { check, validationResult } = require('express-validator');
const viewRegister=(request,response)=>{
    const title="Register"
    const favicon="../images/favicon.png";
    response.render("../views/register",{title,favicon,errors:[],input:{}})
}

const addRegister=(request,response)=>{
    const errors=validationResult(request);
    if(!errors.isEmpty()){
        const title="Register"
        const favicon="../images/favicon.png";
        response.render("../views/register",{favicon,title,errors:errors.array(),input:request.body})
       
    }else{
        response.send("submit form")
    }
    
}

module.exports={
    addRegister,
    viewRegister
}