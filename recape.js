// const numbers = [1, 22, 33, 32, 78, 69];
// let number = [];

// for(let i = 0; i < numbers.length; i++){
//     const items = numbers[i];
//     const item = items + 1;
//     number.push(item)

// }

// console.log(number)

// const number = numbers.map(n => n + 1);
// console.log(number)


// const numbers = [1, 22, 33, 32, 78, 69];

// const square = numbers.map(n => n* n);
// console.log(square)


// return arrow function

// const numbers = [1, 22, 33, 32, 78, 69];

// const square = numbers.map(n => {
//     return n* n
// });
// console.log(square)


const Friends = ["basar", "raj", "rabby"];

// for(let friend of Friends){
//     console.log(friend)
// }

// for (let i = 0; i < Friends.length; i++){
//     console.log(Friends[i])
// }

// const friend = Friends.map(frnd =>{
//     return frnd
// })

// console.log(friend)

const products = [

    {id : 1, Name : "iphone", color : "white", price : 14000, Brand : "iphone"},
    {id : 2, Name : "xoime", color : "red", price : 42000, Brand : "xoime"},
    {id : 3, Name : "samsung", color : "black", price : 112000, Brand : "samsung"},
    {id : 4, Name : "redmi", color : "black", price : 112000, Brand : "redmi"},
    {id : 5, Name : "vivo", color : "yellow", price : 1000, Brand : "vivo"},
    {id : 6, Name : "mi", color : "aqua", price : 2000, Brand : "mi"},
    {id : 7, Name : "realmi", color : "vilioed", price : 11100, Brand : "redmi"},
]


const product = products.filter(p => {
    if(p.color === "black"){
       return p
    }
})

console.log(product)

// products.forEach(p => {

//     if(p.id === 1){
//         console.log(p)
//     }
// })
// for(let product of products){
//     console.log(product)
// }

// for (let i = 0; i < products.length ; i++){
//     console.log(products[i])
// }

// const product = products.map(p => {
//     return p
// })

// console.log(product)

