import './App.css';
import { Card } from './components/Card';
import { ContactContainer } from './components/Contactcontainer';
import { Header } from './components/Header';
import { Home } from './components/Landing';
import { Nav } from './components/Nav';

function App() {
  return (
    // <div className="App">
    //   <h1>Henry Videogames</h1>
    // </div>
    <div id='body'>
      <Nav />
     <Home />
    </div>
  );
}

export default App;
