import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import App from './App'
import Comedy from './Comedy'
import Home from './Home'
import Latest from './Latest'
import Overview from './Overview'
import Popular from './Popular'
import Movie from './Movie'
import { ComedyMovies, LatestMovies, PopularMovies } from './Url'

const NewContext = createContext()

function RouteComp() {
  const [hide, sethide] = useState(true)
  const [comedy, setcomedy] = useState([])
  const [pop, setpop] = useState([])
  const [latest, setlatest] = useState([])
  useEffect(() => {
    axios.get(ComedyMovies).then((res)=>{
          setcomedy(res.data.results)
        })
  }, [])
  useEffect(() => {
    axios.get(PopularMovies).then((res)=>{
          setpop(res.data.results)
        })
  }, [])
  useEffect(() => {
    axios.get(LatestMovies).then((res)=>{
          setlatest(res.data.results)
        })
  }, [])
  return (
    <div>
<NewContext.Provider value={{value1:[comedy, setcomedy],value2:[pop, setpop],value3:[latest, setlatest],ishide:[hide,sethide]}}>
<BrowserRouter >
   {hide ? <App/>:""}
    <Routes>
      {/* <Route path="/Popular" element={<Popular/>}></Route>
      <Route path="/Comedy" element={<Comedy/>}></Route>
      <Route path="/Latest" element={ <Latest/>}></Route> */}
      <Route path='/film/:id'element={<Overview/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Popular' element={<Movie url={PopularMovies}/>}></Route>
      <Route path='/Latest' element={<Movie url={LatestMovies}/>}></Route>
      <Route path='/Comedy' element={<Movie url={ComedyMovies}/>}></Route>


    </Routes>
    </BrowserRouter>
  </NewContext.Provider>
    </div>
  )
}

export default RouteComp
export {NewContext}