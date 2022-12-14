import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login.js';
import choose_member from './components/choose_member.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/choose_member" element={<choose_member/>}/>
      </Routes>
    </div>
  );
}

export default App;
