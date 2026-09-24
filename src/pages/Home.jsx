import Hero from '../components/Hero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle();
  return <Hero />;
}
