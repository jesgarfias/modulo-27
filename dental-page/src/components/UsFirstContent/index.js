import Especialistas from "../../assets/Especialistas.jpg"
import { ImgContainer, ImgStyled } from "./styled";
const UsFirstContent=()=>{
    return(
        <article>
            <ImgContainer>
                <ImgStyled src={Especialistas} alt="Especialistas"/>
            </ImgContainer>
        </article>
    )
}
export default UsFirstContent;