import { StyledHomeSample, Container, Inner, Column, Title, Decor, Image } from './styles/homeSample.styled';
import { useState, useEffect } from 'react';

const HomeSample = () => {
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
        <StyledHomeSample>
            <Container>
                <Inner>
                    <Column>
                        <Image 
                            src='src/assets/images/waves.png'
                            $width={screenWidth < 1085 ? '30px' : '50px'}
                            $marginBottom={screenWidth < 1085 ? '6px' : '13px'}
                        />
                        <Title>
                            <Decor>Возможность проверить гипотезу</Decor> масштабно и с минимальными усилиями
                        </Title>
                    </Column>
                    <Image
                        src="src/assets/images/sample.png"
                        $width={screenWidth < 1085 ? '298px' : '513px'}
                    />
                </Inner>
            </Container>
        </StyledHomeSample>
    )
}

export default HomeSample;