//=====================================
//registration testing
//=====================================
const supertest = require("supertest");
const app = require("./app");
const email_db=require('./check_in_db/auth_check')
const getAll=require('../middleware_for_reg_same');
const get_all_test=require('../middle_reg_same_all_func_imp_test')

// const { getAllfunc } = require("../middle_reg_same_all_func_imp_test");

const request = supertest.agent(app.callback())

describe.skip("registrattion checking", () => {
    describe('middleware testing', () => {
        var _isEmailindb = [{
            first: "ok",
            email: "123@yahoo.com",
            password: "1111",
            confirmpassword: "1111"
        }]

        test("all fields entered or not", async () => {
            _isEmailindb = jest.fn(() => ({
                status: true
            }))

            const data = await request.post("/registration").send({
                first: "ok",
        
                email: "123@yahoo.com",
                password: "1111",
                confirmpassword: "1111"
            })
            expect(data.body).toEqual({ "fields":  [
                     "",
                     "last",
                     "",
                     "",
                     "",
                   ],
                   "message": "Validation Failed. Please enter required fields",
                   "msg": "true",})
        })    
    })
})
// =====================================================
// same password
// ===================================================
describe.skip("registrattion checking", () => {
    describe('middleware testing', () => {
        var _isEmailindb = [{
            first: "ok",
            last: "ok2",
            email: "123@yahoo.com",
            password: "1111",
            confirmpassword: "1111"
        }]

        test(" checking password and confirm password similarity", async () => {
            _isEmailindb = jest.fn(() => ({
                status: true
            }))

            const data = await request.post("/registration").send({
                first: "ok",
                last: "qw",
                email: "123@yahoo.com",
                password: "1111",
                confirmpassword: "1"
            })
            expect(data.body).toEqual({
                message: "password should be the same"
            })
        })
    })
})

//====================================================
//same email id check
//====================================================
//====================================
//====================================
//====================================




describe('checking same user ',() => {
  
// const _isEmailindb=middleware.emailcheck

    // afterEach(()=>{
    //     middleware.emailcheck=_isEmailindb
    // })
    // email_from_db =  get_all_test.getAllfunc
    test("same user exist or not ", async () => {
        get_all_test.getAllfunc=jest.fn(()=>({
        email:"123@yahoo.com"
    }))        
        
        const data=await request.post("/registration").send({ 
            email:"13@yahoo.com"
        })
        expect(data.body).toEqual({  msg:"not valid"})
    //==================    
})
})
//========================
// //========================

//db main backup
// describe('checking same user ',() => {
  
//     // const _isEmailindb=middleware.emailcheck
    
//         // afterEach(()=>{
//         //     middleware.emailcheck=_isEmailindb
//         // })
//         // email_from_db =  get_all_test.getAllfunc
//         test("same user exist or not ", async () => {
//             get_all_test.getAllfunc=jest.fn(()=>({
//             email:"123@yahoo.com"
//         }))        
            
//             const data=await request.post("/registration").send({ 
//                 email:"13@yahoo.com"
//             })
//             expect(data.body).toEqual({  msg:"not valid"})
//         //==================    
//     })
//     })