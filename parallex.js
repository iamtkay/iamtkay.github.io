// https://www.youtube.com/watch?v=cF3oyFXjRWk
var ypos,image;

function parralex(){
  ypos  = window.pageYOffset;
  image = document.getElementById('image');
  image.style.top = ypos * .4 + "px";
}

window.addEventListener('scroll', parralex);
