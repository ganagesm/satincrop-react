// import React, { useEffect, useState } from "react";

// export default function Translation() {
//   const [userCountry, setUserCountry] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);

//   useEffect(() => {
//     // Function to get user's language
//     function getUserLanguage() {
//       const userLanguage =
//         window.navigator.language || window.navigator.userLanguage;
//       return userLanguage;
//     }

//     // Function to get user's country using geolocation API
//     async function getUserCountry() {
//       try {
//         const response = await fetch("https://ipinfo.io?token=509a36aed52583");
//         const data = await response.json();
//         return data.country;
//       } catch (error) {
//         console.error("Error fetching user's country:", error);
//         return null;
//       }
//     }

//     // Function to map user's country to a language (customize as needed)
//     function mapCountryToLanguage(country) {
//       switch (country) {
//         case "US":
//           return "en"; // English as default for the United States
//         case "FR":
//           return "fr"; // French as default for France
//         // Add more cases for other countries as needed
//         case "RU":
//           return "ru"; // French as default for France
//         // Add more cases for other countries as needed
//         default:
//           return null; // Default to null for unknown countries
//       }
//     }

//     // Get user's language and country
//     const userLanguage = getUserLanguage();
//     getUserCountry().then((country) => {
//       console.log("User Language:", userLanguage);
//       console.log("User Country:", country);
//       setUserCountry(country);

//       // Map user's country to a language
//       const language = mapCountryToLanguage(country);

//       // Initialize Google Translate when the script is loaded
//       const addScript = document.createElement("script");
//       addScript.setAttribute(
//         "src",
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//       );
//       document.body.appendChild(addScript);

//       window.googleTranslateElementInit = () => {
//         // Set the page language to the user's language if available,
//         // otherwise set it to English as a default
//         const pageLanguage = language || "en";
//         const includedLanguages =
//           "`{selectedLanguage}`,ru,en,ms,ta,zh-CN,ar,hi,ja,ko,fr"; // include this for selected languages

//         console.log("language", language);
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage,
//             includedLanguages,
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//           },
//           "google_translate_element"
//         );

//         setSelectedLanguage(pageLanguage);
//       };
//     });
//   }, []);

//   return (
//     <>
//       {/* <p>User Country: {userCountry}</p>
//       {selectedLanguage ? (
//         <p>Selected Language: {selectedLanguage}</p>
//       ) : (
//         <p>Loading...</p>
//       )} */}
//       <p id="google_translate_element"></p>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Translation() {
  const [userCountry, setUserCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    // Function to get user's language
    function getUserLanguage() {
      const systemLanguage =
        window.navigator.language || window.navigator.userLanguage;
      const userLanguage = systemLanguage.split("-")[0]; // Extracting language code
      return userLanguage;
    }

    // Function to get user's country using geolocation API
    async function getUserCountry() {
      try {
        const response = await fetch("https://ipinfo.io?token=509a36aed52583");
        const data = await response.json();
        return data.country;
      } catch (error) {
        console.error("Error fetching user's country:", error);
        return null;
      }
    }

    // Function to map user's country to a language (customize as needed)
    function mapCountryToLanguage(country) {
      switch (country) {
        case "US":
          return "en"; // English as default for the United States
        case "FR":
          return "fr"; // French as default for France
        // Add more cases for other countries as needed
        case "RU":
          return "ru"; // Russian as default for Russia
        // Add more cases for other countries as needed
        default:
          return null; // Default to null for unknown countries
      }
    }

    // Get user's language and country
    const userLanguage = getUserLanguage();
    getUserCountry().then((country) => {
      console.log("User Language:", userLanguage);
      console.log("User Country:", country);
      setUserCountry(country);

      // Map user's country to a language
      const language = mapCountryToLanguage(country);

      // Set the default language for translation
      const defaultLanguage = userLanguage || language || "en";
      setSelectedLanguage(defaultLanguage);

      // Initialize Google Translate when the script is loaded
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
    });
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      window.googleTranslateElementInit = () => {
        const includedLanguages = `${selectedLanguage},ru,en,ms,ta,zh-CN,ar,hi,ja,ko,fr`; // include this for selected languages

        new window.google.translate.TranslateElement(
          {
            pageLanguage: selectedLanguage,
            includedLanguages,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }
  }, [selectedLanguage]);

  return (
    <>
      {/* <p>User Country: {userCountry}</p>
      {selectedLanguage ? (
        <p>Selected Language: {selectedLanguage}</p>
      ) : (
        <p>Loading...</p>
      )} */}
      <p id="google_translate_element"></p>
    </>
  );
}
