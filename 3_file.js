 const appp = require('./1_file');
 const bf = require('buffer') // this is also a module.
 const http = require('http');
 const fs = require('fs'); // through this we can import 
 // like we have imported fs(file system) 
// core modules in node js


// core modules are that which are already declared like auth functions etc.
//  like console.log, HTTP,fs(file system)

fs.writeFileSync("hello.txt","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna vitae lectus elementum condimentum. Fusce ullamcorper pharetra nisl, nec consectetur mauris suscipit at. Vestibulum ac luctus dolor. Integer id arcu elit. Nullam in nulla ut nisi rhoncus euismod. Quisque sodales scelerisque ultricies. Mauris non condimentum ex. Suspendisse potenti. Aenean efficitur pharetra massa, ut tincidunt est consequat ac. Fusce tincidunt nibh vitae velit gravida congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin auctor velit leo, ut varius risus pellentesque eget") // fs stands for file system
// this will create file with the name of hello.txt,
// and will also write the text inside the file  code by step by step,

console.log(__dirname); // this willprint the directory name
console.log(__filename); // this will print the filename

console.log(http.METHODS); // this will print all the methods that 
// are present in http


// agar hm koi b method use karna chahein file system mein tu 
// hm fs library ko import karengay tu iss fs mei jo b function
// hotay hain wo saray ajatay ahin 
/// tu  agar hm chahein k full sari files system ko import na karein like 
/// jin k zaroorat hai siraf uss ko import karein tu hm siraf uss ko b 
/// import kar sktay hain

// like 

const fs2 = require('fs').writeFileSync; // so this will import only 
// the writeFileSync method from (fs) or baki jitni b methods hain file system
// mein wo import na hongay tu iss say load kam ho jaye ga.

fs2("abc.txt","this is abc file"); // this will create abc file.


