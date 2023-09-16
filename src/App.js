import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { 
    BrowserRouter,
    Route,
    Routes, 
} from "react-router-dom";

export default class App extends Component {
  // render method first compile js and render html written below on screen

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={8} country="in" category="general"> </News>}></Route>
            <Route exact path="/Business" element={<News key="business" pageSize={8} country="in" category="business"> </News>}></Route>
            <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={8} country="in" category="entertainment"> </News>}></Route>
            <Route exact path="/General" element={<News key="general" pageSize={8} country="in" category="general"> </News>}></Route>
            <Route exact path="/Health" element={<News key="health" pageSize={8} country="in" category="health"> </News>}></Route>
            <Route exact path="/Science" element={<News key="science" pageSize={8} country="in" category="science"> </News>}></Route>
            <Route exact path="/Sports" element={<News key="sports" pageSize={8} country="in" category="sports"> </News>}></Route>
            <Route exact path="/Technology" element={<News key="technology" pageSize={8} country="in" category="technology"> </News>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}