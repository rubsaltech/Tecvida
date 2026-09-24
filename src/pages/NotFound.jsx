import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  const { t } = useLanguage();
  usePageTitle(t('notFound.title'));

  return (
    <section className="bg-bg pt-32 pb-20 text-center sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <p className="text-6xl font-extrabold text-brand-orange">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
          {t('notFound.title')}
        </h1>
        <p className="mt-4 text-lg text-fg-muted">{t('notFound.description')}</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-md transition-transform hover:scale-[1.03] hover:bg-brand-orange-dark"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </section>
  );
}
