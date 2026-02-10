import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Presentation from './pages/Presentation'
import Presentation2 from './pages/Presentation2'
import PrintView from './pages/PrintView'
import PrintView2 from './pages/PrintView2'
import './App.css'

function App() {
  const location = useLocation();
  
  // Render PrintView without the app wrapper for clean printing
  if (location.pathname === '/print') {
    return <PrintView />;
  }
  
  if (location.pathname === '/print2') {
    return <PrintView2 />;
  }
  
  return (
    <div className="app noise-overlay grid-bg">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/presentation/:slideId" element={<Presentation />} />
        <Route path="/presentation2" element={<Presentation2 />} />
        <Route path="/presentation2/:slideId" element={<Presentation2 />} />
      </Routes>
    </div>
  )
}

export default App
