import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter 
} from 'react-router-dom';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Politics from './pages/Politics';
import World from './pages/World';
import Health from './pages/Health';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContext from './context/MainContext';
import PageDetails from './pages/PageDetails';
function App() {
  return (
    <div className="App"> 
<BrowserRouter>
  <MainContext>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/world' element={<World />} />
        <Route path='/health' element={<Health/>} />
        <Route path='/page-details' element={<PageDetails/>} />
    </Routes>
    <Footer />
  </MainContext>
</BrowserRouter>
    </div>
  );
}

export default App;
