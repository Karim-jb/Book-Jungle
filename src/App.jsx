import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Books from './pages/Books.jsx';
import Services from './pages/Services.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import BookDetails from './pages/BookDetails.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>  
  );
}