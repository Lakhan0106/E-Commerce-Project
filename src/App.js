import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/Homepage/HomePage.jsx';
import Footer from './customer/components/Footer/Footer.jsx';




function App() {
  return (
    <div className="">
    <Navigation/>
    <div> 
      <HomePage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
