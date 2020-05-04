import React from "react";

import Header from "./core/header/mat-nav";
import Footer from "./core/footer/footer";
import Landing from "./core/landing/landing";
import AddIndustryForm from "./components/industry/add-industry-form/add-industry-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <Landing />
      <AddIndustryForm />
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
