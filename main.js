// conversions

let numValue1 = 10;
let numValue2 = 11;
let strValue1 = 'Priya';

let answer = numValue1 + numValue2;
console.log(answer); //21

let result = numValue1  + numValue2 + strValue1;
console.log (result); // 21Priya

answer = strValue1  + numValue1 +numValue2;
console.log(answer); // Priya1011

answer = strValue1  + (numValue1 +numValue2);
console.log(answer); // Priya21

let numValue3 = 12;

            //10        //11        12
result = numValue1 * numValue2 + numValue3;
console.log(result); //112

            //10        //11        //12
result = numValue1 + numValue2 * numValue3;
console.log(result); //142  //1st multiplication then addition

            //10        //11        //12
result= (numValue1 + numValue2) * numValue3;
console.log(result); //252  // 1st solve the bracket 10+11 = 21 the multiply by 12

// reminder modular operator

let numValue4 = 11;
result = numValue4 % 2;
console.log(result);   // 1 modules // odd number

// exponential 
let numValue5 = 2;
result = Math.pow(numValue5, 3); // 2*2*2
console.log(result); // 8


// exponential 
result = numValue5 ** 3;
console.log(result);


// mutable 
let str1 = "Priya";
let str2 = "Sawant";
result = str1 + " " + str2; // mutable 
console.log (result); // Priya Sawant

// string interpolation
result = `${str1} ${str2}`; // immutable
console.log(result);  // Priya Sawant










