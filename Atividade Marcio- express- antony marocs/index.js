const express = require("express");
const app = express();

let contador = 0;
let cont1 = 0;
let cont5 = 0;

app.get("/contador", function (req, res) {
  res.send({contador});
});

app.get("/incrementar1", function (req, res) {
  contador++;
cont1++;
res.send({contador});
});

app.get("/incrementar5", function (req, res) {
  contador+=5;
cont5++;
  res.send({ contador });
});

app.get("/relatorio", function(req,res){
res.send({contador, cont1, cont5});

});

app.listen(3000);