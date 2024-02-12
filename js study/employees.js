var employees=[
    {id:1,name:"Ajith",dept:"Full stack developer",salary:25000},
    {id:2,name:"sajith",dept:"Full stack developer",salary:35000},
    {id:3,name:"ram",dept:"project manager",salary:15000},
    {id:4,name:"kiran",dept:"Data scientist",salary:75000},
    {id:5,name:"rithul",dept:"Embedded engineer",salary:25000},
    {id:6,name:"arun",dept:"Tester",salary:35000},
]


// 1. print names of every employees

// employees.forEach(item=>console.log(item.name))


// 2. Print the names of employees with salary>25000

// res=employees.filter(item=>item.salary>25000).forEach(item=>console.log(item.name))

// 3. Print the details of employee with the name="sajith"

// res=employees.find(item=>item.name=="sajith")
// console.log(res)

// 4. find the total salary paid for full stack developers

// res=employees.filter(item=>item.dept=="Full stack developer").reduce((total,item)=>total.salary+item.salary)
// console.log(res)


// 5. print details of the employee with highest paid salary


// res=employees.reduce((total,item)=>(total.salary)>(item.salary)?total:item)
// console.log(res)

// method 2

// res=employees.reduce((total,item)=>total.salary>item.salary?total:item)
// console.log(res)

// 6. display the names of employees in the order of their salary in its ascending order

// a.sort((a,b)=>b-a)

employees.sort((a,b)=>a.salary-b.salary)
res=employees.map(item=>item.name)
console.log(res) 