// phone number validation

// txt="9287654321"

// res=txt.match(/^[0-9]{10}$/)
// // res=txt.match(/^9[0-9]{9}$/)
// console.log(res)
// if(res){
//     console.log('number is valid')
// }
// else{
//     console.log('number is invalid')
// }


// -------------------------------------------------------

// emil validation

txt="ramees@gmail.com"

res=txt.match(/^[a-z,0-9]{1,}@gmail.com$/)
console.log(res)
if(res){
        console.log('valid email')
    }
    else{
        console.log(' invalid email')
    }
