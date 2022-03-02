// // //=====================================
// // //registration testing
// // //=====================================
// const supertest = require("supertest");
// const app = require("./app");
// const get_all_test=require('../middle_reg_same_all_func_imp_test')
// const test_query_for_regis=require('../dal/query')
// const request = supertest.agent(app.callback())


//     describe.skip('middleware testing', () => {
//         var _isEmailindb = [{
//             first: "ok",
//             last:"von",     
//             email: "123@yahoo.com",
//             password: "1111",
//             confirmpassword:  "1111"
//         }]

//         test("all fields entered or not", async () => {
//             _isEmailindb = jest.fn(() => ({
//                 status: true
//             }))

//             const data = await request.post("/registration").send({
//                 first: "ok",
        
//                 email: "123@yahoo.com",
//                 password: "1111",
//                 confirmpassword: "1111"
//             })
//             expect(data.body).toEqual({ "fields":  [
//                      "",
//                      "last",
//                      "",
//                      "",
//                      "",
//                    ],
//                    "message": "Validation Failed. Please enter required fields",
//                    "msg": "true",})
//         })    
//     })

// // =====================================================
// // same password
// // ===================================================
//     describe.skip('middleware testing', () => {
//         var _isEmailindb = [{
//             first: "ok",
//             last: "ok2",
//             email: "123@yahoo.com",
//             password: "1111",
//             confirmpassword: "1111"
//         }]

//         test(" checking password and confirm password similarity", async () => {
//             _isEmailindb = jest.fn(() => ({
//                 status: true
//             }))

//             const data = await request.post("/registration").send({
//                 first: "ok",
//                 last: "qw",
//                 email: "123@yahoo.com",
//                 password: "1111",
//                 confirmpassword: "1"
//             })
//             expect(data.body).toEqual({
//                 message: "password should be the same"
//             })
//         })
//     })


// //====================================================
// //same email id check
// //====================================================
// describe.skip('checking same user ',() => {
//     test("same user exist or not ", async () => {
//         get_all_test.getAllfunc=jest.fn(()=>({
//             first: "ok",
//             last: "qw",
//             email: "123@yahoo.com",
//             password: "1111",
//             confirmpassword: "1111"
//     }))        
        
//         const data=await request.post("/registration").send({ 
//             first: "ok",
//             last: "qw",
//             email: "123@yahoo.com",
//             password: "1111",
//             confirmpassword: "1111"
//         })
//         expect(data.body).toEqual({msg:"this email id has been taken"})
//     //==================    
// })
// })
// //
// // //========================


// describe('checking controller ',() => {
  
//         test("checking successfully registration ", async () => {
//             test_query_for_regis.save=jest.fn(()=>({
//                 first: "ok",
//                 last: "qw",
//                 email: "1234444@yahoo.com",
//                 password: "1111",
//                 confirmpassword: "1111"
//         }))        
            
//             const data=await request.post("/registration").send({ 
//                 first: "ok",
//                 last: "qw",
//                 email: "1234444@yahoo.com",
//                 password: "1111",
//                 confirmpassword: "1111"
//             })
//             expect(data.body).toEqual( {msg: "WELCOME TO OUR SITE YOU'VE REGISTERED SUCCESSFULLY"})
//         //==================    
//     })
//     })

// //=====================================
// //registration testing
// //=====================================
const supertest = require("supertest");
const app = require("./app");
const get_all_test=require('../middle_reg_same_all_func_imp_test')
const test_query_for_regis=require('../dal/query')
const request = supertest.agent(app.callback())


    describe('middleware testing', () => {
        var _isEmailindb = [{
            first: "ok",
            last:"von",     
            email: "123@yahoo.com",
            password: "1111",
            confirmpassword:  "1111"
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
        //===================================
        
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

 //===================================

        test("same user exist or not ", async () => {
            get_all_test.getAllfunc=jest.fn(()=>({
                first: "ok",
                last: "qw",
                email: "123@yahoo.com",
                password: "1111",
                confirmpassword: "1111"
        }))        
            
            const data=await request.post("/registration").send({ 
                first: "ok",
                last: "qw",
                email: "123@yahoo.com",
                password: "1111",
                confirmpassword: "1111"
            })
            expect(data.body).toEqual({msg:"this email id has been taken"})
        //==================    
    })
 //===================================

    test("checking successfully registration ", async () => {
        test_query_for_regis.save=jest.fn(()=>({
            first: "ok",
            last: "qw",
            email: "1234444@yahoo.com",
            password: "1111",
            confirmpassword: "1111"
    }))        
        
        const data=await request.post("/registration").send({ 
            first: "ok",
            last: "qw",
            email: "1234444@yahoo.com",
            password: "1111",
            confirmpassword: "1111"
        })
        expect(data.body).toEqual({msg: "WELCOME TO OUR SITE YOU'VE REGISTERED SUCCESSFULLY"})
    
})
 //===================================


    })