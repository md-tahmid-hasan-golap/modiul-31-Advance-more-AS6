const products = [

    {id : 1, Name : "iphone", color : "white", price : 14000, Brand : "iphone"},
    {id : 2, Name : "xoime", color : "red", price : 42000, Brand : "xoime"},
    {id : 3, Name : "samsung", color : "black", price : 112000, Brand : "samsung"},
    {id : 4, Name : "redmi", color : "blue", price : 112000, Brand : "redmi"},
    {id : 5, Name : "vivo", color : "yellow", price : 1000, Brand : "vivo"},
    {id : 6, Name : "mi", color : "aqua", price : 2000, Brand : "mi"},
    {id : 7, Name : "realmi", color : "vilioed", price : 11100, Brand : "redmi"},
]

// const newProducts = products.map(product => console.log(product))
// console.log(newProducts)

// for (let i = 0; i < products.length; i ++){
//     const product = products[i];
//     console.log(product)
// }

products.forEach(product =>{
    // if(product.color === "black")
    //     console.log(product)

    if(product.price >= 1000){
        console.log(product)
    }
})