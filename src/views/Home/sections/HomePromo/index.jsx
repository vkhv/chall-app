import { StyledHomePromo, Container, Inner, Column, Title, Decor, Image } from "./styles/homePromo.styled";
import { useState, useEffect } from 'react';
import HomeButtons from "../HomeButtons";

const HomePromo = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
        <StyledHomePromo>
            <Container>
                <Inner>
                    <Column>
                        <Title>
                            <Decor>Раскрой свой потенциал</Decor> и сформируй правильную привычку <Decor>вместе с нами!</Decor> 
                        </Title>
                        {screenWidth > 1085 && <HomeButtons />}
                    </Column>
                    <Image src="src/assets/images/promo.png" />
                    {screenWidth < 1085 && <HomeButtons />}
                </Inner>
            </Container>
        </StyledHomePromo>
    )
};

export default HomePromo;