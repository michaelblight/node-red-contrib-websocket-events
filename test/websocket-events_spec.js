var helper = require("node-red-node-test-helper");
var lowerNode = require("../websocket-events.js");

describe('lower-case Node', function () {

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: "n1", type: "websocket-events", name: "test name" }];
        helper.load(lowerNode, flow, function () {
            var n1 = helper.getNode("n1");
            n1.should.have.property('name', 'test name');
            done();
        });
    });
});