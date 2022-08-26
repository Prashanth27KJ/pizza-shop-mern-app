import React, { useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzalist from "../components/Admin/Pizzalist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "../components/Admin/EditPizza";
function AdminScreen({ history }) {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={2}>
          <ButtonGroup vertical style={{ minHeight: "400px" }}>
            <Button onClick={() => history.push("/admin/pizzalist")}>
              All Pizzas
            </Button>

            <Button onClick={() => history.push("/admin/addnewpizza")}>
              Add New Pizza
            </Button>
          </ButtonGroup>
        </Col>
        <Col md={10}>
          <Switch>
            <Route path="/admin/userlist" component={Userlist} exact />
            <Route path="/admin" component={Userlist} exact />
            <Route
              path="/admin/editpizza/:pizzaId"
              component={EditPizza}
              exact
            />
            <Route path="/admin/pizzalist" component={Pizzalist} exact />
            <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
            <Route path="/admin/orderlist" component={OrderList} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminScreen;
