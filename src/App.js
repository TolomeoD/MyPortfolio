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
            <Header/>
            <Gallery/>
          </>
        } />
        <Route path="work/Where'sRobdo" element={
          <>
            <Header/>
            <WheresRobdo/>
          </>
        } />
        <Route path="work/McDatabases'" element={
          <>
            <Header/>
            <McDatabases/>
          </>
        } />
        <Route path="work/Oneboard" element={
          <>
            <Header/>
            <Oneboard/>
          </>
        } />
        <Route path="work/EthicalEats" element={
          <>
            <Header/>
            <EthicalEats/>
          </>
        } />
        <Route path="work/DomainManager" element={
          <>
            <Header/>
            <DomainManager/>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
