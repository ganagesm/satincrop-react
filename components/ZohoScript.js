// components/ZohoScript.js

import { useEffect } from "react";

const ZohoScript = () => {
  useEffect(() => {
    const loadScript = () => {
      var w = window;
      var p = w.location.protocol;
      if (p.indexOf("http") < 0) {
        p = "http" + ":";
      }
      var d = document;
      var f = d.getElementsByTagName("script")[0],
        s = d.createElement("script");
      s.type = "text/javascript";
      s.async = false;
      if (s.readyState) {
        s.onreadystatechange = function () {
          if (s.readyState == "loaded" || s.readyState == "complete") {
            s.onreadystatechange = null;
            try {
              loadwaprops(
                "3zb3629bd0ee5d5d8303f8ec75914e3816",
                "3zff858e9853183a7d4f680e1b9484843d",
                "3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c",
                "3ze1a87b159057988c1bf6ad26580ffc7a",
                "0.0"
              );
            } catch (e) {}
          }
        };
      } else {
        s.onload = function () {
          try {
            loadwaprops(
              "3zb3629bd0ee5d5d8303f8ec75914e3816",
              "3zff858e9853183a7d4f680e1b9484843d",
              "3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c",
              "3ze1a87b159057988c1bf6ad26580ffc7a",
              "0.0"
            );
          } catch (e) {}
        };
      }
      s.src = p + "//ma.zoho.in/hub/js/WebsiteAutomation.js";
      f.parentNode.insertBefore(s, f);
    };

    loadScript();
  }, []);

  return null; // This component doesn't render anything
};

export default ZohoScript;
