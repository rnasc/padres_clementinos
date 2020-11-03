import express from "express";
const app = express["default"]();

app.get('/', function () {
    console.log('Raiz do site');
});

app.get('/teste', function (request, response) {
    console.log('Raiz do site');
    return response.send(201);
});


app.listen(3333);
