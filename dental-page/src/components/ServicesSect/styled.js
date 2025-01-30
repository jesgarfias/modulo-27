import styled from "styled-components";

const ServicesMainContainer=styled.section`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
row-gap: 2rem;
margin: 2rem 0rem;
`
const ServicesElement= styled.section`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1rem;
    border: 2px solid #111;
    border-radius: 5px;
    font-family: "Poppins", serif;
    font-size: 1.3em;
    row-gap: 2rem;
    background-color: #e5e7e9;
`
const ServicesTitle=styled.h3`
    font-weight: 600;
    color:#44A5B6 ;
`
export {ServicesMainContainer, ServicesElement, ServicesTitle};