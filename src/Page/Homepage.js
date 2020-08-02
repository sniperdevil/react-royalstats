import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
class Homepage extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <Jumbotron />
        <Features />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
