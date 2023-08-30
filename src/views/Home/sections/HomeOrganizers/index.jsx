import { StyledHomeOrganizers, Container, Column, Title, Subtitle, Decor, Image } from "./styles/homeOrganizers.styled";
import organizers from '../../../../assets/images/organizers.png'

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
                    <Image src={organizers}/>
                </Column>
            </Container>
        </StyledHomeOrganizers>
    )
}

export default HomeOrganizers;