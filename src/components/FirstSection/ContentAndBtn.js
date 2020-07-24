import React from 'react';
import BgButton from '../common/BgButton';

const ContentAndBtn = () => {
    return(
        <div className="content-btn">
        <div className="content-btn__content">
          <h1>Turning world into digital.</h1>
        </div>
        <div className="content-btn__btn">
          <BgButton classname="bg-btn" />
        </div>
    </div>
    )
}

export default ContentAndBtn;