
num=5
flag=0
for(i=2;i<num;i++){
    if(num%i==0){
        flag=1
    }
}

if(flag==0){
    console.log("prime number")
}

else{
    console.log("non prime")
}