```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect Route causing the issue */}
        <Route path="/about/*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```