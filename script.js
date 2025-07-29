const navLinks = document.querySelectorAll("nav ul li a");
const sideMenuLinks = document.querySelectorAll(".side-menu ul li a");
const sections = document.querySelectorAll(".section-page");
const sideMenu = document.getElementById("side-menu");

window.addEventListener('load', () => {
    if (window.location.hash) {
        history.replaceState(null, null, " ");
    }
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


function handleNavigation(link) {
    const targetId = link.getAttribute("href").substring(1);
    navLinks.forEach(nav => nav.classList.remove("active"));
    sideMenuLinks.forEach(nav => nav.classList.remove("active"));
    document.querySelectorAll(`a[href="#${targetId}"]`).forEach(link => {
        link.classList.add("active");
    });
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");
    sideMenu.classList.remove("active");
}

document.querySelector('.btn-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    handleNavigation(document.querySelector('a[href="#contact"]'));
});


navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        handleNavigation(this);
    });
});

sideMenuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        handleNavigation(this);
    });
});

const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

const workoutVideos = document.querySelectorAll('.workout-video');
let currentWorkout = 0;

function showWorkoutVideo(index) {
    workoutVideos.forEach((video, i) => {
        video.classList.toggle('active', i === index);
    });
}

document.getElementById('prevVideo').addEventListener('click', () => {
    currentWorkout = (currentWorkout - 1 + workoutVideos.length) % workoutVideos.length;
    showWorkoutVideo(currentWorkout);
});

document.getElementById('nextVideo').addEventListener('click', () => {
    currentWorkout = (currentWorkout + 1) % workoutVideos.length;
    showWorkoutVideo(currentWorkout);
});

showWorkoutVideo(currentWorkout);

window.addEventListener("DOMContentLoaded", () => {
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById("home").classList.add("active");
});

const backgroundSlides = document.querySelectorAll('.background-slide');
let currentBg = 0;

function showBackgroundSlide(index) {
  backgroundSlides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

document.getElementById('prevBg').addEventListener('click', () => {
  currentBg = (currentBg - 1 + backgroundSlides.length) % backgroundSlides.length;
  showBackgroundSlide(currentBg);
});

document.getElementById('nextBg').addEventListener('click', () => {
  currentBg = (currentBg + 1) % backgroundSlides.length;
  showBackgroundSlide(currentBg);
});

showBackgroundSlide(currentBg);

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = encodeURIComponent(this.name.value);
  const email = encodeURIComponent(this.email.value);
  const message = encodeURIComponent(this.message.value);

  const mailtoLink = `mailto:roelchristianmedrano@gmail.com?subject=Message from ${name}&body=From: ${email}%0D%0A${message}`;
  window.location.href = mailtoLink;
});
