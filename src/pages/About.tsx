import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Brain,
  Briefcase,
  CheckCircle2,
  Globe,
  Layers3,
  Lightbulb,
  MessageSquareMore,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Award,
  Target,
  HeartHandshake,
  Zap,
  BarChart3,
  Compass,
  Quote,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import useCountUp from '@/hooks/useCountUp';
import useInView from '@/hooks/useInView';
import SEO, { orgSchema, webPageSchema } from '@/components/SEO';

const services = [
  { title: 'Digital Marketing', icon: TrendingUp },
  { title: 'Website Development', icon: Globe },
  { title: 'Mobile App Development', icon: Smartphone },
  { title: 'AI Solutions', icon: Brain },
  { title: 'CRM Development', icon: Layers3 },
  { title: 'Business Automation', icon: Bot },
];

const coreValues = [
  {
    title: 'Innovation',
    description:
      'We embrace new technologies and creative thinking to build modern, future-ready solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Quality',
    description:
      'Every project is developed with attention to detail, performance, and long-term reliability.',
    icon: BadgeCheck,
  },
  {
    title: 'Transparency',
    description:
      'We believe in honest communication, clear processes, and complete transparency throughout every project.',
    icon: MessageSquareMore,
  },
  {
    title: 'Customer Success',
    description:
      'Your success is our priority. We focus on building long-term partnerships by delivering measurable results and exceptional service.',
    icon: HeartHandshake,
  },
  {
    title: 'Continuous Growth',
    description:
      'Technology never stands still, and neither do we. We continuously learn, improve, and innovate to provide the best possible solutions.',
    icon: Rocket,
  },
];

const reasons = [
  { title: 'End-to-End Digital Solutions', icon: Layers3 },
  { title: 'Experienced Team of Professionals', icon: Users },
  { title: 'Customized Strategies for Every Business', icon: Target },
  { title: 'Modern Web & Mobile Development', icon: Globe },
  { title: 'AI-Powered Business Automation', icon: Bot },
  { title: 'ROI-Focused Digital Marketing', icon: TrendingUp },
  { title: 'Transparent Communication', icon: MessageSquareMore },
  { title: 'Timely Project Delivery', icon: Zap },
  { title: 'Scalable & Secure Solutions', icon: ShieldCheck },
  { title: 'Dedicated Customer Support', icon: HeartHandshake },
];

const stats = [
  { label: 'Projects Delivered', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 200, suffix: '+' },
  { label: 'Growth Rate', value: 98, suffix: '%' },
  { label: 'Team Experts', value: 50, suffix: '+' },
];

function StatsCard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, idx) => (
        <StatItem key={stat.label} stat={stat} inView={inView} index={idx} />
      ))}
    </div>
  );
}

function StatItem({
  stat,
  inView,
  index,
}: {
  stat: { label: string; value: number; suffix: string };
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, inView, 2000 + index * 200);
  return (
    <div
      className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:p-5 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="text-3xl font-black text-white sm:text-4xl">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs font-medium leading-5 text-ink-300 sm:text-sm">
        {stat.label}
      </div>
    </div>
  );
}

export default function About() {
  const valuesRef = useInView<HTMLDivElement>({ threshold: 0.1 });
  const reasonsRef = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="template-shell bg-dark-500 text-white">
      <SEO
        title="About Z Labs — Your Digital Growth & Technology Partner"
        description="Learn about Z Labs — a full-service digital solutions company specializing in Digital Marketing, Website Development, Mobile Apps, AI Solutions, CRM, and Business Automation. Our mission, vision, values, and why businesses trust us."
        path="/about"
        type="website"
        keywords={[
          'about Z Labs',
          'digital agency about us',
          'software development company mission',
          'marketing agency values',
          'Z Labs team',
          'why choose Z Labs',
          'technology growth partner',
        ]}
        jsonLd={[
          orgSchema,
          webPageSchema(
            'About Z Labs',
            'Z Labs is a full-service digital solutions company: Digital Marketing, Website Development, Mobile Apps, AI Solutions, CRM Development, and Business Automation.',
            '/about',
          ),
        ]}
      />

      <PageHeader
        label="About Us"
        title="Building Digital Success Through"
        highlight="Innovation & Technology"
        description="At Z Labs, we believe every business deserves the right digital strategy and technology to grow. We are a full-service digital solutions company specializing in Digital Marketing, Website Development, Mobile App Development, AI Solutions, CRM Development, and Business Automation."
      />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb right-0 top-10 h-64 w-64 bg-[#5b5bf7]/18" />
        <div className="template-orb left-[10%] bottom-[-2rem] h-64 w-64 bg-[#ff7f2a]/14" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="template-badge animate-fade-in-up [animation-delay:0.1s] opacity-0">
              About Z Labs
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl animate-fade-in-up [animation-delay:0.2s] opacity-0">
              Your digital growth partner for{' '}
              <span className="template-gradient-text">modern business</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-ink-200 sm:text-lg animate-fade-in-up [animation-delay:0.35s] opacity-0">
              <p>
                At Z Labs, we are a full-service digital solutions company
                specializing in digital marketing, website development, mobile
                app development, AI solutions, CRM development, and business
                automation.
              </p>
              <p>
                Our mission is to help startups, small businesses, and
                enterprises establish a strong digital presence, streamline
                operations, and achieve sustainable growth through innovative,
                scalable, and result-oriented solutions.
              </p>
              <p>
                From creating high-performing websites and mobile applications
                to running ROI-focused marketing campaigns and developing
                intelligent AI-powered tools, we combine creativity, technology,
                and strategy to deliver measurable business results.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:0.5s] opacity-0">
              <Link to="/contact" className="template-primary-btn">
                Let&apos;s Build Something Extraordinary
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="template-secondary-btn">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 animate-fade-in-up [animation-delay:0.65s] opacity-0">
              <StatsCard />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-xl animate-dashboard-float">
              <div className="template-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {services.map((service, idx) => (
                    <div
                      key={service.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff9d2f]/25 animate-float-slow"
                      style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-[#151c35] to-[#0d1020] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Client Satisfaction
                      </div>
                      <div className="mt-2 text-4xl font-black text-white">
                        98%
                      </div>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30 animate-pulse-glow">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="template-floating-card left-[-2rem] top-[-0.75rem] hidden lg:flex animate-float-card1">
                <Sparkles className="h-5 w-5 text-[#ff9d2f]" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    Innovation First
                  </div>
                  <div className="text-xs text-ink-300">
                    Modern tech, future-ready
                  </div>
                </div>
              </div>

              <div className="template-floating-card bottom-[-0.75rem] right-[-2rem] hidden lg:flex animate-float-card2">
                <BarChart3 className="h-5 w-5 text-[#5b5bf7]" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    ROI Focused
                  </div>
                  <div className="text-xs text-ink-300">
                    Measurable growth, always
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[-3rem] top-1/3 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="template-orb right-[5%] top-0 h-48 w-48 bg-[#5b5bf7]/15" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="template-badge">Who We Are</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              More than a digital agency—
              <span className="template-gradient-text block sm:inline">
                we&apos;re your growth partner
              </span>
            </h2>
            <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#ff9d2f]/50 to-transparent" />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="template-panel rounded-[2rem] p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Technology meets strategy
              </h3>
              <p className="mt-5 text-base leading-8 text-ink-200 sm:text-lg">
                Z Labs is more than a digital agency—we are your technology and
                growth partner. Our team of developers, designers, marketers,
                and AI specialists works together to build solutions that are
                tailored to your unique business needs.
              </p>
              <div className="mt-7 rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <Quote className="h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                  <p className="text-sm italic leading-6 text-ink-100">
                    We focus on understanding your goals, identifying
                    opportunities, and delivering solutions that not only look
                    great but also drive real business outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                {
                  icon: Compass,
                  title: 'Understand Your Vision',
                  text: 'Whether you are launching a new business, scaling an existing brand, or transforming operations with technology, we support you at every stage of your digital journey.',
                },
                {
                  icon: Target,
                  title: 'Outcome-Focused Delivery',
                  text: 'Our approach blends strategy, creativity, and execution so every project helps your business grow faster, work smarter, and compete better.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Long-Term Partnership',
                  text: 'From first consultation to post-launch support, we stay invested in your success—helping you adapt, optimize, and scale as the market evolves.',
                },
              ].map((point, idx) => (
                <div
                  key={point.title}
                  className="template-panel rounded-[1.5rem] p-6 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[#ff9d2f]">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold leading-6 text-white sm:text-lg">
                        {point.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-ink-300 sm:text-base">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb right-[15%] top-[-1rem] h-56 w-56 bg-[#5b5bf7]/16" />
        <div className="template-orb left-[10%] bottom-0 h-48 w-48 bg-[#ff7f2a]/14" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="template-badge">Mission &amp; Vision</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Shaped by purpose, driven by{' '}
              <span className="template-gradient-text">your success</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#5b5bf7]/50 to-transparent" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="template-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#5b5bf7]/25 to-transparent blur-3xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#7a5cfb] text-white shadow-lg shadow-[#352d91]/30">
                <Target className="h-6 w-6" />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#a5a8ff]">
                Our Mission
              </span>
              <p className="mt-4 text-lg leading-8 text-ink-200">
                Our mission is to empower businesses with innovative digital
                solutions that increase visibility, improve customer engagement,
                simplify business processes, and accelerate long-term growth.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-200">
                We aim to deliver reliable, affordable, and future-ready
                technology that enables businesses to stay ahead in an
                ever-evolving digital world.
              </p>
            </div>

            <div className="template-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff7f2a]/25 to-transparent blur-3xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7f2a] to-[#ff9d2f] text-white shadow-lg shadow-[#5c3a14]/30">
                <Compass className="h-6 w-6" />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#ffd09a]">
                Our Vision
              </span>
              <p className="mt-4 text-lg leading-8 text-ink-200">
                Our vision is to become a globally trusted digital
                transformation partner, recognized for delivering innovative
                marketing strategies, advanced software solutions, and AI-powered
                technologies that help businesses achieve sustainable success.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                <Sparkles className="h-4 w-4 text-[#ff9d2f]" />
                Future-ready. Scalable. Result-oriented.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div
          ref={valuesRef.ref}
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="template-badge">Our Core Values</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Principles that shape every{' '}
              <span className="template-gradient-text">solution we build</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#ff9d2f]/50 to-transparent" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value, idx) => (
              <div
                key={value.title}
                className={`template-panel rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0 ${
                  valuesRef.inView ? '' : ''
                }`}
                style={{
                  animationDelay: `${0.1 + idx * 0.1}s`,
                  animationPlayState: valuesRef.inView ? 'running' : 'paused',
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[20%] top-0 h-56 w-56 bg-[#5b5bf7]/18" />
        <div className="template-orb right-[10%] bottom-0 h-56 w-56 bg-[#ff7f2a]/15" />

        <div ref={reasonsRef.ref} className="mx-auto max-w-7xl">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <span className="template-badge">Why Choose Z Labs</span>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Built for brands that want{' '}
                  <span className="template-gradient-text">real growth</span>
                </h2>
                <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#5b5bf7]/50 via-[#ff9d2f]/50 to-transparent" />
                <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
                  We deliver end-to-end digital solutions with strategy,
                  execution, and long-term support, so your business gets a
                  partner that is focused on outcomes, not just output.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Secure', icon: ShieldCheck },
                    { label: 'Fast', icon: Zap },
                    { label: 'Trusted', icon: BadgeCheck },
                  ].map((i) => (
                    <div
                      key={i.label}
                      className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <i.icon className="mx-auto h-5 w-5 text-[#ff9d2f]" />
                      <div className="mt-2 text-xs font-semibold text-white">
                        {i.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((item, idx) => (
                  <div
                    key={item.title}
                    className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#ff9d2f]/25 animate-fade-in-up opacity-0"
                    style={{
                      animationDelay: `${0.1 + idx * 0.06}s`,
                      animationPlayState: reasonsRef.inView
                        ? 'running'
                        : 'paused',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-md shadow-[#352d91]/30">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium leading-6 text-ink-100 sm:text-base">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-[#0c1022]/80 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <span className="template-badge">Let&apos;s Build Something Extraordinary</span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            We create digital experiences that help businesses{' '}
            <span className="template-gradient-text">
              grow, compete, and succeed.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-ink-200 sm:text-lg">
            Whether you need digital marketing, a business website, a custom
            mobile app, AI-powered solutions, or complete business automation,
            we&apos;re here to turn your vision into reality. Your growth starts
            with Z Labs.
          </p>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="template-primary-btn">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="template-secondary-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
