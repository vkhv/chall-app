import { StyledHomeBusiness, Container, Inner, Title, Decor, Image } from './styles/homeBusiness.styled';

const HomeBusiness = () => {
    return (
        <StyledHomeBusiness>
            <Container>
                <Inner>
                    <Title>
                        <Decor>Достичь бизнес-цели</Decor> или выполнить бизнес-план <Decor>своей командой</Decor>  
                    </Title>
                    <Image
                        src="src/assets/images/business.png"
                    />
                </Inner>
            </Container>
        </StyledHomeBusiness>
    )
}

export default HomeBusiness;