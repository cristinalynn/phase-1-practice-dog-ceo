console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let breeds = []
fetch(imgUrl)
.then(response => response.json())
     
.then(function (data) {
    
    data.message.forEach(link => addImage(link));
})

const addImage = (link) => {
   
    const container = document.getElementById("dog-image-container")
    const img = document.createElement("img")
    img.src = link
    
    container.appendChild(img)
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
.then(response => response.json())

.then(data => {
    console.log(data)
     breeds = Object.keys(data.message)
    console.log(breeds)
    breeds.forEach(breed => addLi(breed))
})
const addLi = (breed) => {
    console.log(breed)
    const element = document.getElementById("dog-breeds")
    console.log(element)
    const li = document.createElement('li')
    li.innerText = breed
    element.appendChild(li)

    li.addEventListener("click", changeColor)

    function changeColor(e) {
        console.log(e)
        e.target.style.color = "purple"
    }
    
}

// Find the select element and put an eventlistener on it X
// Use the value from the select X
// filter through all the breeds 
// render the ones that match the values from that select

const select = document.getElementById("breed-dropdown")
select.addEventListener("change", dropDown)
function dropDown(e) {
    console.log(e.target.value)
   const newBreeds = breeds.filter(breedFilter)
function breedFilter(breed) {
    if (breed.charAt(0) === e.target.value) {
        return true
    } 
}
 console.log(newBreeds) 
 const flamingo = document.getElementById("dog-breeds")
 flamingo.innerHTML = " "
 newBreeds.forEach(breed => addLi(breed))  
}


})