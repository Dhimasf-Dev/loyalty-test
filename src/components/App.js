import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListMovie from './ListMovie/ListMovie';
import ListGenre from './ListGenre/ListGenre';
import DetailMovie from './DetailMovie/DetailMovie';
import Header from './Header/Header';

function App() {
  return (
    <Router>
        <div className='App'>
            <Header />
            <Routes>
                <Route path="/" element={<ListMovie />} />
                <Route path="/listmovie" element={<ListMovie />} />
                <Route path="/listgenre" element={<ListGenre />} />
                <Route path="/detailmovie" element={<DetailMovie />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
