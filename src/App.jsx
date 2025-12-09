import { HashRouter, Route, Routes} from 'react-router'
import './styles/App.css'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ScheduleConsultation from './pages/ScheduleConsultation.jsx'
import Assessment from './pages/Assessment.jsx'
import RecentNews from './pages/RecentNews.jsx'
import TopBar from './components/TopBar.jsx' 

function App() {
  return <HashRouter>
    <TopBar />
    <div style={{ paddingTop: '80px' }}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/schedule" element={<ScheduleConsultation/>}></Route>
        <Route path="/assessment" element={<Assessment/>}></Route>
        <Route path="/news" element={<RecentNews/>}></Route>
      </Routes>
    </div>
  </HashRouter>
}

export default App
