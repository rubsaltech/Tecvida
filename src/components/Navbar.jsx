import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { MenuIcon, CloseIcon } from './icons';

const SECTIONS = ['home', 'about', 'services', 'contact'];

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTIONS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-surface/90 backdrop-blur shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 shrink-0"
          aria-label="TecVida — Home"
        >
          <img src="/logo/Logo.png" alt="TecVida" className="h-9 w-auto sm:h-11" />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === link.id
                  ? 'text-brand-orange'
                  : 'text-fg-muted hover:text-fg'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-brand-orange-dark"
          >
            {t('nav.cta')}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg"
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-surface px-4 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors ${
                  active === link.id ? 'bg-surface-alt text-brand-orange' : 'text-fg-muted hover:bg-surface-alt'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="mt-2 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t('nav.cta')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
