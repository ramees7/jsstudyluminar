// name="Nandagopal"
// email="nandagopalsuresh.e@gmail.com"
// msg=`Welcome ${name} to Luminar. Your registered email id is : ${email}`
// console.log(msg)

var arjun={
    name:"Arjun",
    age:20,
    designation:"MERN stack developer",
    experience:2,
    salary:75000
}

// 1. display every details of Arjun

// details=`${arjun.name} is a ${arjun.age} year old ${arjun.designation} and  he have ${arjun.experience} years of experience with salary of ${arjun.salary}`
// console.log(details)



// 2. check if there is any experience, if there is no experience, then add

// if("experience" in arjun){
//     console.log(arjun.experience)
// }
// else{
//     arjun[`experience`]=3
//     console.log(arjun)
// }


// 3. increment salary of 5000 and display full details

// method 1
// arjun.salary= arjun.salary+5000
// console.log(arjun);

// method 2
// arjun["salary"]+=5000
// console.log(arjun)

// 4. display every details one by one

for(let i in arjun){
    console.log(`${i}:${arjun[i]}`)
}



