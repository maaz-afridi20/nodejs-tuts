// input from command line
// log = console.log;
// log(process.argv[3]);
// console.log(process.argv[2])

const input = process.argv;
const fs = require('fs');

// fs.writeFileSync(input[2],input[3]);  // so basically is ka matlab ye hai k
//
// 
// for example hm terminal say kch krna chahtay hain like 
// tu ham nay jaisa ooper kiya  k process.argv lika tu ye terminal 
// mein us say data show krwata hai.. tu isse tarah
// hm nay sab say pahlay variable liya input k name say 
// uss ko assign kiya process.argv

// uss k baad file system(ki madad say hm files banatay hain)  hm nay 
// fs ka variable banaya 
// ye jo writeFileSync ye ho hai ye 2 variable leta hai first jo hai wo file ka name
// orr doosra jo uss file mein hoga wo
// tu ye hm terminal say get karengay like 
// k input variable k [2] mein jo hoga wo file ka name hojaye ga orr input[3] mein 
// jo hoga wo uss ka text



// this is the terminal command... 
// 
//  PS E:\nodejsProjects> node ./8_file.js add orange 'this is the name of the fruit'
// so this will create the file orange with the text .
//
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove') {
    fs.unlinkSync(input[3]) // througn this we can delete the file.
    // we have to write unlinkSync and then put the name of file.
}else{
    console.log('invalid input');
}
// this will delete the folder
// PS E:\nodejsProjects> node ./8_file.js remove orange

