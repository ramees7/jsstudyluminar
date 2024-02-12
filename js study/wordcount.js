a="hi hello hi hi hello hi hello hi hello hi hello hi hello hi hello hi world"
words=a.split(" ")
console.log(words)
res={}

for(i of words){
    if(i in res){
        res[i]+=1
    }

    else{
        res[i]=1
    }
}

console.log(res)

