import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import NewsPostSlider from "../components/Live/NewsPostSlider";
import AboutContact from "../components/Live/AboutContent";
import AiApplication from "../components/Live/AiApplication";
import CEOCorner from "../components/Live/CEOCorner";
import Offices from "../components/Live/Offices";
import MainServices from "../components/Live/MainServices";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          SA Technologies | Leading IT Consulting: AI Solutions, Digital
          Engineering, Enterprise Modernization
        </title>
        <meta
          property="og:title"
          content="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization"
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies - Your Trusted IT Consulting and Offshore Partner with 20+ years of experience, serving 500+ clients. Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services."
          key=""
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var w=window;
              var p = w.location.protocol;
              if(p.indexOf("http") < 0){p = "http"+":";}
              var d = document;
              var f = d.getElementsByTagName('script')[0],s = d.createElement('script');
              s.type = 'text/javascript'; s.async = false;
              if (s.readyState){
                s.onreadystatechange = function(){
                  if (s.readyState=="loaded"||s.readyState == "complete"){
                    s.onreadystatechange = null;
                    try{
                      loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                    }catch(e){}
                  }
                };
              }else {
                s.onload = function(){
                  try{
                    loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                  }catch(e){}
                };
              }
              s.src = p + "//ma.zoho.in/hub/js/WebsiteAutomation.js";
              f.parentNode.insertBefore(s, f);
            `,
          }}
        />
      </Head>
      <ZohoScript />
      <Navbar />
      <HeroBanner />
      <AboutContact />
      <AiApplication />
      <Services />
      <PartnerContent />
      <NewsPostSlider />
      {/* <MainServices /> */}
      <TechSlider />
      <CEOCorner />
      <Offices />
      <Testimonials />
      <CaseStudiesPost />
      <BlogPostSlider />
      <Footer />
    </>
  );
};
export default Index;
