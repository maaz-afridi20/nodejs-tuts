// EXPRESS JS

// this is framework of nodejs.

const express = require("express");
// now after this we have to make it in executable form so for this we can write
const app = express(); // here the name may be anything

app.get("", (request, response) => {// this will create main page.
  response.send("HELLO,THIS IS HOMES PAGE");
});
//
//
//
app.get("/about", (request, response) => {// this will about help page.
  response.send("WELLCOME,THIS IS about PAGE");
});
//
//
//
app.get("/help", (request, response) => { // this will create help page.
  response.send("HELLO,THIS IS help PAGE");
});

app.listen(5000);