//=====================================
//registration testing
//=====================================
const supertest = require("supertest");

const app = require("./app");


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
describe("registrattion checking", () => {
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

// const email_testing=require('../middleware_for_reg_same')
// const same_email_testing=email_testing.emailcheck


describe.skip("registrattion checking", () => {
    describe('middleware testing', () => {
        var _isEmailindb = [{
            first: "ok",
            last: "ok2",
            email: "123@yahoo.com",
            password: "1",
            confirmpassword: "1"
        }]

        test("all fields entered or not", async () => {
            _isEmailindb = jest.fn(() => ({
                status: true
            }))

            const data = await request.post("/registration").send({
                first: "ok",
                last: "qw",
                email: "123@yahoo.com",
                password: "1",
                confirmpassword: "1"
            })
            expect(data.body).toEqual({
                message: "this email is already taken"
            })
        })
    })
})

