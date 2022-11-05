import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {imageUrl, LatestMovies} from './Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { NewContext } from './RouteComp';

const Latest = () => {
  const {value3}= useContext(NewContext)
  const [movie,setmovie]= value3;
 
  
  return (
    <div className='row' style={{minWidth:"500px"}}>
      {movie.map((mov)=>{
        return(
          <Card style={{ width: '17rem', margin:"10px"}}className='card'>
            <Link to={'/film/'+mov.id} className='cardtext'>
          <Card.Img variant="top" src={imageUrl + mov.poster_path} 
          style={{ width:"70%", height:"200px"}}/>
          <Card.Body>
            <Card.Title className='cardtext'>{mov.title}</Card.Title>
            {/* <Card.Text>
            <b>Released On:</b> {mov.release_date}
            </Card.Text>
            <Card.Text>
            <b>Released On:</b> {mov.overview}
            </Card.Text> */}
          </Card.Body>
         </Link>
        </Card>
        )
      })}

    </div>
  )
}

export default Latest