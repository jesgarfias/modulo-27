import styled from "styled-components";
const BanerOneMainContainer=styled.section`
        position: relative;
        top: 90px;
`
const BanerFirstContent=styled.section`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`
const ImgContentFirst=styled.div`
    flex: 50%;
    @media screen and (max-width: 880px){
        flex: none;
        width: 85%;
    }
`
const ImgFirst=styled.img`
    width: 100%;
    object-fit: cover;
`
const BanerFirstText=styled.p`
    flex: 50%;
    width: 100%;
    font-size: 3em;
    font-family: "Poppins", serif;
    text-align: center;
    padding: 1rem;
    @media screen and (max-width: 400px){
        font-size: 2em;
        padding: 0.3rem;
    }
`
const BanerSecondText=styled.section`
display: flex;
justify-content: center;
`
const FirstText=styled.p`
    font-family: "Poppins",serif;
    font-size: 3em;
    padding: 1rem;
    margin: 0.8rem;
    @media screen and (max-width:1250px) {
        text-align: center;
    }
    @media screen and (max-width: 1000px){
        font-size: 2rem;
    }
`
export {BanerOneMainContainer,
        BanerFirstContent,
        BanerFirstText, 
        ImgContentFirst, 
        ImgFirst, 
        FirstText,
        BanerSecondText};