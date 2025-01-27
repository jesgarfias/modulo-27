import styled from 'styled-components'
import { Link } from 'react-router-dom'
const HeaderStyle= styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #44A5B6;
    font-size: 1em;
    font-family: "Poppins", serif;
    padding: 1rem;
`
const HeaderColor=styled.header`
    background-color: #111;
`
const HeaderLogo=styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
`
const HeaderNav=styled.nav`
    display: flex;
    width: 50%;
    justify-content: space-around;
    font-weight: 600;
    gap: 1rem;
    @media screen and (max-width: 950px){
        display: none;
    }
`
const HeaderLink=styled(Link)`
    color: #111;
    text-decoration: none;
    font-size: 1.5em;
    padding: 1.5rem;
    border-radius: 10px;
`
const HeaderContact=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 2px solid #111;
    border-radius: 25px;
    padding: 0.4rem;
    font-size: 1.3em;
    @media screen and (max-width: 950px){
        display: none;
    }
`
const HeaderMenuIcon=styled.div`
        cursor: pointer;
        @media screen and (min-width: 950px){
        display: none;
    }
`
const HeaderDropMenu=styled.div`
    background-color: #e5e7e9 ;
    position: absolute;
    top: 106px;
    left: 1px;
    width: 100%;
    transition: transform 0.5s ease-in-out, opacity .3s ease-in-out;
`
const HeaderNavDropMenu=styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.5rem;
`
export  {
    HeaderStyle, 
    HeaderLogo, 
    HeaderNav, 
    HeaderContact, 
    HeaderLink,
    HeaderMenuIcon,
    HeaderDropMenu,
    HeaderNavDropMenu
};