import React from 'react';
import Header from './header';
import FirstSection from './FirstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import FifthSection from './fifthSection';
import SixthSection from './sixthSection';
import Footer from './footer';
import Box from './boxsection/Box';


const LandingPage = ({referance, inView, entry}) => {
    return (
        <div className="home-page">
         <Header />
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection referance={referance} inView={inView} entry={entry} />
         <Box />
         <FifthSection />
         <SixthSection />
         <Footer/>
        </div>
    )
}

export default LandingPage;