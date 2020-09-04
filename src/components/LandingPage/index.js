import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';




const LandingPage = () => {
    return (
        <div className="home-page">
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
       
        </div>
    )
}

export default LandingPage;