// sanity check
console.log("app.js linked.");

document.addEventListener("DOMContentLoaded", function(event) { //needed to wait for whole document to load before calling events on button



var randomFacts = [ "I started my coding journey at General Assembly.",
  "I have an orange tabby cat named Love.",
  "I am a sperm donor baby and I have two unknown siblings my age somewhere in the world.",
  "I was the Music Director of my college a cappella group at UC Davis, The Spokes.",
  "I used to be Operations Manager for a staffing company.",
  "My car is a stick shift.",
  "I went to 7 different countries in 2016.",
  "I go to Burning Man annually.",
  "I have a weird obsession with financial planning.",
  "My three favorite values: ingenuity, resourcefulness, perseverance." ]


   var randomFactButton = document.getElementById('randomFactButton');
   var randomFactHere = document.getElementById('randomFactHere')

  function getRandomInt(min, max) {
    var min = Math.floor(min);
    var max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
   }

  function showRandomFact() {
    randomFactHere.textContent = randomFacts[getRandomInt(0, randomFacts.length)];
  }

  //randomFactButton is null! is not loaded in sequence
  if(randomFactButton) { //this statement is never entered
    randomFactButton.addEventListener('click', showRandomFact, false);
  }

});
