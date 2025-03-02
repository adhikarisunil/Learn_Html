// let day = "Sunday";


// switch (day){
//    case "Monday":
//     console.log("today is Monday");
//     break;



//     case "Friday":
//      console.log("today is Friday");
//      break;



//     case "Monday":
//      console.log("today is Monday");
//      break;
 

//     default:
//         console.log("No condition Match");
// }


//  var areaOfShapes = "square";
//  var result;

//  switch(areaOfShapes){
//     case "square":
//         var a = 5;
//         result = a * a;
//         console.log(result);
//         break;


//     case "rectangle":
//         var a = 5;
//         var b = 10;
//         result = a * b;
//         console.log(result);
//         break;


//     case "circle":
//         var r = 14;
//         result = 3.142 * (r * r);
//         console.log(result);
//         break;


//     default:
//         console.log("No match found.");
//  }

// var num = 1;

// for(num = 1; num <= 10; num ++)
//     console.log("5 " + num + "= " + 5 * num);



// var userInput;
// var positiveNumber;

// do{
//     userInput = prompt("Enter any positive number:");
//     positiveNumber = parseFloat(userInput);

// }while(isNaN (positiveNumber)|| positiveNumber<0);
// console.log("You entered a valid positive number:", positiveNumber);





// let userInput;
// let positiveNumber;
// do {
//   userInput = prompt("enter any positive number");
//   positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You entered a valid positive number:", positiveNumber);



// var sum = 0;
// for (var num = 1; num <=10 ; num++){
//   var sum = sum + num;
// }
// console.log(sum);



// var num = 12;
// var isPrime = false;

// for(var i =2; i < num; i++){
//   if(num % i === 0){
//     isPrime = true;
//     break;
//   }

// }

// if(isPrime){
//   console.log("Num is prime.");
// }
// else{
//   console.log("Num is prime.");
// }


// var year = 2002;

// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//   console.log("It is a leap year.")
// }
// else{
//   console.log("It is not a leap year.")
// }


for(var i =1; i<= 5; i++){
  for(var j = 1; j<= i; j++){
    console.log("*");
  }

}