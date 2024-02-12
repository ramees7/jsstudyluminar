 var car={
    model:"Baleno",
    type:"Hach-back",
    manufacturer:"susuki",
    price:10.5
}

// 1. display every details one by one
// 2. check if there is  model details in instanceof, if there is  display 'not available'
// 3. check if there is variants in instanceof, if there is no varients, add automatic and manual
// 4. add colours as red, blue, black, grey.

// 1.

// for(let i in car){
//     console.log(`${i}:${car[i]}`)
// }

// 2.

// if("model" in car){
//     console.log(car.model)
// }
// else{
//     car['model']=`not available`
//     console.log(car)
// }

// 3.4.

// if("varient" in car){
//     console.log(variaent)
// }else{
//     car.varient="automatic"

// }

// car.color="red"
// console.log(car)

// adding 2 elements using array

car["colors"]=["red","blue","black"]
console.log(car)
