const debugging = true;

module.exports = function(RED) {
    function websocketEventsNode(config) {
        RED.nodes.createNode(this, config);
        this.websocketConfig = RED.nodes.getNode(config.websocketConfig);
        var node = this;

        if (this.websocketConfig) {
            this.websocketConfig.on('opened', function(event) {
                //node.warn("Opened "+JSON.stringify(event));
                node.send([event, null]);
            });
            this.websocketConfig.on('closed', function(event) {
                //node.warn("Closed "+JSON.stringify(event));
                node.send([null, event]);
            });
        }
    }

    RED.nodes.registerType("websocket-events", websocketEventsNode);
}
