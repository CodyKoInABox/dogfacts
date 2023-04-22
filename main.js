

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

// get the amount of facts that were displayed by the website from the counter API
fetch('https://api.countapi.xyz/get/codykoinabox.github.io/dogfactscounter')
.then(response => (response).json())
.then(data => updateCounter(data))

// update the amount of cats that were displayed by the website from the counter API
// i feel like someone will just spam this but I hope not
fetch('https://api.countapi.xyz/update/codykoinabox.github.io/dogfactscounter/?amount=1')

//update the fact amount based on the API's resonse
function updateCounter(data){
    console.log(data.value)
    document.getElementById("counterValue").innerHTML = data.value
}