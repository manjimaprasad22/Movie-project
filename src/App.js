import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createContext, useEffect, useState } from 'react';
import {imageUrl, ComedyMovies, PopularMovies, LatestMovies} from './Url'
import axios from 'axios';


function App() {

const menu=()=>{
  // var x = document.getElementById("myTopnav");
  // if (x.className === "linkk") {
  //   x.className += " responsive";
  // } else {
  //   x.className = "met";
  // }
//   return(
// <li>
//   <ul><Link to="/Latest">Latest</Link></ul>
//   <ul><Link to="/Popular">Popular</Link></ul>
//   <ul><Link to="/Comedy">Comedy</Link></ul>
// </li>)
}
  // const [movie,setmovie]= useState([]);
  // const [random, setrandom] = useState({})
  // useEffect(() => {
  
    
  //   axios.get(ComedyMovies).then((res)=>{
  //     setmovie(res.data.results)
  //     const randomNo = Math.abs(Math.floor(Math.random() * (20-1+1)+1 ));
  //     setrandom(res.data.results[randomNo-1])
  //   })
    
  // }, [])
  
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark"  className='navb'>
        <Container  >
          <Nav className="me-auto" id='myTopnav'>
          <Navbar.Brand href="/">Movies</Navbar.Brand>
           <Nav > <Link to="/Latest" className='linkk'>Latest</Link></Nav>
           <Nav> <Link to="/Popular" className='linkk'>Popular</Link></Nav>
            <Nav><Link to="/Comedy" className='linkk'>Comedy</Link></Nav></Nav>
            {/* <Nav className='resp'><button className='btn' onClick={menu()}><img src='https://www.citypng.com/public/uploads/small/31634946136ladzeji1gfh7vjajgmykpzjzuy9tv05vhxhgf45np7nyqtrbba7t1iqdbl06ba6y04fqsxnqxua4psvza3obbruuqaanolk3d4lz.png'
             className='menu'/></button></Nav> */}
           
          
        </Container>
      </Navbar>

      
    

      <div>
    
        {/* <img src={imageUrl + random.poster_path}
        style={{width:"900px" , height:"600px" ,margin:"30px" ,border:"5px solid black"} }/> */}
        
      </div>

    </div>
  );
}

export default App;

