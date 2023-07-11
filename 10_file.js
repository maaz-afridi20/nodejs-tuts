// CRUD WITH FILE SYSTEM (NOT THE DATABASE)

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
console.log(dirPath);

const myfile = `${dirPath}/apple.txt`;

// creating the file.
fs.writeFileSync(myfile,'this file is inside apple');


// reading the file

fs.readFile(myfile,'utf-8',(err,mydata)=>{
    console.log(mydata);
})

// updating or editing the file.

// fs.appendFile(myfile,'and file name is new file ',(err)=>{
//     /*
//         so iss mein ham ye kr sktay hain k 
//         pahlay file ka name dengay k kiss file ko append 
//         matlab k changes krni hai..
//         uss k baad uss mein jo b kch new add krna haii uss ko likhne hai
//         jaisa k hm nay thora text likhe...
//         orr baad mein jo ye functino hai ye error k liye hai k 
//         jab koi eror aye ga. tu hm execute hoge. 
//     */
//     if (!err) {
//         console.log('File is updated');
//     }else{
//         console.log(err);
//     }
// })



// RENAMING THE FILE
// THIS WILL CHANGE THE NAME OF THE FILE NAME

//
fs.rename(myfile,`${dirPath}/changeapple.txt`,(err)=>{
    if (!err) {
        console.log('file name is changed');
    } else {
        console.log(`some error ${err}`);
    }
});


// CREATING ANOTHER FILE. INSIDE CRUD FOLDER
fs.writeFileSync(`${dirPath}/secondfile.text`,'this is second file');

// THIS WILL DELETE THE FILE WITH NAME (SECOND FILE) INSIDE THE CRUDE FOLDER
fs.unlinkSync(`${dirPath}/secondfile.text`,(err)=>{
    if (!err) {
        console.log('success');
    } else {
        console.log(`some error " ${err}`);
    }
})

/*
kabi kabar jab hm file ko read krtay hain tu uss mein hm utf-8 nai lagatay
tu uss mein buffer ka error ata hai.
tu uss ka matlab hota hai temperory memoery.. jo k node js occupy krta hai
pc mein tu jab hm readfile krtay hain orr utf-8 naikrtay tu 
wo direct temperory file print kr deta hai jiss say humein lgta hai k 
error hai..
*/

