import styled from "styled-components"

const UsEctionContainer=styled.section`
 display: flex;
 margin-bottom: 3rem;
 padding: 2rem;
 gap: 2.5rem;
 @media screen and (max-width:1160px) {
    flex-direction: column;
 }

`
const UsEctionContainerSR=styled.section`
 display: flex;
 margin-bottom: 3rem;
 padding: 2rem;
 gap: 2.5rem;
 @media screen and (max-width:1160px) {
    flex-direction: column-reverse;
 }
`
const InfoSection=styled.section`
    flex: 50%;
    h3{
        font-family: "Poppins", 'serif';
        font-size: 3em;
        color: #58879e;
        text-align: center;
    }
    p{
        font-family: "Poppins",'serif';
        font-size: 2em;
        text-align: justify;
    }
`
const ImgSection=styled.section`
    flex: 50%;
`
const ImgUs=styled.img`
    border-radius: 48px;
    width: 100%;
    object-fit: cover;
`
const LastSection=styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

`
const ImgLatsContainer=styled.section`
    width: 80%;
    margin: 0 auto;
    background-color: #8ba5b1;
    border-radius: 48px;
`
const ImgLast=styled.img`
    opacity: 0.25;
    border-radius: 48px;
`
const LastSectionCont=styled.section`
    position: absolute;
    width: 62%;
    text-align: center;
    h3{
        font-family: "Poppins", 'serif';
        font-size: 3em;
        color: #33505f;
        @media screen and (max-width:890px) {
            font-size: 1.6rem;
        }
    }
    p{
        font-family: "Poppins",'serif';
        font-size: 2em;
        text-align: center;
        @media screen and (max-width:890px) {
            font-size: 1.2rem;
        }
        @media screen and (max-width:440px) {
            display: none;
        }
    }
`
export {
    UsEctionContainer, 
    UsEctionContainerSR,
    InfoSection,
    ImgSection, 
    ImgUs, 
    ImgLatsContainer, 
    ImgLast,
    LastSectionCont, 
    LastSection,
};