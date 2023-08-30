import './App.css';
import Home from "./components/Home";
import Work from "./components/Work";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </>
  );
}

export default App;
