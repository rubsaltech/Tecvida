import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from './icons';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  const infoRows = [
    { icon: PinIcon, label: t('contact.info.addressLabel'), value: t('contact.info.address') },
    { icon: PhoneIcon, label: t('contact.info.phoneLabel'), value: '641 603 972 · 936 120 425' },
    { icon: MailIcon, label: t('contact.info.emailLabel'), value: 'vnova@tecvida.es' },
    { icon: ClockIcon, label: t('contact.info.hoursLabel'), value: t('contact.info.hours') },
  ];

  return (
    <section id="contact" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            {t('contact.eyebrow')}
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">{t('contact.subtitle')}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <row.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg-muted">{row.label}</p>
                  <p className="mt-0.5 font-semibold text-fg">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-fg">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t('contact.form.namePlaceholder')}
                className="mt-2 w-full rounded-xl border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-fg">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('contact.form.emailPlaceholder')}
                className="mt-2 w-full rounded-xl border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-fg">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t('contact.form.messagePlaceholder')}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-brand-orange px-6 py-3.5 text-base font-semibold text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-brand-orange-dark"
            >
              {t('contact.form.submit')}
            </button>

            {submitted && (
              <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">
                {t('contact.form.success')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
