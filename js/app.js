//=======Nav Toggle=====//
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
//====================//

//============ Date ===========//
const dateElm = document.querySelector(".date");
const date = new Date().getFullYear();
dateElm.textContent = date;
