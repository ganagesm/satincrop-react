import { useEffect, useRef } from "react";
import Link from "next/link";

const Newsletter = () => {
  const bottomRef = useRef(null);

  // Function to scroll to the bottom
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="ai-subscribe-area ptb-100">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-8 col-12">
              <h2>
                Want to discuss how to accelerate your project deliverables?
              </h2>
            </div>
            <div className="col-lg-4 col-4 col-12">
              <button
                onClick={() => scrollToSection("section1")}
                className="btn btn-primary">
                Contact Us<span></span>
              </button>
            </div>
          </div>

          <div className="ai-subscribe-shape">
            <img src="/images/home-six/subscribe-shape.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
