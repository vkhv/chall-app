import {StyledHomeButtons, Image } from "./styles/homeButtons.styled";
import Button from "../../../../components/Button";
import appleStore from '../../../../assets/images/appleStore.png';
import googleStore from '../../../../assets/images/googlePlay.png'
import android from '../../../../assets/images/android.png';

const buttons = [
    {
        title: 'App Store',
        imgPath: appleStore,
        width: 'large',
        link: '#',
    },
    {
        title: 'Google Play',
        imgPath: googleStore,
        width: 'middle',
        link: '#',
    },
    {
        title: 'APK 7.0+',
        imgPath: android,
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