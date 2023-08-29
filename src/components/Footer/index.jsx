import { StyledFooter, Inner, Row } from './styles/footer.styled';
import Logo from '../Logo/';
import Button from '../Button';
import Icon from '../Icon';

const icons = [
    {
        icon: 'icon-facebook',
        link: '#',
    },
    {
        icon: 'icon-vk',
        link: '#',
    },
    {
        icon: 'icon-instagram',
        link: '#',
    },
    {
        icon: 'icon-telegram',
        link: '#', 
    }
];

const Footer = ({ className }) => {
    return (
        <StyledFooter className={className}>
            <Inner>
                <Logo trademark/>
                <Row>
                    {icons.map((icon, index) => (
                        <Button
                            key={index}
                            href={icon.link}
                        >
                            <Icon iconName={icon.icon} />
                        </Button>
                    ))}
                </Row>
            </Inner>
        </StyledFooter>
    )
};

export default Footer;