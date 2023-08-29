import { StyledHome, StyledFooter} from './styles/home.styled';
import Header from '../../components/Header';
import HomePromo from './sections/HomePromo';
import HomePresentation from './sections/HomePresentation';
import HomeOrganizers from './sections/HomeOrganizers';
import HomeAdvantages from './sections/HomeAdvantages';
import HomeBusiness from './sections/HomeBusiness';
import HomeSample from './sections/HomeSample';
import HomeExclude from './sections/HomeExclude';
import HomeStatistics from './sections/HomeStatistic';
import HomePrefooter from './sections/HomePrefooter';

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <HomePromo />
            <HomePresentation />
            <HomeOrganizers />
            <HomeAdvantages />
            <HomeBusiness />
            <HomeSample />
            <HomeExclude />
            <HomeStatistics />
            <HomePrefooter />
            <StyledFooter />
        </StyledHome>
    )
};

export default Home;