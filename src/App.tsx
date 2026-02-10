import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Presentation from './pages/Presentation'
import PrintView from './pages/PrintView'
import './App.css'

function App() {
  const location = useLocation();
  
  // Render PrintView without the app wrapper for clean printing
  if (location.pathname === '/print') {
    return <PrintView />;
  }
  
  return (
    <div className="app noise-overlay grid-bg">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/presentation/:slideId" element={<Presentation />} />
      </Routes>
    </div>
  )
}

export default App
