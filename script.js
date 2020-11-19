
const elm = {
    inputContainer: document.querySelectorAll('.search'),
    inputPc: document.querySelector('#search'),
    inputMobile: document.querySelector('#search-2'),
    inputImg: document.querySelector('.search-img'),
    hamburger: document.querySelector('.hamburger-container'),
    navSub: document.querySelector('.nav-sub-secondary'),
    avater: document.querySelector('.avater'),
    repoProfile: document.querySelector('.repo-profile')
};


// ANIMATION FOR HEADER INPUT
// ABOVE 800PX
elm.inputPc.addEventListener('focusin', () => {
    elm.inputImg.style.visibility = 'hidden';
    elm.inputContainer[0].classList.add('input-anim')
});
elm.inputPc.addEventListener('focusout', () => {
    elm.inputContainer[0].classList.remove('input-anim');
    elm.inputImg.style.visibility = 'visible';
});

// BELOW 800PX
elm.inputMobile.addEventListener('focusin', () => {
    elm.inputContainer[1].classList.add('label-anim')
});
elm.inputMobile.addEventListener('focusout', () => {
    elm.inputContainer[1].classList.remove('label-anim');
});



// SUB-NAV TRIGGER BUTTON
elm.hamburger.addEventListener('click', () => {
    elm.navSub.classList.toggle('show');
});



// REPO HEADER ANIMATION

const profileShow = new IntersectionObserver( entries => {
        entries.forEach(elem => {
            elem.isIntersecting ? elm.repoProfile.style.opacity = '0' : elm.repoProfile.style.opacity = '1';
        })
    }
);
profileShow.observe(elm.avater)