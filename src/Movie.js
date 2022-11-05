import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {imageUrl, PopularMovies} from './Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Overview from './Overview';
import { Link } from 'react-router-dom';
import { NewContext } from './RouteComp';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';


const Popular = ({url}) => {
    const [movie,setmovie]= useState([]);
    const {ishide}= useContext(NewContext)
    const [hide,sethide]= ishide
    const [test, settest] = useState({})
    const [search, setsearch] = useState("")
    useEffect(() => {
      sethide(true)
        axios.get(url).then((res)=>{
              setmovie(res.data.results)
              
            })
        axios.get("http://localhost:8000/test").then(({data})=>{
          console.log(data);
        })
      }, [movie])
//   const {value2}= useContext(NewContext)
 console.log(search);
  return (
    <div><MDBNavbar expand='lg' className='sear'>
    <MDBContainer fluid>
      <MDBCollapse navbar >
        <form className='d-flex input-group w-auto' onChange={(searching)=>{setsearch(searching.target.value)}}>
          <input type='search' className='form-control' placeholder='search movie' aria-label='Search' />
          <MDBBtn className='bttn'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" >
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          </MDBBtn>
        </form>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
    <div className='row' >
      {movie.filter((mov)=>(mov.title || mov.name).toLowerCase().includes(search.toLowerCase())).map((mov)=>{
        return(
          <Card style={{ width: '17rem',margin:"10px"}} className='card'>
            <Link to={'/film/'+mov.id} className='cardtext'>
          <Card.Img variant="top" src={imageUrl + mov.poster_path} 
          style={{ width:"70%", height:"200px"}}/>
          <Card.Body>
        
            <Card.Title className='cardtext'>{mov.title || mov.name}</Card.Title>
          </Card.Body>
          </Link>
        </Card>
        )
      })}

    </div>
    </div>
  )
}

export default Popular
