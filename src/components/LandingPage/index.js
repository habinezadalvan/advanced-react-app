import React, {useEffect} from 'react';
import { useLocation } from '@reach/router';
import FirstSection from './FirstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import FifthSection from './fifthSection';
import SixthSection from './sixthSection';
import Box from './boxsection/Box';
import Heading from '../common/Heading';
import FreeSpace from './freeSpace';




const LandingPage = ({referance, inView, entry, pathname}) => {
    const location = useLocation();

    useEffect(() => {
        pathname(location.pathname);
    }, []);

    return (
        <div className="home-page">
         <FirstSection />
         <SecondSection />
         <FreeSpace>
            <Heading text1="how we do" text2="what we do" />
         </FreeSpace>
         <ThirdSection />
         <FourthSection referance={referance} inView={inView} entry={entry} />
         <Box />
         <FifthSection />
         <SixthSection />
        </div>
    )
}

export default LandingPage;