import {StyledHomeButtons, Image } from "./styles/homeButtons.styled";
import Button from "../../../../components/Button";

const buttons = [
    {
        title: 'App Store',
        imgPath: 'src/assets/images/appleStore.png',
        width: 'large',
        link: '#',
    },
    {
        title: 'Google Play',
        imgPath: 'src/assets/images/googlePlay.png',
        width: 'middle',
        link: '#',
    },
    {
        title: 'APK 7.0+',
        imgPath: 'src/assets/images/android.png',
        width: 'small',
        link: '#',
    }
];

const HomeButtons = ({ className }) => {
    return (
        <StyledHomeButtons className={className}>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    $width={button.width}
                    decoration={'dark'}
                    href={button.link}
                >
                    <Image src={button.imgPath} />
                    {button.title}
                </Button>
            ))}
        </StyledHomeButtons>
    )
};

export default HomeButtons;