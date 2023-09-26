import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super()
        console.log("constructor was clicked")
       
        // setting state in constructor of  articles
        this.state={
          // first we were hving this.articles from articles.now we have  set the state to null
            articles:[],
            loading:false,
            page:1
        }
    }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=81f3614422b7467bbea309dcb1b88c25&page=1&pagesize=20"
    const data =await fetch(url)
    // Convert the data to json
    let parseData = await data.json();
    console.log(parseData)
    // we have setState from null to data which we have got from url
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    }
    handlePreviousClick=async()=>{
      console.log("prev")
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=81f3614422b7467bbea309dcb1b88c25&page=${this.state.page - 1}&pagesize=20`
    let data =await fetch(url)
    // Convert the data to json
    let parseData = await data.json();
    console.log(parseData)
    // we have setState from null to data which we have got from url
    this.setState({page:this.state.page - 1,articles:parseData.articles})
    
    }
    
    handleNextClick=async()=>{
      console.log("next")
      // 
      if (this.state.page + 1 > Math.ceil( this.state.totalResults / 20)) {
        
      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=81f3614422b7467bbea309dcb1b88c25&page=${this.state.page + 1}&pagsize=20`
      let data =await fetch(url)
      // Convert the data to json
      let parseData = await data.json();
      console.log(parseData)
      // we have setState from null to data which we have got from url
      this.setState({page:this.state.page + 1,articles:parseData.articles})
    }
   }
  render() {
    return (
      <div className='container my-3'>
      <h2>NewsMonkey -Top Headlines</h2>
      
<div className="row">
{this.state.articles.map((element)=>{
    
   return<div className="col md-3" key={element.url}>
<NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>
 })}  

</div>
<div className="container d-flex justify-content-between">
<button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick} > &larr; previous</button>
<button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next  &rarr;</button>

</div>
 </div> 
    )
  }
}

export default News