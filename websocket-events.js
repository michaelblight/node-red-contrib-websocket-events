const debugging = true;

module.exports = function(RED) {
    function websocketEventsNode(n) {
        RED.nodes.createNode(this, n);
        this.websocket = RED.nodes.getNode(n.websocketConfig);
        var node = this;
        debugNode = node;

        node.on('input', function(msg) {
        });
    }

    RED.nodes.registerType("websocket-events", websocketEventsNode);

    function debug(msg) {
        if (debugging) node.warn(msg)
    }
}
