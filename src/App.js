import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import About from './components/About';
import Count from './components/Count';
import Section2 from './components/Section2';
import Features from './components/Features';
import PopularCourses from './components/popularCourses';
import Trainers from './components/Trainers';
import Home from './components/Home';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
// import About_header from './components/About_header'; 
import AboutAll from './components/AboutAll';
import CoursesAll from './components/CoursesAll';
import ContactAll from './components/ContactAll';
import Login from './components/Login';

function App() {
  return (
  
    <Router>
      <Navbar/>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutAll}/>               
        <Route path="/courses" component={CoursesAll}/>    
        <Route path="/contact" component={ContactAll}/>   
        <Route path="/login" component={Login}/>           


      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
