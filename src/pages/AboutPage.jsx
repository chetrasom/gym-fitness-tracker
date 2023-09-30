import BreadCrumb from "../components/breadcrumb/BreadCrumb"
import Collection from '../components/collection/Collection';
import AboutContent from "../components/about/AboutContent";
import TeamSlider from "../components/about/TeamSlider";
import Join from "../components/about/Join";
import ClientSlider from "../components/about/ClientSlider";

const AboutPage = () => {
    return (
        <>
            <BreadCrumb title="about us" />
            <Collection />
            <AboutContent />
            <TeamSlider />
            <Join />
            <ClientSlider />
        </>
        
    )
}

export default AboutPage
