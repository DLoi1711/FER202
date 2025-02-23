import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
};

export default App;
