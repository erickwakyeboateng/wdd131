function setFooterYear() {
  const yearElements = document.querySelectorAll(
    "#current-year, .current-year",
  );
  const currentYear = new Date().getFullYear();
  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

function logDestinations() {
  const destinations = [
    { name: "Cape Coast Castle", category: "History" },
    { name: "Kakum National Park", category: "Nature" },
    { name: "Mole National Park", category: "Wildlife" },
  ];

  destinations.forEach((dest) => {
    console.log(
      `Explore ${dest.name}, a top destination for ${dest.category}!`,
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  logDestinations();

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
  }

  const countDisplay = document.getElementById("visit-count-display");

  if (countDisplay) {
    let count = localStorage.getItem("gh_visit_count");
    count = count ? parseInt(count, 10) + 1 : 1;

    localStorage.setItem("gh_visit_count", count);

    countDisplay.textContent = count;
    console.log(`Visitor Count: ${count}`);
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }
});
