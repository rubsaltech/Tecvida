import About from '../components/About';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

export default function AboutPage() {
  const { t } = useLanguage();
  usePageTitle(t('nav.about'));
  return <About />;
}
