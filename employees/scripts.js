//index.html


emp={}


function submitted(){
    if(ename.value && edob.value && equa.value && eph.value){
        emp.name=ename.value
        emp.dob=edob.value
        emp.qua=equa.value
        emp.phone=eph.value
        console.log(emp)
        res=JSON.stringify(emp)
        console.log(res)
        localStorage.setItem("employee",res)
        window.location="secondary.html"
    }
    else{
        errormsg.innerHTML="<p class='alert alert-danger'>Inavlid Submission</p>"
    }
}

//second.html

if(localStorage.getItem("employee")) {
    semp=localStorage.getItem("employee")
    semp=JSON.parse(semp)
    console.log(semp)
    cntn.innerHTML=`
  <div class="card" style="width: 18rem;">
    <div class="card-header">
        Employee Details
     </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> NAME : ${semp.name}</li>
      <li class="list-group-item"> DOB : ${semp.dob}</li>
      <li class="list-group-item"> QUALIFICATION : ${semp.qua}</li>
      <li class="list-group-item"> PHONE NUMBER : ${semp.phone}</li>  
    </ul>
  </div>`
}
else{
    cntn.innerHTML="<p class='alert alert-danger'>No data availabe!!</p>"
}