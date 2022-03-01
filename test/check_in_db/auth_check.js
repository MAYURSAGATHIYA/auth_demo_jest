const mongoclient=require('../../dal/index')


const isEmailindb=(ctx)=>{
//     mongoclient
// .db("CRED")
// .collection("user").findOne({email})
ctx.status=200;
ctx.body="valid"

}
module.exports={isEmailindb}