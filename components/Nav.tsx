import React, { useState } from 'react';
import { PageState } from '../types';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavProps {
  activePage: PageState;
  onNavigate: (page: PageState) => void;
}

const Nav: React.FC<NavProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [strategicOpen, setStrategicOpen] = useState(false);

  const strategicItems = [
    { id: PageState.PLACER_GOLD, label: 'Placer Gold' },
    { id: PageState.PLATINUM, label: 'Platinum (PGM)' },
    { id: PageState.REE, label: 'Rare Earth' },
  ];

  const otherNavItems = [
    { id: PageState.AGRICULTURE, label: 'Agriculture' },
    { id: PageState.STEEL_MILL, label: 'Industrial' },
    { id: PageState.ENVIRONMENT, label: 'Environment' },
  ];

  const isStrategicActive = strategicItems.some(item => item.id === activePage);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate(PageState.HOME)}>
            <img
              src="/assets/logotransparent.png"
              alt="Echo Consultants Logo"
              className="h-40 w-auto"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Strategic Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setStrategicOpen(!strategicOpen)}
                  onBlur={() => setTimeout(() => setStrategicOpen(false), 150)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isStrategicActive
                    ? 'text-echo-primary bg-echo-light'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  Strategic
                  <ChevronDown className={`w-4 h-4 transition-transform ${strategicOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {strategicOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                    {strategicItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setStrategicOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${activePage === item.id
                          ? 'text-echo-primary bg-echo-light'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Items */}
              {otherNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activePage === item.id
                    ? 'text-echo-primary bg-echo-light'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Strategic Section */}
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Strategic</div>
            {strategicItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activePage === item.id
                  ? 'text-echo-primary bg-echo-light'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Other Items */}
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">Other Sectors</div>
            {otherNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activePage === item.id
                  ? 'text-echo-primary bg-echo-light'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;