


const gettmovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=f5dbad5951c2922f7254e61a094eb629")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pdetails.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
gettmovie()
// --------------------------------------------
const getdis=async ()=>{
    result= await fetch("https://api.themoviedb.org/3//discover/tv?api_key=f5dbad5951c2922f7254e61a094eb629")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pdetail.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w780/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.name}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.first_air_date}
                </div>
            </div>`
        

    })
}
getdis()
// --------------------------------------------
const gettopr=async ()=>{
    result= await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f5dbad5951c2922f7254e61a094eb629")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pdetai.innerHTML +=`
        <div class="d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
gettopr()
// --------------------------------------------
const getamovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pdeta.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.original_title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
getamovie()
// --------------------------------------------
const getcmovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3//discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=35")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pdet.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
getcmovie()
// --------------------------------------------
const gethmovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3//discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=27")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pde.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
gethmovie()
// --------------------------------------------
const getrmovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=10749")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        pd.innerHTML +=`
        <div class=" d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
getrmovie()
// --------------------------------------------
const getdmovie=async ()=>{
    result= await fetch("https://api.themoviedb.org/3//discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=99")
    allpro= result.json()
    console.log(allpro)
    allproducts= await allpro
    console.log(allproducts)
    allproducta=allproducts.results
   
    allproducta.forEach(item=>{
        p.innerHTML +=`
        <div class="d-flex justify-content-start">
                <div class="p-1 ca__rd " style="width: 13rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="pt-3">${item.title}</h6>
                Original Lag: ${item.original_language}<br>
                Rating: ${item.vote_average}<br>
                Release Date: ${item.release_date}
                </div>
            </div>`
        

    })
}
getdmovie()
// ----------------------- scrool Left & right Button--------------------------
// ------1-----
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
// ----2------
let scrollContainer1 = document.querySelector(".gallery1");
let backBtn1 = document.getElementById("backBtn1");
let nextBtn1 = document.getElementById("nextBtn1");

nextBtn1.addEventListener("click", () =>{
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft += 900;
});
backBtn1.addEventListener("click", () =>{
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft -= 900;
});
// ------3------------
let scrollContainer2 = document.querySelector(".gallery2");
let backBtn2 = document.getElementById("backBtn2");
let nextBtn2 = document.getElementById("nextBtn2");

nextBtn2.addEventListener("click", () =>{
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 900;
});
backBtn2.addEventListener("click", () =>{
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 900;
});
// ------4------------
let scrollContainer3 = document.querySelector(".gallery3");
let backBtn3 = document.getElementById("backBtn3");
let nextBtn3 = document.getElementById("nextBtn3");

nextBtn3.addEventListener("click", () =>{
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft += 900;
});
backBtn3.addEventListener("click", () =>{
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft -= 900;
});
// ------5------------
let scrollContainer4 = document.querySelector(".gallery4");
let backBtn4 = document.getElementById("backBtn4");
let nextBtn4 = document.getElementById("nextBtn4");

nextBtn4.addEventListener("click", () =>{
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft += 900;
});
backBtn4.addEventListener("click", () =>{
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft -= 900;
});
// ------6------------
let scrollContainer5 = document.querySelector(".gallery5");
let backBtn5 = document.getElementById("backBtn5");
let nextBtn5 = document.getElementById("nextBtn5");

nextBtn5.addEventListener("click", () =>{
    scrollContainer5.style.scrollBehavior = "smooth";
    scrollContainer5.scrollLeft += 900;
});
backBtn5.addEventListener("click", () =>{
    scrollContainer5.style.scrollBehavior = "smooth";
    scrollContainer5.scrollLeft -= 900;
});
// ------7------------
let scrollContainer6 = document.querySelector(".gallery6");
let backBtn6 = document.getElementById("backBtn6");
let nextBtn6 = document.getElementById("nextBtn6");

nextBtn6.addEventListener("click", () =>{
    scrollContainer6.style.scrollBehavior = "smooth";
    scrollContainer6.scrollLeft += 900;
});
backBtn6.addEventListener("click", () =>{
    scrollContainer6.style.scrollBehavior = "smooth";
    scrollContainer6.scrollLeft -= 900;
});
// ------8------------
let scrollContainer7 = document.querySelector(".gallery7");
let backBtn7 = document.getElementById("backBtn7");
let nextBtn7 = document.getElementById("nextBtn7");

nextBtn7.addEventListener("click", () =>{
    scrollContainer7.style.scrollBehavior = "smooth";
    scrollContainer7.scrollLeft += 900;
});
backBtn7.addEventListener("click", () =>{
    scrollContainer7.style.scrollBehavior = "smooth";
    scrollContainer7.scrollLeft -= 900;
});