import Contact from '../components/Contact';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ContactPage() {
  const { t } = useLanguage();
  usePageTitle(t('nav.contact'));
  return <Contact />;
}
