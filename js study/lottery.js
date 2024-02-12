
contest=new Promise((res,rej)=>{
    lotnumber=7

    winner=Math.floor(Math.random()*5+1)
    if(lotnumber==winner){
        res("Congratulations!! You have won lottery")
    }
    else{
        rej("Bad luck!!  you have lost lottery")
    }
})

contest.then((result)=>{console.log(result)}).catch((result)=>{console.log(result)}) 