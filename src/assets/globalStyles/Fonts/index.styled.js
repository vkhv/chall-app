import { createGlobalStyle } from 'styled-components';

import MontserratExtraLightWoff from '../../fonts/Montserrat-ExtraLight.woff';
import MontserratExtraLightWoff2 from '../../fonts/Montserrat-ExtraLight.woff2';
import MontserratLightWoff from '../../fonts/Montserrat-Light.woff';
import MontserratLightWoff2 from '../../fonts/Montserrat-Light.woff2';
import MontserratThinWoff from '../../fonts/Montserrat-Thin.woff';
import MontserratThinWoff2 from '../../fonts/Montserrat-Thin.woff2';
import MontserratRegularWoff from '../../fonts/Montserrat-Regular.woff';
import MontserratRegularWoff2 from '../../fonts/Montserrat-Regular.woff2';
import MontserratMediumWoff from '../../fonts/Montserrat-Medium.woff';
import MontserratMediumWoff2 from '../../fonts/Montserrat-Medium.woff2';
import MontserratBoldWoff from '../../fonts/Montserrat-Bold.woff';
import MontserratBoldWoff2 from '../../fonts/Montserrat-Bold.woff2';
import MontserratBlackWoff from '../../fonts/Montserrat-Black.woff';
import MontserratBlackWoff2 from '../../fonts/Montserrat-Black.woff2';
import MontserratSemiBoldWoff from '../../fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from '../../fonts/Montserrat-SemiBold.woff2';

const Fonts = createGlobalStyle`

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBlackWoff2}) format('woff2'),
            url(${MontserratBlackWoff}) format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBoldWoff2}) format('woff2'),
            url(${MontserratBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratExtraLightWoff2}) format('woff2'),
            url(${MontserratExtraLightWoff}) format('woff');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegularWoff2}) format('woff2'),
            url(${MontserratRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratMediumWoff2}) format('woff2'),
            url(${MontserratMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratLightWoff2}) format('woff2'),
            url(${MontserratLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratSemiBoldWoff2}) format('woff2'),
            url(${MontserratSemiBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratThinWoff2}) format('woff2'),
            url(${MontserratThinWoff}) format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }
`

export default Fonts;