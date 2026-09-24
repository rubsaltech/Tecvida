import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="border-t border-border bg-bg-alt py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <img src="/logo/Logo.png" alt="TecVida" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-fg-muted">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-fg-muted">
            {t('footer.quickLinks')}
          </h4>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-fg-muted transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-fg-muted">
            {t('footer.contactTitle')}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-fg-muted">
            <li>C/ Santa Llúcia, 27, 08788 Vilanova del Camí</li>
            <li>641 603 972 · 936 120 425</li>
            <li>vnova@tecvida.es</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 text-center text-sm text-fg-muted sm:px-6 lg:px-8">
        © {year} TecVida. {t('footer.rights')}
      </div>
    </footer>
  );
}
