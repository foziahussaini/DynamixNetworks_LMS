// language Part
document.addEventListener("DOMContentLoaded", () => {
   const langText = document.getElementById("lang-text");
  const languageOptions = document.querySelectorAll("#language-option li");

  // language json part added 
  const translations = {
    "en": {
      "home": "Home",
      "about": "About",
      "explore": "Explore",
      "contact": "Contact",
      "login": "Log in",
      "title": "Dynamix Networks",
      "sub-title": "We are future-proofing non-tech hiring with ownable ideas and scalable systems",
      "sub-title2": "If you are tired of cookie-cutter roles and want to build something that lasts, you are in the right place.",
      "services": "Our Services",
      "about_us": "About Us",
      "learn_skills": "Learn essential career and life skills",
      "learn_text": "Helps you build in-demand skills fast and advance your career in a changing job market.",
      "plan-title": "Choose the Right Development Plan for success",
      "free_courses": "Free Courses",
      "get_involved": "Get involved",
      "questions": "Questions or concerns?",
      "email-us": "EMAIL US"
    },
    "fa": {
      "home": "خانه",
      "about": "درباره ما",
      "explore": "Explore",
      "contact": "تماس",
      "login": "ورود",
      "title": "Dynamix Networks",
      "sub-title": "ما با ایده های قابل تملک و سیستم‌های مقیاس‌ پذیر استخدام های غیر فنی را برای آینده‌ تضمین می‌کنیم",
      "sub-title2": "اگر از نقش‌های تکراری خسته شده‌اید و می‌خواهید چیزی بسازید که پایدار باشد، جای درستی آمده‌اید.",
      "services": "خدمات ما",
      "about_us": "درباره ما",
      "mission": "ماموریت: ایجاد سیستم‌هایی که مقیاس‌پذیر باشند، داستان‌هایی که ماندگار باشند، و تجربیاتی که اثرگذار باشند.",
      "learn_skills": "مهارت‌های حیاتی شغلی و زندگی را بیاموزید",
      "learn_text": "به شما کمک می‌کند مهارت‌های پرتقاضا را سریع بسازید و در بازار کار در حال تغییر پیشرفت کنید.",
      "plan-title": "طرح توسعه مناسب برای موفقیت را انتخاب کنید",
      "free_courses": "دوره‌های رایگان",
      "get_involved": "درگیر شوید",
      "questions": "سؤالات یا نگرانی‌ها؟",
      "email-us": "ایمیل بزنید"
    },
    "ps": {
      "home": "کورپاڼه",
      "about": "زموږ په اړه",
      "explore": "سپړنه",
      "contact": "اړیکه",
      "login": "ننوتل",
      "title": "Dynamix Networks",
      "sub-title": "موږ د غیر ټیک استخدام د راتلونکي لپاره د خپلواک نظریاتو او د پراختیا وړ سیسټمونو سره چمتو کوو",
      "sub-title2": "که تاسو د تکراري رولونو څخه ستړي شوي یاست او غواړئ یو څه دوامداره جوړ کړئ، نو تاسو په سم ځای کې یاست.",
      "services": "زموږ خدمات",
      "about_us": "زموږ په اړه",
      "mission": "ماموریت: داسې سیسټمونه جوړ کړئ چې پراخ شي، کیسې چې پاتې شي، او تجربې چې اثر پرېږدي.",
      "learn_skills": "د ژوند او مسلک لپاره اړینې مهارتونه زده کړئ",
      "learn_text": "تاسو سره مرسته کوي چې په چټکۍ سره غوښتل شوي مهارتونه ترلاسه کړئ او په بدلیدونکي بازار کې خپل مسلک پرمختګ ورکړئ.",
      "plan-title": "د بریالیتوب لپاره مناسب پرمختیایي پلان غوره کړئ",
      "free_courses": "وړیا کورسونه",
      "get_involved": "ګډون وکړئ",
      "questions": "پوښتنې یا اندیښنې؟",
      "email-us": "موږ ته ایمیل واستوئ"
    },
    "hi": {
      "home": "मुख्�� पृष्ठ",
      "about": "हमारे बारे में",
      "explore": "खोजें",
      "contact": "संपर्क करें",
      "login": "लॉग इन",
      "title": "Dynamix Networks",
      "sub-title": "हम स्वामित्व वाले विचारों और स्केलेबल सिस्टम के साथ गैर-तकनीकी भर्ती को भविष्य-प्रूफ कर रहे हैं",
      "sub-title2": "यदि आप सामान्य भूमिकाओं से थक चुके हैं और कुछ ऐसा बनाना चाहे हैं जो टिके, तो आप सही जगह पर हैं।",
      "services": "हमारी सेवाएं",
      "about_us": "हमारे बारे में",
      "mission": "मिशन: ऐसे सिस्टम बनाना जो स्केल करें, कहानियाँ जो टिकें, और अनुभव जो छाप छोड़ें।",
      "learn_skills": "जरूरी करियर और जीवन कौशल सीखें",
      "learn_text": "आपको तेजी से मांग वाले कौशल विकसित करने और बदलते रोजगार बाजार में करियर बढ़ाने में मदद करता है।",
      "plan-title": "सफलता के लिए सही विकास योजना चुनें",
      "free_courses": "नि:शुल्क पाठ्यक्रम",
      "get_involved": "शामिल हों",
      "questions": "प्रश्न या चिंताएँ?",
      "email-us": "हमें ईमेल करें"
    },
    "fr": {
      "home": "Accueil",
      "about": "À propos",
      "explore": "Explorer",
      "contact": "Contact",
      "login": "Connexion",
      "title": "Dynamix Networks",
      "sub-title": "Nous préparons l'embauche non-tech avec des idées propriétaires et des systèmes évolutifs",
      "sub-title2": "Si vous êtes fatigué des rôles standardisés et souhaitez construire quelque chose qui dure, vous êtes au bon endroit.",
      "services": "Nos Services",
      "about_us": "À propos de nous",
      "mission": "Mission : Créer des systèmes évolutifs, des histoires mémorables et des expériences marquantes.",
      "learn_skills": "Apprenez des compétences essentielles pour la carrière et la vie",
      "learn_text": "Vous aide à acquérir rapidement des compétences demandées et à faire progresser votre carrière sur un marché en évolution.",
      "plan-title": "Choisissez le bon plan de développement pour réussir",
      "free_courses": "Cours Gratuits",
      "get_involved": "Participez",
      "questions": "Questions ou préoccupations ?",
      "email-us": "ENVOYEZ-NOUS UN EMAIL"
    },
    "de": {
      "home": "Startseite",
      "about": "Über uns",
      "explore": "Entdecken",
      "contact": "Kontakt",
      "login": "Anmelden",
      "title": "Dynamix Networks",
      "sub-title": "Wir zukunftssichern die nicht-technische Einstellung mit eigenen Ideen und skalierbaren Systemen",
      "sub-title2": "Wenn Sie genug von Standardrollen haben und etwas Langlebiges aufbauen möchten, sind Sie hier richtig.",
      "services": "Unsere Dienstleistungen",
      "about_us": "Über uns",
      "mission": "Mission: Systeme schaffen, die skalieren, Geschichten, die haften bleiben, und Erlebnisse, die Eindruck hinterlassen.",
      "learn_skills": "Erlernen Sie wichtige Karriere- und Lebenskompetenzen",
      "learn_text": "Hilft Ihnen, gefragte Fähigkeiten schnell zu entwickeln und Ihre Karriere auf einem sich wandelnden Arbeitsmarkt voranzutreiben.",
      "plan-title": "Wählen Sie den richtigen Entwicklungsplan für den Erfolg",
      "free_courses": "Kostenlose Kurse",
      "get_involved": "Mitmachen",
      "questions": "Fragen oder Bedenken?",
      "email_us": "SCHREIBEN SIE UNS"
    }
  };

  // function for language translation
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
const languageIcon = document.getElementById("language-icon");
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
});
// end of language part

// *************************************************************************************

// All button hover method 
// dynamix-btn at header hover and dropdown show for details
  const dynamixBtn = document.getElementById('dynamix-btn');
  const dropdownDetails = document.getElementById('dropdown-details');

    dynamixBtn.addEventListener('click', function() {
        dropdownDetails.classList.toggle('active');
    });

    // linked to css variable rootstyles
    // fuction CSS variable
function CssVaraible(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

//  CSS variables
const hoverColor = CssVaraible('--color-hover');
const defaultColor = CssVaraible('--bg-color');
dynamixBtn.style.transition = "background-color 0.3s ease-in-out";

// dynamix btn hover
dynamixBtn.addEventListener("mouseover", () => {
  dynamixBtn.style.backgroundColor = hoverColor; 
});

dynamixBtn.addEventListener("mouseleave", () => {
    dynamixBtn.style.backgroundColor = defaultColor;
});

// searchbar icon hover and dropdown show for searching
const searchIcon = document.getElementById("searchIcon")
const searchBarDropdown = document.getElementById("searchbardropdown");

        
searchIcon.addEventListener('click', () => {
  searchBarDropdown.classList.toggle('active');
});

// search input work with enter key and search for data inside the site and show result
function clickEnter(event) {
    if (event.key === 'Enter') {
        searchData();
    }
}

function searchData() {
    const searchData = document.getElementById('search').value;

    if (searchData.trim() === "") {
      alert("Please enter a search term.");
         return;
   }

    localStorage.setItem('lastSearchData', searchData);
}

// header navbar ul >li hover and active
const liMenu = document.querySelectorAll("li");
liMenu.forEach(li =>{
  li.addEventListener("click", () => {
    liMenu.forEach(item => 
    item.classList.remove("active"));
    li.classList.add("active");
  })
})

// services btn at first section hover
const ServicesBtn = document.getElementById("services-btn");

//  CSS variables
const hoveredColor = CssVaraible('--color-hover');
const defaultsColor = CssVaraible('--bg-color');
ServicesBtn.style.transition = "background-color 0.3s ease-in-out";

ServicesBtn.addEventListener("mouseover", () => {
  ServicesBtn.style.backgroundColor = hoveredColor; 
});

ServicesBtn.addEventListener("mouseleave", () => {
    ServicesBtn.style.backgroundColor = defaultsColor;
});

// card-name hover in section 3 
const cardbtn = document.querySelectorAll(".card-name");
const defaultColors = CssVaraible('--bg2-color');

cardbtn.forEach(card => {
  card.addEventListener("mouseover", () =>{
    card.style.transition = "background-color 0.5s ease-in-out";
    card.style.backgroundColor = hoverColor;
  });
});

cardbtn.forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = defaultColors;
  });
});

// get involved btn hover section 4
const involvedBtns = document.querySelectorAll(".involved-btn"); 
const defaultsColors = CssVaraible('--bg2-color');

involvedBtns.forEach(involvedBtn => {
  involvedBtn.addEventListener("mouseover", () =>{
    involvedBtn.style.backgroundColor = hoverColor;
});

involvedBtn.addEventListener("mouseleave", () => {
    involvedBtn.style.backgroundColor = defaultsColors;
});

});

// email button hover section 5
const emailBtn = document.getElementById("emailbtn");
emailBtn.addEventListener("mouseover", () =>{
  emailBtn.style.backgroundColor = hoverColor;
})
emailBtn.addEventListener("mouseleave", () =>{
  emailBtn.style.backgroundColor = defaultsColors;
})

// hover enroll btns in section6
const enrollBtns = document.querySelectorAll("button");
enrollBtns.forEach(enrollBtn => {
  enrollBtn.addEventListener("mouseover", () =>{
    enrollBtn.style.transition = "background-color 0.5s ease-in-out";
    enrollBtn.style.backgroundColor = hoverColor;
})
});

enrollBtns.forEach(enrollBtn => {
  enrollBtn.addEventListener("mouseleave", () => {
    enrollBtn.style.backgroundColor = defaultColor;
});
});
// all hover methods end

// **************************************************************
// linked and navigated options parts and pages 

// login button link to login page
const isLoggedIn = () => !!localStorage.getItem("userRole");
const loginBtn = document.getElementById("login");
const signOutBtn = document.getElementById("sign-out");
const userDropdown = document.getElementById("user-dropdown");
const userEmailElement = document.getElementById("user-email");
const userRoleElement = document.getElementById("user-role")

// Function to simulate a successful login
function simulateLogin() {
    // these values come from an authentication response
    localStorage.setItem("userRole", "admin");
    localStorage.setItem("userEmail", "user@example.com");
    console.log("User logged in.");
    updateUI();
}
// sign out function for user signout
function signOut() {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    console.log("User signed out.");
    updateUI();
    userDropdown.style.display = "none";
}
// Function to update the button and dropdown state
function updateUI() {
    if (isLoggedIn()) {
        // If logged in: update dropdown content and change button text if needed
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");
        const email = localStorage.getItem("userEmail");
        const role = localStorage.getItem("userRole");
        userEmailElement.textContent = email;
        userRoleElement.textContent = role;
        userDropdown.style.display = "none";
  // if logged in login button change to user name
        const userName = (firstName && lastName) ? `${firstName} ${lastName}` : email || "User Profile";
        loginBtn.innerHTML = `<span class="user">${userName}</span>`;
    } else {
  // If logged out: change button text back to "Login"
        loginBtn.textContent = "Login";
    }
}
// show dropdown by clicking the login btn and navigate to register form if not logged in
loginBtn.addEventListener("click", () => {
    if (isLoggedIn() || userDropdown.style.display === "none") {
        userDropdown.style.display = "flex";
    } else {
         userDropdown.style.display = "none";
         window.location.href = "./register.html"
    }
});

signOutBtn.addEventListener("click", signOut);
updateUI();

// navbar links to sections
  const menuItems = document.querySelectorAll(".navBar li");
  const ServiceLinks = document.querySelectorAll("[data-target]");

  // dashboard li navBar btn navigate to user dashboard and admin dashboard
  const dashboardBtn = document.getElementById("dashboard");
  dashboardBtn.addEventListener("click", () =>{
    const userRole = localStorage.getItem("userRole");

    if(userRole === "student"){
      window.location.href = "./user.html";
    }else if (userRole === "admin"){
      window.location.href = "./admin.html";
    }else{
      alert("please login  again");
      window.location.href = "./register.html";
    }
  });

  // services button navigation section1 to section4
  ServiceLinks.forEach(btn => {  
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const section = document.getElementById(targetId);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


// courses card navigation to subjects section6
const courseCards = document.querySelectorAll(".card-name");
courseCards.forEach(card => {
  card.addEventListener("click", () => {
    const subjectsSection = document.getElementById("all-fields");
    subjectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
})

// navigation email button to contact section5
const emailButton = document.getElementById("emailbtn");
emailButton.addEventListener("click", () => {
  const contactSection = document.getElementById("email");
  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// **************************************************************
// slider part for courses section3
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cards = Array.from(document.querySelectorAll(".section3 .card"));

const visibleCount = 3;
let startIndex = 0;

function updateSlider() {
  cards.forEach((card, index) => {
    if (index >= startIndex && index < startIndex + visibleCount) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// next button
nextBtn.addEventListener("click", () => {
  if (startIndex + visibleCount < cards.length) {
    startIndex += visibleCount;
  }
  updateSlider();
});

// prev button
prevBtn.addEventListener("click", () => {
  if (startIndex - visibleCount >= 0) {
    startIndex -= visibleCount;
  }
  updateSlider();
});

// initialize
updateSlider();


// previous and next buttons for subjects section6 
const prevSubjects = document.querySelector(".prev-subjects");  
const nextSubjects = document.querySelector(".next-subjects");
const subjects = Array.from(document.querySelectorAll(".subjects"));

// default to Development subject (class 'third') if available
let defaultIndex = subjects.findIndex(s => s.classList.contains('third') || s.className.toLowerCase().includes('third'));
let currentSubject = defaultIndex >= 0 ? defaultIndex : 0;
let currentPage = 0;

function showSubject(newIndex, direction = "right") {
  if (newIndex === currentSubject) return;

  const prev = subjects[currentSubject];
  const next = subjects[newIndex];

  // hide previous immediately
  if (prev) {
    prev.style.display = "none";
    prev.classList.remove("slide-in-left", "slide-in-right", "active");
  }

  // prepare next and animate in
  if (next) {
    next.style.display = "flex";
    next.classList.remove("slide-in-left", "slide-in-right");
   
    void next.offsetWidth;
    next.classList.add(direction === "left" ? "slide-in-left" : "slide-in-right", "active");
    // reset to first page for the newly shown group
    currentPage = 0;
    renderPage(next, currentPage);
  }

  currentSubject = newIndex;
}


// initialize: hide all except the default subject
if (subjects.length) {
  subjects.forEach((s, i) => {
    if (i === currentSubject) {
      s.style.display = "flex";
      s.classList.add("active");
      renderPage(s, currentPage);
    } else {
      s.style.display = "none";
    }
  });

  // wire up field buttons to filter subjects by index (buttons order matches subject groups)
  const fields = Array.from(document.querySelectorAll('.field'));
  fields.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (idx >= subjects.length) return; 
      const direction = idx < currentSubject ? 'left' : 'right';
      showSubject(idx, direction);
      // toggle active class on buttons
      fields.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      if( btn.classList.add('active')){
        btn.style.borderBottom = "2px solid gray";
      }else{
        btn.style.borderBottom = "none";
      }
    });
  });

  // prev/next should page within the currently visible subject group (4 items per page)
  nextSubjects && nextSubjects.addEventListener("click", () => {
    const subs = Array.from(subjects[currentSubject].querySelectorAll('.sub'));
    const pages = Math.max(1, Math.ceil(subs.length / 4));
    currentPage = (currentPage + 1) % pages;
    renderPage(subjects[currentSubject], currentPage);
  });

  prevSubjects && prevSubjects.addEventListener("click", () => {
    const subs = Array.from(subjects[currentSubject].querySelectorAll('.sub'));
    const pages = Math.max(1, Math.ceil(subs.length / 4));
    currentPage = (currentPage - 1 + pages) % pages;
    renderPage(subjects[currentSubject], currentPage);
  });

// render a page of .subjects group
function renderPage(subjectEl, pageIndex) {
  if (!subjectEl) return;
  const subs = Array.from(subjectEl.querySelectorAll('.sub'));
  const perPage = 4;
  subs.forEach((sub, i) => {
    sub.style.display = (i >= pageIndex * perPage && i < (pageIndex + 1) * perPage) ? 'flex' : 'none';
  });
}

// navigate to register from by enrolling the courses
  document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
      if (!isLoggedIn()) {
        window.location.href = "./register.html";
      } 
    });
  });
}
 

// section six hover enrollbtn and active field
document.addEventListener('DOMContentLoaded', (event) => {
    const courseFields = document.querySelectorAll(".field");

    courseFields.forEach(field => {
      field.addEventListener("mouseover", () =>{
        field.style.transition = "color 0.5s ease-in-out";
        field.style.backgroundColor = hoverColor;
    });
    });

    courseFields.forEach(field => {
      field.addEventListener("mouseleave", () => {
        field.style.backgroundColor = "transparent";
    });
  }); 

    courseFields.forEach(field => {
      field.addEventListener("click", () => {
        courseFields.forEach(sub => {
          sub.classList.remove("active");
        });
      field.classList.add("active");
    });
  });
});

// ---------- ----------- ----------- ----------- ----------- ----------- ------------
// enrolled the courses for students
document.querySelectorAll('.sub').forEach(course => {
  const enrollBtn = course.querySelector('.enrolled-btn');

  if (!enrollBtn) return;

  enrollBtn.addEventListener('click', () => {
    if (!isLoggedIn()) {
      window.location.href = "./register.html";
      return;
    }

    const courseData = {
      id: course.dataset.id || Date.now().toString(),
      title: course.dataset.title || course.querySelector("h4")?.innerText,
      image: course.dataset.image || course.querySelector("img")?.src,
      price: course.dataset.price || ("free"),
      progress: 0
    };

    if(!courseData.title || !courseData.image){
      alert("course data missed!");
      return;
    }

    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    // prevent duplicate enrollment
    const alreadyEnrolled = enrolledCourses.some(c => c.id === courseData.id);
    if (!alreadyEnrolled) {
      enrolledCourses.push(courseData);
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }

    window.location.href = "./user.html";
  });
});
