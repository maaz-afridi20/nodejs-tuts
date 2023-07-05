console.log('this is in vs code');

var a = 32;
var b = '4';

console.warn(a+b);
// console.error(a)

console.log('this is %')

// console.error('some error happened');

if (a===32) { // here we just write === instead of == like in dart.
    console.log('this is right');
}else{
    console.log('wrong');
}

// when we use === this will match the value and also the datatype of the value
// like that this is string ro not. then will print something
// but if we use == this will onlty check the value will not check the datatype.
// like 



if (b===4) {
    console.log('value and datatype matched') // if we write b===4 then this will execute this statement
} else {
    console.log('does not match') // if we write b==4 this will execute this statement
}
// // for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }



var arr = [1,36,2,6,8,0,6,4,4];

console.log(arr[2])