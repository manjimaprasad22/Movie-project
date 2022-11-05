import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {imageUrl, ComedyMovies} from './Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { NewContext } from './RouteComp';

const Comedy = () => {

  const[hide,sethide]=useState(false)
  const Show=()=>{
    sethide((e)=>!e)
  }
  const {value1}= useContext(NewContext)
  const [movie,setmovie]= value1

    
  
  return (
    <div className='row'>
      {movie.map((mov)=>{
        return(
          <Card style={{ width: '17rem', margin:"10px"}} className='card'>
            <Link to={'/film/'+mov.id} className='cardtext'>
          <Card.Img variant="top" src={imageUrl + mov.poster_path} 
          style={{ width:"70%", height:"200px"}}/>
          <Card.Body>
            <Card.Title className='cardtext'>{ mov.name}</Card.Title>
          </Card.Body>
          </Link>
        </Card>
        )
      })}

    </div>
  )
}

export default Comedy