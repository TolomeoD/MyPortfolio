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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={
          <>
            <Header title="Portfolio"/>
            <Gallery/>
          </>
        } />
        <Route path="work/Where'sRobdo" element={
          <>
            <Header title="Where's Robdo"/>
            <WheresRobdo/>
          </>
        } />
        <Route path="work/McDatabases'" element={
          <>
            <Header title="McDatabases'"/>
            <McDatabases/>
          </>
        } />
        <Route path="work/Oneboard" element={
          <>
            <Header  title="Oneboard"/>
            <Oneboard/>
          </>
        } />
        <Route path="work/EthicalEats" element={
          <>
            <Header  title="Ethical Eats"/>
            <EthicalEats/>
          </>
        } />
        <Route path="work/DomainManager" element={
          <>
            <Header  title="Domain Manager"/>
            <DomainManager/>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
