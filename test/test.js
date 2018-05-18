var assert = require('assert');
var http = require('http');

describe('Endpoint Tests', function() {
    it('should respond to 13420', function() {
        //        const req = http.get('http://localhost:' + 13420 + '/ping', (res) => {//pode usar get tambem
        const req = http.request('http://localhost:' + 13420 + '/ping', (res) => {
            //console.log(res.headers);
            console.log(JSON.stringify(res.headers));
            //console.log(res.statusCode);
            //assert.equal(res.statusCode, 200);
            res.on('data', (chunk) => {
                //console.log(`BODY: ${chunk}`);
                assert.equal(chunk.toString(), 'pong');
            });
        }).end();
    })
    it('should respond to 4500', function() {
        //        const req = http.get('http://localhost:' + 13420 + '/ping', (res) => {//pode usar get tambem
        const req = http.request('http://localhost:' + 4500 + '/ping', (res) => {
            //console.log(res.headers);
            console.log(JSON.stringify(res.headers));
            //console.log(res.statusCode);
            //assert.equal(res.statusCode, 200);
            res.on('data', (chunk) => {
                //console.log(`BODY: ${chunk}`);
                assert.equal(chunk.toString(), 'pong');
            });
        }).end();
    })
});

before(function() {
    // runs before all tests in this block
    console.log('before');
});

beforeEach(function() {
    console.log('beforeEach');
});


after(function() {
    console.log('after');
});

afterEach(function() {
    console.log('afterEach');
});