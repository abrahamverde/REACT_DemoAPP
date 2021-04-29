
import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import EditUser from './Components/EditUser/EditUser';



class App extends React.Component {


  render(){

    return (

        <Router>
        
          <Switch>

            <Route path="/dashboard">
              <div className='container col-md-12'>
                  <Dashboard />
                  <div style={{"height":"240px"}}></div>
                  <Footer />
              </div>
            </Route>


            <Route path="/editUser/:idUser" component={ () => {

                let { idUser } = useParams();
                return <EditUser idUser={idUser}/>;

            }} />


            <Route path="/" exact>
              <div className='container col-md-12'>
                  <Login />
                  <div style={{"height":"240px"}}></div>
                  <Footer />
              </div>
            </Route>


          </Switch>

        </Router>
              
    )

  }

}


export default App;
