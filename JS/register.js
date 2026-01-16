// language Part
document.addEventListener("DOMContentLoaded", () => {
  const langText = document.getElementById("lang-text");
  const languageOptions = document.querySelectorAll("#language-option li");


  const translations = {
     "en": {
    "name": "Name",
    "last-name": "Last Name",
    "profession": "Profession",
    "country": "Country",
    "email": "Email",
    "password": "Password",
    "confirm-password": "Confirm Password",
    "sign-up": "Sign Up",
    "language": "Language"
  },
  "fa": {
    "name": "نام",
    "last-name": "نام خانوادگی",
    "profession": "شغل",
    "country": "کشور",
    "email": "ایمیل",
    "password": "رمز عبور",
    "confirm-password": "تأیید رمز عبور",
    "sign-up": "ثبت نام",
    "language": "زبان"
  },
  "ps": {
    "name": "نوم",
    "last-name": "تخلص",
    "profession": "مسلک",
    "country": "هیواد",
    "email": "بریښنالیک",
    "password": "پټ نوم",
    "confirm-password": "د پټ نوم تایید",
    "sign-up": "راجستر",
    "language": "ژبه"
  },
  "hi": {
    "name": "नाम",
    "last-name": "उपनाम",
    "profession": "पेशा",
    "country": "देश",
    "email": "ईमेल",
    "password": "पासवर्ड",
    "confirm-password": "पासवर्ड पुष्टि करें",
    "sign-up": "साइन अप",
    "language": "भाषा"
  },
  "fr": {
    "name": "Prénom",
    "last-name": "Nom de famille",
    "profession": "Profession",
    "country": "Pays",
    "email": "Email",
    "password": "Mot de passe",
    "confirm-password": "Confirmer le mot de passe",
    "sign-up": "S'inscrire",
    "language": "Langue"
  },
  "de": {
    "name": "Vorname",
    "last-name": "Nachname",
    "profession": "Beruf",
    "country": "Land",
    "email": "E-Mail",
    "password": "Passwort",
    "confirm-password": "Passwort bestätigen",
    "sign-up": "Registrieren",
    "language": "Sprache"
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


// sign up form validation
const btn = document.getElementById("btn");
const inputs = document.querySelectorAll("input[required]");

btn.addEventListener("click", (event) => {
    event.preventDefault(); 
    let allInputsFilled = true;

     inputs.forEach(input => {
        if (input.value.trim() === "") {
            allInputsFilled = false;
        }
    });
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!allInputsFilled) {
        alert("Please fill all the required fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
         const formData = {
            name: document.getElementById("name").value,
            lastName: document.getElementById("last-name").value,
            profession: document.getElementById("profession").value,
            country: document.getElementById("country").value,
            email: document.getElementById("email").value,
            password: password 
        };

        const formDataJSON = JSON.stringify(formData);

        localStorage.setItem("registrationData", formDataJSON);
        window.location.href = "./student.html";
    }
});

// End of sign up form validation

// signup btn hover
const signUpBtn = document.querySelector("button[type='submit']");

function CssVaraible(variableName) {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}

//  CSS variables
const hoverColor = CssVaraible('--color-hover');
const defaultColor = CssVaraible('--bg-color');

signUpBtn.addEventListener("mouseover", () => {
  signUpBtn.style.backgroundColor = hoverColor; 
});

signUpBtn.addEventListener("mouseleave", () => {
    signUpBtn.style.backgroundColor = defaultColor;
});
