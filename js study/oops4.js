class A{
    dept="cs"
    work(){
        console.log("programming")
    }
}

class B extends A {
    position="software engineer"
}

b=new B()
console.log(b)
console.log(b.position)
console.log(b.dept)
b.work()