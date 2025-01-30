import styled from "styled-components"

const UsFacilitiesContainer=styled.section`
 display: flex;
 margin-bottom: 3rem;
 padding: 2rem;
 gap: 2.5rem;
 @media screen and (max-width:1160px) {
    flex-direction: column;
 }

`
const UsFacilitiesContainerModifie=styled.section`
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
const UsFacilitiesContainerMotion=styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

`
const FacilitiesImgContainer=styled.section`
    width: 80%;
    margin: 0 auto;
    background-color: #8ba5b1;
    border-radius: 48px;
`
const FacilitiesImg=styled.img`
    opacity: 0.25;
    border-radius: 48px;
`
const FacilitiesTextContainer=styled.section`
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
    UsFacilitiesContainer,
    UsFacilitiesContainerModifie,
    UsFacilitiesContainerMotion,
    InfoSection,
    ImgSection, 
    ImgUs, 
    FacilitiesImgContainer,
    FacilitiesImg,
    FacilitiesTextContainer,
};