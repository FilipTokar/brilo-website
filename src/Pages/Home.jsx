import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import ImageWithText1 from "../Components/ImageWithText1";
import ImageWithText2 from "../Components/ImageWithText2";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <ImageWithText1 />
      <ImageWithText2 />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
