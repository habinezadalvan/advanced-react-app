import React from 'react';
import '../styles/footer.css';


const Footer = (props) => {
    return(
        <div className="footer" id="footer">
            {props.children}
            <p>@2020</p>
        </div>
    )
}

export default Footer;