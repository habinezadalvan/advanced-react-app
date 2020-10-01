import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import LandingPage from "./LandingPage";
import Footer from "./footer";
import Header from "./header";


const App = () => {
  const [url, setUrl] = useState('');
  return (
    <Fragment>
         <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Habineza Leon Christian</title>
        <meta
          name="description"
          content="Habineza Leon Christian is a professional software developer. He enjoys solving existing problems using technology."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header url= {url}/>
     
        <LandingPage />

      <Footer />
    </Fragment>
  );
};

export default App;
