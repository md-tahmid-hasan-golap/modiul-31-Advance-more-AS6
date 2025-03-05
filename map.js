
// const numbers = [10,33, 44, 54, 90, 87];

// // console.log(numbers);
// // console.log(...numbers)


// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     const items = numbers[i];

//        sum = sum + items


// }
// console.log(sum)

// const numbers = [10,33, 44, 54, 90, 87];

// let newArray = [] ;

// for(let i = 0; i < numbers.length; i++){

//     const items = numbers[i];
//     if(items % 2 === 1){
//         newArray.push(items)
//     }

// }
// console.log(newArray)

// const numbers = [10,33, 44, 54, 90, 87];

// let newArray = [] ;

// for(let i = 0; i < numbers.length; i++){

//     const items = numbers[i];
//     if(items % 2 === 0){
//         newArray.push(items)
//     }

// }
// console.log(newArray)



// const numbers = [10,33, 44, 54, 90, 87];
// let sum = 0;

// for (let i = 0 ; i < numbers.length; i++){
//     const items = numbers[i];

//     if(items % 2 === 1){
//         sum = sum + items
//     }

// }

// console.log(sum)



// const numbers = [10,33, 44, 54, 90, 87];
// let sum = 0;

// for (let i = 0 ; i < numbers.length; i++){
//     const items = numbers[i];

//     if(items % 2 === 0){
//         sum = sum + items
//     }

// }

// console.log(sum)






//   const ? = [];
// for (let i = 0; i < numbers.length; i++){

//     const items = numbers[i];

//     const add = items + 1;

//     newArray.push(add)

// }

// console.log(newArray)

// const newArray = numbers.map(number => number + 1)

// console.log(newArray)

// const numbers = [10,33, 44, 54, 90, 87];

// const squareAeeay = numbers.map(square => square * square);

// console.log(squareAeeay)

// const squareAeeay = numbers.map(Number => {
//     return Number * Number
// })
// console.log(squareAeeay)


const Friends = ["basar", "masum", "imrul", "raj", "akash"];

// console.log(Friends);

// console.log(...Friends)

// for (let friend of Friends){
//     console.log(friend)
// }

// for (let i = 0; i < Friends.length; i ++){
//     const friend = Friends[i]
//     console.log(friend)
// }

const friendArray = Friends.map(friend => console.log(friend))
console.log(friendArray)

