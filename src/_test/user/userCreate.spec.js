const {expect} = require('chai');
const {userCreateQ} = require('./queries');
const {user} = require('./data');
const gqlRequest = require('../gqlRequest');
const User = require('../../models/User');

let respData = null;
let postData = null;

before('Delete all users',  () => {
      return User.deleteMany({});

})

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {

        beforeEach('Before All', () => {
            console.log('BeforeALL Hook')
        })

        it('user create all fields', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate;
                    console.log(respData);
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done()
                })
        })

        it('test2', () => {

        })



    })

    // describe('USER CREATE - NEGATIVE TESTS', () => {
    //     it('', () => {
    //
    //     })
    //
    // })
})