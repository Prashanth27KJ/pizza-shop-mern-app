import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";

function HomeScreen() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas, "prash");
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <>
            <Error>
              <h1>Error while fetching... {error} </h1>
            </Error>
          </>
        ) : (
          <Row>
            {pizzas.map((pizza) => (
              <Col md="4" key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default HomeScreen;
