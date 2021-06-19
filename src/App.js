import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListProducts from "./views/products/ListProducts";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Redirect from="/" to="/products" />
        <Switch>
          <Route path="/products">
            <ListProducts />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
