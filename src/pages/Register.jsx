import React, {  useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [user,setUser]=useState({
    name:'',
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
    e.preventDefault();
    console.log(user);
    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        name:user.name,
        email:user.email,
        password:user.password
      })
    });
    if(res.status===301){
      const resp=await res.json();
      const {message}=resp;
      console.log("Backed response",message);
      setUser({
        name:'',
        email:'',
        password:''
      })
      alert(`${message}`)
    }else if(res.status===200){
      const resp=await res.json();
      const {message}=resp;
      console.log("Backed response",message);
      setUser({
        name:'',
        email:'',
        password:''
      })
      alert(`${message}`)
    }else{
      console.log("error");
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={user.name}
                    required
                    onChange={handleChange}
                  />
                </div>
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
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
