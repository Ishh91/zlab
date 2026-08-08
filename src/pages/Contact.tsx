import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Globe,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SEO, { orgSchema, webPageSchema } from '@/components/SEO';

const budgets = [
  'Under Rs 25,000',
  'Rs 25,000 - Rs 75,000',
  'Rs 75,000 - Rs 1,50,000',
  'Rs 1,50,000 - Rs 5,00,000',
  'Rs 5,00,000+',
];

const serviceOptions = [
  'Digital Marketing',
  'Website Development',
  'Mobile App Development',
  'AI Solutions',
  'CRM Development',
  'Business Automation',
  'Branding & Creative Design',
];

const supportAreas = [
  'Digital Marketing',
  'Website Development',
  'Mobile App Development',
  'AI Tool Development',
  'CRM Development',
  'Business Automation',
  'Branding & Creative Design',
];

const WHATSAPP_NUMBER = '917388936927';
const EMAIL_ADDRESS = 'contact.zlabs@gmail.com';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

const buildMessage = (form: FormState) => {
  const lines = [
    '*New Project Inquiry - Z Labs*',
    '',
    `*Name:* ${form.name}`,
    form.company ? `*Company:* ${form.company}` : null,
    `*Email:* ${form.email}`,
    form.phone ? `*Phone:* ${form.phone}` : null,
    form.service ? `*Service:* ${form.service}` : null,
    form.budget ? `*Budget:* ${form.budget}` : null,
    '',
    '*Message:*',
    form.message,
  ].filter(Boolean);
  return lines.join('\n');
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (!form.email.trim()) {
      setErrorMsg('Please enter your email address.');
      return false;
    }
    if (!form.message.trim()) {
      setErrorMsg('Please tell us about your project.');
      return false;
    }
    return true;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const text = encodeURIComponent(buildMessage(form));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('success');
    setForm(initialForm);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const subject = encodeURIComponent(`Project Inquiry - ${form.name}`);
    const body = encodeURIComponent(buildMessage(form));
    const url = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    window.location.href = url;
    setStatus('success');
    setForm(initialForm);
  };

  return (
    <div className="template-shell bg-dark-500 text-white">
      <SEO
        title="Contact Z Labs — Get Free Consultation for Your Project"
        description="Contact Z Labs for Digital Marketing, Website Development, Mobile Apps, AI Solutions, CRM Development, or Business Automation. Call +91 7388936927, WhatsApp us, or email contact.zlabs@gmail.com. Free consultation available."
        path="/contact"
        type="website"
        keywords={[
          'contact Z Labs',
          'digital marketing agency contact',
          'website development contact India',
          'free digital consultation',
          'contact zlabs company',
          'WhatsApp marketing agency',
          'hire AI development company',
        ]}
        jsonLd={[
          orgSchema,
          webPageSchema(
            'Contact Z Labs',
            'Get in touch with Z Labs. Call +91 7388936927, WhatsApp, or email contact.zlabs@gmail.com for free project consultation.',
            '/contact',
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Z Labs',
            url: 'https://www.zlabs.company/contact',
            publisher: {
              '@type': 'Organization',
              name: 'Z Labs',
            },
          },
        ]}
      />

      <PageHeader
        label="Contact Us"
        title="Let&apos;s Build Something Great"
        highlight="Together"
        description="Have a project in mind or looking for a trusted digital partner? We&apos;d love to hear from you. Whether you need digital marketing, website development, mobile app development, AI solutions, or business automation, our team is ready to help."
      />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[-4rem] top-16 h-72 w-72 bg-[#5b5bf7]/20" />
        <div className="template-orb right-[-2rem] bottom-8 h-72 w-72 bg-[#ff7f2a]/14" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="template-panel rounded-[2rem] p-8 sm:p-10">
              <span className="template-badge">Get in Touch</span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Reach out and let&apos;s turn your ideas into powerful digital solutions.
              </h2>
              <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
                Reach out to us today, and let&apos;s discuss how we can help your business
                grow faster, work smarter, and stay ahead of the competition.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                { icon: Phone, label: 'Phone', value: '+91 7388936927', href: 'tel:+917388936927' },
                { icon: Mail, label: 'Email', value: 'contact.zlabs@gmail.com', href: 'mailto:contact.zlabs@gmail.com' },
                { icon: Globe, label: 'Website', value: 'www.zlabs.company', href: 'https://www.zlabs.company' },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+91 7388936927',
                  subValue: 'Chat with our experts for instant assistance and project consultation.',
                  href: 'https://wa.me/917388936927?text=Hello%20Z%20Labs%2C%20I%20want%20to%20discuss%20a%20project.',
                },
                {
                  icon: Clock,
                  label: 'Business Hours',
                  value: 'Monday - Saturday: 10:00 AM - 7:00 PM (IST)\nSunday: Closed',
                },
              ].map((item) => (
                <div key={item.label} className="template-panel rounded-[1.5rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                        {item.label}
                      </div>
                      <div className="mt-2 whitespace-pre-line text-base leading-7 text-ink-100">
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="transition-colors hover:text-white"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                      {item.subValue && (
                        <p className="mt-1 text-sm leading-6 text-ink-300">{item.subValue}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-white">Redirecting you!</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-ink-200">
                  Your inquiry has been prepared. If the WhatsApp / email window didn&apos;t
                  open, please check your popup settings or use the contact info on the left.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="template-secondary-btn mt-8"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <span className="template-badge">Send Us a Message</span>
                  <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to get started?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-ink-200">
                    Fill out the contact form and send it directly via WhatsApp or email —
                    we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <form className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="template-input mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        className="template-input mt-2"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="template-input mt-2"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="template-input mt-2"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Service Required
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="template-input mt-2"
                      >
                        <option value="" className="bg-[#0b1020]">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service} className="bg-[#0b1020]">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-100">
                        Project Budget (Optional)
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className="template-input mt-2"
                      >
                        <option value="" className="bg-[#0b1020]">Select a budget</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget} className="bg-[#0b1020]">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-100">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="template-input mt-2"
                      placeholder="Tell us about your project, goals, and timeline."
                    />
                  </div>

                  {status === 'error' && errorMsg && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleSubmitWhatsApp}
                      disabled={status === 'loading'}
                      className="template-primary-btn flex-1 justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                      style={{
                        backgroundImage: 'linear-gradient(to bottom right, #25D366, #128C7E)',
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-4 w-4" />
                          Send via WhatsApp
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmitEmail}
                      disabled={status === 'loading'}
                      className="template-secondary-btn flex-1 justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Opening Email...
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          Send via Email
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Why Contact Z Labs?</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              End-to-end digital solutions tailored to your business.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
              Whether you&apos;re starting a new business, launching a product, or scaling
              an existing company, Z Labs provides end-to-end digital solutions built
              around your needs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                    <span className="text-sm font-medium text-ink-100">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Let&apos;s Grow Your Business</span>
            <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
              Your next successful project starts with a conversation. Get in touch with
              Z Labs today and discover how our innovative technology and marketing
              solutions can help your business grow faster, work smarter, and stay ahead
              of the competition.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { text: 'Call Us: +91 7388936927', href: 'tel:+917388936927' },
                { text: 'Email: contact.zlabs@gmail.com', href: 'mailto:contact.zlabs@gmail.com' },
                { text: 'Visit: www.zlabs.company', href: 'https://www.zlabs.company' },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                  <span className="text-base text-ink-100">{item.text}</span>
                </a>
              ))}
              {[
                'Free Consultation Available',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                  <span className="text-base text-ink-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
