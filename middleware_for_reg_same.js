const mongoDb = require('./dal/index');
const { get } = require('koa/lib/request');
const pro_api = require('./api/pro_api');
const get_all_test=require('./middle_reg_same_all_func_imp_test')

// const getAllfunc = async () => await mongoDb.db('CRED').collection('user').find().toArray();

// console.log(getAllfunc,"this is get all ")


const emailcheck =  (ctx, next) => {

    const {
        email
    } = ctx.request.body
    const storeemail = {
        email
    }
    // console.log(storeemail,"store mail ")
    querydb = {
        email
    }
    // console.log(querydb,"query db ")
    const email_from_db =  get_all_test.getAllfunc();

    // console.log(email_from_db, "email from db");

    if (email_from_db.length === 0) {
        console.log("successfully registered")
        return next()
    }
   ctx.status=403;
   ctx.body={msg:"not valid"}
    return
}


module.exports = {
    emailcheck
}