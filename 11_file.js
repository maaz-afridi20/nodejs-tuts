// SOME BASIC ASUNCHRONOUS NODEJS 
// THIS IS JUST LIKE TIME.DELAYED IN DART.

//

    /*
        iss ka matlab ye hai k nodejs async programming hai
        tu jaisay k hm nay dhaika neechay k ye 
        jo console.log hai ye first wala statement chal jaye ga
        uss k baad ye jo 2nd hai ye execute ho jaye gaa 
        magar jaisa k hm dhaik sktay hin k is ko hongay mein 2 seconds 
        lagangay tu ye jo nodejs hai ye second statement 
        k liye wait nai karega.. 
        ye third execute kr lega orr jab baad mein 
        second execute ho jaye tu phirr us time ye execute ho jaye ga
        is ka matlab hai k 
        nodejs asyn programmming hai.
        
    */

console.log('first');

timeout=2000;
setTimeout(() => {
    console.log('2 sec');
}, timeout);

console.log('third');



// var fs = require('fs');

// fs.writeFileSync('12_file.js','afad')

// fs.unlinkSync(); // for creating file
// fs.readFile(); // reading the file
// fs.renameSync(); // renaming the file
// fs.appendFileSync(); // some changes inside the file.