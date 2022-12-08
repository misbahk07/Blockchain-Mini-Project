const coinModel=require('../models/coinModel')
const axios=require('axios');

let cryptoCoins=async function(req,res){
    try{
     var config = {
         method: 'get',
         url: 'http://api.coincap.io/v2/assets',
         headers: {
            Authorization: "Bearer 0a65bef6-ec85-49fa-8776-0d6f6348efc8",
          }
    }
    let result= await axios(config)
    let allData=result.data.data
    allData=allData.sort((a,b)=>{
        return a.changePercent24Hr-b.changePercent24Hr
    })
    let newArr=[]
    for(let i=0;i<allData.length;i++){
        let name=allData[i].name
        let symbol=allData[i].symbol

        let uniqueness=await coinModel.find({name:name,symbol:symbol})

        if(uniqueness.length==0){
            let obj={}
            obj.symbol=allData[i].symbol
            obj.name=allData[i].name
            obj.marketCapUsd=allData[i].marketCapUsd
            obj.priceUsd=allData[i].priceUsd
            newArr.push(obj)

            let save=await coinModel.create(obj)
        }
    }
       return res.status(200).send({status:true,data:allData})   
    
}catch(err){
    return res.status(500).send({msg:err.message})   
} 
}

module.exports.cryptoCoins=cryptoCoins


