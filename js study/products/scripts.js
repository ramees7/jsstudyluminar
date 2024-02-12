// async-await{}

fetch("https://fakestoreapi.com/products").then(res=>(res.json()).then(res=>console.log(res)))

const getpro=async ()=>{
    result=await fetch("https://fakestoreapi.com/products")
    allpro=result.json()
    allproducts=await allpro
    console.log(allproducts)
    allproducts.forEach(item=>{
        productcontainer.innerHTML+=`
        <div class="col mb-5">
            <div class="card h-100">
                 <!-- Product image-->
                <img class="card-img-top" width="200px" height="200px" src="${item.image}" alt="..." />
                <!-- Product details-->
               <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${item.title}}</h5>
                        <!-- Product price-->
                        ${item.price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
            </div>
        </div>
        `
    })
}
getpro()













