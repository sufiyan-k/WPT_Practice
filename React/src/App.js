import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Employeelist from './components/EmployeeList';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeEdit from './components/EmployeeEdit';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={Employeelist}></Route>
          <Route path="/list" component={Employeelist}></Route>
          <Route path="/addemp" component={EmployeeAdd}></Route>
          <Route path="/edit/:empid" component={EmployeeEdit}></Route>
          

        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
