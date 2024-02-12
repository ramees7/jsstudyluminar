
const findcountry=async()=>{
    res=findinput.value
    result=await fetch(`https://restcountries.com/v3.1/name/${res}?fullText=true`)
    contry=result.json()
    country=await contry
    console.log(country[0])

    cname=country[0].name.common
    capital=country[0].capital
    population=country[0].population
    tz=country[0].timezones
    continent=country[0].continents
    flag=country[0].flags.png
    map=country[0].maps.googleMaps
    cnt.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${flag} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cname}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">CAPITAL : ${capital}</li>
      <li class="list-group-item">POPULATION : ${population}</li>
      <li class="list-group-item">CONTINENT : ${continent}</li>
    </ul>
    <div class="card-body">
      <a href=${map} class="card-link">View on goole maps</a>
    </div>
  </div>
    `

}














