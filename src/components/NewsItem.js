import React, { Component } from 'react'


export class NewsItem extends Component {
 
  render() {
    // title and description using as props
    let {title,description,imageUrl,newsUrl}= this.props
    return (
        <div className="card m-2" style={{"width": "18rem"}}>
        <img src={!imageUrl?"https://www.reuters.com/resizer/1dTvCo1H_rGcukR1Bi1DizCS6ig=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EDHYTSPMRJL6LA6SMPN4QJXHHU.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} className="btn btn-sm btn-dark">Read-More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem