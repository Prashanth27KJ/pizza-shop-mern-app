import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import { Table } from "react-bootstrap";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Pizzalist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas, "prash");
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <>
          <Error>
            <h1>Error while fetching... {error} </h1>
          </Error>
        </>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td></td>
                    <td>
                      <img
                        src={pizza.image}
                        alt="pizza"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small: {pizza.prices[0]["small"]} <br />
                      Medium: {pizza.prices[0]["medium"]} <br />
                      Large: {pizza.prices[0]["large"]} <br />
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pizzalist;
