import React, { useContext } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import "./main.css";
import { myContext } from './Pages/Context';
import Register from './Pages/Register';

function App() {
  const ctx = useContext(myContext);
  
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage}></Route>  
        {
            ctx ? (
              <>
                {ctx.isAdmin ? <Route path='/admin' component={AdminPage}></Route> : null}
                <Route path='/profile' component={Profile}></Route>  
              </>
            ) : (
              <>
                <Route path='/login' component={Login}></Route>  
                <Route path='/register' component={Register}></Route>  
              </>  
            )
        }
    </Switch>
    </BrowserRouter>
  );
}
export default App;
