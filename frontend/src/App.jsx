import React,{ useState, useEffect } from 'react'
import InputScreen from './components/InputScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimationScreen from './components/AnimationScreen';
import ResultScreen from './components/ResultScreen';


function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    fetch("/linaaa")
      .then(res => res.text())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputScreen />} />
        <Route path="/animate" element={<AnimationScreen />} />
        <Route path="/results" element={<ResultScreen />} />
      </Routes>
    </BrowserRouter>
);
}

export default App