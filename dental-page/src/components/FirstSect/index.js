import DoctoP from "../../assets/DoctoP.jpg"
import DoctorJ from "../../assets/DoctorJ.jpg"
import Phone from "../../icons/Phone"
import fadeIn from "../../Motion/variants"
import { ContactInfo, ImgContent, ImgElement, MainSection, SpecialistContainer, TitleSection } from "./styles"
import { motion } from "motion/react"
const FirstSect=()=>{
    return(
        <>
            <TitleSection>Nuestros Especialistas</TitleSection>
            <MainSection as={motion.section}
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.4}}
            >
                < SpecialistContainer>
                    <ImgContent>
                        <ImgElement src={DoctoP} alt="Dr. Pedro Marco"/>
                    </ImgContent>
                    <h2>Cirujano dentista especialista en Ortodoncia e Implantología</h2>
                    <p>
                    Especialista en ortodoncia e implantología se encarga de alinear los dientes, corregir la mordida y reemplazar los dientes con implantes dentales.
                    </p>
                    <ContactInfo>
                        <Phone/>  
                        <span>5599912131</span>
                    </ContactInfo>
                </SpecialistContainer>
                <SpecialistContainer>
                    <ImgContent>
                        <ImgElement src={DoctorJ} alt="Dr. Jose Maria"/>
                    </ImgContent>
                        <h2>Cirujano dentista especialista en cirugía maxilofacial</h2>
                        <p>
                        Licenciado en Medicina. Graduado en Odontología. Especialista en Cirugía Oral y Maxilofacial.
                        </p>
                    <ContactInfo>
                        <Phone/>  
                        <span>5599912131</span>
                    </ContactInfo>
                </SpecialistContainer>
            </MainSection>
        </>
    )
}
export default FirstSect;