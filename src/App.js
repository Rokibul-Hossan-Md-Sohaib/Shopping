import './App.css';
import Header from '../src/Components/Header/Header'
import Shoes from '../src/Components/Shoes/Shoes'
import Wallet from '../src/Components/Wallet/Wallet'
import Watch from '../src/Components/Watch/Watch'


import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      
    <div className="App">     
    <Switch>
          <Route exact path='/'>
            <Header/>
          </Route>
          <Route  path="/wallet">
            <Wallet/>
          </Route>
          <Route  path="/shoes">
            <Shoes/>
          </Route>
          <Route  path="/watch">
            <Watch/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
