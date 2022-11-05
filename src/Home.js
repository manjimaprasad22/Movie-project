import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import {imageUrl, ComedyMovies} from './Url'
import axios from 'axios';
import { NewContext } from './RouteComp';
const Home = () => {
 
  const [movie,setmovie]= useState([])
  const [random, setrandom] = useState({})
  useEffect(() => {
      
      
      axios.get(ComedyMovies).then((res)=>{
        setmovie(res.data.results)
        const randomNo = Math.abs(Math.floor(Math.random() * (20-1+1)+1 ));
        setrandom(res.data.results[randomNo-1])
      })
      
    }, [])
    
    return (
      <div className="App" >
         {/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Movies</Navbar.Brand>
            <Nav className="me-auto">
             <Nav > <Link to="/Latest" className='linkk'>Latest</Link></Nav>
             <Nav> <Link to="/Popular" className='linkk'>Popular</Link></Nav>
              <Nav><Link to="/Comedy" className='linkk'>Comedy</Link></Nav>
            </Nav>
          </Container>
        </Navbar> */}
        <div >
      
          <img src={imageUrl + random.poster_path}
          style={{width:"70%" , height:"600px" ,margin:"30px" } }/>
          
        </div>
  
      </div>
    );
  }
  

export default Home