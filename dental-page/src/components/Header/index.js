import Logo from "../../icons/Logo";
import "./style.css"
import { HeaderContact, HeaderDropMenu, HeaderLink, HeaderLogo, HeaderMenuIcon, HeaderNav, HeaderNavDropMenu } from "./styles";
import Phone from "../../icons/Phone";
import { useState } from "react";
import Menu from "../../icons/Menu";



const Header=()=>{
    const[color,setColor]=useState(false);
    const[isOpen,setIsOpen]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=138){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    return(
        <header className={color ? 'header header-bg': 'header'} >
            <HeaderLogo>
                <div>
                    <Logo/>
                </div>
                <div>
                    <p>CLinica dental</p>
                </div>
            </HeaderLogo>
            <HeaderNav>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="us">Nosotros</HeaderLink>
            </HeaderNav>
            <HeaderContact>
                <Phone/>
                <span>5567892345</span>
            </HeaderContact>
            <HeaderMenuIcon onClick={()=>setIsOpen(!isOpen)}>
                <Menu/>
            </HeaderMenuIcon>
            <HeaderDropMenu className={`${isOpen ? "visible opacity-100" : "hidden opacity-0" }`} >
                <HeaderNavDropMenu>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="us">Nosotros</HeaderLink>
                </HeaderNavDropMenu>
            </HeaderDropMenu>

        </header>
    )
}
export default Header;