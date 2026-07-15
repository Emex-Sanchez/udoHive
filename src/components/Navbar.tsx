import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#industries', label: 'Industries' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-sm dark:bg-gray-900/95'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <AfricanPattern />
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center space-x-2">
          <img src="/logo/udohivewhite.png" alt="UdoHive logo" className="h-6 w-auto sm:h-8 md:h-10" />
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 transition-colors duration-300 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="relative z-40 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <div className="space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-gray-700 transition-colors hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
