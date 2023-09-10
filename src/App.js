import './App.css';
import DomainManager from './components/DomainManager';
import EthicEat from './components/EthicEat';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from "./components/Home";
import McDatabases from './components/McDatabases';
import Oneboard from './components/Oneboard';
import { Route, Routes } from 'react-router-dom';
import WheresRobdo from './components/WheresRobdo';

function App() {
  return (
    <Routes>
      <Route path="/MyPortfolio" element={<Home/>} />
      <Route path="/MyPortfolio/portfolio" element={
        <>
          <Header title="Portfolio"/>
          <Gallery/>
        </>
      } />
      <Route path="/MyPortfolio/portfolio/Where'sRobdo" element={
        <>
          <Header title="Where's Robdo"/>
          <WheresRobdo/>
        </>
      } />
      <Route path="/MyPortfolio/portfolio/McDatabases" element={
        <>
          <Header title="McDatabases"/>
          <McDatabases/>
        </>
      } />
      <Route path="/MyPortfolio/portfolio/Oneboard" element={
        <>
          <Header  title="Oneboard"/>
          <Oneboard/>
        </>
      } />
      <Route path="/MyPortfolio/portfolio/EthicEat" element={
        <>
          <Header  title="Ethical Eats"/>
          <EthicEat/>
        </>
      } />
      <Route path="/MyPortfolio/portfolio/DomainManager" element={
        <>
          <Header  title="Domain Manager"/>
          <DomainManager/>
        </>
      } />
    </Routes>
  );
}

export default App;
