import { StyledHomeBusiness, Container, Inner, Title, Decor, Image } from './styles/homeBusiness.styled';
import business from '../../../../assets/images/business.png';
const HomeBusiness = () => {
    return (
        <StyledHomeBusiness>
            <Container>
                <Inner>
                    <Title>
                        <Decor>Достичь бизнес-цели</Decor> или выполнить бизнес-план <Decor>своей командой</Decor>  
                    </Title>
                    <Image
                        src={business}
                    />
                </Inner>
            </Container>
        </StyledHomeBusiness>
    )
}

export default HomeBusiness;