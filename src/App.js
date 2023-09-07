import './App.css';
import DomainManager from './components/DomainManager';
import EthicalEats from './components/EthicalEats';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from "./components/Home";
import McDatabases from './components/McDatabases';
import Oneboard from './components/Oneboard';
import { Route, Routes } from 'react-router-dom';
import WheresRobdo from './components/WheresRobdo';
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={
          <>
            <Header title="Portfolio"/>
            <Gallery/>
          </>
        } />
        <Route path="portfolio/Where'sRobdo" element={
          <>
            <Header title="Where's Robdo"/>
            <WheresRobdo/>
          </>
        } />
        <Route path="portfolio/McDatabases'" element={
          <>
            <Header title="McDatabases'"/>
            <McDatabases/>
          </>
        } />
        <Route path="portfolio/Oneboard" element={
          <>
            <Header  title="Oneboard"/>
            <Oneboard/>
          </>
        } />
        <Route path="portfolio/EthicalEats" element={
          <>
            <Header  title="Ethical Eats"/>
            <EthicalEats/>
          </>
        } />
        <Route path="portfolio/DomainManager" element={
          <>
            <Header  title="Domain Manager"/>
            <DomainManager/>
          </>
        } />
      </Routes>
      <About />
    </>
  );
}

export default App;
