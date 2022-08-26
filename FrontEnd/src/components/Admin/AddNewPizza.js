import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Success from "../../components/Success";

const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addPizaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizaState;
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="pizza added successfull.." />}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Small Price"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Medium Price"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Large Price"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewPizza;
