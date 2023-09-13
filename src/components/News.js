import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  // 1st constructor - its runs sabse phle
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  // 3rd componentDidMount is run after the render method run or run at last
  // ye hi api se news lekar ayega maam
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bdd705d6e7b940068869ddcdbab42604&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
  }

  handlePreviousClick = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bdd705d6e7b940068869ddcdbab42604&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {
    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bdd705d6e7b940068869ddcdbab42604&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
  }
  }

  // 2nd then render runs
  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    // title={element.title?element.title.slice(0,45):""}
                    title={element.title?element.title:""}
                    // description={element.description?element.description.slice(0,70):""}
                    description={element.description?element.description:""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>;
              })}
            </div>

            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>

      </div>
    );
  }
}

export default News;
