import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="myPortfolio/" element={<Home />} />
          <Route path="myPortfolio/projects" element={<Projects />} />
          <Route path="myPortfolio/project/:id" element={<Project />} />
          <Route path="myPortfolio/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
