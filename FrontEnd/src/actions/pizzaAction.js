import axios from "axios";
import swal from "sweetalert";

// get pizza
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};

//add pizza

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZAS_SUCCESS", payload: res.data });
    setTimeout(() => {
      window.location.href = "/admin/pizzalist";
    }, 1000);
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
  }
};

//edit pizza
export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/getpizzabyid", { pizzaId });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });

    window.location.href = "/admin/pizzalist";
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: error });
  }
};

//update pizza
export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/updatepizza", {
      updatedPizza,
    });
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: res.data });
    setTimeout(() => {
      window.location.href = "/admin/pizzalist";
    }, 2000);
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
  }
};

//delet pizza

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    const res = await axios.post("/api/pizzas/deletepizza", { pizzaId });
    swal("Pizza Deleted Successfull..", "success");
    setTimeout(() => {
      window.location.href = "/admin/pizzalist";
    }, 3000);
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Pizza..");
  }
};
