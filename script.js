
var typed = new Typed("#typing", {

    strings: [
        "Machine Learning Analyst",
        "AI Engineer",
        "Data Scientist",
        "Python Developer"
    ],

    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle click
toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    }

});
