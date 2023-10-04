import React from "react";
import Link from "next/link";

const Rating = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100" style={{marginBottom:"50px",}}>
        <div className="container">
          <div className="section-title with-underline-text" style={{marginBottom:"10px",}}>
            <h2>At SA Tech, We Foster a Vibrant Work Culture Rooted in Equality and Respect</h2>
            <p style={{fontSize: "20px",}}>We celebrate a dynamic work environment that seamlessly blends innovation and inclusivity. 
              Here, discrimination has no place. All employment decisions, from hiring to exit, are guided by merit, qualifications,
              and strict adherence to local laws, ensuring a consistently fair and empowering workplace for everyone.
            </p> 
            <p style={{fontSize: "20px",}}>Join us, and celebrate a world where every talent is valued, and every voice is respected.</p>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="glass_logo">
            <img src="/images/clients/rating.png" alt="image" />
          </div>
        </div>  
        <div className="col-md-6">
          <div className="">
            <img src="/images/clients/rating1.png" alt="image" />
          </div>
        </div> 
      </div>  
    </div>
    </>
  );
};

export default Rating;
