import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import SEO, { orgSchema, webPageSchema } from '@/components/SEO';

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  subBullets?: { label: string; items: string[] }[];
};

const sections: Section[] = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to Z Labs - SMART MARKETING | REAL GROWTH.',
      'These Terms & Conditions govern your access to and use of the Z Labs website and all services offered by the Company, including but not limited to Digital Marketing, Website Development, Mobile Application Development, Artificial Intelligence Solutions, CRM Development, Business Automation, Branding, Creative Design, and related technology services.',
      'By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'By using our services, you represent that you are at least 18 years of age or legally authorized to enter into a binding agreement on behalf of an organization.',
    ],
  },
  {
    title: '3. Scope of Services',
    bullets: [
      'The scope of every project shall be defined through a written quotation, proposal, service agreement, invoice, email confirmation, or other mutually accepted documentation.',
      'Any work requested outside the approved scope shall be considered additional work and may require separate pricing and revised timelines.',
    ],
  },
  {
    title: '4. Project Execution',
    paragraphs: [
      'Project delivery timelines depend upon:',
    ],
    bullets: [
      'Timely submission of project requirements',
      'Client approvals',
      'Content availability',
      'Third-party integrations',
      'Technical complexity',
    ],
    paragraphs2: [
      'Z Labs shall not be responsible for delays caused by incomplete information, delayed approvals, or circumstances beyond our reasonable control.',
    ],
  } as unknown as Section,
  {
    title: '5. Pricing & Payments',
    bullets: [
      'All prices are quoted in the applicable currency unless otherwise stated.',
      'Projects generally require an advance payment before commencement.',
      'The remaining balance shall be payable according to the agreed milestone schedule or before final delivery.',
    ],
    subBullets: [
      {
        label: 'Late or outstanding payments may result in:',
        items: [
          'Temporary suspension of services',
          'Delay in project delivery',
          'Restriction of project access',
          'Withholding of source files or credentials until payment clearance',
        ],
      },
    ],
  },
  {
    title: '6. Intellectual Property',
    paragraphs: ['Unless otherwise agreed in writing:'],
    bullets: [
      'All source files, designs, code, software, and deliverables remain the intellectual property of Z Labs until full payment has been received.',
      'Upon receipt of complete payment, ownership of the final approved deliverables shall be transferred to the client, excluding third-party licensed assets.',
    ],
  },
  {
    title: '7. Client Responsibilities',
    paragraphs: ['The client agrees to:'],
    bullets: [
      'Provide accurate information',
      'Supply required content and materials',
      'Respond to communications promptly',
      'Review project submissions within a reasonable timeframe',
      'Obtain necessary legal rights for any content provided',
    ],
    paragraphs2: [
      'The client is solely responsible for ensuring that submitted content does not infringe any copyright, trademark, or intellectual property rights.',
    ],
  } as unknown as Section,
  {
    title: '8. Revisions',
    bullets: [
      'Revision requests shall be provided according to the agreed project scope.',
      'Additional revisions or feature enhancements beyond the approved scope may incur additional charges.',
    ],
  },
  {
    title: '9. Third-Party Services',
    paragraphs: [
      'Projects may involve third-party software, APIs, cloud providers, hosting services, payment gateways, advertising platforms, or licensed plugins.',
      'Z Labs shall not be liable for interruptions, pricing changes, policy modifications, account suspensions, or technical limitations imposed by third-party providers.',
    ],
  },
  {
    title: '10. Marketing Disclaimer',
    paragraphs: [
      'Digital marketing performance depends upon numerous external factors including market competition, audience behavior, advertising budget, product quality, landing page performance, and platform algorithms.',
      'Accordingly, Z Labs does not guarantee:',
    ],
    bullets: [
      'Search engine rankings',
      'Specific lead volume',
      'Revenue growth',
      'Sales targets',
      'Advertisement approvals',
      'Business profitability',
    ],
    paragraphs2: [
      'Our commitment is to provide professional services using industry best practices.',
    ],
  } as unknown as Section,
  {
    title: '11. Confidentiality',
    paragraphs: [
      'Both parties agree to maintain confidentiality regarding proprietary information, business data, trade secrets, technical documentation, and project-related communications unless disclosure is required by law.',
    ],
  },
  {
    title: '12. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Z Labs shall not be liable for indirect, incidental, special, consequential, or business interruption damages arising from the use of our services.',
      'Our maximum liability shall not exceed the total amount paid by the client for the specific project giving rise to the claim.',
    ],
  },
  {
    title: '13. Termination',
    bullets: [
      'Either party may terminate the agreement by providing written notice.',
    ],
    paragraphs: ['Z Labs reserves the right to suspend or terminate services in cases including but not limited to:'],
    numbered: [
      'Non-payment',
      'Fraudulent activity',
      'Abuse of staff',
      'Violation of applicable laws',
      'Breach of these Terms',
    ],
  } as unknown as Section,
  {
    title: '14. Governing Law',
    bullets: [
      'These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the Republic of India.',
      'Any disputes shall be subject to the exclusive jurisdiction of the competent courts in India.',
    ],
  },
  {
    title: '15. Contact Information',
    bullets: [
      'Z Labs',
      'Email: contact.zlabs@gmail.com',
      'Website: www.zlabs.company',
      'Phone: +91 7388936927',
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

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-3 pl-2">
            {section.bullets.map((b, i) => (
              <li key={`b-${i}`} className="flex items-start gap-3 text-base leading-7 text-ink-200 sm:text-[15px]">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#5b5bf7] to-[#ff7f2a]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {section.subBullets && section.subBullets.length > 0 && (
          <div className="space-y-5">
            {section.subBullets.map((sb, sbIdx) => (
              <div key={`sb-${sbIdx}`} className="rounded-2xl border border-white/8 bg-white/4 p-5">
                <p className="text-sm font-semibold text-white">{sb.label}</p>
                <ol className="mt-3 space-y-2 pl-6 list-decimal marker:text-[#ff9d2f]">
                  {sb.items.map((item, i) => (
                    <li key={`sbi-${i}`} className="text-base leading-7 text-ink-200 sm:text-[15px] pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        {section.numbered && section.numbered.length > 0 && (
          <ol className="space-y-3 pl-2 list-decimal marker:text-[#ff9d2f] marker:font-bold">
            {section.numbered.map((n, i) => (
              <li key={`n-${i}`} className="text-base leading-7 text-ink-200 sm:text-[15px] pl-2">
                {n}
              </li>
            ))}
          </ol>
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

export default function TermsConditions() {
  return (
    <div className="template-shell bg-dark-500 text-white">
      <SEO
        title="Terms & Conditions — Z Labs"
        description="Z Labs Terms & Conditions — Rules for using our website, services, project execution, payments, intellectual property, warranties, and dispute resolution. Please read before engaging our services."
        path="/terms"
        type="website"
        noIndex
        keywords={['Z Labs terms', 'terms and conditions digital agency', 'service terms India']}
        jsonLd={[
          orgSchema,
          webPageSchema(
            'Z Labs Terms & Conditions',
            'Terms and conditions governing use of the Z Labs website and digital services.',
            '/terms',
          ),
        ]}
      />

      <PageHeader
        label="Legal"
        title="Terms &"
        highlight="Conditions"
        description="These Terms & Conditions govern your access to and use of the Z Labs website and all services offered by the Company. Please read them carefully before engaging our services."
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
              <h4 className="text-lg font-bold text-white">Have questions about our terms?</h4>
              <p className="mt-1 text-sm text-ink-300">
                Reach out to our team and we'll be happy to clarify anything.
              </p>
            </div>
            <Link to="/contact" className="template-primary-btn shrink-0">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
