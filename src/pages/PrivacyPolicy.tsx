import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

type Section = {
  title: string;
  paragraphs?: string[];
  subBullets?: { label: string; items: string[] }[];
};

const sections: Section[] = [
  {
    title: '1. Introduction',
    paragraphs: [
      'At Z Labs, protecting your privacy is one of our highest priorities.',
      'This Privacy Policy explains how we collect, process, store, disclose, and protect your personal information when you interact with our website, products, and services.',
      'By accessing our website, you consent to the practices described in this Privacy Policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    paragraphs: ['We may collect information including:'],
    subBullets: [
      {
        label: 'Personal Information',
        items: [
          'Full Name',
          'Email Address',
          'Phone Number',
          'Company Name',
          'Billing Details',
          'Project Information',
          'Communication Records',
        ],
      },
      {
        label: 'Technical Information',
        items: [
          'IP Address',
          'Browser Type',
          'Operating System',
          'Device Information',
          'Cookies',
          'Analytics Data',
          'Website Usage Information',
        ],
      },
    ],
  },
  {
    title: '3. Purpose of Collection',
    paragraphs: ['We collect personal information to:'],
    subBullets: [
      {
        label: '',
        items: [
          'Deliver requested services',
          'Process payments',
          'Respond to enquiries',
          'Improve website functionality',
          'Enhance user experience',
          'Communicate project updates',
          'Prevent fraud and abuse',
          'Comply with legal obligations',
        ],
      },
    ],
  },
  {
    title: '4. Cookies',
    paragraphs: [
      'Our website may use cookies and similar technologies to enhance website performance, analyze visitor behavior, remember preferences, and improve overall user experience.',
      'Users may disable cookies through browser settings.',
    ],
  },
  {
    title: '5. Information Sharing',
    paragraphs: [
      'We do not sell or rent personal information.',
      'Information may only be shared with trusted third-party service providers where necessary for service delivery, including:',
    ],
    subBullets: [
      {
        label: '',
        items: [
          'Cloud Hosting Providers',
          'Payment Processors',
          'Analytics Providers',
          'Marketing Platforms',
          'Customer Support Tools',
          'Government Authorities where legally required',
        ],
      },
    ],
  },
  {
    title: '6. Data Protection',
    paragraphs: [
      'We implement commercially reasonable administrative, technical, and organizational safeguards designed to protect your information against unauthorized access, misuse, disclosure, alteration, or destruction.',
      'However, no method of internet transmission can be guaranteed to be completely secure.',
    ],
  },
  {
    title: '7. Data Retention',
    paragraphs: [
      'Personal information shall be retained only for as long as necessary to fulfill contractual obligations, legal requirements, dispute resolution, and legitimate business purposes.',
    ],
  },
  {
    title: '8. Your Rights',
    paragraphs: ['Depending on applicable laws, you may have the right to:'],
    subBullets: [
      {
        label: '',
        items: [
          'Access your personal information',
          'Correct inaccurate information',
          'Request deletion of personal data',
          'Restrict processing',
          'Withdraw consent',
          'Request data portability',
        ],
      },
    ],
    paragraphs2: [
      'Requests may be submitted using the contact details below.',
    ],
  } as unknown as Section,
  {
    title: '9. Third-Party Websites',
    paragraphs: [
      'Our website may contain links to third-party websites.',
      'Z Labs is not responsible for the privacy practices, security, or content of external websites.',
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      'Our services are intended for individuals above the age of 18 or legally authorized representatives of organizations.',
      'We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '11. Policy Updates',
    paragraphs: [
      'We reserve the right to amend this Privacy Policy at any time.',
      'Any updates will become effective immediately upon publication on this website.',
    ],
  },
  {
    title: '12. Contact',
    subBullets: [
      {
        label: 'Z Labs',
        items: [
          'Email: contact.zlabs@gmail.com',
          'Phone: +91 7388936927',
          'Website: www.zlabs.company',
        ],
      },
    ],
  },
];

function LegalSection({ section }: { section: Section }) {
  const paragraphs1 = section.paragraphs || [];
  const paragraphs2 = (section as unknown as { paragraphs2?: string[] }).paragraphs2 || [];

  return (
    <div className="template-panel rounded-[1.5rem] p-7 sm:p-8 lg:p-9">
      <h3 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h3>
      <div className="mt-5 space-y-4">
        {paragraphs1.map((p, i) => (
          <p key={`p1-${i}`} className="text-base leading-7 text-ink-200 sm:text-[15px]">
            {p}
          </p>
        ))}

        {section.subBullets && section.subBullets.length > 0 && (
          <div className="space-y-5">
            {section.subBullets.map((sb, sbIdx) => (
              <div
                key={`sb-${sbIdx}`}
                className={`rounded-2xl border border-white/8 bg-white/4 p-5`}
              >
                {sb.label && (
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff9d2f] mb-3">
                    {sb.label}
                  </p>
                )}
                <ul className="space-y-2.5 pl-1">
                  {sb.items.map((item, i) => (
                    <li
                      key={`sbi-${i}`}
                      className="flex items-start gap-3 text-base leading-7 text-ink-200 sm:text-[15px]"
                    >
                      <ShieldCheck className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#5b5bf7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {paragraphs2.map((p, i) => (
          <p key={`p2-${i}`} className="text-base leading-7 text-ink-200 sm:text-[15px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="template-shell bg-dark-500 text-white">
      <PageHeader
        label="Legal"
        title="Privacy"
        highlight="Policy"
        description="This Privacy Policy explains how we collect, process, store, disclose, and protect your personal information when you interact with our website, products, and services."
      />

      <section className="relative px-6 pb-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="template-panel inline-flex items-center gap-3 rounded-full px-5 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Effective Date
            </span>
            <span className="text-sm font-semibold text-white">August 05, 2026</span>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="template-orb left-[-3rem] top-20 h-60 w-60 bg-[#5b5bf7]/18" />
        <div className="template-orb right-[-3rem] bottom-20 h-64 w-64 bg-[#ff7f2a]/15" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          {sections.map((s) => (
            <LegalSection key={s.title} section={s} />
          ))}
        </div>
      </section>

      <section className="relative px-6 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="template-panel flex flex-col items-start justify-between gap-5 rounded-[1.5rem] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h4 className="text-lg font-bold text-white">Questions about your data?</h4>
              <p className="mt-1 text-sm text-ink-300">
                Exercise your rights or get clarity on our privacy practices — our team is here to help.
              </p>
            </div>
            <Link to="/contact" className="template-primary-btn shrink-0">
              Reach Out
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
