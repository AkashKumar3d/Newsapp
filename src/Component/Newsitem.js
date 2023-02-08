import React from 'react'

const  Newsitem = (props)=> {
  
    // destructuring method we can create  the props variable in class base component 
    let {title, description, imageurl,newsurl, author , date, source } =props;
    return (
      <div>
      <div className="card" >
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{left: "90%"}}>
    {source}
  </span>
      <img src={imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text" ><small className="text-muted" style={{color: "red"}} >Last {author} on {new Date(date).toGMTString()} ago</small></p>
        <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div>
    </div>
    )
  
}
export default Newsitem;