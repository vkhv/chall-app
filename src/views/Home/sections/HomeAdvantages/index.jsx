import { StyledHomeAdvantages, Container, Inner, Column, Image, Title, Decor } from './styles/homeAdvantages.styled';
import { useState, useEffect } from 'react';
import waves from '../../../../assets/images/waves.png'
import advantages from '../../../../assets/images/advantages.png'
const HomeAdvantages = () => {
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
        <StyledHomeAdvantages>
            <Container>
                <Inner>
                    <Column>
                        <Image 
                            src={waves}
                            $marginBottom={screenWidth < 1085 ? '6px' : '13px'}
                            $width={screenWidth < 1085 ? '30px' : '50px'}
                        />
                        <Title>
                            <Decor>Возможность не думать о: </Decor>Мотивации, статистике, отчетах
                        </Title>
                    </Column>
                    <Image 
                        src={advantages}
                        $position='center'
                        $width={screenWidth < 1085 ? '280px' : '570px'}
                    />
                </Inner>
                </Container>
        </StyledHomeAdvantages>
    )
}

export default HomeAdvantages;