import DoctoP from "../../assets/DoctoP.jpg"
import DoctorJ from "../../assets/DoctorJ.jpg"
import Phone from "../../icons/Phone"
import fadeIn from "../../Motion/variants"
import { ContactInfo, SpecialistContainer, SpecialistImg, SpecialistImgContainer, SpecialistMainSectionContainer, TitleSection } from "./styles"
import { motion } from "motion/react"
const FirstSect=()=>{
    return(
        <>
            <TitleSection>Nuestros Especialistas</TitleSection>
            <SpecialistMainSectionContainer as={motion.section}
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.4}}
            >
                < SpecialistContainer>
                    <SpecialistImgContainer>
                        <SpecialistImg src={DoctoP} alt="Dr. Pedro Marco"/>
                    </SpecialistImgContainer>
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
                    <SpecialistImgContainer>
                        <SpecialistImg src={DoctorJ} alt="Dr. Jose Maria"/>
                    </SpecialistImgContainer>
                        <h2>Cirujano dentista especialista en cirugía maxilofacial</h2>
                        <p>
                        Licenciado en Medicina. Graduado en Odontología. Especialista en Cirugía Oral y Maxilofacial.
                        </p>
                    <ContactInfo>
                        <Phone/>  
                        <span>5599912131</span>
                    </ContactInfo>
                </SpecialistContainer>
            </SpecialistMainSectionContainer>
        </>
    )
}
export default FirstSect;