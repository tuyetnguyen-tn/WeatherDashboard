var apiKey = "8bb878900c29b69c81445ee9b5a6d7de"
var searchCity = document.querySelector("#city-search");
var cityForm = document.querySelector("#city-form")
var searchButton = document.querySelector('#submit-button')

//function getApi(lat, lon}) {
//  var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`
//fetch(requestUrl)


cityForm.addEventListener("submit-button", function (event) {
    event.preventDefault()
    var search = searchCity.value
    console.log(search)

    var locatinApi = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apikey}`

    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apikey}`
console.log(locatinApi)
    fetch(locatinApi)


    .then(function (response) {
        console.log(response.json()) 
        return response.json();
    })
    .then(function(data){
        if(!data[0]){
            alert("not found")
        }
        else{console.log(data)}
    })
//console.log(response)
// }.then
// getApi(lat, lon)
})


 //   fetch(requestUrl)

   //     .then(function (response) {
    //        return response.json();
  //      })

    // }.then
    // getApi(lat, lon)



// searchButton.addEventListener("click", getCity)
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// searchButton.addEventListener("click", search)