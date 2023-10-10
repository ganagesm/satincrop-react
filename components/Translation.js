// export default LanguageSwitcher;
import React, { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    // Function to get user's language
    function getUserLanguage() {
      const userLanguage = window.navigator.language || window.navigator.userLanguage;
      return userLanguage;
    }

    // Function to get user's country
    function getUserCountry() {
      const userCountry = window.navigator.geolocation?.country;
      return userCountry;
    }

    // Get user's language and country
    const userLanguage = getUserLanguage();
    const userCountry = getUserCountry();

    console.log('User Language:', userLanguage);
    console.log('User Country:', userCountry);
  }, [])

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
      // pageLanguage: 'en',
      includedLanguages: "en,ms,ta,zh-CN,ar,hi,ja,ko,fr", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element');
  }

  return (
    <li id="google_translate_element" > </li>
  )
}