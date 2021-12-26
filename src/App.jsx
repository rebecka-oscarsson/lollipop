import './App.scss';

import LandingPage from './components/LandingPage/LandingPage';
import MealWrapper from './components/MealWrapper/MealWrapper';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import CookieBanner from './components/CookieBanner/CookieBanner';

function App() {
    return (
        <div className='App'>
            <Menu />
            <LandingPage />
            <MealWrapper />
            <Footer />
            <CookieBanner />
        </div>
    );
}

export default App;
