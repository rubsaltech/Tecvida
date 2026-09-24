import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function usePageTitle(pageTitle) {
  const { t } = useLanguage();

  useEffect(() => {
    const siteTitle = t('meta.title');
    document.title = pageTitle ? `${pageTitle} · ${siteTitle}` : siteTitle;
  }, [pageTitle, t]);
}
