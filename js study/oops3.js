class Student{
    constructor(n,a,m){
        this.name=n
        this.age=a
        this.mark=m
    }

    displayMark(){
        console.log(this.mark)
    }
}

s1=new Student("ajith",20,56)
s1.displayMark()
s2=new Student("soman",25,46)
s2.displayMark()