// // Import necessary modules
// import Script from "next/script";
// import React from "react";

// // Define list of languages with labels, values, and flag image URLs
// // Define list of languages with labels, values, and flag image URLs
// const languages = [
//   { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
//   { label: "Chinese", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
//   { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
//   { label: "Singapore", value: "zh-SG", src: "https://flagcdn.com/h60/sg.png" },
//   // Add additional languages as needed
// ];

// // Combine language values into a comma-separated string
// const includedLanguages = languages.map((lang) => lang.value).join(",");

// // Function to initialize Google Translate
// function googleTranslateElementInit() {
//   new window.google.translate.TranslateElement(
//     {
//       pageLanguage: "auto", // Auto-detect user's language
//       includedLanguages, // Languages to include in translation options
//     },
//     "google_translate_element"
//   ); // Target element for Google Translate widget
// }

// // React component for language selection
// export function Translation({ prefLangCookie }) {
//   // State to hold selected language
//   const [langCookie, setLangCookie] = React.useState(
//     decodeURIComponent(prefLangCookie)
//   );

//   // Effect hook to set up Google Translate initialization function
//   React.useEffect(() => {
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   // Function to handle language selection change
//   const onChange = (value) => {
//     const lang = "/en/" + value; // Assuming "/en/" is language prefix in URL
//     setLangCookie(lang); // Update selected language state
//     const element = document.querySelector(".goog-te-combo"); // Select Google Translate dropdown
//     element.value = value; // Set value to selected language
//     element.dispatchEvent(new Event("change")); // Dispatch change event to trigger translation
//   };

//   // Render component UI
//   return (
//     <div>
//       {/* Container for Google Translate widget */}
//       <div
//         id="google_translate_element"
//         style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>

//       {/* Render language selector dropdown */}
//       <select
//         onChange={(e) => onChange(e.target.value)}
//         value={langCookie.split("/")[2]}>
//         {/* Render language options */}
//         {languages.map((it) => (
//           <option value={it.value} key={it.value}>
//             {it.label}
//           </option>
//         ))}
//       </select>

//       {/* Include Google Translate script */}
//       <Script
//         src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//         strategy="afterInteractive"
//       />
//     </div>
//   );
// }

// // Function to get preferred language cookie
// export const getPrefLangCookie = () => {
//   return cookies().get("googtrans")?.value ?? "en"; // Return cookie value or default to "en"
// };

// // Import necessary modules
// import Script from "next/script";
// import React from "react";

// // Define list of languages with labels, values, and flag image URLs
// const languages = [
//   { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
//   { label: "Chinese", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
//   { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
//   { label: "Singapore", value: "zh-SG", src: "https://flagcdn.com/h60/sg.png" },
//   // Add additional languages as needed
// ];

// // Define a mapping of country codes to default languages
// const countryToLanguageMap = {
//   US: "en", // Default to English for United States
//   CN: "zh-CN", // Default to Chinese (Simplified) for China
//   SA: "ar", // Default to Arabic for Saudi Arabia
//   SG: "zh-SG", // Default to Chinese (Simplified) for Singapore
//   // Add more mappings as needed
// };

// // Function to get default language based on country code
// const getDefaultLanguageFromCountry = (countryCode) => {
//   return countryToLanguageMap[countryCode] || "en"; // Default to English if country code not found
// };

// // Function to initialize Google Translate
// function googleTranslateElementInit() {
//   new window.google.translate.TranslateElement(
//     {
//       pageLanguage: "auto", // Auto-detect user's language
//       includedLanguages: languages.map((lang) => lang.value).join(","), // Languages to include in translation options
//     },
//     "google_translate_element"
//   ); // Target element for Google Translate widget
// }

// // React component for language selection
// export function GoogleTranslate({ prefLangCookie }) {
//   // State to hold selected language
//   const [langCookie, setLangCookie] = React.useState(
//     decodeURIComponent(prefLangCookie)
//   );

//   // Effect hook to set up Google Translate initialization function
//   React.useEffect(() => {
//     // Simulated API call to get user's country code based on IP address
//     const userCountryCode = "US"; // Example: hardcoded to "US" for demonstration

//     // Get default language based on country code
//     const defaultLanguage = getDefaultLanguageFromCountry(userCountryCode);

//     // Set default language as the selected language
//     setLangCookie(defaultLanguage);

//     // Set up Google Translate initialization function
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   // Function to handle language selection change
//   const onChange = (value) => {
//     const lang = "/en/" + value; // Assuming "/en/" is language prefix in URL
//     setLangCookie(lang); // Update selected language state
//     const element = document.querySelector(".goog-te-combo"); // Select Google Translate dropdown
//     element.value = value; // Set value to selected language
//     element.dispatchEvent(new Event("change")); // Dispatch change event to trigger translation
//   };

//   // Render component UI
//   return (
//     <div>
//       {/* Container for Google Translate widget */}
//       <div
//         id="google_translate_element"
//         style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>

//       {/* Render language selector dropdown */}
//       <select
//         onChange={(e) => onChange(e.target.value)}
//         value={langCookie.split("/")[2]}>
//         {/* Render language options */}
//         {languages.map((it) => (
//           <option value={it.value} key={it.value}>
//             {it.label}
//           </option>
//         ))}
//       </select>

//       {/* Include Google Translate script */}
//       <Script
//         src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//         strategy="afterInteractive"
//       />
//     </div>
//   );
// }

// // Function to get preferred language cookie
// export const getPrefLangCookie = () => {
//   return cookies().get("googtrans")?.value ?? "en"; // Return cookie value or default to "en"
// };
import React, { useEffect, useState } from "react";
import Script from "next/script";

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Chinese", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
  { label: "Singapore", value: "zh-SG", src: "https://flagcdn.com/h60/sg.png" },
  // Add more languages as needed
];

const countryToLanguageMap = {
  US: "en",
  CN: "zh-CN",
  SA: "ar",
  SG: "zh-SG",
  // Add more mappings as needed
};

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages: languages.map((lang) => lang.value).join(","),
    },
    "google_translate_element"
  );
}

export function GoogleTranslate() {
  const [defaultLanguage, setDefaultLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch(
          "https://ipinfo.io/json?token=509a36aed52583"
        );
        const data = await response.json();
        const countryCode = data.country;
        console.log("data", data);
        const browserLanguage = navigator.language || navigator.userLanguage;
        const userLanguage =
          countryCode in countryToLanguageMap
            ? countryToLanguageMap[countryCode]
            : browserLanguage.split("-")[0]; // Extracting language code from browser language
        setDefaultLanguage(userLanguage);
        console.log("userLanguage", userLanguage);
        window.googleTranslateElementInit = googleTranslateElementInit;
        setLoading(false); // Set loading to false once language is detected
      } catch (error) {
        console.error("Error fetching user's IP address:", error);
      }
    };
    fetchIPAddress();
  }, []);

  const onChange = (value) => {
    const lang = "/en/" + value;
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate dropdown element not found");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loader while language detection is in progress
  }

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={defaultLanguage}>
        {languages.map((it) => (
          <option value={it.value} key={it.value}>
            {it.label}
          </option>
        ))}
      </select>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
