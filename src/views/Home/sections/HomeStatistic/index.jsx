import { StyledHomeStatistics, Container, Inner, Title, Item, Count, Text } from './styles/homeStatistic.styled';

const HomeStatistics = () => {
    return (
        <StyledHomeStatistics>
            <Container>
                <Title>О нас в цифрах</Title>
                <Inner>
                    <Item>
                        <Count>100 000 +</Count>
                        <Text $fontSize='14px'>Активных пользователей</Text>
                    </Item>
                    <Item>
                        <Count>7 000 +</Count>
                        <Text $fontSize='14px'>Активных челленджей</Text>
                    </Item>
                    <Item>
                        <Count>37 000 +</Count>
                        <Text $fontSize='14px'>Завершили челлендж</Text>
                    </Item>
                </Inner>
            </Container>
        </StyledHomeStatistics>
    )
}

export default HomeStatistics;