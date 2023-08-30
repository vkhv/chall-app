import { StyledHomeExclude, Inner, Container, Column, Title, Decor, Text, Image } from './styles/homeExclude.styled';
import { useState, useEffect } from 'react';
import waves from '../../../../assets/images/waves.png'
import exclude from '../../../../assets/images/exclude.png'

const HomeExclude = () => {
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
        <StyledHomeExclude>
            <Container>
                <Inner>
                    <Column>
                        {screenWidth > 1085 && <Image src={waves} $marginBottom='13px'/>}
                        <Title>
                            <Decor>Возможность исключения</Decor> неактивных участников без негатива 
                        </Title>
                        <Text>
                            Автоматическое удаление участников, которые не проявляют активновность, без необходимости лично удалять из чата
                        </Text>
                    </Column>
                    <Image 
                        src={exclude}
                        $width={screenWidth < 1085 ? '300px' : '630px'}
                    />
                </Inner>
            </Container>
        </StyledHomeExclude>
    )
}

export default HomeExclude;