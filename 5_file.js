// node js is single threaded. aik hi time mein aik hi cheez ko run krti hai..


// importing colors package.
var colors = require('colors');
// importing chalk package.
var chalk = require('chalk');

var log = console.log;


console.log('this is rainbow'.rainbow); // this will print the text rang ba rang.
console.log('this is green'.green);
console.log('this is pata nai'.blue);

// what are package.json file?

// mainly ye jo file hoti hai ye huamri project ki details raktii hai.. 
// alll related to code. it's like pubspes.yaml
// like what is the git repo what is the verison etx.

// we can create the package.json file through termina... through
// npm init

console.log(chalk.blue('hello chalk'));
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.green('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.bgYellow.bold('this is bold'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!')); // hello will be red while world 
// will be blue with underline. 

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));