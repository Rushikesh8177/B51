
// let sum=0;
//  for(let i=0; i<=5; i++){
//     console.log("wlecome ");

//  }

//  let i=1;
//  while(i<=5){
//     console.log("Print", i);
//     i++;
//  }

//  do{
//     console.log("print");

//  }while(i<=5);




// Game Of Guessing corret number 

//  let gaameNum=50;
//  let userNum = prompt("Guess the number :");

//  while(userNum != gaameNum){
//    userNum = prompt("Enter worng Number :")
//  }

//  console.log("Congratulation Sucessesfully login");




//  Array ---  Array idex value start at 0 to at end 
//  looping statment 
// 

//  let friut = [ "Mango", "Apple ", "Orange " ];

//  for( let i=0; i<friut.length; i++){
//   console.log(friut[i]);
//  }

//  Other way of prrint array in loop 
//  is for-of 

// let cities = ["Sangola", "Pune ", "Dehli"];

//  for( let city of cities){
//   console.log(city);

//  }



//  let mark= [85 ,97, 44 ,37,76,60];

//  let sum=0
//   for (let val of mark){
//     sum = sum + val;

//   }
//   let avg = sum / mark.length; 
//     console.log(avg);


// let prices =[250 , 654, 300, 900 , 50];
// let dis;

// for (let pri of prices){
//   dis = (pri * 10)/100;
//   let finalpric = pri - dis;

//   console.log(finalpric);

// }

// Function Defination and call 

// function myfunction(){
//   console.log("Hello");
// }
//  myfunction();



//  function myfunction(mes){
//   console.log(mes);
// }
//  myfunction("I wnat the new bike");


// Arrow Fuction 

// const sum = (x ,y) =>{

//   console.log(x + y);
// }

// sum(3,4);

// const sum = (x ,y) =>{
//  console.log()
//   return x + y;
// }

// sum(3,4);

// function vowel(str) {
//   // apanan college count +1
//   let count = 0;

//   for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {


//     }
//     {
//       count++;
//     }
//   }

//   console.log(count);
// }

//for- each function 
// arr.forEach(CallBackFunction)
// callbackFuncetion hear it id a function to excute for each element in the array 
// a call back function passed as an argument to another function
//  eg 
// let arr=[1,2,3,4,5];

// arr.forEach(function print(val){
//   console.log(val)

// });

// for arrow function 
// let array=[1,2,3,4,5];

// array.forEach((val)=>{
//   console.log(val);

// });
 
let btn1 = document.querySelector("#btn1")

btn1.onclick = () =>{
  console.log("btn was clicked");
   let a=25;
   a++;
   console.log(a);
};

let btn2 = document.querySelector("#btn2")

btn2.ondblclick = () =>{
  console.log("Btn was click two time ")
}
