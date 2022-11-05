import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {imageUrl, ComedyMovies} from './Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { PopularContext } from './Popular';
import { NewContext } from './RouteComp';
// value3:[latest, setlatest]
const Overview = () => {
  

  const param = useParams().id
  const {value1,value2,value3,ishide}= useContext(NewContext)
  const [hide,sethide] = ishide
  
  const [movie,setmovie]= useState([])
  useEffect(() => {
    sethide(false)
    const [latest, setlatest] = value3 
    const [pop, setpop] =value2
    const [comedy, setcomedy] = value1
    setmovie([...latest,...pop,...comedy])
    console.log(movie);
    console.log(param);
  }, [value1,value2,value3])
  // const [movie,setmovie]= useState([]);
  // useEffect(() => {
  //     axios.get(url).then((res)=>{
  //           setmovie(res.data.results)
  //         })
  //   }, [movie])
    
    return (
      <div className='row'style={{color:'white' , height:"100%"}}>
       {movie.filter((item)=>item.id===parseInt(param)).map(val=>{
        return(
          <div className='over'>
             <div className='oleft'>
              <h1 id='fstyle'>{val.title || val.name}</h1>
              <img src={imageUrl+ val.poster_path} 
              style={{width:'80%',height:'500px', marginLeft:'4%'}}></img>
             </div> 

              <div className='oright'>
                <p >Released on : { val.release_date || val.first_air_date }</p>
                <p >Rating : {val.vote_average}/10</p>

                  <div>
                    <h3>Overview :</h3>
                    <p>{val.overview}</p>
                  </div>
              </div>
          </div>
        )
       })}
      </div>
    )
}

export default Overview