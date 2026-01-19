// header part
const logoBtn = document.getElementById("logo");
const dashboard = document.getElementById("dashboard");
const myCourseBtn = document.getElementById("my-courses");
const progress = document.getElementById("progress"); 
const langIcon = document.getElementById("lang-text");
const fullScreen = document.getElementById("toggle-screen");
const notif = document.getElementById("notification");
const myProfile = document.getElementById("prof-picture");

// linked to css variable rootstyles
function CssVaraible(variableName) {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}

//  CSS variables
const hoverColor = CssVaraible('--color-hover');
const defaultColor = CssVaraible('--text-color');

// logo navigation to main home 
logoBtn.addEventListener("click", () =>{
    window.location.href = "./index.html";
})

// dashboard navigate to dashboard section
const dashboardSection = document.getElementById("dashboard-container");
const progressSection = document.getElementById("explore-container");
const myCourses = document.getElementById("courses-container");

// active navmenu items
function setActiveNav(activeItem) {
    const navItems = [dashboard, myCourseBtn, progress];
    
    navItems.forEach(item => {
        if (item === activeItem) {
            item.style.color = hoverColor; 
        } else {
            item.style.color = defaultColor; 
        }
    });
}


// dashboard navigate to dashboard section
dashboard.addEventListener("click", () => {
    dashboardSection.style.display = "flex";
    progressSection.style.display = "none";
    myCourses.style.display = "none";
    setActiveNav(dashboard);
})

// mycourse  navigate to mycourse section
myCourseBtn.addEventListener("click", () =>{
    dashboardSection.style.display = "none";
    progressSection.style.display = "flex"; 
    myCourses.style.display = "none";
    setActiveNav(myCourseBtn);
})

// progress li navigate to progress section 
progress.addEventListener("click", () =>{
    dashboardSection.style.display = "none";
    progressSection.style.display = "none";
    myCourses.style.display = "flex"; 
    setActiveNav(progress);
})

// navmenu hover event 
const navItems = [dashboard, myCourseBtn, progress];

navItems.forEach(item => {
    if (item) {
        item.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";

        item.addEventListener("mouseover", () => {
        item.style.color = hoverColor; 
    });
       item.addEventListener('mouseleave', () => {
            let correspondingSection;
            // Map the navigation item back to its content section
            if (item === dashboard) correspondingSection = dashboardSection;
            else if (item === myCourseBtn) correspondingSection = progressSection; 
            else if (item === progress) correspondingSection = myCourses; 

            if (correspondingSection && correspondingSection.style.display === 'flex') {
                item.style.color = hoverColor; 
            } else {
                item.style.color = defaultColor; 
            }
        });
    }
});

// explore courses part
// select categories option dropdown
document.addEventListener("DOMContentLoaded", () => {
const selectIcon = document.getElementById("icon");
const dropdownCategories = document.getElementById("categoriesMenu");

// display dropdown
selectIcon.addEventListener("click", () => {
  if (dropdownCategories.style.display === "none") {
    dropdownCategories.style.display = "flex";
    } else {
    dropdownCategories.style.display = "none";
    }
});

// active dropdown items
  const categoriesItems = document.querySelectorAll(".menu-item");
  const resultsDisplay = document.getElementById("resultsDisplay");
  const loadingMessage = document.getElementById("loadingMessage");

  categoriesItems.forEach((item) => {
    item.addEventListener("click", () => {
        
        categoriesItems.forEach(i => {
        i.classList.remove('active');
         i.style.color = ''; 
        });

      item.classList.add('active'); 
      dropdownCategories.style.display = "none";
      item.style.color = hoverColor;
      
    });
  });
});