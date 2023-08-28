import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamContent from "../components/Team/TeamContent";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Live/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Our Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImgClass="item-bg1"
      />

      <TeamContent />

      <Footer />
    </>
  );
};

export default Team;
