var baleno={
    name:"Baleno",
    manufacturer:"suzuki",
    type:"hatchback",
    mode:["Amt","Manuel"]

}

var glanza={
    name:"glanza",
    manufacturer:"toyota",

}

glanza.__proto__=baleno

console.log(`type of glanza is ${glanza.type}`)
console.log(`mode of glanza is ${glanza.mode}`)

console.log(`name=${glanza.name}`)

// console.log(glanza)


// string formatting