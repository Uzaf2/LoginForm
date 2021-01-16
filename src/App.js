import './App.css';
import  Form  from "react-bootstrap/Form";
import  Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  var style = {
    color: "#FFFAF0",
    background: "#2F4F4F",
    height: "70px",
    width: "100%"
  };

  var style2 = {
    color: "white",
    background: "#000000",
    height: "50px"
  };
  
  return (
    
    <div className="main">
       <Navbar bg="dark" variant="dark" style={style2}></Navbar>
       <p className="heading"> Social Media Application </p>
    <div className="App">
      <div class="div1">
      <div class="formDiv1">
     <input type="text" class= "name" name="name" placeholder="Your name" required/>
     <input type="text" class="email" name="email" placeholder="Your Email" required/>
     <input type="password" class="password" name="password" placeholder="Password" required/>
        <input type="password" class= "password" name="confirmPassword" placeholder="Confirm Password" required/>
        <input type="submit" class="btn1" value="SIGN UP"/> 
      </div>
      </div>

      <div class="div2">
        <div class="formDiv2">
          <p className="LoginHeading">Login</p>
     <input type="text" class= "email" name="email" placeholder="Your Email" required/>
     <input type="password" class="password" name="password" placeholder="Password" required/>
        <input type="submit" class="btn2" value="LOGIN"/> 
      </div>
      </div>


    </div>
    </div>
  );
}

export default App;
