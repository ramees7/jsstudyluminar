accounts=[
    {acno:1000,ac_type:"savings",balance:30000,transactions:[
        {to:1001,amnt:1000,msg:"debt",mode:"gpay"},
        {to:1002,amnt:1500,msg:"ebill",mode:"phonepay"},

    ]},
    {acno:1001,ac_type:"current",balance:20000,transactions:[
        {to:1000,amnt:1000,msg:"grocery",mode:"gpay"},
        {to:1003,amnt:2500,msg:"ebill",mode:"netb"},
        {to:1000,amnt:2000,msg:"recharge",mode:"gpay"},
]},
    {acno:1002,ac_type:"savings",balance:250000,transactions:[
      {to:1003,amnt:20000,msg:"debt",mode:"gpay"},
      {to:1003,amnt:250,msg:"ebill",mode:"phonepay"},
      {to:1001,amnt:1250,msg:"ebill",mode:"phonepay"},
      {to:1000,amnt:300,msg:"ebill",mode:"phonepay"},
]},
    {acno:1003,ac_type:"savings",balance:20000,transactions:[
      {to:1002,amnt:10000,msg:"debt",mode:"gpay"},
      {to:1001,amnt:1000,msg:"grocery",mode:"phonepay"},
    ]},
]
      

// 1. total number of accounts
// 2.print account no's whose account type is savings
// 3.print all gpay transactions
// 4.print all transactions whose amount >5000
// 5.print debt transactions of 1000
// 6.print transaction history of 1002
// 7. print highest balance account details
// 8.print lowest balance account details


// 1. total number of accounts

// console.log(`total no.of accounts:`)

// 2.print account no's whose account type is savings

// res=accounts.filter(item=>item.ac_type=="savings")
//  console.log(res)

// method 2

// accounts.filter(item=>item.ac_type=="savings").forEach(item=>console.log(item.acno))



// 3.print all gpay transactions

// res=accounts.map(item=>item.transactions).flat().filter(item=>item.mode=="gpay")
// console.log(res)

// 4.// 4.print all transactions whose amount >5000

// res=accounts.map(item=>item.transactions).flat().filter(item=>item.amnt>5000)
// console.log(res)

// 5.print debt transactions of 1000

// res=accounts.map(accounts=>accounts.transactions).flat().filter((accounts=>accounts.msg==='debt'))
// .filter(accounts=>accounts.amnt===1000);
// console.log(res)

// res=accounts.find((item=>item.acno==1000))
// res.transactions.filter(item=>item.msg=="debt").forEach(item=>console.log(item))

// 6.print transaction history of 1002

// res=accounts.find((item=>item.acno==1002))
// res.transactions.forEach(item=>console.log(item));


// 7. print highest balance account details

// res=accounts.reduce((total,item)=>(total.balance)>(item.balance)?total:item);
// console.log(res)


// 8.print lowest balance account details


// res=accounts.reduce((total,item)=>(total.balance)<(item.balance)?total:item)
// console.log(res);
