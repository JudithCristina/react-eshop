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
import  {CartProvider}  from "./context/CartContext";
import ProductDetail from "./views/productDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Redirect exact from="/" to="/products" />
          <Switch>
            <Route exact path="/products">
              <ListProducts />
            </Route>
            <Route exact path="/products/:id" component={ProductDetail}/>
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
