import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Presentation from './pages/Presentation'
import Presentation2 from './pages/Presentation2'
import Presentation3 from './pages/Presentation3'
import PrintView from './pages/PrintView'
import PrintView2 from './pages/PrintView2'
import PrintView3 from './pages/PrintView3'
import './App.css'

function App() {
  const location = useLocation();
  
  if (location.pathname === '/print') {
    return <PrintView />;
  }
  
  if (location.pathname === '/print2') {
    return <PrintView2 />;
  }
  
  if (location.pathname === '/print3') {
    return <PrintView3 />;
  }
  
  return (
    <div className="app noise-overlay grid-bg">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/presentation/:slideId" element={<Presentation />} />
        <Route path="/presentation2" element={<Presentation2 />} />
        <Route path="/presentation2/:slideId" element={<Presentation2 />} />
        <Route path="/presentation3" element={<Presentation3 />} />
        <Route path="/presentation3/:slideId" element={<Presentation3 />} />
      </Routes>
    </div>
  )
}

export default App
