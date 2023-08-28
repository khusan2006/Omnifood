const header = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");
const body = document.querySelector("body");
///////////////////////////////////////////////////////////
// making year changing based on real date

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile navigation
// const closeBtn = document.querySelector(".btn-mobile-nav");
menuBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//smooth scrolling

body.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains("scroll") ||
    e.target.classList[0].includes("logo")
  ) {
    const link = e.target.closest(".scroll").getAttribute("href");
    if (link === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (link !== "#" && link?.startsWith("#")) {
      const section = document.querySelector(link);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (e.target.classList.contains("main-nav_links")) {
      header.classList.remove("nav-open");
    }
  }
});

///////////////////////////////////////////////////////////
// sticky navigation

const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      body.classList.add("sticky");
    } else if (entry.isIntersecting) {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/
