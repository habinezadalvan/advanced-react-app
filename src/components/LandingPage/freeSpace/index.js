import React from 'react';


const FreeSpace = ({children}) => {
    return(
        <div className="free-section" id="free_section">
             <div className="free-section__left">
            {children}
            </div>
            <div className="free-section__right">
            </div>
        </div>
    )
}

export default FreeSpace;