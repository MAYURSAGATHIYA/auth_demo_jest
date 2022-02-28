
// const supertest = require('supertest')
// const app = require('./app')
// // const authdata = require("./check_in_db/auth_check");
// const authdata=require("../api/login_api")
// const { captureRejectionSymbol } = require('koa')
// // const jest=require('jest')

// // const same_email = require('../middleware_for_reg_same')

// const request = supertest.agent(app.callback())





// describe("login testing",()=>{
//     describe('email testing',() => {
//         const _isEmailindb=[{email:"ciudbbdbuboboo@yahoo.com"}]
//     console.log(_isEmailindb,"email i db avtr")
        
//         test("password entered or not", async () => {
//             _isEmailindb=jest.fn(()=>({
//                 status: true
//             }))
    
//             const data=await request.post("/login").send({
//                 email:"ciudbbdbuboboo@yahoo.com",
//                 password:"111111"
//             })
//             expect(data.body).toEqual({ status: false, message: "Please Enter password" })
//         })
//         test("if email is not entered or the email is undefined",async()=>{
//             const data=await request.post("/login").send({})
//             expect(data.body).toEqual({ status: false, message: 'Please Enter email' })
//         })
//     })
// })






//=====================================
//registration testing
//=====================================
