import React, { useEffect, useState } from "react";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    // Function to get user's language
    function getUserLanguage() {
      const userLanguage = window.navigator.language || window.navigator.userLanguage;
      return userLanguage;
    }

    // Function to get user's country using geolocation API
    async function getUserCountry() {
      try {
        const response = await fetch("https://ipinfo.io?token=YOUR_API_KEY");
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
        case 'US':
          return 'en'; // English as default for the United States
        case 'FR':
          return 'fr'; // French as default for France
        // Add more cases for other countries as needed
        default:
          return 'en'; // Default to English for unknown countries
      }
    }

    // Get user's language and country
    const userLanguage = getUserLanguage();
    getUserCountry().then((country) => {
      console.log('User Language:', userLanguage);
      console.log('User Country:', country);
      setUserCountry(country);

      // Map user's country to a language
      const language = mapCountryToLanguage(country);
      setSelectedLanguage(language);

      // Initialize Google Translate when the script is loaded
      const addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: language, // Set the page language based on user's country or default
          includedLanguages: "en,ms,ta,zh-CN,ar,hi,ja,ko,fr", // include this for selected languages
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };
    });
  }, []);

  return (
    <div>
      <p>User Country: {userCountry}</p>
      <p>Selected Language: {selectedLanguage}</p>
      <li id="google_translate_element"></li>
    </div>
  );
}
