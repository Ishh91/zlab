import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Brush,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  HeartHandshake,
  Layers3,
  Mail,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Phone,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import { trustedClients } from '@/data/layout84';
import SEO, { orgSchema, serviceSchema, webPageSchema } from '@/components/SEO';
import useCountUp from '@/hooks/useCountUp';
import useInView from '@/hooks/useInView';

function SectionBadge({ children }: { children: ReactNode }) {
  return <span className="template-badge">{children}</span>;
}

const services = [
  {
    title: 'Digital Marketing',
    description:
      'Generate quality leads, increase sales, and build a stronger online presence with performance-focused marketing strategies.',
    icon: Megaphone,
    accent: 'from-[#5b5bf7] to-[#7a46ff]',
    items: [
      'Meta Ads',
      'Google Ads',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Lead Generation',
      'WhatsApp Marketing',
    ],
  },
  {
    title: 'Website Development',
    description:
      'Beautiful, fast, responsive, and SEO-friendly websites designed to convert visitors into customers.',
    icon: Globe,
    accent: 'from-[#7a46ff] to-[#ff7f2a]',
    items: [
      'Business Websites',
      'Corporate Websites',
      'E-Commerce Websites',
      'Landing Pages',
      'Custom Web Applications',
      'Website Maintenance',
    ],
  },
  {
    title: 'App Development',
    description:
      'Turn your business idea into a powerful mobile application with intuitive design and high performance.',
    icon: Smartphone,
    accent: 'from-[#ff7f2a] to-[#ff5f6d]',
    items: [
      'Android Apps',
      'iOS Apps',
      'Cross-Platform Apps',
      'Business Applications',
      'E-Commerce Apps',
      'Custom Mobile Solutions',
    ],
  },
  {
    title: 'AI Development',
    description:
      'Leverage Artificial Intelligence to automate operations and improve customer experience.',
    icon: Bot,
    accent: 'from-[#4f46e5] to-[#8b5cf6]',
    items: [
      'AI Tool Development',
      'AI Chatbots',
      'AI Voice Assistants',
      'AI Workflow Automation',
      'ChatGPT Integration',
      'Custom AI Solutions',
    ],
  },
  {
    title: 'CRM & Business Automation',
    description:
      'Manage leads, customers, and business operations from one intelligent platform.',
    icon: Database,
    accent: 'from-[#8b5cf6] to-[#f97316]',
    items: [
      'White Label CRM',
      'Lead Management',
      'Sales Automation',
      'WhatsApp API Integration',
      'Email Automation',
      'Business Workflow Automation',
    ],
  },
  {
    title: 'Branding & Creative',
    description:
      'Build a memorable brand identity with premium creative solutions.',
    icon: Palette,
    accent: 'from-[#f97316] to-[#5b5bf7]',
    items: [
      'Logo Design',
      'Brand Identity',
      'Social Media Creatives',
      'Brochure Design',
      'UI/UX Design',
      'Motion Graphics & Video Editing',
    ],
  },
];

const whyChoosePoints = [
  'Experienced Digital Marketing Professionals',
  'Custom Web & App Development',
  'AI-Powered Business Solutions',
  'ROI-Focused Marketing Strategies',
  'Transparent Communication',
  'Affordable Pricing',
  'Scalable Technology Solutions',
  'Fast Project Delivery',
  'Dedicated Support Team',
  'End-to-End Digital Services',
];

const processSteps = [
  {
    step: '1',
    title: 'Discover',
    description:
      'We understand your business goals, target audience, and challenges to build the right strategy.',
    icon: Search,
  },
  {
    step: '2',
    title: 'Plan',
    description:
      'Our experts create a customized roadmap tailored to your business requirements.',
    icon: Layers3,
  },
  {
    step: '3',
    title: 'Develop & Launch',
    description:
      'We design, develop, optimize, test, and launch high-quality digital solutions.',
    icon: Rocket,
  },
  {
    step: '4',
    title: 'Grow & Optimize',
    description:
      'We continuously monitor performance, improve results, and help your business scale.',
    icon: Target,
  },
];

const industries = [
  { name: 'Healthcare', icon: HeartHandshake },
  { name: 'Real Estate', icon: Briefcase },
  { name: 'Education', icon: Users },
  { name: 'E-Commerce', icon: Wallet },
  { name: 'Restaurants & Cafés', icon: Wrench },
  { name: 'Manufacturing', icon: Cpu },
  { name: 'Finance', icon: Database },
  { name: 'Travel & Hospitality', icon: Globe },
  { name: 'Beauty & Wellness', icon: Sparkles },
  { name: 'Home Services', icon: Wrench },
  { name: 'Logistics', icon: MonitorSmartphone },
  { name: 'Startups & SMEs', icon: Rocket },
];

const clientChooseReasons = [
  { title: 'Customized Business Solutions', icon: Layers3 },
  { title: 'Latest Technology Stack', icon: Cpu },
  { title: 'Experienced Development Team', icon: Users },
  { title: 'Certified Digital Marketing Experts', icon: Megaphone },
  { title: 'AI-Driven Automation', icon: Bot },
  { title: 'Mobile-Friendly Solutions', icon: Smartphone },
  { title: 'Secure & Scalable Development', icon: ShieldCheck },
  { title: 'On-Time Project Delivery', icon: Rocket },
  { title: 'Ongoing Technical Support', icon: Wrench },
];

export default function Home() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  const heroStatsRef = useInView<HTMLDivElement>({ threshold: 0.15 });
  const impactRef = useInView<HTMLDivElement>({ threshold: 0.2 });
  const expertiseRef = useInView<HTMLDivElement>({ threshold: 0.15 });

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setTimelineVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heroProjects = useCountUp(500, heroStatsRef.inView, 1800);
  const heroClients = useCountUp(200, heroStatsRef.inView, 2000);
  const heroGrowth = useCountUp(98, heroStatsRef.inView, 2200);

  const impactProjects = useCountUp(500, impactRef.inView, 1800);
  const impactClients = useCountUp(200, impactRef.inView, 2000);
  const impactGrowth = useCountUp(98, impactRef.inView, 2200);
  const impactTeam = useCountUp(50, impactRef.inView, 1900);

  const expServices = useCountUp(6, expertiseRef.inView, 1400);
  const expIndustries = useCountUp(12, expertiseRef.inView, 1600);
  const expTeam = useCountUp(50, expertiseRef.inView, 1800);
  const expCountries = useCountUp(10, expertiseRef.inView, 1700);

  return (
    <div className="template-shell bg-dark-500 text-white">
      <SEO
        title="Z Labs — Digital Marketing, Web Dev, Mobile Apps, AI & Automation"
        description="Z Labs is a full-service digital solutions company offering Digital Marketing, Website Development, Mobile App Development, AI Solutions, CRM Development, and Business Automation. Grow your business with smart marketing and modern technology."
        path="/"
        type="website"
        keywords={[
          'digital marketing agency India',
          'website development company',
          'mobile app development services',
          'AI solutions company',
          'CRM development agency',
          'business automation services',
          'Google Ads Meta Ads SEO agency',
          'software development company India',
          'Z Labs digital',
        ]}
        jsonLd={[
          orgSchema,
          webPageSchema(
            'Z Labs — Digital Marketing, Web Dev, Mobile Apps, AI & Automation',
            'Z Labs is a full-service digital solutions company offering Digital Marketing, Website Development, Mobile App Development, AI Solutions, CRM Development, and Business Automation.',
            '/',
          ),
          serviceSchema(
            'Digital Marketing',
            'SEO, Google Ads, Meta Ads, Social Media Marketing, Lead Generation, and performance marketing services by Z Labs.',
          ),
          serviceSchema(
            'Website Development',
            'Modern, responsive, high-performance website development for startups, SMEs, and enterprises by Z Labs.',
          ),
          serviceSchema(
            'Mobile App Development',
            'Android, iOS, and cross-platform mobile application development services with exceptional user experience.',
          ),
          serviceSchema(
            'AI Solutions',
            'AI tool development, AI chatbots, AI voice assistants, AI workflow automation, and custom AI-powered business solutions.',
          ),
          serviceSchema(
            'CRM Development',
            'Custom CRM, white label CRM, lead management, sales automation, WhatsApp and email automation systems.',
          ),
        ]}
      />

      <section
        id="home"
        className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36"
      >
        <div className="template-orb left-[-8rem] top-24 h-72 w-72 bg-[#4f46e5]/35" />
        <div className="template-orb bottom-8 right-[-4rem] h-80 w-80 bg-[#ff7f2a]/20" />
        <div className="template-orb right-[28%] top-[28%] h-56 w-56 bg-[#6d5dfc]/20" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="animate-fade-in-up [animation-delay:0.1s] opacity-0">
              <SectionBadge>Z Labs — Digital Solutions</SectionBadge>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl animate-fade-in-up [animation-delay:0.25s] opacity-0">
              Transforming Ideas into{' '}
              <span className="template-gradient-text">Powerful Digital Solutions</span>
            </h1>
            <h2 className="mt-5 text-xl font-semibold leading-snug text-white/90 sm:text-2xl animate-fade-in-up [animation-delay:0.4s] opacity-0">
              Grow Your Business with Smart Marketing, Custom Development &amp; AI
              Innovation.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg animate-fade-in-up [animation-delay:0.55s] opacity-0">
               we create digital experiences that generate leads, increase
              sales, and build lasting customer relationships.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:0.7s] opacity-0">
              <Link to="/contact" className="template-primary-btn">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="template-secondary-btn">
                View Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="template-hero-ring absolute inset-x-8 inset-y-10 hidden rounded-[2.5rem] lg:block" />

            <div ref={heroStatsRef.ref} className="relative mx-auto max-w-xl animate-dashboard-float">
              <div className="template-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/5 p-5 animate-float-slow [animation-delay:0.2s]">
                    <div className="text-sm font-medium uppercase tracking-[0.3em] text-white/55">
                      Our Impact
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-end justify-between border-b border-white/10 pb-3">
                        <span className="text-sm text-ink-300">Projects</span>
                        <span className="text-2xl font-bold text-white">{heroProjects}+</span>
                      </div>
                      <div className="flex items-end justify-between border-b border-white/10 pb-3">
                        <span className="text-sm text-ink-300">Clients</span>
                        <span className="text-2xl font-bold text-white">{heroClients}+</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-sm text-ink-300">Support</span>
                        <span className="text-2xl font-bold text-white">24/7</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] p-5 text-white shadow-2xl shadow-[#382f92]/30 animate-float-slow [animation-delay:0.4s]">
                    <div className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
                      Growth Rate
                    </div>
                    <div className="mt-6 text-6xl font-black leading-none">{heroGrowth}%</div>
                    <p className="mt-4 text-sm leading-6 text-white/85">
                      Client satisfaction &amp; ROI-focused delivery across every
                      project we ship.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white/5 p-5 sm:col-span-2 animate-float-slow [animation-delay:0.6s]">
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        { icon: Megaphone, title: 'Marketing' },
                        { icon: Brush, title: 'Creative' },
                        { icon: Bot, title: 'AI Tools' },
                      ].map((item, idx) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 hover:-translate-y-1"
                          style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
                        >
                          <item.icon className="h-5 w-5 text-[#ff9d2f]" />
                          <div className="mt-4 text-sm font-semibold text-white">
                            {item.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="template-floating-card left-[-2rem] top-[-0.75rem] hidden lg:flex animate-float-card1">
                <CheckCircle2 className="h-5 w-5 text-[#ff9d2f]" />
                <div>
                  <div className="text-sm font-semibold text-white">Trusted workflow</div>
                  <div className="text-xs text-ink-300">Delivered with modern tooling</div>
                </div>
              </div>

              <div className="template-floating-card bottom-[-0.75rem] right-[-2rem] hidden lg:flex animate-float-card2">
                <Quote className="h-5 w-5 text-[#5b5bf7]" />
                <div>
                  <div className="text-sm font-semibold text-white">Client focused</div>
                  <div className="text-xs text-ink-300">End-to-end software partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden border-y border-white/6 bg-[#0c1022]/85 px-6 py-16 sm:px-8 lg:px-10">
        <div className="template-orb left-[-4rem] top-[-2rem] h-56 w-56 bg-[#5b5bf7]/18" />
        <div className="template-orb right-[-2rem] bottom-[-3rem] h-56 w-56 bg-[#ff7f2a]/15" />

        <div ref={impactRef.ref} className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="template-badge">Our Impact in Numbers</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Results that speak{' '}
              <span className="template-gradient-text">louder than words</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-black leading-none text-white sm:text-6xl">
                {impactProjects}
                <span className="template-gradient-text">+</span>
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-300">
                Projects Delivered
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-black leading-none text-white sm:text-6xl">
                {impactClients}
                <span className="template-gradient-text">+</span>
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-300">
                Happy Clients
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-black leading-none text-white sm:text-6xl">
                {impactTeam}
                <span className="template-gradient-text">+</span>
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-300">
                Team Experts
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-black leading-none text-white sm:text-6xl">
                {impactGrowth}
                <span className="template-gradient-text">%</span>
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-300">
                Client Growth Rate
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="border-y border-white/6 bg-[#0c1022]/80 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-white/65">
            Trusted Digital Growth Partner
          </h2>
          <div className="mt-8 overflow-hidden">
            <div className="flex min-w-max animate-marquee gap-5 pr-5">
              {[...trustedClients, ...trustedClients, ...trustedClients].map(
                (client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-200"
                  >
                    {client}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="template-orb right-0 top-10 h-64 w-64 bg-[#5b5bf7]/18" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="template-panel rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#151c35] to-[#0d1020] p-6 sm:col-span-2">
                  <div className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Our Expertise
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {[
                      { label: 'Services', value: '6+' },
                      { label: 'Industries', value: '12+' },
                      { label: 'Team Members', value: '50+' },
                      { label: 'Countries', value: '10+' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[1.2rem] bg-white/5 p-4">
                        <div className="text-2xl font-extrabold text-white">
                          {stat.value}
                        </div>
                        <p className="mt-1 text-xs leading-5 text-ink-300">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {[
                  {
                    icon: Megaphone,
                    title: 'Marketing',
                    desc: 'ROI-driven campaigns',
                  },
                  {
                    icon: Bot,
                    title: 'AI + Dev',
                    desc: 'Custom tech solutions',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <item.icon className="h-6 w-6 text-[#ff9d2f]" />
                    <div className="mt-4 font-bold text-white">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-ink-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionBadge>Your One-Stop Technology &amp; Marketing Partner</SectionBadge>
            <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Trusted Digital Growth Partner
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
              Success in today&apos;s digital world requires more than just a website or
              advertising campaign. It requires strategy, innovation, technology, and
              continuous optimization.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
              <span className="font-semibold text-white">Z Labs</span> combines
              creativity with technology to deliver complete digital solutions under
              one roof. From launching high-converting marketing campaigns to building
              scalable websites, mobile applications, AI-powered tools, and business
              automation systems, we help businesses stay ahead of the competition.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
              Our goal is simple: help your business attract more customers, increase
              revenue, and grow faster with modern digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="template-orb left-[-3rem] top-1/3 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Our Services</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Complete Digital Solutions for <span className="template-gradient-text">Every Business</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="template-panel flex flex-col rounded-[1.75rem] p-7"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg shadow-[#352d91]/30`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-300">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/8 pt-6">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/45">
                    Our Services
                  </div>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink-100"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff9d2f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9d2f]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Why Choose Z Labs</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Why Businesses{' '}
              <span className="template-gradient-text">Trust Z Labs</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoosePoints.map((point) => (
              <div
                key={point}
                className="template-panel flex items-start gap-4 rounded-[1.5rem] p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a]">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div className="text-base font-medium leading-7 text-ink-100">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="template-orb left-[15%] top-0 h-56 w-56 bg-[#5b5bf7]/15" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2
              className="mt-6 font-extrabold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Simple Process.{' '}
              <span className="template-gradient-text">Powerful Results.</span>
            </h2>
          </div>

          <div
            ref={timelineRef}
            className={`timeline-wrap relative mt-16 sm:mt-20 lg:mt-24 ${
              timelineVisible ? 'is-visible' : ''
            }`}
          >
            <div className="timeline-line" aria-hidden="true" />

            {processSteps.map((step, index) => (
              <div key={step.title} className="timeline-row">
                <div className="timeline-node" aria-hidden="true">
                  <span className="sr-only">Step {step.step}</span>
                </div>

                <div className="timeline-card">
                  <div className="card-inner template-panel relative flex h-full flex-col items-start rounded-[1.75rem] p-6 sm:p-7 lg:p-8">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-lg font-black text-white shadow-lg shadow-[#352d91]/30 sm:order-2">
                        {step.step}
                      </div>
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-[#ff9d2f] ${
                          index % 2 === 1 ? 'sm:order-1 sm:ml-auto lg:ml-0' : ''
                        }`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-ink-300 lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Industries We Serve</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              We proudly work with businesses across{' '}
              <span className="template-gradient-text">multiple industries</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="template-panel group flex flex-col items-center gap-4 rounded-[1.5rem] p-6 text-center transition-colors hover:border-[#ff9d2f]/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-[#ff9d2f] transition-colors group-hover:bg-gradient-to-br group-hover:from-[#5b5bf7] group-hover:to-[#ff7f2a] group-hover:text-white">
                  <industry.icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-bold text-white">{industry.name}</div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-ink-200 sm:text-lg">
            No matter your industry, we build solutions tailored to your business
            goals.
          </p>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="template-orb right-[10%] bottom-0 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Why Clients Choose Us</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              What Makes Us{' '}
              <span className="template-gradient-text">Different</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientChooseReasons.map((reason) => (
              <div
                key={reason.title}
                className="template-panel flex items-start gap-4 rounded-[1.5rem] p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-1 text-base font-bold leading-7 text-white">
                  {reason.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[20%] top-0 h-56 w-56 bg-[#5b5bf7]/18" />
        <div className="template-orb right-[10%] bottom-0 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="relative mx-auto max-w-7xl">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionBadge>Ready to Grow Your Business?</SectionBadge>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Let&apos;s build something{' '}
                  <span className="template-gradient-text">amazing together.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
                  Whether you need more leads, a professional website, a custom mobile
                  app, AI-powered automation, or a complete digital transformation, Z
                  Labs is here to help.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link to="/contact" className="template-primary-btn">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="template-secondary-btn">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="template-orb right-[10%] top-10 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionBadge>Contact Preview</SectionBadge>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Let&apos;s Start Your{' '}
              <span className="template-gradient-text">Next Project</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-200 sm:text-lg">
              Have a project in mind? We&apos;d love to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 7388936927',
                  href: 'tel:+917388936927',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'contact.zlabs@gmail.com',
                  href: 'mailto:contact.zlabs@gmail.com',
                },
                {
                  icon: Globe,
                  label: 'Website',
                  value: 'zlabs.company',
                  href: 'https://www.zlabs.company',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="template-panel flex items-start gap-4 rounded-[1.5rem] p-6 transition-colors hover:border-[#ff9d2f]/30"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/45">
                      {item.label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-ink-100 transition-colors hover:text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="template-primary-btn mt-8 inline-flex"
              style={{
                backgroundImage: 'linear-gradient(to bottom right, #25D366, #128C7E)',
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Send Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="template-panel rounded-[2rem] p-7 sm:p-9">
            <span className="template-badge">Quick Inquiry</span>
            <h3 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
              Send us a quick message
            </h3>
            <p className="mt-4 text-base leading-8 text-ink-200">
              Prefer WhatsApp? Click the green button above to chat directly with our
              team with your full project details.
            </p>

            <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                <span className="text-sm text-ink-100">
                  <span className="font-semibold text-white">Instant Response</span> —
                  WhatsApp messages reach us in seconds
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                <span className="text-sm text-ink-100">
                  <span className="font-semibold text-white">Free Consultation</span> —
                  No charges for initial project discussion
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                <span className="text-sm text-ink-100">
                  <span className="font-semibold text-white">100% Confidential</span> —
                  Your ideas &amp; data stay safe with us
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="template-primary-btn mt-8 w-full justify-center"
            >
              Open Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
