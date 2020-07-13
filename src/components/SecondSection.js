import React from 'react';
import '../styles/secondSection.css';
import BigCard from './BigCard';


const SecondSection = ({images, input}) => {
    return(
        <section>
            <div id="next-view">
                <BigCard images={images} input={input} />
            </div>
        </section>
    )
}

export default SecondSection;