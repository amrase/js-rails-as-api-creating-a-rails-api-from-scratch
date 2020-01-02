let h3Body = document.querySelector('#h3body')

fetch('http://localhost:3000/sightings')
.then(resp => resp.json())
.then(sightingArray =>{
    console.log(sightingArray)
})