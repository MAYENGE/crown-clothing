import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";

import Header from './components/header/header.component.jsx';

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/fire.utils";

import HomePage from "./pages/homepage/homepage.component";
import React from "react";
// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged( user=>{
    this.setState({ currentUser: user });

      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}
}
export default App;
