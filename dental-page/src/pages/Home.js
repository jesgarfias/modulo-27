import BanerOne from "../components/BanerOne";
import ContactInfo from "../components/ContactInfo";
import FirstSect from "../components/FirstSect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QandA from "../components/QandA";
import ServicesSect from "../components/ServicesSect";
import "../index.css"

const Home =()=>{
    return(
        <>
            <Header/>
            <BanerOne/>
            <FirstSect/>
            <ServicesSect/>
            <QandA/>
            <ContactInfo/>
            <Footer/>
        </>
    )
}
export default Home;