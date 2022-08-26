import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  //   console.log(cartItems, "prash");
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      Price : {item.quantity} X {item.prices[0][item.varient]} =
                      {item.price}
                    </h6>
                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                        className="text-danger"
                      />
                      &nbsp;
                      {item.quantity}&nbsp;
                      <FaPlusCircle
                        style={{ cursor: "pointer" }}
                        className="text-success"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Body>
                <Card.Title>
                  <h1> Payment Info </h1>
                </Card.Title>
                <Card.Text>
                  <h4> RS: {subTotal}/- </h4>
                </Card.Text>
                <Checkout subTotal={subTotal} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartScreen;
