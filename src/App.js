import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import RecipeInfo from './components/RecipeInfo';
import Inspirations from './pages/Inspirations';

function App() {
  return (           
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/feed" element={<Feed />}/>    
        <Route exact path="/recipe-info" element={<RecipeInfo />}/> 
        <Route exact path="/inspirations" element={<Inspirations />} /> 
      </Routes>
    </Router>
  );
}

export default App;
