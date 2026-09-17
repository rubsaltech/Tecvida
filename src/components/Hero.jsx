import { useLanguage } from '../i18n/LanguageContext';
import { SmartphoneIcon, WrenchIcon, LaptopIcon, AccessoryIcon } from './icons';

export default function Hero() {
  const { t } = useLanguage();
  const stats = t('hero.stats');

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg-alt pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--color-brand-orange)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--color-brand-blue)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm font-semibold text-brand-orange-dark">
            {t('hero.eyebrow')}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-md transition-transform hover:scale-[1.03] hover:bg-brand-orange-dark"
            >
              {t('hero.primaryCta')}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="rounded-full border-2 border-brand-blue px-7 py-3.5 text-base font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              {t('hero.secondaryCta')}
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-brand-blue sm:text-3xl">{stat.value}</dd>
                <div className="mt-1 text-sm text-fg-muted">{stat.label}</div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-[2rem] border border-border bg-surface p-8 shadow-lg sm:p-10">
            <div className="grid grid-cols-2 gap-5">
              {[SmartphoneIcon, WrenchIcon, LaptopIcon, AccessoryIcon].map((Icon, idx) => (
                <div
                  key={idx}
                  className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-surface-alt text-brand-blue"
                >
                  <Icon className="h-10 w-10" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-dark p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-80">TecVida</p>
              <p className="mt-1 text-lg font-bold">
                {t('hero.stats')[0]?.value} {t('hero.stats')[0]?.label}
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2rem] border-4 border-brand-orange/40 sm:-bottom-8 sm:-right-8"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
