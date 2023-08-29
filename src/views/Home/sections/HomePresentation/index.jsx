import { StyledHomePresentation, Title, Container } from './styles/homePresentation.styled'
import Presentation from "../../../../components/Presentation";

const HomePresentation = () => {
    return (
        <StyledHomePresentation>
            <Container>
                <Title>
                    Возможности для участников
                </Title>
                <Presentation />
            </Container>
        </StyledHomePresentation>
    )
}

export default HomePresentation;