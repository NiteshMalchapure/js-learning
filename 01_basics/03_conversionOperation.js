let score=33

console.log(typeof score);
console.log(typeof(score));
//------------
console.log();
console.log("for number in string");

let score1 ="33"
console.log(typeof score1);
let valInNumber=Number(score1)
console.log(typeof (score1));
console.log(typeof (valInNumber));
///-------------------
console.log();
console.log("for stirng+number");

let num="33abs"
console.log(typeof num);
let valueInNumber1=Number(num)
console.log(typeof valueInNumber1);
console.log( valueInNumber1);

//33---->33
//"33aba"--->NaN
//true--->1;false--->0

///-----------
console.log();
console.log("For null");

let number=null
console.log(typeof null);
let valueInNumber2=Number(number)
console.log(typeof valueInNumber2);
console.log( valueInNumber2);
//----------
console.log();
console.log("for undefined");

let age=undefined
console.log(typeof age);
let valueInNumber3=Number(age)
console.log(typeof valueInNumber2);
console.log( valueInNumber3);

console.log();
console.log("for boolean");
let boolean=true
console.log(typeof boolean);
let valInNumber4=Number(boolean)
console.log(typeof valInNumber4);
console.log(valInNumber4);

////------
console.log();
console.log("Boolean conversion");

let isloged=1
let booleanIsloged=Boolean(isloged)
console.log(typeof booleanIsloged);
console.log(booleanIsloged);

// Boolean convertion 
/* 1/any--->true;0--->false
""--->false
"nitesh"--->true*/
