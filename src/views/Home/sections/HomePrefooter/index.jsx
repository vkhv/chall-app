import { StyledHomePrefooter, Wrapper, Container, Inner, Column, Title, StyledHomeButtons, Image } from './styles/homePrefooter.styled';
import prefooter from '../../../../assets/images/prefooter.png'

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
                        <Image src={prefooter} />
                    </Inner>
                </Container>
            </Wrapper>
        </StyledHomePrefooter>
    )
}

export default HomePrefooter;