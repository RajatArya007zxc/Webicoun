import React from "react";
import Mobile from "./Component/Header/Mobile";
import { Route } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import Blogs from "./Component/Blogs/Blogs";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import Webinar from "./Component/Webinar/Webinar";
// import Footer from "./Component/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Mobile />

      <Route exact path="/">
        <Home />
        <Footer />
      </Route>

      <Route path="/blogs" component={Blogs} />
      <Route path="/webinar" component={Webinar} />
    </div>
  );
}
