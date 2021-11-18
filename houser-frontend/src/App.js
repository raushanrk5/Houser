import React, { useContext } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
import PrivateRoute from './utils/PrivateRoute'
import AuthContext, { AuthProvider } from './context/AuthContext'
import VerifyOtp from './components/verifyOtp';
import Service from './components/Service';
import Signup from './components/signup';



function App() {

  return (
    
    

      <Router>    
       <div className="App">
        <AuthProvider>
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <PrivateRoute exact path='/service'> <Service /> </PrivateRoute>
            <Route exact path='login/' component={Login} /> 
            <Route exact path='/signup'> <signup /> </Route>   
            <Route exact path='/verify-otp'> <VerifyOtp /> </Route>
          </Switch>
                   
        </AuthProvider>     
        </div>
      </Router>   
    
  );
}

export default App;


