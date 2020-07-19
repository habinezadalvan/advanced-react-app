import React, {Fragment} from 'react';
import {useInView} from 'react-intersection-observer';
import LandingPage from './LandingPage';



const App = () => {
    const [ref, inView, entry] = useInView({rootMargin: '10px 0px', triggerOnce: true})
    return (
        <Fragment>
            <LandingPage referance={ref} inView={inView} entry={entry}/>
        </Fragment>
    )
}

export default App;