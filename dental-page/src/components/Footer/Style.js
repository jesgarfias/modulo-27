import styled from "styled-components";
const FooterStyle=styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #70abc7;
    font-size: 1em;
    font-family: "Poppins", serif;
    padding: 1rem;
    @media screen and (max-width:880px) {
        flex-direction: column;
    }
`
const FooterLogo=styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export {FooterStyle, FooterLogo};