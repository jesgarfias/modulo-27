import Tratamiento from '../../assets/Tratamiento.png'
import { BanerFirstContent, BanerFirstText, BanerOneMainContainer, BanerSecondText, FirstText, ImgContentFirst, ImgFirst} from './styles';
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
                     <span className='text-cyan-700'>+10 años </span>atendiendo a pacientes en todo México
                </FirstText>
            </BanerSecondText>
        </BanerOneMainContainer>
    )
}
export default BanerOne;