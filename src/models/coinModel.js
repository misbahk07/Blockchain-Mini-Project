 const mongoose=require("mongoose")

 const ccurrencySchema=new mongoose.Schema({
    symbol: {
        type:String,
        unique:true
    },
    name: {
        type:String,
        unique:true
    },
    marketCapUsd: {type:String},
    priceUsd: {type:String}
   
 },{ timestamps: true })

 module.exports=mongoose.model('currency',ccurrencySchema)