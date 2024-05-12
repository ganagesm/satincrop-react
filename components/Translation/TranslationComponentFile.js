// Import necessary modules
import Script from "next/script";
import React from "react";

// Define list of languages with labels, values, and flag image URLs
const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Chinese", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
  { label: "Singapore", value: "zh-SG", src: "https://flagcdn.com/h60/sg.png" },
  // Add more languages as needed
];

// Define a mapping of country codes to default languages
const countryToLanguageMap = {
  US: "en", // Default to English for United States
  CN: "zh-CN", // Default to Chinese (Simplified) for China
  SA: "ar", // Default to Arabic for Saudi Arabia
  SG: "zh-SG", // Default to Chinese (Simplified) for Singapore
  // Add more mappings as needed
};

// Function to get default language based on country code
const getDefaultLanguageFromCountry = (countryCode) => {
  return countryToLanguageMap[countryCode] || "en"; // Default to English if country code not found
};

// Function to initialize Google Translate
function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto", // Auto-detect user's language
      includedLanguages: languages.map((lang) => lang.value).join(","), // Languages to include in translation options
    },
    "google_translate_element"
  ); // Target element for Google Translate widget
}

// React component for language selection
export function GoogleTranslate({ prefLangCookie }) {
  // State to hold selected language
  const [langCookie, setLangCookie] = React.useState(
    decodeURIComponent(prefLangCookie)
  );

  // Effect hook to set up Google Translate initialization function
  React.useEffect(() => {
    // Function to fetch user's IP address
    const fetchIPAddress = async () => {
      try {
        // Fetch IP address data from ipinfo.io
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();

        // Extract the country code from the response
        const userCountryCode = data.country; // Assuming 'country' field contains the country code

        // Log the user's country code to the console
        console.log("User Country Code:", userCountryCode);

        // Get default language based on country code
        const defaultLanguage = getDefaultLanguageFromCountry(userCountryCode);
        setLangCookie(defaultLanguage);

        // Set up Google Translate initialization function
        window.googleTranslateElementInit = googleTranslateElementInit;
      } catch (error) {
        console.error("Error fetching user's IP address:", error);
      }
    };

    // Call the fetchIPAddress function to fetch the user's IP address
    fetchIPAddress();
  }, []);

  // Function to handle language selection change
  const onChange = (value) => {
    const lang = "/en/" + value; // Assuming "/en/" is language prefix in URL
    setLangCookie(lang); // Update selected language state
    const element = document.querySelector(".goog-te-combo"); // Select Google Translate dropdown

    if (element) {
      // Check if element exists before accessing its properties
      element.value = value; // Set value to selected language
      element.dispatchEvent(new Event("change")); // Dispatch change event to trigger translation
    } else {
      console.error("Google Translate dropdown element not found"); // Log an error if element is not found
    }
  };

  // Render component UI
  return (
    <div>
      {/* Container for Google Translate widget */}
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>

      {/* Render language selector dropdown */}
      <select
        onChange={(e) => onChange(e.target.value)}
        value={langCookie.split("/")[2]}>
        {/* Render language options */}
        {languages.map((it) => (
          <option value={it.value} key={it.value}>
            {it.label}
          </option>
        ))}
      </select>

      {/* Include Google Translate script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

// Function to get preferred language cookie
export const getPrefLangCookie = () => {
  return cookies().get("googtrans")?.value ?? "en"; // Return cookie value or default to "en"
};
