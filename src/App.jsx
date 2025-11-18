import { HashRouter, Route, Routes} from 'react-router'
import './styles/App.css'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import ContactMe from './components/ContactMe.jsx'
import Portfolio from './components/Portfolio.jsx'
import Scheduler from './components/Scheduler.jsx'
import RecentNews from './components/RecentNews.jsx'
import TopBar from './components/TopBar.jsx'

function App() {
  return <HashRouter>
    <TopBar />
    <div style={{ paddingTop: '80px' }}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutMe/>}></Route>
        <Route path="/contact" element={<ContactMe/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/scheduler" element={<Scheduler/>}></Route>
        <Route path="/news" element={<RecentNews/>}></Route>
      </Routes>
    </div>
  </HashRouter>
}

export default App
