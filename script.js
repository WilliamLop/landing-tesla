const nav = document.querySelector('.nav__container');
const video = document.querySelector('.header__video');
const btns = document.querySelectorAll('#menu');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const headerSection = document.querySelector('.section__content');
const headerLogo = document.querySelector('.header__logo');

close.style.display = 'none';

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {

        nav.classList.toggle('nav__container--active');
        if (nav.classList.contains('nav__container--active')) {
            close.style.display = 'block';
            hamburger.style.display = 'none';
            video.style.filter = 'blur(4px)';
            headerSection.style.filter = 'blur(4px)';
            headerLogo.style.filter = 'blur(4px)';
            
        }else{
            hamburger.style.display = 'block';
            close.style.display = 'none';
            video.style.filter = 'blur(0px)';
            headerSection.style.filter = 'blur(0px)';
            headerLogo.style.filter = 'blur(0px)';


        }
    });
}
