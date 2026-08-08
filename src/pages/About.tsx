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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

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
    icon: Briefcase,
  },
  {
    title: 'Continuous Growth',
    description:
      'Technology never stands still, and neither do we. We continuously learn, improve, and innovate to provide the best possible solutions.',
    icon: Rocket,
  },
];

const reasons = [
  'End-to-End Digital Solutions',
  'Experienced Team of Professionals',
  'Customized Strategies for Every Business',
  'Modern Web & Mobile Development',
  'AI-Powered Business Automation',
  'ROI-Focused Digital Marketing',
  'Transparent Communication',
  'Timely Project Delivery',
  'Scalable & Secure Solutions',
  'Dedicated Customer Support',
];

export default function About() {
  return (
    <div className="template-shell bg-dark-500 text-white">
      <PageHeader
        label="About Us"
        title="Building Digital Success Through"
        highlight="Innovation & Technology"
        description="At Z Labs, we believe every business deserves the right digital strategy and technology to grow. We help startups, small businesses, and enterprises build strong digital presence, streamline operations, and achieve sustainable growth."
      />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb right-0 top-10 h-64 w-64 bg-[#5b5bf7]/18" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="template-badge">About Z Labs</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your digital growth partner for <span className="template-gradient-text">modern business</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-ink-200 sm:text-lg">
              <p>
                At Z Labs, we are a full-service digital solutions company specializing in
                digital marketing, website development, mobile app development, AI
                solutions, CRM development, and business automation.
              </p>
              <p>
                Our mission is to help startups, small businesses, and enterprises
                establish a strong digital presence, streamline operations, and achieve
                sustainable growth through innovative, scalable, and result-oriented
                solutions.
              </p>
              <p>
                From creating high-performing websites and mobile applications to running
                ROI-focused marketing campaigns and developing intelligent AI-powered
                tools, we combine creativity, technology, and strategy to deliver
                measurable business results.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="template-primary-btn">
                Let&apos;s Build Something Extraordinary
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="template-secondary-btn">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="template-panel rounded-[2rem] p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[-3rem] top-1/3 h-56 w-56 bg-[#ff7f2a]/15" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Who We Are</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              More than a digital agency
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
              Z Labs is more than a digital agency, we are your technology and growth
              partner. Our team of developers, designers, marketers, and AI specialists
              works together to build solutions that are tailored to your unique business
              needs.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              'We focus on understanding your goals, identifying opportunities, and delivering solutions that not only look great but also drive real business outcomes.',
              'Whether you are launching a new business, scaling an existing brand, or transforming operations with technology, we support you at every stage of your digital journey.',
              'Our approach blends strategy, creativity, and execution so every project helps your business grow faster, work smarter, and compete better.',
            ].map((point) => (
              <div key={point} className="template-panel rounded-[1.5rem] p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                  <p className="text-sm leading-7 text-ink-100 sm:text-base">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Our Mission</span>
            <p className="mt-6 text-lg leading-8 text-ink-200">
              Our mission is to empower businesses with innovative digital solutions that
              increase visibility, improve customer engagement, simplify business
              processes, and accelerate long-term growth.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-200">
              We aim to deliver reliable, affordable, and future-ready technology that
              enables businesses to stay ahead in an ever-evolving digital world.
            </p>
          </div>

          <div className="template-panel rounded-[2rem] p-8 sm:p-10">
            <span className="template-badge">Our Vision</span>
            <p className="mt-6 text-lg leading-8 text-ink-200">
              Our vision is to become a globally trusted digital transformation partner,
              recognized for delivering innovative marketing strategies, advanced software
              solutions, and AI-powered technologies that help businesses achieve
              sustainable success.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Future-ready. Scalable. Result-oriented.
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1022] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="template-badge">Our Core Values</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Principles that shape every <span className="template-gradient-text">solution we build</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.title} className="template-panel rounded-[1.75rem] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="template-orb left-[20%] top-0 h-56 w-56 bg-[#5b5bf7]/18" />
        <div className="mx-auto max-w-7xl">
          <div className="template-panel rounded-[2rem] p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <span className="template-badge">Why Choose Z Labs</span>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Built for brands that want <span className="template-gradient-text">real growth</span>
                </h2>
                <p className="mt-6 text-base leading-8 text-ink-200 sm:text-lg">
                  We deliver end-to-end digital solutions with strategy, execution, and
                  long-term support, so your business gets a partner that is focused on
                  outcomes, not just output.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff9d2f]" />
                      <span className="text-sm font-medium text-ink-100">{item}</span>
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
          <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            We create digital experiences that help businesses grow, compete, and succeed.
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-ink-200 sm:text-lg">
            Whether you need digital marketing, a business website, a custom mobile app,
            AI-powered solutions, or complete business automation, we&apos;re here to turn
            your vision into reality. Your growth starts with Z Labs.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
