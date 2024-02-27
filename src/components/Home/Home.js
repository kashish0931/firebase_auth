import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
  return (
    <>
    <div>

   
    <h1>
      <Link to="/Login">Login</Link>
    </h1>
    <br/>
    <h1>
      <Link to="/Signup">Signup</Link>
      </h1>

      </div>

      <br/>
      <br/>
      <br/>
    <h2>{props.name ? `Welcome =${props.name}`: "login please"}</h2>
    </>
  );

}

export default Home;