const express = require('express');
const router = express.Router();

const controller=require('../controllers/controller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cryptoCoins",controller.cryptoCoins)






module.exports=router;  