import { HashRouter, Route, Routes} from 'react-router'
import './styles/App.css'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contact from './components/Contact.jsx'
import Assessment from './components/Assessment.jsx'
import RecentNews from './components/RecentNews.jsx'
import TopBar from './components/TopBar.jsx' 

function App() {
  return <HashRouter>
    <TopBar />
    <div style={{ paddingTop: '80px' }}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/assessment" element={<Assessment/>}></Route>
        <Route path="/news" element={<RecentNews/>}></Route>
      </Routes>
    </div>
  </HashRouter>
}

export default App
