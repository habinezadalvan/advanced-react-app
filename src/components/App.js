import React, { Fragment, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Router } from "@reach/router";
import LandingPage from "./LandingPage";
import Footer from "./footer";
import Header from "./header";
import Team from "./team";
import OurProcess from "./process";
import PageNotFound from "./notFound";
import AdminPage from "./admin";

const App = () => {
  const [url, setUrl] = useState('');

  const [ref, inView, entry] = useInView({
    rootMargin: "10px 0px",
    triggerOnce: true,
  });

const pathname = (name) =>{
  setUrl(name);
};

  return (
    <Fragment>
      <Header url= {url}/>
      <Router>
        <LandingPage pathname={pathname} path="/" referance={ref} inView={inView} entry={entry} />
        <Team pathname={pathname} path="team"/>
        <OurProcess path ='process/:processId'/>
        <PageNotFound default/>
        <AdminPage path="admin" />
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
