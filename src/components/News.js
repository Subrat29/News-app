import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

  // capitalize function
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 1st constructor - its runs sabse phle
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
      });
      this.props.setProgress(100);
  }

  async updateNews2(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false
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

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews2();
  };

  // 2nd then render runs
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApp - Top Headlines</h1>

          {/* loading GIF */}
          {this.state.loading && <Spinner/>}

          {/* Infinite scroll */}
          < InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >

            <div className="container">
                  <div className="row">
                    {/* {!this.state.loading && this.state.articles.map((element) => { */}
                    {this.state.articles.map((element) => {
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
            </div>
            </InfiniteScroll>

            {/* Previous and next buttons */}
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    );
  }
}

export default News;
