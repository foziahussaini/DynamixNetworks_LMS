// language Part
document.addEventListener("DOMContentLoaded", () => {
  const langText = document.getElementById("lang-text");
  const languageOptions = document.querySelectorAll("#language-option li");


  const translations ={
    "en": {
  "dashboard": "Dashboard",
  "exploreCourses": "Explore Courses",
  "myCourses": "My Courses",
  "welcomeTitle": "Welcome to Dynamix Network",
  "welcomeText": "Your learning journey starts here. Explore courses, track your progress, and achieve your goals with us!",
  "completed": "Completed",
  "enrolled": "Enrolled",
  "inProgress": "In Progress",
  "importantNotice": "Important Notice",
  "recommendedCourses": "Recommended Courses",
  "noRecommendations": "No Course recommendations available",
  "browseCourses": "Browse available courses",
  "upcomingEvents": "Upcoming Events",
  "noUpcomingEvents": "No upcoming events",
  "pendingEvents": "Pending Events",
  "noPendingEvents": "No pending events",
  "deadlines": "Deadline",
  "noDeadlines": "No Deadlines",
  "searchPlaceholder": "Search by title"
},

"fa": {
  "dashboard": "داشبورد",
  "exploreCourses": "جستجوی دوره‌ها",
  "myCourses": "دوره‌های من",
  "welcomeTitle": "به شبکه داینامیکس خوش آمدید",
  "welcomeText": "سفر یادگیری شما از اینجا آغاز می‌شود. دوره‌ها را کشف کنید و پیشرفت خود را دنبال نمایید.",
  "completed": "تکمیل شده",
  "enrolled": "ثبت نام شده",
  "inProgress": "در حال پیشرفت",
  "importantNotice": "اطلاعیه مهم",
  "recommendedCourses": "دوره‌های پیشنهادی",
  "noRecommendations": "هیچ دوره پیشنهادی موجود نیست",
  "browseCourses": "مشاهده دوره‌ها",
  "upcomingEvents": "رویدادهای آینده",
  "noUpcomingEvents": "رویداد آینده وجود ندارد",
  "pendingEvents": "رویدادهای در انتظار",
  "noPendingEvents": "رویداد در انتظار وجود ندارد",
  "deadlines": "مهلت‌ها",
  "noDeadlines": "هیچ مهلتی وجود ندارد",
  "searchPlaceholder": "جستجو بر اساس عنوان"
},

"ps":{
  "dashboard": "ډشبورډ",
  "exploreCourses": "کورسونه وپلټئ",
  "myCourses": "زما کورسونه",
  "welcomeTitle": "ډاینمکس نېټورک ته ښه راغلاست",
  "welcomeText": "ستاسو د زده کړې سفر له دې ځایه پیلېږي. کورسونه وپلټئ او خپل پرمختګ تعقیب کړئ.",
  "completed": "بشپړ شوي",
  "enrolled": "ثبت شوي",
  "inProgress": "په جریان کې",
  "importantNotice": "مهم خبرتیا",
  "recommendedCourses": "سپارښتل شوي کورسونه",
  "noRecommendations": "هیڅ سپارښتل شوی کورس نشته",
  "browseCourses": "کورسونه وګورئ",
  "upcomingEvents": "راتلونکي پیښې",
  "noUpcomingEvents": "راتلونکې پیښه نشته",
  "pendingEvents": "ځنډېدلې پیښې",
  "noPendingEvents": "ځنډېدلې پیښه نشته",
  "deadlines": "وروستۍ نیټه",
  "noDeadlines": "وروستۍ نیټه نشته",
  "searchPlaceholder": "د نوم له مخې لټون"
},

"hi": {
  "dashboard": "डैशबोर्ड",
  "exploreCourses": "कोर्स खोजें",
  "myCourses": "मेरे कोर्स",
  "welcomeTitle": "डायनामिक्स नेटवर्क में आपका स्वागत है",
  "welcomeText": "आपकी सीखने की यात्रा यहाँ से शुरू होती है। कोर्स खोजें और अपनी प्रगति को ट्रैक करें।",
  "completed": "पूर्ण",
  "enrolled": "नामांकित",
  "inProgress": "प्रगति में",
  "importantNotice": "महत्वपूर्ण सूचना",
  "recommendedCourses": "अनुशंसित कोर्स",
  "noRecommendations": "कोई अनुशंसित कोर्स उपलब्ध नहीं है",
  "browseCourses": "कोर्स देखें",
  "upcomingEvents": "आगामी कार्यक्रम",
  "noUpcomingEvents": "कोई आगामी कार्यक्रम नहीं",
  "pendingEvents": "लंबित कार्यक्रम",
  "noPendingEvents": "कोई लंबित कार्यक्रम नहीं",
  "deadlines": "समय सीमा",
  "noDeadlines": "कोई समय सीमा नहीं",
  "searchPlaceholder": "शीर्षक द्वारा खोजें"
},
"fr": {
  "dashboard": "Tableau de bord",
  "exploreCourses": "Explorer les cours",
  "myCourses": "Mes cours",
  "welcomeTitle": "Bienvenue sur Dynamix Network",
  "welcomeText": "Votre parcours d'apprentissage commence ici. Explorez les cours et suivez vos progrès.",
  "completed": "Terminé",
  "enrolled": "Inscrit",
  "inProgress": "En cours",
  "importantNotice": "Avis important",
  "recommendedCourses": "Cours recommandés",
  "noRecommendations": "Aucun cours recommandé disponible",
  "browseCourses": "Parcourir les cours",
  "upcomingEvents": "Événements à venir",
  "noUpcomingEvents": "Aucun événement à venir",
  "pendingEvents": "Événements en attente",
  "noPendingEvents": "Aucun événement en attente",
  "deadlines": "Date limite",
  "noDeadlines": "Aucune date limite",
  "searchPlaceholder": "Rechercher par titre"
},

"de": {
  "dashboard": "Dashboard",
  "exploreCourses": "Kurse entdecken",
  "myCourses": "Meine Kurse",
  "welcomeTitle": "Willkommen bei Dynamix Network",
  "welcomeText": "Ihre Lernreise beginnt hier. Entdecken Sie Kurse und verfolgen Sie Ihren Fortschritt.",
  "completed": "Abgeschlossen",
  "enrolled": "Eingeschrieben",
  "inProgress": "In Bearbeitung",
  "importantNotice": "Wichtige Mitteilung",
  "recommendedCourses": "Empfohlene Kurse",
  "noRecommendations": "Keine Kursempfehlungen verfügbar",
  "browseCourses": "Kurse durchsuchen",
  "upcomingEvents": "Bevorstehende Ereignisse",
  "noUpcomingEvents": "Keine bevorstehenden Ereignisse",
  "pendingEvents": "Ausstehende Ereignisse",
  "noPendingEvents": "Keine ausstehenden Ereignisse",
  "deadlines": "Frist",
  "noDeadlines": "Keine Fristen",
  "searchPlaceholder": "Nach Titel suchen"
}
};


function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.dataset.key;

      if (!key) return; 
      const translated = translations[lang] && translations[lang][key];
      if (translated) {
        el.textContent = translated;
      } else {
        el.textContent = (translations.en && translations.en[key]) || el.textContent;
      }
    });
  }

  languageOptions.forEach(item => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang;
      if (!lang) return;
      localStorage.setItem("language", lang);
      langText.textContent = lang.toUpperCase();
      translatePage(lang);
    });
  });

  const savedLang = localStorage.getItem("language") || "en";
  langText.textContent = savedLang.toUpperCase();
  translatePage(savedLang);
});

// displaying dropdown menu by clicking on language icon
const languageIcon = document.getElementById("lang-text");
const dropdownLang = document.querySelector(".dropdown-lang");
const language = document.querySelectorAll("#language-option li");

languageIcon.addEventListener("click", () => {
  if (dropdownLang.style.display === "flex") {
    dropdownLang.style.display = "none";
    } else {
    dropdownLang.style.display = "flex";
    }
});

language.forEach((option) => {
  option.addEventListener("click", () => {
    dropdownLang.style.display = "none";
  });
}
);
// end of language part
// --------------------- --------------------- --------------------- ---------------------
// header part
const logoBtn = document.getElementById("logo");
const dashboard = document.getElementById("dashboard");
const myCourseBtn = document.getElementById("my-courses");
const progress = document.getElementById("explore"); 
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

// explore courses display dropdown
selectIcon.addEventListener("click", () => {
  if (dropdownCategories.style.display === "none") {
    dropdownCategories.style.display = "flex";
    } else {
    dropdownCategories.style.display = "none";
    }
});

//explore courses active dropdown items
  const categoriesItems = document.querySelectorAll(".menu-item");
  const resultsDisplay = document.getElementById("resultsDisplay");
  const loadingMessage = document.getElementById("loadingMessage");
  

  categoriesItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        
         if (item.tagName === 'A') {
          event.preventDefault(); 
      }
         if (loadingMessage) {
        loadingMessage.textContent = "Loading... please wait.";}

        categoriesItems.forEach(i => {
        i.classList.remove('active');
         i.style.color = ''; 
        });

      item.classList.add('active'); 
      dropdownCategories.style.display = "none";
      item.style.color = hoverColor;

      if (item.innerHTML.trim() === "Mathematics" || item.innerHTML.trim() === "Game Development") {
        resultsDisplay.style.display = "flex";
        return;
      }
      
      setTimeout(() => {
        window.location.href = "./index.html#courses-field";
      }, 1000);
    });
  });
});

// ------------------------------------------------------------------------
//my courses part
// select categories option dropdown
document.addEventListener("DOMContentLoaded", () => {
const selectsIcon = document.getElementById("icons");
const dropdownCategorie = document.getElementById("categoriesDropdown");

// my courses display dropdown
selectsIcon.addEventListener("click", () => {
  if (dropdownCategorie.style.display === "none") {
    dropdownCategorie.style.display = "flex";
    } else {
    dropdownCategorie.style.display = "none";
    }
});

//my courses active dropdown items
  const categoriesItem = document.querySelectorAll(".menu-item");
  const resultsDisplay = document.getElementById("resultsDisplay");
  const loadingMessage = document.getElementById("loadingMessage");
  

  categoriesItem.forEach((item) => {
    item.addEventListener("click", (event) => {
        
         if (item.tagName === 'A') {
          event.preventDefault(); 
      }
         if (loadingMessage) {
        loadingMessage.textContent = "Loading... please wait.";}

        categoriesItem.forEach(i => {
        i.classList.remove('active');
         i.style.color = ''; 
        });

      item.classList.add('active'); 
      dropdownCategorie.style.display = "none";
      item.style.color = hoverColor;

      if (item.innerHTML.trim() === "Mathematics" || item.innerHTML.trim() === "Game Development") {
        resultsDisplay.style.display = "flex";
        return;
      }
      
      setTimeout(() => {
        window.location.href = "./index.html#courses-field";
      }, 1000);
    });
  });
});

// --------------------------------------------------------------------------------
// enrolled courses added to user page
document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.getElementById("enrolled-courses");
  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  if (!coursesContainer) return;

  coursesContainer.innerHTML = "";

  enrolledCourses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h4>${course.title}</h4>
      <p>${course.price}</p>
      <button class="resume-btn">Continue</button>
    `;

    coursesContainer.appendChild(card);
  });

// update dashboard course counter
function updateDashboardStats() {
  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const enrolledCount = enrolledCourses.length;
  const completedCount = enrolledCourses.filter(c => c.progress === 100).length;
  const inProgressCount = enrolledCourses.filter(c => c.progress > 0 && c.progress < 100).length;

  document.querySelector(".status-item.enrolled h2").innerText = enrolledCount;
  document.querySelector(".status-item.completed h2").innerText = completedCount;
  document.querySelector(".status-item.progress h2").innerText = inProgressCount;
}

updateDashboardStats();

// update course inprogress part dashboard
const progressTrack = document.querySelector(".courses-track");

enrolledCourses.forEach(course => {
    const item = document.createElement("div");
    item.className = "progress-item";

    item.innerHTML = `
      <div class="subject">
        <h5>${course.title}</h5>
        <button>Resume →</button>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${course.progress}%"></div>
      </div>
      <p>${course.progress}% Complete</p>
    `;

    progressTrack.appendChild(item);

});
});
