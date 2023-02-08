import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News  from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const   App=()=>{
  const apikey=process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
  
    return (
      <>
  <Router>
  <LoadingBar
        color='#f11946'
        height={3}
        progress={progress} 
        />
      <Navbar/>
    <Routes>
        <Route path='/' element={<News setprogress={setprogress} apikey={apikey} pagesize={6}  key="general"  category={"general"} country={"in"}/>}/>
        <Route path='/business' element={< News setprogress= {setprogress}  apikey={apikey}  pagesize={6}  key="business" category={"business"} country={"in"}/>}/>
        <Route path='/entertainment' element={< News setprogress= {setprogress} apikey={apikey}   pagesize={6} key="entertainment"  category={"entertainment"} country={"in"}/>}/>
        <Route path='/health' element={< News setprogress= {setprogress}  apikey={apikey}  pagesize={6} key="health"  category={"health"} country={"in"}/>}/>
        <Route path='/science' element={< News setprogress= {setprogress}  apikey={apikey}  pagesize={6} key="science"  category={"science"} country={"in"}/>}/>
        <Route path='/sports' element={< News setprogress= {setprogress}  apikey={apikey}  pagesize={6}  key="sports" category={"sports"} country={"in"}/>}/>
        <Route path='/technology' element={< News setprogress= {setprogress}  apikey={apikey}  pagesize={6} key="technology"  category={"technology"} country={"in"}/>}/>
     </Routes>
   </Router>
      </>
    )
}
export default  App;
