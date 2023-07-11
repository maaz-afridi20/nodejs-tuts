// HOW NODEJS WORK IN BACKGROUND

// FITST ITS RUNS THE {CALL STACK} THEN {NODE API} AND THEN {CALLBACK QUEUE}

// THIS IS THE MAIN ARCHITECTURE OF NODE.

// AND THIS WHOLE PROCESS IS CALLSE {EVENT LOOP}

// call stack wo function haii jahan prr saray function execute hotay hain...

// uss mein main function b ata hai jo b functino ya kch b hm likhtay hain 
// wo call stack mein atay jatay hain.. or jaisay hi uss ka kaam khatam ho jta hai
// tu wo call stack sy nikal jta hai.


console.log('starting up');

setTimeout(() => {
    console.log('3 sec log');
}, 3000);// this 3000 is miliseconds

setTimeout(() => {
    console.log('0 sec log');
}, 0);
console.log('fininshing up');

/*
so jo iss k baad ata hai, {NODE API} AND {CALL BACK QUEUE} k wo kahan use hota hai


tu jaisa k hm nay ooper timeout wala function use kiya ye function jo hai ye 
c and c++ say inherit hua hai tu ho b functinos jo nodejs mein hian orr 
kisi or languag say aye hai ya inherit hue hain tu wo node api wala sectino mein run hongay
tu jaisay k timeout wala function hai wo nodeapi mein chala jaye ga {call back stack} mein naii jaye ga
tu jab {NODEAPI} jab ye walay run ho jayengay tu ye {callback queue} mein chalay jayengay
orr wahan prr ye tn tk wait karengay k ye {call stack} jo hai is ka main functino b execute 
ho k chala jaye tb ja kr ye call stack mein chala jaye ga.
orr tb jakay run ho jaye ga.....

{
    SO THIS IS THE MAIN ARCHITECTURE OF NODE.
}
*/

const fs = require('fs');

fs.writeFileSync('14_file.js','14th');