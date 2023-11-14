
const d = 40;

document.querySelectorAll('.rocket-button').forEach(elem => {

    elem.querySelectorAll('.default, .success > div').forEach(text => {
        charming(text);
        text.querySelectorAll('span').forEach((span, i) => {
            span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
            span.style.setProperty('--d', i * d + 'ms');
            span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });
    elem.addEventListener('click', e => {
        e.preventDefault();
        if(elem.classList.contains('animated')) {
          // elem.classList.remove('animated');
          return;
        }
        elem.classList.add('animated');
        elem.classList.toggle('live');
        // elem.classList.remove('animated');
        setTimeout(function(){
          elem.classList.remove('animated');
          window.open('https://jeremie.tagsdev.click/rocket');
        },3500);
        setTimeout(function(){
          elem.click()
        },5000);

      
    }, {once : true});

    // }, {once : true}); pwede to, cool concept

});


// function navigate(){
  // setTimeout(function(){
  //   window.open('http://localhost:8000');
  // },2500);
// }

function randomize() {
  for (var i = rando.children.length; i >= 0; i--){
  rando.appendChild(rando.children[Math.random() * i | 0]); 
  }
}

function makeVis(j) {
	var photo = rando.children[j].firstElementChild;
	setTimeout(function() { photo.classList.add("visible"); }, 700 * j);
}

function sequentize(){
for (var j = 0; j <= rando.children.length; ++j) 
   makeVis(j);
}

var rando = document.getElementById('tagstagstags'), waiter;
   
function fsort() {
randomize();
sequentize();
}
	
window.onresize = function() { 
  clearTimeout(waiter);
  waiter = setTimeout(fsort, 1000);
}

fsort();




document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 2000
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
   result += ` ${randomNumber(0, 20000)}px ${randomNumber(0, 20000)}px #FFF, `
}
console.log(result.substring(0, result.length - 1))
