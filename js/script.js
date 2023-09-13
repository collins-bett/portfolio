/**
 * /*Start Toggle Navbar
 *
 * @format
 */

window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");

  /*Page loader*/
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 500);
});
/*------------------------------------------Start Toggle Navbar-----------------------------------------------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out"); //hides active section
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active"); //shows navigation
}

/*------------------------------------------------End Toggle Navbar------------------------------------------------*/

/*-------------------------------------------------Start Active Section--------------------------------------------*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active"); //activate the overlay to prevent multiple clicks

    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active"); //deactivate the overlay to prevent multiple clicks
    }, 500);
  }
});
/*-------------------------------------------------End Active Section --------------------------------------------*/

/*-------------------------------------------------Start About Section Tabs--------------------------------------------*/

const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});
/*-------------------------------------------------End About Section Tabs--------------------------------------------*/
/*-------------------------------------------------Start let's see my work tabs--------------------------------------------*/

const tabsContainers = document.querySelector(".work-tabs"),
  portfolioSection = document.querySelector(".portfolio-section");

tabsContainers.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainers.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    portfolioSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    portfolioSection.querySelector(target).classList.add("active");
  }
});
/*-------------------------------------------------End let's see my work tabs--------------------------------------------*/

/*-------------------------------------Start portfolio item details popup-----------------------------------*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0); //scrolls to top when you close popup
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open"); //when you click view project it opens the portfolio popup
  document.body.classList.toggle("hide-scrolling"); //triggers the hide-scrolling class
  document.querySelector(".main").classList.toggle("fade-out"); //when you click view project, it opens the portfolio popup and triggers the class(main.fade-out). It fades out main
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup); //when you click view project, it opens the popup and closes it when you click close

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  //hide popup when clicking outside it
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
      togglePortfolioPopup();
    }
  });

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML; //populates the h3 portfolio header with the parent portfolio-item-title element

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML; //populates the portfolio popup body with the parent portfolio-item-details
}

/*-------------------------------------End portfolio item details popup-----------------------------------*/
/*-----------------------------------Start Background color change----------------------------------------*/
let count = 1;
setInterval(() => {
  let colors = [
    "rgba(241, 115, 115, 0.7)",
    "rgba(178, 241, 106, 0.7)",
    "rgba(106, 225, 241, 0.7)",
    "rgba(241, 106, 207, 0.7)",
    "rgba(255, 255, 255, 0.7)",
    "rgba(219, 255, 16, 0.7)",
  ];

  document.body.style.backgroundColor = colors[count];
  count = count + 1;
  if (count > 5) {
    count = 0;
  }
}, 3500);
/*------------------------------------------------End Background color change-----------------------------*/
/*------------------------------------------------Start typing effect-------------------------------------*/

const texts = [
  "Web Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Recipe Developer",
  "Wellness Blogger",
];
let collo = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (collo === texts.length) {
    collo = 0;
  } // when the texts collo ends it starts from 0
  currentText = texts[collo];
  letter = currentText.slice(0, ++index); //slices each text into characters and adds it to the letter
  document.querySelector(".typing").textContent = letter; //changes the text content to letter
  if (letter.length === currentText.length) {
    collo++;
    index = 0;
  }
  setTimeout(type, 180);
})();

/*------------------------------------------------End typing effect-------------------------------------*/
