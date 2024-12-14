```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Correct Route */}
        <Route path="/about/:id" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```