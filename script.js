let overlay = document.querySelector(".overlay");
let mainlinks = document.querySelector(".main-links");
let login_Reg = document.querySelector(".nav-btns");
let menuIcon = document.querySelector(".hamburger");

let dd1 = document.querySelector(".drop-down-1");
let dd2 = document.querySelector(".drop-down-2");

let isOpen = false;
let featuresDoor = false;
let comDoor = false;

menuIcon.addEventListener("click", function () {
  if (isOpen) {
    overlay.style.display = "none";
    mainlinks.style.display = "none";
    login_Reg.style.display = "none";
    menuIcon.src = "images/icon-menu.svg";
    isOpen = !isOpen;
  } else {
    overlay.style.display = "block";
    mainlinks.style.display = "flex";
    login_Reg.style.display = "flex";
    menuIcon.src = "images/icon-close-menu.svg";
    isOpen = !isOpen;
  }
});

let com = document.querySelector(".com");
let features = document.querySelector(".features");

features.addEventListener("click", function () {
  dd1.style.display = featuresDoor == false ? "flex" : "none";
  featuresDoor = !featuresDoor;
});
com.addEventListener("click", function () {
  dd2.style.display = comDoor == false ? "flex" : "none";
  comDoor = !comDoor;
});
