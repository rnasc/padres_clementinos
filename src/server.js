// "use strict";
// exports.__esModule = true;
import express from "express";
var app = express["default"]();
app.get('/', function () {
    console.log('Raiz do site');
});
app.listen(3333);
