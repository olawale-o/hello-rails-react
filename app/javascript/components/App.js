import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types"
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Greeting />} />
        </Routes>
      </Router>
    );
  }
}

export default App
