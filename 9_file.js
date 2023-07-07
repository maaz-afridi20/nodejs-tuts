// SHOW FILE LIST
const fs = require('fs'); // fs = filesystem.
const path = require('path'); //  this is as name suggest that when we have to create 
// a in a specific folder or any specific path we have to give them 
// a path so we can use the path module.

// now we have to choose the path where we have to do something.. like below

const dirPath = path.join(__dirname, 'files'); // so basically the dirPath is just a variable name
// it can be anything.
// so iss mein kia ho rah hai k hm nay variable create kiya uss ka name hai dirPath
// uss ko assigh kiya current directory ka name.
// uss k bath jo ham nay name diya hai files ka uss ka matlab ye hai k 
// current directory mein jaao orr uss mein jo files folder hai uss k andar jaaaoo.

console.log(dirPath);

// fs.writeFileSync(`${dirPath}/hell2.txt`,`fasdfadf`)// so this will create the file inside the 
// files folder...


// for(i=0;i<5;i++){
//     //
//     //
//     // fs.writeFileSync('apple.txt','simpel file') 
//     //
//     //
//     // agar hm siraf aisay likehin tu 
//     // ye aik hi file create kr dega. qk aik name say tu aik hi file 
//     // create ho skti hai.. tu ye dobara dobara override krtay jaye ga.
//     // tu iss k sth hm index dy sktay hain k siraf name change hota jaye

//     // fs.writeFileSync('hello'+i+'.txt','tadafaf');

//     // inorder to use $ like flutter then we have to write it in ``

//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`sa simple file ${i}.`); // this will create
        //
        //
        //
//     // 5 files inside the file folder.
//     // first we have to give the path of the folder that
//     // that where we have to create the file. then 
//     // just put / before the name of the folder..
// }

//
// if we want to read something inside the file then we can use the 
// fs.readFile so this will read data inside the file.
// we can also read the file

// fs.readFile;

// but if we want fetch or something  the list of the files inside the 
// dir then we can use the readdir

fs.readdir(dirPath, (err, filess) => { // err and files is the parameter name it could be anything
    //    console.log(filess); // this will print the files inside filess this will print it in 
    // text like for but below will give the whole file.
  
  
    filess.forEach((items) => {
        console.log(items);
    })
});

//
//
// through we can read any file inside directory or anywhere.
//
//

const filePath = path.join(__dirname,'files/hello0.txt');
console.log(filePath);
fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file:', error);
    } else {
      console.log('File content:', data);
    }
  });