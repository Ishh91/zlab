import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brush,
  CheckCircle2,
  Globe,
  Megaphone,
  Smartphone,
  Users,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import SEO, { orgSchema, serviceSchema, webPageSchema } from '@/components/SEO';

const services = [
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    description:
      'Grow your brand, attract the right audience, and increase your revenue with data-driven digital marketing strategies.',
    items: [
      'Meta Ads (Facebook & Instagram Advertising)',
      'Google Ads (Search, Display & Performance Marketing)',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Lead Generation Campaigns',
      'WhatsApp Marketing',
      'Email Marketing',
      'Local Business Marketing',
      'Conversion Rate Optimization (CRO)',
      'Performance Marketing',
    ],
  },
  {
    title: 'Website Development',
    icon: Globe,
    description:
      'Build a powerful online presence with modern, responsive, and high-performance websites designed for user experience and business growth.',
    items: [
      'Business Website Development',
      'Corporate Website Development',
      'E-Commerce Website Development',
      'Landing Page Design',
      'Custom Web Application Development',
      'WordPress Development',
      'Website Redesign',
      'Website Maintenance & Support',
    ],
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    description:
      'Transform your ideas into feature-rich mobile applications that deliver exceptional user experiences across Android and iOS platforms.',
    items: [
      'Android App Development',
      'iOS App Development',
      'Cross-Platform App Development',
      'Business Applications',
      'E-Commerce Mobile Apps',
      'Booking & Service Apps',
      'Custom Mobile App Solutions',
      'App Maintenance & Support',
    ],
  },
  {
    title: 'AI Development',
    icon: Bot,
    description:
      'Harness the power of Artificial Intelligence to automate tasks, improve customer engagement, and increase business efficiency.',
    items: [
      'AI Tool Development',
      'AI Chatbot Development',
      'AI Voice Agents',
      'Custom AI Applications',
      'ChatGPT Integration',
      'AI Workflow Automation',
      'AI Business Assistants',
      'AI-Powered Customer Support',
    ],
  },
  {
    title: 'CRM & Business Automation',
    icon: Users,
    description:
      'Simplify your business operations with intelligent CRM systems and automation solutions that improve productivity and customer management.',
    items: [
      'White Label CRM Development',
      'Custom CRM Solutions',
      'Lead Management System',
      'Sales Pipeline Automation',
      'WhatsApp API Integration',
      'Email Automation',
      'Customer Relationship Management',
      'Business Workflow Automation',
    ],
  },
  {
    title: 'Branding & Creative Design',
    icon: Brush,
    description:
      'Build a memorable brand identity with creative designs that leave a lasting impression and strengthen your business presence.',
    items: [
      'Logo Design',
      'Brand Identity Design',
      'Social Media Creatives',
      'Brochure & Flyer Design',
      'UI/UX Design',
      'Motion Graphics',
      'Video Editing',
      'Marketing Collateral Design',
    ],
  },
];

const reasons = [
  'Tailored solutions aligned with your business goals',
  'Experienced professionals using modern technologies',
  'Quality, performance, and long-term scalability',
  'Innovation, transparency, and customer satisfaction',
  'Reliable support to help your business stay ahead',
];

export default function Services() {
  return (
    <div className="template-shell bg-dark-500 text-white">
      <SEO
        title="Services — Digital Marketing, Web Dev, Mobile Apps, AI, CRM"
        description="Z Labs offers 6+ end-to-end digital services: Digital Marketing (SEO, Google Ads, Meta Ads), Website Development, Mobile App Development (Android/iOS), AI Solutions, CRM & Business Automation, and Branding & Creative Design."
        path="/services"
        type="website"
        keywords={[
          'digital marketing services',
          'website development services',
          'mobile app development company',
          'AI development services',
          'CRM development services',
          'business automation company',
          'branding and creative design',
          'SEO services India',
          'Google Ads agency',
          'Meta Ads agency',
          'wordpress development',
        ]}
        jsonLd={[
          orgSchema,
          webPageSchema(
            'Z Labs Services',
            'Digital Marketing, Website Development, Mobile App Development, AI Solutions, CRM Development, and Business Automation services by Z Labs.',
            '/services',
          ),
          ...services.map((s) => serviceSchema(s.title, s.description)),
        ]}
      />

      <PageHeader
        label="Our Services"
        title="Smart Digital Solutions for"
        highlight="Modern Businesses"
        description="At Z Labs, we provide end-to-end digital solutions designed to help businesses grow, innovate, and succeed in the digital world. From digital marketing and custom software development to AI-powered automation, our services are built to deliver measurable results and long-term value."
      />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[-3rem] top-10 h-64 w-64 bg-[#5b5bf7]/18" />
        <div className="template-orb right-[-2rem] bottom-8 h-72 w-72 bg-[#ff7f2a]/14" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="template-badge">Built Around Your Goals</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Customized solutions that accelerate your
              <span className="template-gradient-text"> digital transformation</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-200 sm:text-lg">
              Whether you&apos;re a startup, a growing business, or an established
              enterprise, we create customized solutions that match your goals and help
              you scale with confidence.
            </p>
          </div>

          <div className="mt-16 grid gap-6 xl:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="template-panel rounded-[1.9rem] p-8 sm:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-200 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                    Our {service.title} Services
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                        <span className="text-sm text-ink-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[8%] top-1/3 h-56 w-56 bg-[#ff7f2a]/14" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Why Choose Our Services?</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Solutions built for
              <span className="template-gradient-text"> long-term value</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
              At Z Labs, we focus on delivering solutions that are tailored to your
              business goals. Every project is handled by experienced professionals using
              the latest technologies, ensuring quality, performance, and long-term
              scalability.
            </p>
            <p className="mt-4 text-base leading-8 text-ink-200 sm:text-lg">
              Our commitment to innovation, transparency, and customer satisfaction helps
              businesses achieve sustainable growth while staying ahead of the
              competition.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                  <span className="text-sm font-medium text-ink-100">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="template-panel rounded-[2rem] p-8 text-center sm:p-10 lg:p-14">
            <span className="template-badge">Let&apos;s Grow Your Business Together</span>
            <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
              Build, market, automate, and
              <span className="template-gradient-text"> scale with confidence</span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-ink-200 sm:text-lg">
              Looking for a trusted technology and digital marketing partner? Z Labs is
              here to help you build, market, automate, and scale your business with
              confidence. Contact our team for a free consultation and discover how we
              can transform your ideas into reality.
            </p>
            <Link to="/contact" className="template-primary-btn mx-auto mt-8 inline-flex">
              Ready to Get Started?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
