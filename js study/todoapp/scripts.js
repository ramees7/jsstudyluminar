//API call using XMLHTTPRequest


// 1.Create an object for XMLHTTPRequest

api=new XMLHttpRequest()

// 2.Set up XMLHttpRequest Object with URL and method for requesting

api.open("GET","https://jsonplaceholder.typicode.com/todos")

// 3.Send Request


api.send()

console.log(api.readyState)
api.onreadystatechange=()=>{

    if(api.readyState===4){
        if(api.status>=200 && api.status<300){
            // if(api.status==200){
            todo=JSON.parse(api.responseText)
            todo.forEach((item)=>{
                tb.innerHTML+=`
                <tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
                </tr>`
            })
        }
        else{
            alert("api call failed")
        }
    }

}



























// else{
//     alert("api call failed!!")

// }
// else{
//     alert("api server connection failed")
// }