import { StyledHomeSample, Container, Inner, Column, Title, Decor, Image } from './styles/homeSample.styled';
import { useState, useEffect } from 'react';
import waves from '../../../../assets/images/waves.png'
import sample from '../../../../assets/images/sample.png'

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
                            src={waves}
                            $width={screenWidth < 1085 ? '30px' : '50px'}
                            $marginBottom={screenWidth < 1085 ? '6px' : '13px'}
                        />
                        <Title>
                            <Decor>Возможность проверить гипотезу</Decor> масштабно и с минимальными усилиями
                        </Title>
                    </Column>
                    <Image
                        src={sample}
                        $width={screenWidth < 1085 ? '298px' : '513px'}
                    />
                </Inner>
            </Container>
        </StyledHomeSample>
    )
}

export default HomeSample;