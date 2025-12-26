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

function loadImage(slide) {
  const isMobile = window.innerWidth < 768;
  const img = isMobile ? slide.dataset.mobile : slide.dataset.desktop;
  slide.style.backgroundImage = `url(${img})`;
}
slides.forEach(loadImage);

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
}, 5000);

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
    
      <h3>Devbhumi Education Excellence Awards</h3>
      <p> To recognize and honour exceptional educators and innovators who have demonstrated dedication,
creativity, and positive impact in shaping the future of education and society.</p>
        <ul class="categories">
            Award Categories
            <li>50 School Teachers (from all 13 districts of Uttarakhand)<br><strong>School Education Category:</Strong> PRT, TGT, PGT, or Principal working in any recognized government, private, or semi-government school in Uttarakhand.</li>


            <li>15 Higher Education Faculty Members.<br><strong>Higher Education Category:</Strong> Lecturer, Assistant Professor, Associate Professor, or Professor working in any recognized government, private, or semi-government college or university in Uttarakhand.</li>

            <li>10 Scientists / Researchers / Innovators<br><strong>Innovation Category:</Strong>Research Scholars or PhD scholars conducting research in any recognized government, private, or semi-government institution in Uttarakhand, or scientists.</li>
          </ul>
      <p><strong>Important Conditions:</strong> The nominated individual must have been actively involved in teaching or research in Uttarakhand between 1st July 2024 and 1st August 2025.<br>

Only activities and achievements within the period from 1st July 2024 to 1st August 2025 will be considered for evaluation.<br>

Individuals who have already received this award are not eligible for re-nomination.</p>
      <p><strong>Societal Value:</strong>This segment celebrates excellence in teaching and innovation — motivating educators to adopt progressive
methods, inspiring young minds, and highlighting role models who contribute to nation-building through
education.
</p>
      <p><strong>This award is completely free of charge (No Registration Fee, No Charges) and open to teachers, professors, and researchers from government, private, and semi-government institutions.</strong>
</p>
  <img src="hhttps://res.cloudinary.com/dpvskptln/image/upload/v1766719779/033_toth4c.jpg" alt="Education Award">
    `;
  } else if (eventType === "innovation") {
    html = `
      
      <h3>Devbhumi Little Scientists</h3>
      <p>An innovative platform for school students to explore science, creativity, and problem-
solving through hands-on learning and teamwork.</p>
 <ol >
<b>Subthemes:</b>
<li><b>STEM Project Demonstration:</b>Showcasing practical models and experiments that reflect scientific
concepts in an easy-to-understand manner and demonstrate their real-world applications.</li><br>
<li><b>Prototype of Innovation:</b>Presenting working prototypes that address real societal problems by
demonstrating creativity, innovation, and applicability to everyday challenges.</li><br>
<li><b>Idea Poster Presentation:</b>Displaying innovative ideas and concepts for solving specific problems
through visually engaging posters that communicate solutions and inspire curiosity.</li><br>
</ol>
      <ul> Awards:
        <li>1st, 2nd, and 3rd Prizes in each category.</li>
        <li>2 Consolation Prizes per category.</li>
        <li>Certificates for all participating team members.</li>
      </ul>
      <p><strong>Who can apply:</strong> School Students.</p>
      <p><strong>Objective & Social Impact:</strong>The event aims to nurture scientific curiosity among school students and build confidence in young
innovators. It supports the National Education Policy (NEP 2020) vision of promoting creativity,
experimentation, and critical thinking at the school level.
It will also bring visibility to schools that foster a culture of innovation, inspiring others to follow
similar practices.</p>
      <img src="https://res.cloudinary.com/dpvskptln/image/upload/v1766719764/17_deeita.jpg" alt="Innovation Challenge">
    `;
  } else if (eventType === "startup") {
    html = `
    <h3>Devbhumi Startup Expo</h3>
    <p>OThe Devbhumi Startup Expo will be a special platform where entrepreneurs and startups
can present their ideas, products, and innovations to teachers, students, dignitaries, and guests attending the
event.</p>
<p>The aim is to promote local innovation, support young entrepreneurs, and connect them with mentors,
investors, and educational institutions that can help them grow.<p>
<p>Startups and innovators from Uttarakhand and nearby regions are invited to participate in the Devbhumi
Startup Expo. The event will focus on ideas and innovations that create a positive impact on society and
promote sustainable development. Special attention will be given to startups working in areas such as
Agriculture and Rural Development, Health and Wellness, Education and Skill Development, Environment
and Green Technologies, Tourism and Local Crafts, and Women-led Startups and Social Enterprises.
Through this initiative, the Expo aims to encourage innovative thinking, promote local entrepreneurship, and
support young changemakers who are working to build a better future for the Himalayan region.</p>
    <ul>Key Features
    <li>Direct interaction with awardees, academicians, students, and media representatives</li>
    <li>Opportunities for networking, feedback, partnerships, and market exposure</li>
    <li>Live demonstrations and product displays</li>
    </ul>
    <p><strong>Recognition:</strong> Top 3 startups will be awarded for their innovation, social impact, and business potential<br>Other participants will receive certificates of appreciation.<br>Special mention will be given to women entrepreneurs and rural startups doing inspiring work.</p>
    <p><strong>Objective & Social Impact:</strong> <ol>
    <li>To encourage young people to become entrepreneurs.</li>
    <li>To connect education with innovation and practical learning.</li>
    <li>To support the Startup India and Atmanirbhar Bharat missions.</li>
    <li>To help local innovators find visibility, guidance, and opportunities.</li>
    <li>To inspire students to take interest in problem-solving and creative thinking.</li>
    </ol></p>
    <br>
    <img src="https://res.cloudinary.com/dpvskptln/image/upload/v1766719754/15_mnttsu.jpg" alt="Startup Expo">
    `;
  }

  content.innerHTML = html;
  modal.style.display = "block";
}

function closeDetails() {
  document.getElementById("eventDetails").style.display = "none";
}

// Back to TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Date Day Typing Effect

const section = document.getElementById("eventSection");
const dateText = document.getElementById("typingDate");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // Reset typing
      dateText.classList.remove("type-active");
      dateText.style.width = "0";

      setTimeout(() => {
        dateText.classList.add("type-active");
      }, 100);
    }
  },
  { threshold: 0.6 }
);

observer.observe(section);

// Scroll Section
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const stickyBar = document.getElementById("regSticky");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    stickyBar.classList.remove("full");
    stickyBar.classList.add("slim");
  } else {
    stickyBar.classList.add("full");
    stickyBar.classList.remove("slim");
  }
});

function closeReg() {
  stickyBar.style.display = "none";
}

const track = document.querySelector(".carousel-track");
const cards = Array.from(track.children);

// Duplicate cards to make infinite scroll smooth
track.innerHTML += track.innerHTML;

// Set initial scroll position
let scrollAmount = 0;

// Get width of one card including margin
const cardStyle = getComputedStyle(cards[0]);
const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight);

// Infinite scroll speed (pixels per frame)
const speed = 1;

function animate() {
  scrollAmount += speed;

  // Reset scroll when reaching half of total scroll width
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }

  track.style.transform = `translateX(-${scrollAmount}px)`;

  requestAnimationFrame(animate);
}

// Start the animation
animate();
