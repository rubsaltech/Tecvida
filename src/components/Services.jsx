import { useLanguage } from '../i18n/LanguageContext';
import {
  SmartphoneIcon,
  WrenchIcon,
  AccessoryIcon,
  LaptopIcon,
  SettingsIcon,
  SendIcon,
  CardIcon,
} from './icons';

const ICONS = [SmartphoneIcon, WrenchIcon, AccessoryIcon, LaptopIcon, SettingsIcon];
const EXTRA_ICONS = [SendIcon, CardIcon, CardIcon];

export default function Services() {
  const { t } = useLanguage();
  const items = t('services.items');
  const extras = t('services.extras');

  return (
    <section className="bg-bg-alt pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm font-semibold text-brand-orange-dark">
            {t('services.eyebrow')}
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">{t('services.subtitle')}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue text-white transition-colors group-hover:bg-brand-orange">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-fg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-8 sm:p-10">
          <h3 className="text-xl font-bold text-fg">{t('services.extraTitle')}</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {extras.map((extra, idx) => {
              const Icon = EXTRA_ICONS[idx % EXTRA_ICONS.length];
              return (
                <div key={extra.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-fg">{extra.title}</p>
                    <p className="mt-1 text-sm text-fg-muted">{extra.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
