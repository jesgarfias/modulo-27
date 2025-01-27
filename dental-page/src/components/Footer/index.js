import Logo from "../../icons/Logo";
import Mail from "../../icons/Mail";
import Phone from "../../icons/Phone";
import Whatsapp from "../../icons/Whatsapp";
import { FooterLogo, FooterStyled } from "./Style";

const Footer =()=>{
    return(
        <FooterStyled>
            <FooterLogo>
                <Logo/>
                <p>CLinica dental</p>
            </FooterLogo>
            <section className="flex flex-col gap-y-2 items-center">
                <h3 className="font-bold">Contacto</h3>
                <section className="flex gap-2 items-center">
                    <Whatsapp/>
                    <span>Whatsapp</span>
                </section>
                <section className="flex gap-2 items-center">
                    <Phone/>
                    <span>5567892345</span>
                </section>
                <section className="flex gap-2 items-center">
                    <Mail/>
                    <span>clinicadental@cdental.com</span>
                </section>
            </section>
            <section className=" flex flex-col gap-y-3 items-center">
                <h3 className="font-bold">Nosotros</h3>
                <span>Quienes somos</span>
                <span>Opiniones</span>
                <span>Bolsa de trabajo</span>
            </section>
            <section className="flex flex-col gap-y-3 sm-items-center">
                <h3 className="font-bold">Metodos de pago y facturación</h3>
                <section className="flex flex-col gap-y-3 items-center">
                    <p>Descubre nuestras promociones</p>
                    <p>Genera tu factura</p>
                    <p>Obtén una membresía</p>
                </section>
            </section>
        </FooterStyled>
    )
}
export default Footer;