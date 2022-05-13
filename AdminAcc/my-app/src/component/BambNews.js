import React, { useEffect, useState } from 'react'
import getNews from '../services/getNews';
// import newsservice from '../services/newsservice';
import Newsitm from './Newsitm'
import UpdateNews from './UpdateNews'
import './Bamboo.css'
export default function () {
    let getnews;
    let[news,setNews]=useState({getnews :[]});
  useEffect(() => {
   getNews().then((resp)=>{
       setNews({getnews : resp.data})
   })
  }, [])
  return (
    <>
    <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div><nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><h2 className='container'><center>News Update Portal for Admin</center></h2></span>
  </div>
</nav>
<br /><br />
          <div className='container'>
              <p>
                  <button className="btn btn-warning text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Update News
                  </button>
              </p>
              <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                      <UpdateNews />
                  </div>
              </div>
        </div>
        <div className='container my-4'>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><h2 className='container'><center>News for Users</center></h2></span>
  </div>
</nav>
<br />
<br />
            <div className="row">
                {
                    news.getnews.map((e)=>(
                <div className="col-md-4">
                    <Newsitm key={e.id} id={e.id}imgurl={e.imgurl} headline={e.headline} newsDescp={e.newsDescp} newsDate={e.newsDate}/>
                </div>
  ))
                } 
            </div>
        </div>
    </>
  )
}
