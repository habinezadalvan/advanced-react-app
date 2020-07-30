import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { Router } from "@reach/router";
import LandingPage from "./LandingPage";
import Footer from "./footer";
import Header from "./header";
import Team from "./team";
import OurProcess from "./process";
import PageNotFound from "./notFound";

const App = () => {
  const [ref, inView, entry] = useInView({
    rootMargin: "10px 0px",
    triggerOnce: true,
  });
  return (
    <Fragment>
      <Header />
      <Router>
        <LandingPage path="/" referance={ref} inView={inView} entry={entry} />
        <Team path="team"/>
        <OurProcess path ='process/:processId'/>
        <PageNotFound default/>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
