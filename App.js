//import logo from '.logo.svg';
import'./App.css';

import Home from './Component/Home';
import Navbar from './Component/layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Footer from './Component/layout/Footer';
import NotFound from './Component/NotFound';
import UserLogin from './Component/UserLogin';
import UserHome from './Component/UserHome';
import AdminHome from './Component/AdminHome';
import FoodItem from './Component/FoodItem';
import FeedBack from './Component/FeedBack';
import Payment from './Component/Payment';
import User_Reg from './Component/User_Reg';
import Displayreg from './Component/Displayreg';
import Addfooditems from './Component/Addfooditems';
import Otp from './Component/Otp';
import NewSendOrder from './Component/NewSendOrder';
import Forgotpass from './Component/Forgotpass';
import Resetpass from './Component/Resetpass';
import Paybill from './Component/Paybill';
import NewCoustmerOrder from './Component/NewCoustmerOrder';
import ViewFeedback from './Component/ViewFeedback';
import CustomerAllOrders from './Component/CustomerAllOrders';
import ViewCustomer from './Component/ViewCustomer';
import CatWise from './Component/CatWise';
import Viewfooditem from './Component/Viewfooditems';
import UpdateDeliveryStatus  from './Component/UpdateDeliveryStatus';
import ServiceOrders from './Component/ServiceOrders';
import ServiceHome from './Component/ServiceHome';
import About from './Component/About';
import Contact from './Component/Contact';





function App()
{

    return (
      <Router>
      <div className="App">
        <Navbar></Navbar>
       <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={UserLogin}></Route>
        <Route exact path="/userhome" component={UserHome}></Route>
        <Route exact path="/adminHome" component={AdminHome}></Route>
        <Route exact path="/fooditems" component={FoodItem}></Route>
        <Route exact path="/feedback" component={FeedBack}></Route>
        <Route exact path="/payment" component={Payment}></Route>
        <Route exact path="/signup" component={User_Reg}></Route>
        <Route exact path="/displayreg" component={Displayreg}></Route>
        <Route exact path="/Addfooditems" component={Addfooditems}></Route>
        <Route exact path="/forgotpass" component={Forgotpass}></Route>
        <Route exact path="/resetpass" component={Resetpass}></Route>
        <Route exact path ="/Otp" component={Otp}></Route>
        <Route exact path ="/sendorder/:id" component={NewSendOrder}></Route>
        <Route exact path ="/paybill/:id/:price" component={Paybill}></Route>
        <Route exact path ="/coustmerorder/" component={NewCoustmerOrder}></Route>
        <Route exact path="/viewfeedback" component={ViewFeedback}></Route>
        <Route exact path="/customerallorders" component={CustomerAllOrders}></Route>
        <Route exact path="/viewcustomer/:user_id" component={ViewCustomer}></Route>  
        <Route exact path="/catwise_menu/:cat/" component={CatWise}></Route>   
        <Route exact path="/viewfooditems" component={Viewfooditem}></Route>
        <Route exact path="/updatedeliverystatus/:id" component={UpdateDeliveryStatus}></Route>
        <Route exact path="/serviceorder" component={ServiceOrders}></Route>
        <Route exact path="/servicehome" component={ServiceHome}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
  

      
        

        <Route component={NotFound}></Route>
       </Switch>
       <Footer></Footer>
    
      </div>
      </Router>
    );
    }

export default App

