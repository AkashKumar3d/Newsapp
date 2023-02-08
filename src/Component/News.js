import React, {useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { useAsyncError } from 'react-router-dom';


const News = (props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

 

  
  useEffect (() => {
  document.title=`${capitalizeFirstLetter(props.category)}- Topheadline `
  upadatepage()

  }, [])



  // update function
  const upadatepage= async ()=>{
    props.setprogress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page}`
    props.setprogress(20)
    setloading(true)
    props.setprogress(40)
    let {articles}=await fetch(url)
    .then((response) => response.json())
    .then(data => {
      // console.log(typeof data)
      return data
     
    })
    props.setprogress(80)
    setarticles(articles)
    settotalResults(totalResults)
    setloading(false)
    props.setprogress(100)
   }

  // function to privious button 
  // const handletoprivious= async ()=>{
    // setpage(page - 1)
  // upadatepage()
  // }

  // // function to next button
  // const handeltonext= async ()=>{
    // setpage(page + 1)
  // upadatepage()
  // } 

   const fetchMoreData = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page+1}`
    setpage(page + 1)
    let {articles}=await fetch(url)
    .then((response) => response.json())
    .then(data => {
      // console.log("nnnnnnnnnn",data)
      return data
     
    })
    setarticles(articles.concat(articles))
    settotalResults(articles.totalResults)
    setloading(false)

  }
 
    return (
      <>
         <h1 className='text-center ' style={{margin:"55px 0px"}}> Todays News from {capitalizeFirstLetter(props.category)} </h1>

         {/* spinner  */}
         {loading && <Spinner/>}

        {/* single page scrollbar  */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className="container">
         <div className="row">
          {/* looping the all value of map function  */}
         {articles.map((value)=>{
            return <div className="col-md-4 my-2" key={value.url}>
            <Newsitem  title={value.title} description={value.description} imageurl={value.urlToImage} newsurl={value.url} author={value.author} date={value.publishedAt} source={value.source.name}/>
            </div>
         })}  
        </div>
        </div>
        </InfiniteScroll>

        {/* privious and next button container  */}
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-2" onClick={this.handletoprivious}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark my-2" onClick={this.handeltonext}>Next &rarr;</button>
        </div> */}
      </>
    )
  
}

  //  setting the default props 
    News.defaultProps={
      country: "in",
      category: "general",
      pagesize: "6"
    }

  // setting the  propstype 
    // News.propTypes = {
    //   country: PropTypes.string,
    //   category: PropTypes.string,
    //   pageSize: PropTypes.Number
      
    // };

    export default  News;