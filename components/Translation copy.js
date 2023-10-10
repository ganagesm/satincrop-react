// export default LanguageSwitcher;
import React, { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    
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


// 509a36aed52583/