import React, { Fragment, useState } from "react";
import LandingPage from "./LandingPage";
import Footer from "./footer";
import Header from "./header";

const App = () => {
  const [url, setUrl] = useState('');
  return (
    <Fragment>
      <Header url= {url}/>
     
        <LandingPage />

      <Footer />
    </Fragment>
  );
};

export default App;
