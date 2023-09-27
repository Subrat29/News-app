import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import { 
    BrowserRouter,
    Route,
    Routes, 
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5
  apiKey = process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0
  }

  setProgress = async (progress) =>{
    this.setState({progress: progress})
  }

  // render method first compile js and render html written below on screen=
  render() {
    return (
      <div>
        <BrowserRouter>

          <NavBar />

          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
         />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"> </News>}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"> </News>}></Route>
            <Route exact path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"> </News>}></Route>
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"> </News>}></Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"> </News>}></Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"> </News>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}