import { Routes, Route, Navigate } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Questions from './modules/questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Routes>
        <Route path="/questions/*" element={<Questions />} />

        <Route path="*" element={<Navigate to="/questions" replace />} />
      </Routes>
    </div>
  );
}

export default App;
