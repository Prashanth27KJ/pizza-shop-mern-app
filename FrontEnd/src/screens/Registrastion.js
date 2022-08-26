import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

function Registrastion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  // console.log(registerState);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  const registerHandler = () => {
    // e.preventDefault()
    if (password !== confirmPassword) {
      alert("passwore not match");
    } else {
      const user = {
        name,
        email,
        password,
        confirmPassword,
      };
      {
        dispatch(registerUser(user)) && window.location.replace("/login");
      }
    }
  };
  return (
    <div>
      <Container>
        {loading && <Loader />}
        {success && <Success success="User Rigister Successfull..." />}
        {error && <Error error="Something went wrong" />}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={registerHandler}>
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registrastion;
