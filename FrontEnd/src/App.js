import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import NavBar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registrastion from "./screens/Registrastion";
import Login from "./screens/Login";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/contact" component={Contact} exact />
        <Route path="/terms" component={Terms} exact />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/register" component={Registrastion} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
