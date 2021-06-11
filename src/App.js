import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import SideNavbar from './components/SideNavbar';
import MenuHomePage from './components/MenuHomePage';
import Footer from './components/Footer';
import AlbumPage from './components/AlbumPage';

function App() {
  return (
    <div className="App">
     
         <Router>
        
            
            {/* <Home/> */}
            
             <Route exact path="/" component={Home} />
              <Route exact path="/album" component={AlbumPage} />
     {/* <Home/> */}
         </Router>
    
      {/* <SideNavbar/> */}
  {/*   <MenuHomePage/>
     <Home/> */}
    
  {/*  <Footer/>  */} 
    </div>
  );
}

export default App;
