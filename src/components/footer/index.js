import React from "react";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-and-content">
        <div className="footer__logo">
          <div className="footer__logo--container">
            <Logo />
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__content--line">
            <div className="invisible-div" ><h4 className="invisible">Contact us</h4></div>
            <div className="line"></div>
          </div>
          <div className="footer__content--info">
            <div className="footer__info">
              <h4 className="phone-invisible">Contact us</h4>
              <p>sms/call/whatsap: +25078000000</p>
              <p>digitolabs@gmail.com</p>
              <p>KK 319 ST, Kigali, Kicukiro, Niboyi</p>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__free-space">
      <p>@Digito 2020</p>
      {/* <div className="footer__free-space--left "></div>
        <div className="footer__free-space--right">
         
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
