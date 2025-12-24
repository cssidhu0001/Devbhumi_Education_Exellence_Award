// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("active");

  // Change hamburger to cross when menu is open
  if (menu.classList.contains("active")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
}

// Scroll effect for blur background
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ===== BACKGROUND SLIDER ===== */
const slides = document.querySelectorAll(".hero-bg");
let current = 0;

/* Lazy load + device image */
function loadImage(slide) {
  const isMobile = window.innerWidth < 768;
  const img = isMobile ? slide.dataset.mobile : slide.dataset.desktop;
  slide.style.backgroundImage = `url(${img})`;
}

/* Load first slide */
slides.forEach(loadImage);

/* Auto slide */
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 6000);

/* Reload images on resize */
window.addEventListener("resize", () => {
  slides.forEach(loadImage);
});

// * ===== COUNTDOWN TIMER ===== */
const eventDate = new Date("February 7, 2026 10:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
}

updateTimer();
setInterval(updateTimer, 1000);

function showDetails(eventType) {
  const modal = document.getElementById("eventDetails");
  const content = document.getElementById("eventContent");

  let html = "";

  if (eventType === "edu") {
    html = `
      <img src="https://images.unsplash.com/photo-1503264116251-35a269479413" alt="Education Award">
      <h3>Education Excellence Award</h3>
      <p>This award recognizes outstanding educators and institutions shaping the future of learning.</p>
      <ul>
        <li>School Level Education – Honoring top-performing schools</li>
        <li>Higher Education – Universities & colleges making an impact</li>
      </ul>
      <p><strong>Who can apply:</strong> Teachers, Schools, Colleges, Education Institutions.</p>
      <p><strong>Results & Recognition:</strong> Certificates, Trophy & Media Coverage.</p>
    `;
  } else if (eventType === "innovation") {
    html = `
      <img src="https://images.unsplash.com/photo-1503264116251-35a269479413" alt="Innovation Challenge">
      <h3>Innovation Challenge</h3>
      <p>A platform for students to present innovative ideas and research.</p>
      <ul>
        <li>Little Scientist Expo – School-level experiments & projects</li>
        <li>AI Symposium – College-level students showcase AI solutions</li>
        <li>Poster Presentation – Creative project displays</li>
      </ul>
      <p><strong>Who can apply:</strong> School & College students.</p>
      <p><strong>Results & Recognition:</strong> Certificates, Prizes & Mentorship opportunities.</p>
    `;
  } else if (eventType === "startup") {
    html = `
      <img src="https://images.unsplash.com/photo-1503264116251-35a269479413" alt="Startup Expo">
      <h3>Startup Expo</h3>
      <p>Open to all startups showcasing innovative products & services.</p>
      <ul>
        <li>Startup Presentations – Pitch your product</li>
        <li>Networking Opportunities – Meet investors & mentors</li>
        <li>Workshops – Skill-building & guidance</li>
      </ul>
      <p><strong>Who can apply:</strong> Startups from all industries.</p>
      <p><strong>Results & Recognition:</strong> Certificates, Media Coverage & Potential Funding.</p>
    `;
  }

  content.innerHTML = html;
  modal.style.display = "block";
}

function closeDetails() {
  document.getElementById("eventDetails").style.display = "none";
}

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel-card");

let step = 0;
let cardWidth = cards[0].offsetWidth + 20; // width + margin
let totalCards = cards.length / 2; // half because of duplication

function slideCarousel() {
  step++;
  track.style.transform = `translateX(-${step * cardWidth}px)`;

  // reset when reached the end
  if (step >= totalCards) {
    setTimeout(() => {
      track.style.transition = "none";
      step = 0;
      track.style.transform = `translateX(0)`;
    }, 500);

    setTimeout(() => {
      track.style.transition = "transform 0.5s ease-in-out";
    }, 550);
  }
}

// Auto slide every 2.5s
setInterval(slideCarousel, 2500);

// Recalculate width on resize
window.addEventListener("resize", () => {
  cardWidth = cards[0].offsetWidth + 20;
});
