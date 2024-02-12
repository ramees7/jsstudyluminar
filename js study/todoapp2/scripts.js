api=new XMLHttpRequest()

api.open("GET","https://fakestoreapi.com/users")

api.send()

console.log(api.readyState)
api.onreadystatechange=()=>{
    if(api.readyState===4){
        if(api.status>=200 && api.status<300){
            todo2=JSON.parse(api.responseText)
            todo2.forEach((item)=>{
                tb.innerHTML+=`
                <tr>
                <td>${item.id}</td>
                <td>${item.name.firstname}</td>
                <td>${item.name.lastname}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.address.city}</td>
                <td>${item.address.street}</td>
                <td>${item.address.zipcode}</td>
                </tr>`
            })
        }
        else{
            alert("api call failed")
        }
    }
}