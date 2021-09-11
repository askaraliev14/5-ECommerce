const langWrapper = document.querySelector('.header__language-input-wrapper');
const headerLanguageInputs = document.querySelectorAll('.header__language-input-wrapper');
const headerLanguageForm = document.querySelector('.header__language-form');

Array.from(headerLanguageInputs).forEach(headerLanguageInput => {
    headerLanguageInput.addEventListener('click', () => {
        langWrapper.style.maxHeight = null
        headerLanguageForm.classList.remove('active')
    })
})

function openLang() {
    if (langWrapper.style.maxHeight) {
        langWrapper.style.maxHeight = null;
        headerLanguageForm.classList.remove('active')

    } else {
        langWrapper.style.maxHeight = langWrapper.scrollHeight + 'px';
        headerLanguageForm.classList.add('active')
    }
}

const langWrapperMob = document.querySelector('.header__mob-language-input-wrapper');
const headerLanguageInputsMobs = document.querySelectorAll('.header__mob-language-input-wrapper');
const headerLanguageFormMob = document.querySelector('.header__mob-language-form');
console.log(headerLanguageInputsMobs)
Array.from(headerLanguageInputsMobs).forEach(headerLanguageInputsMob => {
    headerLanguageInputsMob.addEventListener('click', () => {
        langWrapperMob.style.maxHeight = null
        headerLanguageFormMob.classList.remove('active')
    })
})
function openLangMob() {
    if (langWrapperMob.style.maxHeight) {
        langWrapperMob.style.maxHeight = null;
        headerLanguageFormMob.classList.remove('active')

    } else {
        langWrapperMob.style.maxHeight = langWrapperMob.scrollHeight + 'px';
        headerLanguageFormMob.classList.add('active')
    }
}
/////////////////////////////////////////////////////////////////
const mobUser = document.querySelector('.header__user-mob-icon');
const mobUserWrapper = document.querySelector('.header__top-signInLink-mob-inner');

mobUser.addEventListener("click", () => {
    mobUserWrapper.classList.toggle('active')
})
// /////////////////////////////////////////////////
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');
const menuList = document.querySelector('.header__bottom-list');
const menuClose = document.querySelector('.menu-close');
const body = document.querySelector('body');

menu.addEventListener('click', function () {
    wrapper.classList.add('active')
    menuList.style.transform = 'translate(0)'
    body.style.overflow = 'hidden'
})
menuClose.addEventListener('click', () => {
    wrapper.classList.remove('active')
    menuList.style.transform = 'translate(-100%)'
    body.style.overflow = 'visible'
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    menuList.style.transform = 'translate(-100%)'
    headerSearch.classList.remove('active')
    body.style.overflow = 'visible'
});

// //////////////////////////////////////////////////
const headerSearchIcon = document.querySelector('.header__content-inputWrapper>span');
const headerSearch = document.querySelector('.header__content-input');
if (innerWidth < 426) {
    headerSearchIcon.addEventListener('click', () => {
        headerSearch.classList.add('active')
        wrapper.classList.add('active')
    });
}
// ///////////////////////////////////////////////////////////////////
var swiper = new Swiper('.intro__slider-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    centerMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.intro__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.intro__swiper-button-next',
        prevEl: '.intro__swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 15
        },
        576: {
            spaceBetween: 30
        },
    }
});
// //////////////////////////////////////
var swiper = new Swiper('.ourPartners__swiper-container', {
    centerMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.ourPartners__swiper-button-next',
        prevEl: '.ourPartners__swiper-button-prev',
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 5
        },
        1600: {
            slidesPerView: 6
        },
        1920: {
            slidesPerView: 7
        },
    }
});
// ///////////////////////////////////////////////////
var galleryThumbs = new Swiper('.product-info__gallery-thumbs', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.product-info__gallery-top', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.product-info__swiper-button-next',
        prevEl: '.product-info__swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});
// /////////////////////////////////////////////////////////
const accordion__panelGroups = document.querySelectorAll('.accordion__panelGroup');
Array.from(accordion__panelGroups).forEach(accordion__panelGroup => {
    accordion__panelGroup.addEventListener('click', function () {

        const currentlyActiveaccordion__panelGroup = document.querySelector('.accordion__panelGroup.active');
        if (currentlyActiveaccordion__panelGroup && currentlyActiveaccordion__panelGroup !== accordion__panelGroup) {
            currentlyActiveaccordion__panelGroup.classList.remove('active');
            currentlyActiveaccordion__panelGroup.children[1].style.maxHeight = 0;
        }
        accordion__panelGroup.classList.toggle('active')
        if (accordion__panelGroup.classList.contains('active')) {
            accordion__panelGroup.children[1].style.maxHeight = accordion__panelGroup.children[1].scrollHeight + 'px';
        } else {
            accordion__panelGroup.children[1].style.maxHeight = 0;
        }
    })
})
// //////////////////////////////////////////////////////////////////
$(function () {
    $('input[type="number"]').niceNumber();
});

// /////////////////////////////////////////////
const asideLinks = document.querySelectorAll(".aside__link");


Array.from(asideLinks).forEach(asideLink => {

    asideLink.addEventListener('click', () => {

        const currentlyActiveNextElement = document.querySelector('.aside__second-list.active');
        const nextElement = asideLink.nextElementSibling;
        if (currentlyActiveNextElement && currentlyActiveNextElement !== asideLink) {
            currentlyActiveNextElement.classList.remove('active')
            currentlyActiveNextElement.style.maxHeight = 0
        }

        nextElement.classList.toggle('active')

        if (nextElement.classList.contains('active')) {
            nextElement.style.maxHeight = nextElement.scrollHeight + 'px'
        } else {
            nextElement.style.maxHeight = 0
        }
    })
});
// /////////////////////////////////////////////
const asideLi = document.querySelector('.aside__item:nth-child(1)'),
    aside = document.querySelector('.aside');

if (asideLi) asideLi.addEventListener('click', function (e) {
    if (aside.classList.contains('active') && e.target === e.currentTarget) {
        aside.classList.remove('active')
        console.log(e.target);
    } else {
        aside.classList.add('active');
    }
});
// ////////////////////////////////////////////////////////////////////////////
var swiper = new Swiper('.catalogCategory__swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    centerMode: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.catalogCategory__swiper-button-next',
        prevEl: '.catalogCategory__swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
// /////////////////////////////////////////
// var element = document.querySelector('input[type=checkbox]');    

// if (element.checked) {
//     doSomething();
// }
const favoritesChecks = document.querySelectorAll('.favorites__basket-product-check');
Array.from(favoritesChecks).forEach(favoritesCheck => {
    favoritesCheck.addEventListener('click', () => {
        if (favoritesCheck.checked) {
            favoritesCheck.classList.add('active')
            favoritesCheck.parentElement.classList.add('active')
        } else {
            favoritesCheck.classList.remove('active')
            favoritesCheck.parentElement.classList.remove('active')
        }
    })
})
