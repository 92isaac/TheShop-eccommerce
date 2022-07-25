import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbars from './component/navbarfiles/Navbars';
import Home from './component/Pages/Home';
function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
