import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="bgColor">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderCurrentPage()}

        <Footer />
      </div>
    </>
  );
}

export default App;
