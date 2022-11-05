import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {imageUrl, PopularMovies} from './Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Overview from './Overview';
import { Link } from 'react-router-dom';
import { NewContext } from './RouteComp';


const Popular = () => {
  const {value2}= useContext(NewContext)
  const [movie,setmovie]= value2;
 
  return (
    <div className='row' >
      {movie.map((mov)=>{
        return(
          <Card style={{ width: '17rem',margin:"10px"}} className='card'>
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

export default Popular
