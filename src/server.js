"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/', function () {
    console.log('Raiz do site');
});
app.listen(3333);
