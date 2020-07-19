import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import allappleproductsgif from '../../assets/images/appleproducts.gif';
import screenshot from '../../assets/images/screenshot.png';



const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log('entry', entry);
                setVisible(entry.isIntersecting)
            })
        }, options);

        if(ref){
            observer.observe(ref)
        }

        return () => {
            if(ref){
                observer.unobserve(ref);
            }
        }

    }, [ref, options]);

    return [visible, setRef]
}



const WhatWeDoGraphic = ({referance, entry, inView}) => {

    const [visible, setRef] = useOnScreen({threshold: 1, triggerOnce: true});

    console.log('visble ---', visible);

    // console.log('inView', inView);
    // console.log('entry.intersectionRatio', entry && entry.intersectionRatio);
    // console.log('entry && entry.target.className', entry && entry.target.className);
    // console.log('entry', entry);

    // if (inView === true && (entry && entry.intersectionRatio > 0)){
    //     // console.log('HOOOLLLLLAAAA HOOOLLLLLAAA !!!!!!!');
    //     entry.target.style.animation = 'moveInLeft 2s forwards ease-out';
    // }


    const n = true;
    return(
        <div className={`fourth-section__image`} ref={setRef}>
          <img src={allappleproductsgif} alt="all apple products"/>
          <img src={screenshot} alt="screenshot" className="screenshot"/>
        </div>
    )
}

export default WhatWeDoGraphic;