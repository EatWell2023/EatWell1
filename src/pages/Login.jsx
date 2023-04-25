import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer , toast  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  
  const [user,setUser]=useState({
    email:'',
    password:""
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  const submitHandler = async(e) => {

    

      toast.success("Logged in", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  
    
    e.preventDefault();
    console.log(user);
    const res=await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        email:user.email,
        password:user.password
      })
    });
    if(res.status===301){
      const resp=await res.json();
      const {message}=resp;
      console.log("Backed response",message);
      setUser({
        email:'',
        password:''
      })
      alert(`${message}`)
    }else if(res.status===200){
      const resp=await res.json();
      const {message}=resp;
      console.log("Backed response",message);
      setUser({
        email:'',
        password:''
      })
      alert(`${message}`)
    }else{
      console.log("error");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" >
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    required
                    onChange={handleChange}
                  />
                </div>
                <button onClick={submitHandler} type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
