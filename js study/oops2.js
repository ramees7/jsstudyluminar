// class teacher{
//     name="arun"
//     age=25
//     qualification="MCA"
//     salary=45000
//     displaySalary(){
//                 console.log(this.salary)
//             }
//         }
// s1= new teacher()
// console.log(s1)
// s1.displaySalary()


// using constructor method

class Teacher{
    constructor(n,a,q,s){
        this.name=n
        this.age=a
        this.qualification=q
        this.salary=s
    }

    displaySalary(){
        console.log(this.salary)
    }
}

t1=new Teacher("ajith",20,"bca",25000)
t1.displaySalary()
t2=new Teacher("soman",25,"mca",35000)
t2.displaySalary()
console.log(t1.name)