import SalaEspera from "../../assets/SalaEspera.jpg"
import SalaRadiografica from "../../assets/SalaRadiografia.jpg"
import EscanerOral from "../../assets/EscanerOral.jpg"
import { TitleSection } from "../FirstSect/styles"
import { FacilitiesImg, FacilitiesImgContainer, FacilitiesTextContainer,  ImgSection, ImgUs, InfoSection, UsFacilitiesContainer, UsFacilitiesContainerModifie, UsFacilitiesContainerMotion } from "./styled"
import { motion } from "motion/react"
import fadeIn from "../../Motion/variants"
const UsSecondContent=()=>{
    return(
        <section>
            <section>
                <TitleSection>Nuestras instalaciones</TitleSection>
            </section>
            <UsFacilitiesContainer>
                <ImgSection>
                    <ImgUs src={SalaEspera} alt="Sala de espera" />
                </ImgSection>
                <InfoSection>
                    <h3>Sala de espera</h3>
                    <p>
                    Mientras nos preparamos para tu visita, en la Clínica Montes puedes esperarnos cómodamente en nuestra sala equipada con diversas lecturas y televisión.
                    </p>
                </InfoSection>
            </UsFacilitiesContainer>
            <UsFacilitiesContainerModifie>
                <InfoSection>
                    <h3>Sala de Radiografía</h3>
                    <p>
                        Disponemos de la última tecnología radiológica para poder obtener el diagnóstico de cada paciente en la propia clínica.
                    </p>
                </InfoSection>
                <ImgSection>
                    < ImgUs src={SalaRadiografica} alt="Sala radiografica"/>
                </ImgSection>
            </UsFacilitiesContainerModifie>
            <UsFacilitiesContainerMotion>
                <FacilitiesImgContainer>
                    <FacilitiesImg src={EscanerOral} alt="Escaner oral"/>
                </FacilitiesImgContainer>   
                <FacilitiesTextContainer as={motion.section}
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.4}}
                >
                    <h3>Escáner intraoral</h3>
                    <p>
                        Gracias a este dispositivo podemos obtener modelos milimétricos de tu boca rápidamente sin la necesidad de utilizar las molestas pastas tradicionales.
                    </p>
                </FacilitiesTextContainer> 
            </UsFacilitiesContainerMotion>
        </section>
    )
}
export default UsSecondContent;