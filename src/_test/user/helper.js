const {userCreateQ} = require('./queries');
const {user} = require('./data');
const gqlRequest = require('../gqlRequest');
const User = require('../../models/User');

let respData = null;
let postData = null;
process.env.USER_ID = null;

before('Delete all users',  () => {
    User.deleteMany({});
    console.log('user deleted');
})

describe('USER CREATE', () => {

        it('user create all fields - helper', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate;
                    process.env.USER_ID = res.body.data.userCreate._id;
                    console.log("Test user has been created", respData);
                    done()
                })
        })
    })

