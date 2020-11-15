const { response } = require("express");

const viewDashboard=(request,response)=>{
    const title="Dashboard"
    const favicon="../images/favicon.png";
    response.render('../views/dashboard',{title,favicon});
}

const viewSample=(request,response)=>{
    const title="Login"
    const favicon="../images/favicon.png";
    response.render('../views/sample',{title,favicon});
}


module.exports={
        viewDashboard,
        viewSample,
}