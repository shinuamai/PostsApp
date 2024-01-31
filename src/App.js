import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div>
        <nav className="shadow-md rounded-lg py-4 sm:px-10 lg:px-36 xl:px-40 px-4">
          <div className="flex justify-between font-medium">
            <h1 className='font-medium'>
              POST APP
            </h1>
            <div>
              <Link to="/" className="mr-3 hover:text-customBlue">HOME</Link>
              <Link to="/posts" className="hover:text-customBlue">POSTS</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

