const pathFile = process.argv[2];
if (!pathFile) process .exit(-1);

const fs = require("fs");

//console.log(process.argv);

const objBufferedFile = fs.readFileSync(pathFile);

//console.log(objBufferedFile.toString());

const str = objBufferedFile.toString();

// console.log(str.split("\n"))
const arrFile = str.split("\n");
//const arrFile = objBufferedFile.toString().split("\n");
console.log(arrFile.length - 1);