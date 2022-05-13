import React , {useState}from 'react'
import newsservice from '../services/newsservice';

export default function UpdateNews() {
  const[date,setDate]=useState();
  const[imgurl,setImageurl]=useState();
  const[headline,setHeadline]=useState();
  const[descp,setDescp]=useState();

  const datehandler=((e)=>{
    setDate(e.target.value);
  })
  const imgurlhandler=((e)=>{
    setImageurl(e.target.value);
  })
  const headlinehandler=((e)=>{
    setHeadline(e.target.value);
  })
  const descphandler=((e)=>{
    setDescp(e.target.value);
  })
  const submit =((e)=>{
    e.preventDefault();
    let news = {imgurl:imgurl,headline:headline,newsDate:date,newsDescp:descp};
    console.log(JSON.stringify(news));
    newsservice(news).then(console.log("succesful"));
  })
  return (
    <form className="row g-3 needs-validation" noValidate onSubmit={submit}>
  <div className="col-md-3">
    <label htmlFor="validationCustom01" className="form-label">News Date</label>
    <input type="date" className="form-control" onChange={datehandler} id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom02" className="form-label">News Image URL</label>
    <input type="text" className="form-control" onChange={imgurlhandler} id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom02" className="form-label">News Headline</label>
    <input type="text" className="form-control" onChange={headlinehandler} id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom02" className="form-label">News Description</label>
    <input type="text" className="form-control" onChange={descphandler} id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-warning text-light" type="submit">Upload</button>
  </div>
</form>
  )
}
