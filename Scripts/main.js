window.addEventListener('resize', handleWindowResize);
var btnRight = document.querySelector('.slider__btn--right');
var btnLeft = document.querySelector('.slider__btn--left');
var strip = document.querySelector('.slider__strip');
var slider = document.querySelector('.slider');
var posX = 0;
var width = slider.offsetWidth;
function handleBtnNextClick () {
    quantity++;
    quality++;
    buttonImage.setAttribute('src', '/Images/back' +  quality + '.png');
    if(quality==6){
        quality=0;
    }
}

btnRight.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick () {
    quality--;
    buttonImage.setAttribute('src', '/Images/back' +  quality + '.png');
    if(quality==0){
        quality=6;
    }

    console.log(quality);
}
andleBtnNextClick();
handleBtnPrevClick ();
buttonDer.addEventListener('click', handleButtonD);
buttonIzq.addEventListener('click', handleButtonI);
btnLeft.addEventListener('click', handleBtnPrevClick);

//setTimeout(handleBtnNextClick, 3000); // una vez
//setInterval(handleBtnNextClick, 3000); // varias veces
//handleBtnNextClick();


