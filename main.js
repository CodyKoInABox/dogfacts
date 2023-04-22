// get a random dog fact from API
fetch('https://dogapi.dog/api/v2/facts')
.then(response => (response).json())
.then(data => updateFact(data))

// get a random dog image from API
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => (response).json())
.then(data => updateImage(data))

// update the image based on the API's response
function updateImage(data){
    console.log(data.message)
    document.getElementById("image").src = data.message
}

// update the fact text based on the API's response
function updateFact(data){
    console.log(data.data[0].attributes.body)
    document.getElementById("fact").innerHTML = data.data[0].attributes.body
}