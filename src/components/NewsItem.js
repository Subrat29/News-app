import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let{title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          {/* <img src={!imageUrl?"https://www.bigtextrailerworld.com/content/mu-plugins/bttw-inventory-manager/assets/img/NoPhotoAvailable.png":imageUrl} className="card-img-top" alt="..."/> */}
          <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230908170426-apple-wonderlust-iphone-15-event.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..."/>

              <div className="card-body">
                <h5 className="card-title">{title}...</h5>

                {/*Use Badge */}
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                  {source}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <p className="card-text"> {description}...</p>

                {/* Make date object and now u can use all js functions on it */}
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>

                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
              </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
