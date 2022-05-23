const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Box-shadow animation for hero section

const links = document.getElementsByClassName("list-item");

Array.from(links).forEach((element) => {
  element.addEventListener("mouseover", () => {
    Array.from(links).forEach((el) => {
      if (el !== element) {
        el.classList.add("size");
      }
    });
  });

  element.addEventListener("mouseleave", () => {
    Array.from(links).forEach((el) => {
      if (el !== element) {
        el.classList.remove("size");
      }
    });
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation for cuadros section

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const sectionCuadro = Array.from(document.getElementsByClassName("cuadros"))[0];

document.addEventListener("scroll", (e) => {
  const sectionFase = window.scrollY / screenHeight;
  if ((screenWidth = 944)) {
    sectionCuadro.classList.remove("cuadros");
  }

  if (screenWidth <= 944) {
    if (sectionFase >= 0.25) {
      sectionCuadro.classList.add("visible");
    } else {
      sectionCuadro.classList.remove("visible");
    }
  }
});

///////////////////////////////////////////////////////////
// General smooth scrolling animation from the bottom

const allLinks = document.getElementById("top");

allLinks.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
