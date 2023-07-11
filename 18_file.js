// HOW TO REMOVE THE EXTENTION FROM LOADING THE PAGE
// IN CHROME.

const fs = require("fs");
const pash = require("path");
const express = require("express");
const path = require("path");
let app = express();

const publicFiles = path.join(__dirname, "public");

// app.use(express.static(publicFiles));
// if we use this then this will also show the extentions
// with the page name when we load the file.

app.get("", (_, resp) => {
  resp.sendFile(`${publicFiles}/index.html`);
});
app.get("/contact", (_, resp) => {
  resp.sendFile(`${publicFiles}/contact.html`);
});
app.get("/about", (_, resp) => {
  resp.sendFile(`${publicFiles}/about.html`);
});
// ye jo ham nay * lagaya hai iss ka matlab ye ha k 
// for eg jo ham nay oope paths diye hain in mein say ilawa agar kisi nay
// ghalat de diya page tu page 404 show ho jaye...
app.get('*',(_,resp)=>{
    resp.sendFile( `${publicFiles}/404_page.html`)
})

app.listen(5000);
