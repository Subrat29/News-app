import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  //props types
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
  }

  static propsProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  // 1st constructor - its runs sabse phle
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1
    };
  } 


  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdd705d6e7b940068869ddcdbab42604&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
      });
  }

  // 3rd componentDidMount is run after the render method run or run at last
  // ye hi api se news lekar ayega maam
  async componentDidMount(){
    this.updateNews();
  }

  handlePreviousClick = async ()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  // 2nd then render runs
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApp - Top Headlines</h1>

          {/* For loading GIF */}
          {this.state.loading && <Spinner/>}          

            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    // title={element.title?element.title.slice(0,45):""}
                    // description={element.description?element.description.slice(0,70):""}
                    title={element.title?element.title:""}
                    description={element.description?element.description:""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>;
              })}
            </div>

            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>

      </div>
    );
  }
}

export default News;
