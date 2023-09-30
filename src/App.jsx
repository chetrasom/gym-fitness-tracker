import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import OurTeamPage from './pages/OurTeamPage';
import ContactPage from './pages/ContactPage';
import SingleDetailPage from './pages/SingleDetailPage';
import ErrorPage from './pages/ErrorPage';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ScrollToTop from './components/singledetails/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='classes' element={<ClassesPage />} />
                <Route path='team' element={<OurTeamPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='exercise/:id' element={<SingleDetailPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
