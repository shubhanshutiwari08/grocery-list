import Navbar from './components/Navbar';
import List from './components/List';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'element={<Home />} />
        <Route exact path='/grocerylist' element={<List />} />
    </Routes>
    </Router>
  );
}

export default App;
