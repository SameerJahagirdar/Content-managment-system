import React from 'react'
export default function Newsitm(props) {
  return (
    <>
          <div className="card" style={{width: "18rem"}}>
              <img src={props.imgurl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>{props.newsDate.slice(0,10)}</h6>
                  <h5 className="card-title">{props.headline.slice(0,20)+"..."}</h5>
                  <p className="card-text">{props.newsDescp.slice(0,100)+"..."}</p>
                  <a href="/" className="btn btn-primary">Read More</a>
              </div>
          </div>
    </>
  )
}