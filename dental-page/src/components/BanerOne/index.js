import Tratamiento from '../../assets/Tratamiento.png'
import { BanerFirstContent, BanerFirstText, BanerOneMainContainer, BanerSecondText, FirstText, ImgContentFirst, ImgFirst, SpanMark } from './styles';
const BanerOne=()=>{
    return(
        <BanerOneMainContainer>
            <BanerFirstContent>
                <ImgContentFirst>
                    <ImgFirst src={Tratamiento} alt='Tratamiento dental'/>
                </ImgContentFirst>
                <BanerFirstText>
                    Tratamientos dentales para toda la familia en un mismo lugar
                </BanerFirstText>
            </BanerFirstContent>
            <BanerSecondText>
                <FirstText>
                    <SpanMark>+10 años</SpanMark> atendiendo a pacientes en todo México
                </FirstText>
            </BanerSecondText>
        </BanerOneMainContainer>
    )
}
export default BanerOne;