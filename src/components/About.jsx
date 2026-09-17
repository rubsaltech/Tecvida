import { useLanguage } from '../i18n/LanguageContext';
import { ShieldIcon, HandshakeIcon, HeadsetIcon, TagIcon } from './icons';

const ICONS = [ShieldIcon, HandshakeIcon, HeadsetIcon, TagIcon];

export default function About() {
  const { t } = useLanguage();
  const values = t('about.values');

  return (
    <section id="about" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            {t('about.eyebrow')}
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">{t('about.description')}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-fg">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
