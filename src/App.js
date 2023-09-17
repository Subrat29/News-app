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
  pageSize = 5
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"> </News>}></Route>
            <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"> </News>}></Route>
            <Route exact path="/General" element={<News key="general" pageSize={this.pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"> </News>}></Route>
            <Route exact path="/Science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"> </News>}></Route>
            <Route exact path="/Sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"> </News>}></Route>
            <Route exact path="/Technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"> </News>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}