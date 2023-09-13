import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  // render method first compile js and render html written below on screen
  
  render() {
    return (
      <div>
        <NavBar></NavBar>

        <News></News>

      </div>
    );
  }
}
