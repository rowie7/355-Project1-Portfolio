const navLinks = document.querySelectorAll("nav ul li a");
const sideMenuLinks = document.querySelectorAll(".side-menu ul li a");
const sections = document.querySelectorAll(".section-page");
const sideMenu = document.getElementById("side-menu");

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

const contactBtn = document.querySelector('.btn-home');
contactBtn.addEventListener("click", function(e) {
    e.preventDefault();
    handleNavigation(document.querySelector('a[href="#contact"]'));
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
