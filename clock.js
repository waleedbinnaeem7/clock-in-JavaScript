// ============ Practice

// // Arry
// /*
// // for loop
// var arr = [1,2,3,4];

// for(var i = 0; i < arr.length; i++){
// // document.write(arr[i]);
// console.log(arr[i]);
// }

// // for each

// arr.forEach(function(elements){
// console.log(elements);
// document.write(elements);
// })

// //======== While loop

// */

// // // // print table of 10
// // var num = 20;
// // for (var i = 1; i <= 10; i++) {
// //     //  document.write(i*num)
// //     console.log(i * 10);

// // }

// // =========== program to generate a multiplication table

// // // take input from the user
// // const number = parseInt(prompt('Enter an integer: '));

// // //creating a multiplication table
// // for(let i = 1; i <= 10; i++) {

// //     // multiply i with number
// //     const result = i * number;

// //     // display the result
// //     console.log(`${number} * ${i} = ${result}`);
// // }

// // ====== While loop table

// let num1 = prompt("Enter first number!");
// let num2 = prompt("Enter 2nd number!");
// //var result = ;
// let i = 1;
// // while (i <= num2) {

// //     // console.log(`${num1} * ${i} = ${num1 * i}`);
// //     document.write(num1 + "X" + i + "=" + num1*i + "<br>");
// //     i++;

// // }

// // ========= Do while Loop

// do {
//     document.write(num1 + "X" + i + "=" + num1 * i + "<br>");
//     i++;
// }
// while (i <= num2)


// ======================================================

// Java Script Fo Clock

// ============= variables
let a;
let date;
let time;

setInterval(() => {
    const a = new Date();
    time = a.toLocaleTimeString();
    date = a.toLocaleDateString();
    document.getElementById("text").innerHTML = time + "  -  " + date;
}, 1000);        




