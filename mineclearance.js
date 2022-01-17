
console.log ("I'm connected")
var treasure = Math.floor(Math.random() * 9)
var pirate = Math.floor(Math.random() * 9)
while (treasure===pirate) {
var pirate = Math.floor(Math.random() * 9)
}


const imageChange=(id)=> {
  console.log ("this is my id",id);
  console.log (treasure)
  console.log (pirate, "this is my pirate")

  if (pirate == id) {
    return document.getElementById(id).innerHTML = '<img src="https://www.maxpixel.net/static/photo/1x/Treasure-Chest-Wooden-Chest-Treasure-Gold-Pirate-6327952.png" alt="pirate" width="300px"/>'
  }
    else if (treasure == id) {

    return document.getElementById(id).innerHTML = '<img src="https://cdn.pixabay.com/photo/2013/07/12/18/37/booty-153593_1280.png" alt="treasure" width="300px"/>'

  }
    else {
      return document.getElementById(id).innerHTML = '<img src="https://i.etsystatic.com/7135067/r/il/83705c/2347241702/il_1588xN.2347241702_bsho.jpg" alt="map" width="300px">'
    }
}
