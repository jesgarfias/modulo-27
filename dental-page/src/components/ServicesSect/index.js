import { motion } from "motion/react";
import Endodontics from "../../icons/Endodontics";
import Implant from "../../icons/Implant";
import Ortodent from "../../icons/Ortodent";
import Ortounvi from "../../icons/Ortounvi";
import Periodontics from "../../icons/Periodontics";
import Smile from "../../icons/Smile";
import Surgery from "../../icons/Surgery";
import Whitening from "../../icons/Whitening";
import { TitleSection } from "../FirstSect/styles";
import { ServicesElement, ServicesMainContainer, ServicesTitle} from "./styled";
import fadeIn from "../../Motion/variants";

const ServicesSect=()=>{
    return(
        <>
        <TitleSection> Nuestros servicios</TitleSection>
            <ServicesMainContainer as={motion.section}
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0}}
            >
                <ServicesElement as={motion.section}
                    whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Smile/>
                    <ServicesTitle>Diseño de sonrisa</ServicesTitle>
                    <p>
                        Tratamiento integral para la mejora anatómica, posición y color de los dientes a tratar.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
                  whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Ortodent/>
                    <h3>Ortodoncia</h3>
                    <p>
                        Prevención y tratamiento de las anomalías de las estructuras dentomaxilofaciales.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Ortounvi/>
                    <h3>Odontología sin metal</h3>
                    <p>
                        Contamos con equipos y personal capacitado para realizar tratamientos sin metal. 
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Endodontics/>
                    <h3>Endodoncia</h3>
                    <p>
                        Se realiza en piezas dentales con caries profundas u otras condiciones.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Surgery/>
                    <h3>Cirugías</h3>
                    <p>
                        Contamos con equipos y personal capacitado para realizar diferentes tipos de cirugías dentales.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Periodontics/>
                    <h3>Periodoncia</h3>
                    <p>
                        Tratamiento de las enfermedades que afectan los tejidos que dan soporte a los órganos dentarios.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Whitening/>
                    <h3>Blanquemiento</h3>
                    <p>
                        El blanqueamiento dental funciona para las personas con dientes amarillos y marrones.
                    </p>
                </ServicesElement>
                <ServicesElement as={motion.section}
             whileHover={{scale:1.1, backgroundColor:"#70abc7"}}>
                    <Implant/>
                    <h3>Implantes dentales</h3>
                    <p>
                        Sustituto artificial de la raíz natural del órgano dentario. Se coloca en una cirugía.
                    </p>
                </ServicesElement>
            </ServicesMainContainer>
        </>
    )
}
export default ServicesSect;