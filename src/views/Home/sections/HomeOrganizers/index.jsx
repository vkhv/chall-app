import { StyledHomeOrganizers, Container, Column, Title, Subtitle, Decor, Image } from "./styles/homeOrganizers.styled";

const HomeOrganizers = () => {
    return (
        <StyledHomeOrganizers>
            <Container>
                <Title>
                    Возможности для организаторов
                </Title>
                <Column>
                    <Subtitle>
                        <Decor>Комфортная, удобная работа</Decor> со своей аудиторией  
                    </Subtitle>
                    <Image src="src/assets/images/organizers.png"/>
                </Column>
            </Container>
        </StyledHomeOrganizers>
    )
}

export default HomeOrganizers;