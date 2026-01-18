// header part
const logoBtn = document.getElementById("logo");
const dashboard = document.getElementById("dashboard");
const myCourseBtn = document.getElementById("my-courses");
const progress = document.getElementById("progress");
const langIcon = document.getElementById("lang-text");
const fullScreen = document.getElementById("toggle-screen");
const notif = document.getElementById("notification");
const myProfile = document.getElementById("prof-picture");

// logo navigation to main home 
logoBtn.addEventListener("click", () =>{
    window.location.href = "./index.html";
})

// dashboard navigate to dashboard section
const dashboardSection = document.getElementById("dashboard-container");
const progressSection = ducumnet.getElementById("explore-container");
const myCourses = ducumnet.getElementById("courses-container")

dashboard.addEventListener("click", () => {
    dashboardSection.style.display = "flex"
    progressSection.style.display = "none"
    myCourses.style.display = "none"

})

// mycourse li navigate to mycourse section
myCourseBtn.addEventListener("click", () =>{
    dashboardSection.style.display = "none"
    progressSection.style.display = "flex"
    myCourses.style.display = "none"
})

// progress li navigate to progress section 
