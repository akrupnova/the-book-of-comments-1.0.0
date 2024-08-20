const {expect} = require('chai');
const gqlRequest = require('../gqlRequest');
const {user} = require('./data');
const {userGetByIdQ, userCreateQ} = require('./queries');

let respData = null;
let postData = null;
let userId = null;

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {

        before('user create', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    userId = res.body.data.userCreate._id;
                    console.log(userId);
                    done()
                })
        })
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables:  {
                    userId: userId
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq(userId)
                    done()
                })
        })
    });
    // describe('USER GET BY ID - NEGATIVE TESTS', () => {
    //
    // })
})