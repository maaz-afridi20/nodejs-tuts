const app = require('./2_file');

console.log(app); // this will print the whole 2_file.js and all the thing which are in them.
// if we want  want some thing specific then we can use this. like

// console.log(app.namee); // this will only print the name which are in 2_file.js file.

// console.log(app.zz()); // so now this will print the function from the second file.



// filter function
//
// var arr = [4,4,2,7,2,9,6,6,2,3,7,9];

 // filter always run on arrays

// let result =  arr.filter((i)=>{ // ye filter apnay parameter k andar aik or function leta hai
//     // hm nay uss mein aik parameter liya hai jo hm nay i diya hai. tu iss 
//     // i mein saray ka saray array ajaye gaa. is k baad hm iss par jo b function perform
//     // karna ho tu kr sktay hain
//     //
//     //
// // console.log(i); // this will print the whole array

// return i===6; // tu ye siraf 6 ko hi returnn karay ga. k jitni bar b use hya ho.

// })

// console.log(result);



var arayy2  = [1,2,3,4,5,6,7,8,9,9,4,2,0,2];

var resultt = arayy2.filter((itemss)=>{
    // return itemss===9;
    return itemss>4; // will show all the value greater than 4
})
 console.log(resultt); // this will print only value of 9 in the arry

