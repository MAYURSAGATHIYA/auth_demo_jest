const mongoclient=require('../../dal/index')


const isEmailindb=(email)=>mongoclient
.db("CRED")
.collection("user").findOne({email})

module.exports={isEmailindb}