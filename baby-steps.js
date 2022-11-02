"use strict"

let args = process.argv;
args = args.map(v => Number(v))
args = args.filter(v => v)
let sum = args.reduce((a, b) => a + b, 0);
console.log(sum)