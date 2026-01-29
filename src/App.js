import './App.css';
import Home from './components/Home';
import IngredientsShowcase from './components/Ingredients';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import CustardlyStory from './components/Story';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientsShowcase />} />
        <Route path="/story" element={<CustardlyStory/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
