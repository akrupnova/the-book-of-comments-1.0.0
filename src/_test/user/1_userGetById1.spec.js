const {expect} = require('chai');
const gqlRequest = require('../gqlRequest');
const {user} = require('./data');
const {userGetByIdQ, userCreateQ} = require('./queries');

let respData = null;
let postData = null;
process.env.USER_ID = null;

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {

        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables:  {
                    userId: process.env.USER_ID
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData.firstName).eq(user.userInput.firstName)
                    expect(respData.lastName).eq(user.userInput.lastName)
                    expect(respData._id).eq(process.env.USER_ID)
                    done()
                })
        })
    });
    // describe('USER GET BY ID - NEGATIVE TESTS', () => {
    //
    // })
})