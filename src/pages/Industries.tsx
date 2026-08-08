import {
  Activity,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Hotel,
  Landmark,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const industries = [
  {
    title: 'Healthcare',
    icon: HeartPulse,
    description:
      'We help hospitals, clinics, diagnostic centers, pharmacies, and healthcare professionals strengthen their online presence, attract more patients, and streamline operations with digital solutions.',
  },
  {
    title: 'Real Estate',
    icon: Building2,
    description:
      'From residential projects to commercial properties, we create high-converting marketing campaigns, professional websites, CRM solutions, and lead management systems for real estate businesses.',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description:
      'We support schools, colleges, coaching institutes, and online learning platforms with websites, student management systems, digital marketing, and branding solutions.',
  },
  {
    title: 'E-Commerce',
    icon: ShoppingBag,
    description:
      'Grow your online store with custom e-commerce websites, mobile apps, performance marketing, SEO, AI automation, and conversion-focused strategies.',
  },
  {
    title: 'Restaurants & Cafes',
    icon: UtensilsCrossed,
    description:
      'Increase reservations, online orders, and customer engagement through modern websites, social media marketing, local SEO, and digital advertising.',
  },
  {
    title: 'Home Services',
    icon: Home,
    description:
      'We help businesses such as cleaning services, pest control, appliance repair, plumbing, electrical, and home maintenance companies generate more local leads and expand their customer base.',
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    description:
      'Enhance your digital presence with corporate websites, business automation, CRM systems, and B2B marketing solutions that support long-term business growth.',
  },
  {
    title: 'Finance & Insurance',
    icon: Landmark,
    description:
      'Build trust with secure websites, customer management systems, AI-powered automation, and digital marketing strategies designed for financial service providers.',
  },
  {
    title: 'Travel & Hospitality',
    icon: Hotel,
    description:
      'From hotels and resorts to travel agencies and tour operators, we create engaging digital experiences that increase bookings and customer engagement.',
  },
  {
    title: 'Beauty & Wellness',
    icon: Sparkles,
    description:
      'We help salons, spas, gyms, fitness centers, and wellness brands attract more customers through branding, social media marketing, websites, and online advertising.',
  },
  {
    title: 'Startups & Small Businesses',
    icon: Briefcase,
    description:
      'We empower startups and SMEs with affordable, scalable, and growth-focused digital solutions, helping them establish a strong online presence and compete with confidence.',
  },
];

const reasons = [
  'Industry-Specific Solutions',
  'Customized Digital Strategies',
  'Modern Website & App Development',
  'AI-Powered Automation',
  'Performance-Driven Marketing',
  'Scalable CRM Solutions',
  'Dedicated Technical Support',
  'Transparent Communication',
  'High-Quality Project Delivery',
  'Long-Term Business Partnership',
];

export default function Industries() {
  return (
    <div className="template-shell bg-dark-500 text-white">
      <PageHeader
        label="Industries We Serve"
        title="Empowering Businesses Across"
        highlight="Every Industry"
        description="At Z Labs, we understand that every industry has unique challenges and opportunities. That's why we provide customized digital marketing, software development, AI solutions, and business automation services tailored to your specific business goals."
      />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[-3rem] top-12 h-64 w-64 bg-[#5b5bf7]/18" />
        <div className="template-orb right-0 bottom-0 h-72 w-72 bg-[#ff7f2a]/14" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="template-badge">Tailored Solutions</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Built for startups, growing companies, and
              <span className="template-gradient-text"> established enterprises</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-200 sm:text-lg">
              Whether you&apos;re a startup, a growing company, or an established
              enterprise, our solutions are designed to help you increase visibility,
              improve efficiency, generate quality leads, and accelerate business growth.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="template-panel rounded-[1.75rem] p-7 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-200 sm:text-base">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[8%] top-1/3 h-56 w-56 bg-[#ff7f2a]/14" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Why Businesses Choose Z Labs</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your industry. <span className="template-gradient-text">Our expertise.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
              No matter your industry or business size, Z Labs is committed to
              delivering innovative digital solutions that help you attract customers,
              improve operations, and achieve sustainable growth.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Let&apos;s build the future of your business together.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
              <Activity className="h-7 w-7" />
            </div>
            <span className="template-badge mt-6">Growth Across Industries</span>
            <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
              Innovative digital solutions for
              <span className="template-gradient-text"> sustainable growth</span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-ink-200 sm:text-lg">
              We combine digital marketing, software development, AI solutions, and
              business automation to help businesses grow smarter, operate better, and
              compete with confidence in a fast-changing market.
            </p>
            <Link to="/contact" className="template-primary-btn mx-auto mt-8 inline-flex">
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
