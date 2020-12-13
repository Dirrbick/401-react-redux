import React from "react";

// Dependancies
import { Route } from "react-router-dom";

// Files
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Storefront from "./components/storefront/storefront.js";


function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path='/' component={Storefront} />
      </main>
      <Footer />
    </>
  );
}

export default App;
