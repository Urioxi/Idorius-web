// slider
let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

let nbr__img = img_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >=nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >=nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}, 5000)