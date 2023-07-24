fetch("https://ana-letc.github.io/CV/projetos.json")
  .then(response => response.json()).then(json => console.log(json));


const filterElement = document.querySelector('.input-wrapper input');
const cards = document.querySelectorAll('.video-container li');

filterElement.addEventListener('input' ,filterVideos);

function filterVideos(){

  if(filterElement.value != '' ){

for(let card of cards){

let tags = card.querySelector('video').getAttribute('data-tags').toLowerCase();

let filterText = filterElement.value.toLowerCase()


if(!tags.includes(filterText)){

card.style.display="none"

}

else{

card.style.display="block"

}

  }

} else{

for( let card of cards){

  card.style.display="block"

}

  }

    }

