// TEMPELATE ENGINE..

// IT'S USE TO CREATE DYNAMIC ROUTES.

// WHEN THE DATA IS COMMING FORM SOME API OR DATA BASE THEN THAT PAGE
// BECOME THE DYNAMIC PAGE.


const express = require('express');
let app = express();

app.set('view engine','ejs');


/*
MIDDEL WEAR

ye jo hai routes k sath hi use hotay hain kabi kabar hm req and resp jab use krtay hain
data fetch krnay k liye. tu kabi humein usay modify krna hota hai 
like auth k time tu ye uss time handy hoota. hai ...{MIDDLE WEAR};
*/

// this is how we can create the middle ware
const reqFilter = (req,resp,next)=>{

}