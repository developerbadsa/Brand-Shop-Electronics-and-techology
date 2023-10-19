import ContactForm from "../../Components/Contact/Contact";
import AboutUs from "../AboutUs/About.";
import Banner from "./Sections/Banner/Banner";
import Brand from "./Sections/Brand/Brand";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Brand></Brand>
            <div className='mt-24'>
                <AboutUs ></AboutUs>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;