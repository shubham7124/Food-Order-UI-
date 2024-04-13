import logo from './logo.svg';
import './App.css';
import Navbar from './Componet/Navigation/Navbar';
import Homepage from './Componet/homepage/Homepage';
import Order from './Componet/OrderComponet/Order';


function App() {
  return (
    <div className="container ">
     <Navbar/>
     <Homepage/>
     <Order/>
    </div>
  );
}

export default App;
