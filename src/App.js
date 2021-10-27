
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import ResetPass from './components/Login/ResetPass';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import PrivateRoute from './Route/PrivateRoute';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch> 
        <Route exact path="/">
          <Home></Home>
        </Route> 
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/shop">
         <Shop></Shop>
        </Route>
        <PrivateRoute path="/product/:id">
          <ProductDetails></ProductDetails>
        </PrivateRoute>
        <PrivateRoute path="/pricing">
         <Pricing></Pricing>
        </PrivateRoute>
        <PrivateRoute path="/cart">
         <Cart></Cart>
        </PrivateRoute>
        <Route path="/about">
         <About></About>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/resetpass">
          <ResetPass></ResetPass>
        </Route>
        <Route path="/signup">
         <Signup></Signup>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
