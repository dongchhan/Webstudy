// // for of 반복문 
// let fruit = ['apple', 'mango', 'strawberry', 'pineapple']
// let sentence = 'I love fruits'

// for (let item of fruit){
//     console.log(item)
// }

// for (let char of sentence){
//     console.log(char)
// }

// // for in 반복문 key값을 반환 (배열 -> 인덱스, 객체 -> key)
// let person = {
//     name: "누나",
//     age: 25,
//     cute: true
// }

// for (let key in person) {
//     console.log(key)
// }

////////////////////////////////////////////////////////////////////////////////

// // Q1
// let sum = 0
// for (let i=1; i<=100; i++) {
//     sum += i
// }
// console.log("Q1:", sum)

// // Q2
// for (let i=1; i<=100; i+=2) {
//     console.log("Q2:", i)
// }

// // Q3
// for (let i=1; i<=50; i++) {
//     flag = false
//     iStr = i.toString()
//     for (let iOneStr of iStr) {
//         if (iOneStr == "3" || iOneStr == "6" || iOneStr == "9") {
//             flag = true
//             break
//         } else {
//             continue
//         }
//     }
//     console.log(flag?"짝":i)
// }

// // Q4
// let UserInput = 1

// let flag = true
// if (UserInput != 1) {
//     for (let i=2; i<UserInput; i++) {
//         if (UserInput%i === 0) {
//             flag = false
//             break
//         } else {
//             continue
//         }
//     } 
// }
// console.log(flag)