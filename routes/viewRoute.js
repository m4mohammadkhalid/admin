const express=require("express");
const router=express.Router();
const { check, validationResult } = require('express-validator');
const {viewDashboard,viewLogin,viewSample}=require("../controllers/viewControllers")
const {viewRegister,addRegister}=require("../controllers/registerController")
const {login}=require("../controllers/loginController")
//router.use(express.urlencoded({extended:true}));
router.get("/",login)
router.get("/dashboard",viewDashboard)
router.get("/register",viewRegister)
router.post("/register",[
    check('name').not().isEmpty().trim().escape().withMessage('Please Inter Your Name'),
    check('email').isEmail().withMessage('Please Inter Your Email'),
    check('password').isLength({ min: 6 }).withMessage('Password 6 se jada dale'),
],addRegister)
router.get("/sample",viewSample)

module.exports= router;