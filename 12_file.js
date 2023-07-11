// HANDLE ASYNC DATA IN NODEJS

/*
tu jaisa k hm nay peechay dhaika 11 file mein k jab hm first print krtay hain
tu ho jata hai phir 3rd hota hai or akhir mein 2nd hota hai qk 
uss mei timer laga wo akhir mein execute hoga. 

tu for example agar hm chahtay hain k wo b time lay lekin appnay 
hisab say chalay tu promise ko use karengay hm
*/

let a = 20;
let b = 1;
timeout = 3000;

let waitingData = new Promise((resolve, reject) => {
  // resolve tab hoga jab
  // humara kaam teek tareekay say hogaya ho.
  // or agr kch error ayengay tu reject chalay ga
  // tu jo code time lega.tu hm uss code ko promise mein likh lengay

  setTimeout(() => {
    resolve(30); // ye jo resolve mein hm nay data diya hai iss wala data hm b ko dena
    // chahtay thay tu walaa hm usse tarah resolve ko dedengay...
    // tu iss resolve mein kuch b desaktay hain jo humein need ho
    // like k agar humein zaroorat ho tu array b dekstay hain variable
    // kuch b
  }, timeout);
});

/* tu basicaly yaha chal ye rha hai k 
jab hm panlay a ko declare krtay hain or b ko b 
hm chahgay thay k ye jo time laga hai iss mein data add ho jaye 
magar ye tu time leta hai tu tu time say pahlay jab hm data print krtay thay 
tu ghalat ans deta thaaa is liye hm nay promise ka use kiya hai
promise mein resolve hai aik or aik hai reject.

acha tu humein jo b krna hai uss ko hm resolve mei likhengay
tu ooper hm 30 ko use krna chahtay hain tu hm nay resolve mein 30 likha..

uss k baad hm nay wohi variable ko liye jaisa k waiting data 
uss k baad flutter ki tarahh then mein likha 

tu iss then mein aik parameter leta hai wo hm kch  b de sktay hain

mein nay dediya mydata tu ab jo b data hm nay resolve mein diya hoga 
tu ye ab mydata men agaya haii.. ab iss k sth hm jo b krna chahay kr sktay hain...

tu jo b logic ya kch b hm use kr rahay hain jo time lega uss ko hm
resolve mein use karengay...

orr uss k baad  .then k use say uss ko get karngay
 */

waitingData.then((mydata) => {
  console.log(a + mydata);
});
