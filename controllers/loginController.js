const { response } = require("express");

const login=(resquest,response)=>{
    const title="Login"
    const favicon="../images/favicon.png";
    response.render('../views/login',{title,favicon});
}

module.exports={
    login
}