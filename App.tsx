import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import PlacerGold from './pages/PlacerGold';
import Cannabis from './pages/Cannabis';
import Saffron from './pages/Saffron';
import Aris from './pages/Aris';
import SteelMill from './pages/SteelMill';
import RareEarth from './pages/RareEarth';
import Home from './pages/Home';
import { PageState } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case PageState.HOME:
        return <Home onNavigate={setActivePage} />;
      case PageState.PLACER_GOLD:
        return <PlacerGold />;
      case PageState.CANNABIS:
        return <Cannabis />;
      case PageState.SAFFRON:
        return <Saffron />;
      case PageState.ARIS:
        return <Aris />;
      case PageState.STEEL_MILL:
        return <SteelMill />;
      case PageState.REE:
        return <RareEarth />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-echo-primary selection:text-white">
      <Nav activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-grow pt-36">
        {renderContent()}
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default App;