import styled from "styled-components";
const MapContainer=styled.section`
    width: 45%;
    @media screen and (max-width:920px){
    width: 100%;
}
`
const Map=styled.iframe`
filter: grayscale(90%);
border-radius: 10px;
width: 100%;
@media screen and (max-width:920px){
        width: 100%;
}  
@media screen and (max-width: 400px){
        width: 100%;
    }  
`
const ContacMainInfoContainer=styled.section`
display: flex;
margin: 1rem 1rem;
justify-content: space-around;
row-gap: 2.5rem;
@media screen and (max-width:920px){
    flex-direction: column;
}
@media screen and (max-width: 400px){
        flex-direction: column;
    }
`
const ContacInfoText=styled.section`
display: flex;
flex-direction: column;
row-gap: 2rem;
width: 50%;
border-radius: 10px;
padding: 2rem;

@media screen and (max-width: 920px){
        width: 100%;
        align-items: center;
    }
@media screen and (max-width: 400px){
        width: 100%;
        align-items: center;
    }
`
const DateButton=styled.button`
    width: 50%;
    background-color: #fff;
    color: #70abc7;
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", serif;
    border-radius: 25px;
    border: 2px solid #111 ;
    margin: 0 auto;
`
export{
    Map, 
    ContacMainInfoContainer, 
    ContacInfoText, 
    DateButton,
    MapContainer
};