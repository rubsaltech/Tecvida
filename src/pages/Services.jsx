import Services from '../components/Services';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ServicesPage() {
  const { t } = useLanguage();
  usePageTitle(t('nav.services'));
  return <Services />;
}
