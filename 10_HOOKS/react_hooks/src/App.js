import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { HookUseContext } from './components/HookUseContext';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import NaoEncontrado from "./pages/NaoEncontrado";

function App() {
  return (
    <div className="App">
      <h1>Hooks do react</h1>
       <HookUseContext>
         <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </BrowserRouter>
       </HookUseContext>
    </div>
  );
}

export default App;
