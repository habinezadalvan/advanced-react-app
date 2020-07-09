import '../styles/home.css';
import '../styles/header.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import LandingPage from './LandingPage';

const useOnScreen = (options) => {
     const  [ref, setRef] = useState(null);
     const [visible, setVisible] = useState(false)

     useEffect(() => {

          const observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                    setVisible(entry.isIntersecting);
               });
          }, options);

          if (ref){
               observer.observe(ref)
          }

          return () => {
               if(ref) {
                    observer.unobserve(ref);
               }
          }

     }, [ref, options]);

     return [setRef, visible];
}
const Home = () => {

     const [setRef, visible] = useOnScreen({threshold: .1});

    return(
         <div 
          ref={setRef}
         >
          {
               visible ? (
               <LandingPage>
                    <Header/>
               </LandingPage>) 
               :(
               <LandingPage>
                         <Header classname ="header-bg-inverse"/>
               </LandingPage>
               )
          }
         </div>
    )
}

export default Home;