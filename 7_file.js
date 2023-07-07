// make a simple api with static data.
log  = console.log;
const data = require('./data'); // so now this data is comming from data file.

// first import http


const http = require('http');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'}) // the 200 is the status code.
    resp.write(JSON.stringify(data))// this is body in this we can write any thing.
    resp.end();
}).listen(5000) 
// the json.stingify just change the value to json nothign else.



// same above we can write it as 


// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application\json'});
//     resp.write(JSON.stringify({name:'ali',address:'pindi ', email : '@gm.cm'}));
//     resp.end();
// })

// like we say that it code is messay so we use another file data in another folder
// and the just recall it.

// so if we want to take multiple user. then we have to se [] to add dta.

// so in the previous data file we have some data inside the [] so check that.


// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application\json'}) // the 200 is the status code.
//     resp.write(JSON.stringify(data))// this is body in this we can write any thing.
//     resp.end();
// }).listen(5000) 