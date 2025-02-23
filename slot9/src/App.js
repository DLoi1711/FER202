import logo from './logo.svg';
import './App.css';
import React from "react";
import NameList from './components/NameList';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import { Container, Row, Col } from "react-bootstrap"; 
import StudentCard from "./components/StudentCard"; 

function App() {
  const userData = { name: "loidqhe170231@fpt.edu.vn", age: 21};
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [ 
    { name: "loidqhe170231@fpt.edu.vn", age: 21, avatar: "/images/student1.jpg" }, 
    { name: "loidqhe170231@fpt.edu.vn", age: 18, avatar: "/images/student2.jpg" }, 
    { name: "loidqhe170231@fpt.edu.vn", age: 22, avatar: "/images/student3.jpg" }, 
  ]; 
  return (
    <div className="App">
      <Welcome name="loidqhe170231@fpt.edu.vn"/>
      <UserProfile user={userData}/>
      <NameList names={namesList}/>
    </div>
  );
}

export default App;
