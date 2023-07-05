// make a basic server output on browser

// first of all we have to import module http

const http = require('http');// in node js this is the only module that 
//it handel  the server and client side.

//
// ye jo createSever hai ye parameter mein hiii whole funttion ko 
// leta hai.. jaisay k hm nay neechay liya. hai.
//
//
//
//
//
// http.createServer((req,res)=>{
//
//
//

// req stands for request while res = response ye kuch b ho sktay hain ye siraf variables hain 
// but the main thing is k pahla parameter jo hain wo request ko dhikaye ga 
// orr dosra responce ko 

// resopnse wo hai to jm client ko dengay
// iss mein hm text k ilawa kuch b send kr sktay hain.. chahay html ho
// koi simple page etc.
//
//
//

// res.write("helloo  universe this is first seever");// now also we have to end the responce.
// res.end();
//
//
//

// }).listen(4500)

// we can also use above function like this.


function dataControl(requesst, responcee) {
    responcee.write("helloo  universe this is first seever and this is not a arrow function");// now also we have to end the responce.
    responcee.end();
}


http.createServer(dataControl).listen(4500);

// ye jo b use karein dono hi same work karengay..
