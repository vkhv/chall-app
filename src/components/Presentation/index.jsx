import { StyledPresentation, Column, Text, Thumb, Progress, Row, Image, } from "./styles/presentation.styles";
import { useState, useEffect } from "react";

const Presentation = () => {

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

    const slides = [
        {
            text: 'Внедрение привычек,  достижение целей, идей',
            img: 'src/assets/images/presentation_1.png',
            visible: true,
        },
        {
            text: 'Сообщество единомышленников + новые знакомства',
            img: 'src/assets/images/presentation_1.png',
            visible: screenWidth > 1085 && true,
        },
        {
            text: 'Раскрытие собственного потенциала + научиться чему-то новому',
            img: 'src/assets/images/presentation_1.png',
            visible: screenWidth > 1085 && true,
        },
    ]

    return (
        <StyledPresentation>
            <Row>
                {slides.map((slide, index) => (
                    slide.visible && <Column key={index}>
                        <Text>{ slide.text }</Text>
                        <Thumb>
                            <Progress />
                        </Thumb>
                        <Image src={slide.img} />
                    </Column>
                ))}
            </Row>
        </StyledPresentation>
    )
};

export default Presentation;