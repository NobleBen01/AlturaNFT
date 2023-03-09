import React from "react";
import Routers from "../routes/Routes";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;