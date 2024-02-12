class Bank{
    account_details={
       1001: {acno:1001,username:"arjun",password:"aj123",balance:50000},
       1002: {acno:1002,username:"arjun",password:"aj123",balance:50000},
       1003: {acno:1003,username:"arjun",password:"aj123",balance:50000},
       1004: {acno:1004,username:"arjun",password:"aj123",balance:50000},
    }

    // check if there is a valid account 1003

    validateacno(acno){
        return(acno in this.account_details)
    }

    // authenticate with acno & psassword
}

let user1=new Bank()
console.log(user1.validateacno(1003)?"given account number is valid":"given acno is not valid")


