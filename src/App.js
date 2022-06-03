import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/TextUtils-React/about" element={<About />} />
            <Route exact path="/TextUtils-React/contact" element={<Contact mode={mode} />} />
            <Route exact path="/TextUtils-React" element={<TextForm heading="Enter the text below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
