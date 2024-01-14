import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import About from './components/About';
import Count from './components/Count';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Features from './components/Features';
import PopularCourses from './components/popularCourses';
import Trainers from './components/Trainers';

function App() {
  return (
    <>
    <Navbar/>
    <Section/>
    <About/>
    <Count/>
    <Section2/>
    <Features/>
    <PopularCourses/>
    <Trainers/>
    <Footer/>
    </>
  );
}

export default App;
