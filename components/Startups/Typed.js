import { useEffect, useRef } from "react";

const TypedComponent = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Text 1", "Text 2", "Text 3"], // Array of strings to type out
      typeSpeed: 50, // Typing speed in milliseconds
      loop: true, // Whether to loop through the strings
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy(); // Clean up the Typed instance
    };
  }, []);

  return <span ref={typeRef}></span>;
};

export default TypedComponent;
