import { motion } from "motion/react";
import Calendar from "../../icons/Calendar";
import Maps from "../../icons/Maps";
import Phone from "../../icons/Phone";
import { TitleSection } from "../FirstSect/styles";
import { ContacMainSec, ContacSecondarySec, DateButton, Map, MapContainer } from "./Styled";
import { useState } from "react";
const ContactInfo=()=>{
    const [hidden, setHidden]=useState(true);
    return(
        <>
        <TitleSection>Ubicación</TitleSection>
        <ContacMainSec>
            <ContacSecondarySec as={motion.section}
             whileHover={{backgroundColor:"#70abc7"}}
             onMouseEnter={()=>setHidden(false)}
             onMouseLeave={()=>setHidden(true)}
            >
                <div>
                    <h2 className="font-serif text-2xl text-center">CLinica dental</h2>
                </div>
                <div className="flex gap-y-3 flex-col">
                    <div className="flex font-serif text-xl gap-2 justify-center items-center">
                        <Maps/>
                        <p>C. 7 451-451, Col. Arisa, 97130.</p>
                    </div>
                    <div className="flex font-serif text-xl gap-2 justify-center items-center">
                        <Phone/>
                        <p>5599912131</p>
                    </div>
                    <div className="flex font-serif text-xl gap-2 justify-center items-center">
                        <Calendar/>
                        <p> L-V 10:00 a 20:00 S-D 11:00 a 20:00</p>
                    </div>
                </div>
                { hidden ? null: <DateButton as={motion.button} whileHover={{backgroundColor:"#e5e7e9"}}>Agenda cita</DateButton> }
            </ContacSecondarySec>
            <MapContainer >
                <Map 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.6012048711787!2d-99.02645523570703!3d19.424882872298703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fcba5b8cab11%3A0x30d5bde2e2145d75!2sVips%20Cd.%20Jard%C3%ADn%20Nezahualc%C3%B3yotl!5e0!3m2!1ses-419!2smx!4v1735236151024!5m2!1ses-419!2smx" 
                    width="600" 
                    height="450"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </Map>
            </MapContainer>
        </ContacMainSec>
        </>
    )
}
export default ContactInfo;