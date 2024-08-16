const {expect} = require('chai');
const gqlRequest = require('../gqlRequest');
const {user} = require('./data');
const {userGetByIdQ} = require('./queries');

let respData = null;
let postData = null;

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: '66bc0af85337a7922ee209b0'
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq('66bc0af85337a7922ee209b0')
                    done()
                })
        })
    });
    // describe('USER GET BY ID - NEGATIVE TESTS', () => {
    //
    // })
})