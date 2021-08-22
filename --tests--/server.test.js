"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe('Server API Test',()=>{
    // it('SignUp test',async()=>{
    //     const data=await request.post('/signup').send({
    //         username:"ahmad12",
    //         password:"test@123"
    //     });
    //     expect(data.status).toEqual(201);
    // });

    // it('SignIn',async()=>{
    //     const data=await request.post('/signin').auth('ahmad12','test@123');
    //     expect(data.status).toEqual(200);
    // });
})