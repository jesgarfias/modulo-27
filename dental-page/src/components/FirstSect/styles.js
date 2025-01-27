import styled from "styled-components";
const TitleSection=styled.h2`
    text-align: center;
    color: #58879e;
    font-family: "Poppins",serif;
    font-weight: 600;
    font-size: 4em;
    margin-top: 4rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 400px){
        font-size: 3em;
    }
`
const MainSection=styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 400px;
    justify-content: space-around;
    @media screen and (max-width: 400px){
        padding: 1rem;
        row-gap: 1rem;
    }
`
const ImgContent=styled.div`
    width: 16.75rem;
`
const ImgElement=styled.img`
    width: 100%;
`
const SpecialistContainer=styled.section`
    display: flex;
    flex-direction: column;
    width:25rem ;
    padding: 1rem;
    justify-content: space-around;
    align-items: center;
    font-family: "Poppins",serif;
    border: 2px solid   #58879e;
    border-radius: 15px;
    gap: 1rem;
    h2{
        font-weight: 600;
        text-align: center;
    }
    p{
        text-align: justify;
    }
`
const ContactInfo=styled.div`
    display: flex;
    gap: 1rem;
`
export{ ImgContent,
        ImgElement,
        SpecialistContainer, 
        MainSection, 
        TitleSection, 
        ContactInfo}