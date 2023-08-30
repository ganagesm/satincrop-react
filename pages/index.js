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


const Index = () => {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <PartnerContent />
            <Services />
            <FunFacts />
            <Testimonials />
            <TechSlider />
            <BlogPostSlider />
            <CaseStudiesPost />
            <Footer />

        </>
    )
}
export default Index;