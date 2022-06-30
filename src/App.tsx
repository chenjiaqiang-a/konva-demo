import { Navigate, Route, Routes } from 'react-router-dom';
import DImage from './pages/DImage';
import DStars from './pages/DStars';
import Home from './pages/Home';
import MaskImage from './pages/MaskImage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/draggable-stars" element={<DStars />} />
        <Route path="/draggable-image" element={<DImage />} />
        <Route path="/image-with-mask" element={<MaskImage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
