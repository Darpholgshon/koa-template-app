"use strict";
exports.__esModule = true;
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var app = routing_controllers_1.createKoaServer({
    controllers: ['./controller/*.controller.ts']
});
app.listen(8888);
//# sourceMappingURL=app.js.map