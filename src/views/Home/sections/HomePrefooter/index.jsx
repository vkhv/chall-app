import { StyledHomePrefooter, Wrapper, Container, Inner, Column, Title, StyledHomeButtons, Image } from './styles/homePrefooter.styled';
import HomeButtons from '../HomeButtons';

const HomePrefooter = () => {
    return (
        <StyledHomePrefooter>
            <Wrapper>
                <Container>
                    <Inner>
                        <Column>
                            <Title>Раскрой свой потенциал и сформируй правильную привычку вместе с нами!</Title>
                            <StyledHomeButtons />
                        </Column>
                        <Image src='src/assets/images/prefooter.png' />
                    </Inner>
                </Container>
            </Wrapper>
        </StyledHomePrefooter>
    )
}

export default HomePrefooter;