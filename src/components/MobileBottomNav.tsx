import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Utensils, Sparkles, Image, MapPin } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const tabs = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Menu', path: '/menu', icon: Utensils },
    { label: 'Milo', path: '/signature-milo', icon: Sparkles, isCenter: true },
    { label: 'Gallery', path: '/gallery', icon: Image },
    { label: 'Visit', path: '/contact', icon: MapPin },
  ];

  return (
    <nav
      id="mobile-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#043C2A]/95 backdrop-blur-lg border-t border-[#D6B34A]/30 py-2 px-2 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          if (tab.isCenter) {
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `relative -top-2 flex flex-col items-center justify-center transition-transform ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`
                }
              >
                <div className="w-12 h-12 rounded-full gold-gradient-btn flex items-center justify-center shadow-2xl border-2 border-[#FFF0BE]">
                  <Icon className="w-5 h-5 text-[#043C2A]" />
                </div>
                <span className="text-[10px] font-bold text-[#E5C65A] mt-0.5 tracking-wider uppercase">
                  Milo
                </span>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center transition-colors py-1 px-2.5 ${
                  isActive ? 'text-[#E5C65A] font-bold' : 'text-[#F6F0DD]/70 hover:text-[#FFF0BE]'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold mt-1 tracking-wider">{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
