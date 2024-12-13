/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll("#nav-link")

if (navToggle) {
  navToggle.addEventListener("click", () =>
    navMenu.classList.add("show-menu")
  );
}

if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );

  /*=============== REMOVE MENU MOBILE ===============*/
  if (navLink) {
    navLink.forEach(link => {
        link.addEventListener("click",()=>{

            navMenu.classList.remove("show-menu")

        })
    });
    
}
}

/*=============== ADD SHADOW HEADER ===============*/

const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >=50? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', scrollHeader())
/*=============== Notification Adder ===============*/

function addNotificationbar() {
    const notificationBar = document.getElementById("notificationBar")
    notificationBar.classList.toggle("show-notification")
}
function removeNotificationbar() {
    const notificationBar = document.getElementById("notificationBar")
    notificationBar.classList.remove("show-notification")
}
/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

// swiper
const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });

    swiperEl.initialize();