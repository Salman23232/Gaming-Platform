/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll("#nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );

  /*=============== REMOVE MENU MOBILE ===============*/
  if (navLink) {
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    });
  }
}

/*=============== ADD SHADOW HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", scrollHeader());
/*=============== Notification Adder ===============*/

function addNotificationbar() {
  const notificationBar = document.getElementById("notificationBar");
  notificationBar.classList.toggle("show-notification");
}
function removeNotificationbar() {
  const notificationBar = document.getElementById("notificationBar");
  notificationBar.classList.remove("show-notification");
}
/*=============== hover video ===============*/
// Select all video elements with the class 'video'
let videos = document.querySelectorAll(".video");

// Loop through each video and add event listeners
videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});





/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

// swiper


