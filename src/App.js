
import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import {Switch,Route,} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import What from './components/pages/What I do';


function App() {
  return (
    <div className="App">
    
     
        <Header/>
       
      <Switch>
        
         <Route path="/About"><About /></Route>
         <Route path="/Portfolio"><Portfolio/></Route>
         <Route path="/Resume"> <Resume /></Route>
         <Route path="/What I do"> <What I do/></Route>
         <Route path="/Contact"> <Contact /></Route>
         <Route path="/"><Home /></Route>
       </Switch>
       <Footer/>
     
    </div>
  );
}

export default App;
