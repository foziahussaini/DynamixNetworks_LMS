// language Part
document.addEventListener("DOMContentLoaded", () => {
  const langText = document.getElementById("lang-text");
  const languageOptions = document.querySelectorAll("#language-option li");

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
}
);

// slider part for courses section3
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dots");

next.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.toggle("active");
  });
  dots.forEach((dot) => {
    dot.classList.toggle("active");
  });
});
