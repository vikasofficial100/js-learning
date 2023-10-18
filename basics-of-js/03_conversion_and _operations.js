//--------Here we will study type conversion ie from one data type to another data type--------
/*let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)  //new_name_of_variable = TYPE(variable jisako covert karana hai)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//OUTPUT:
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

//OUTPUT
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**3);   //it means 2 to power 3
 console.log(2/3);
 console.log(2%3);  //use to get reminder (modulus sign)
 //---------TRICKY OPERATIONS BASED ON OPERRATOR PRECIDENCE----------
let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2   //we can add string like this but not subtracte.
// console.log(str3);

// console.log("1" + 2);    //here js engine will automatically covert 2 into string OUTPUT 12
// console.log(1 + "2");   //here js engine will automatically covert 1 into string OUTPUT 12
// console.log("1" + 2 + 2); //here js engine will automatically covert 2 ,2 into string OUTPUT 122
// console.log(1 + 2 + "2"); //but here whole game changed firstly 1+2 hua then string"2" printed as it is OUTPUT 32
// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //OUTPUT 1
// console.log(+""); //OUTPUT 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;   //-----> preincrement
gameCounter++;   //----->postincrement
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion */

//PRACTICE:
let a =55
console.log(a)
let b = string(a)
console.log(b)