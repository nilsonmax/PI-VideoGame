import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Nav/Navbar';
import NotFound from './components/NotFound/NotFound';
import { Videogames } from './components/Videogames/Videogames';

function App() {
  return (

    <div id='body'>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videogames" element={<Videogames />} />
        {/* <Route path="/recipe/:id" element={<RecipesDetail/>} />
      <Route path= "/recipe/create" element={<Create/>}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
