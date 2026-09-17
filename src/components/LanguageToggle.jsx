import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title="English / Español"
      className={`inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-sm font-semibold text-fg transition-colors hover:border-brand-orange hover:text-brand-orange ${className}`}
    >
      <span className={language === 'en' ? 'text-brand-blue' : 'text-fg-muted'}>EN</span>
      <span className="text-fg-muted">/</span>
      <span className={language === 'es' ? 'text-brand-orange' : 'text-fg-muted'}>ES</span>
    </button>
  );
}
