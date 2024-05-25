/* eslint-disable no-undef */
const router =require("express").Router()

const {register,login,logout}= require("../AuthController/AuthController") 

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)


module.exports = router