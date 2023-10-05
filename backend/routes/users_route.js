const express = require ("express")

const usercontroller = require("../controllers/user_controller")

const user_router = express.Router();

user_router.get("/",usercontroller.getUsers);

user_router.post("/register",usercontroller.register);

user_router.post("/login",usercontroller.login)

module.exports = user_router