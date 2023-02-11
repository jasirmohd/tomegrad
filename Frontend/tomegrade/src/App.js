import './App.css';
import LandingPage from './Pages/LandingPage.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<LandingPage/>} path="/" exact/>
      </Routes>
    </Router>
  
  );
}

export default App;
