const request = require('supertest');
const app = require('./server').app;

it('should test home router',(done)=>{

request(app)
    .get('/')
    .expect(200)
    .end(done);

});