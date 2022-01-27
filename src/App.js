
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';


class App extends React.Component {
  

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<India />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </div>
    );
  }
}

export default App;
