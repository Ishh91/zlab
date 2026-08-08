import {
  Brain,
  Code2,
  LineChart,
  ShieldCheck,
  Smartphone,
  Cloud,
  Cpu,
  PenTool,
  Zap,
  Globe,
  ShoppingCart,
  HeartPulse,
  Factory,
  Landmark,
  GraduationCap,
  Plane,
  Server,
  Database,
  Gauge,
  Lock,
  Workflow,
  MessageSquare,
  Target,
  Users,
  Rocket,
  TrendingUp,
  Award,
  Lightbulb,
  HandHeart,
  Headphones,
  MonitorSmartphone,
  Network,
  Layers,
} from 'lucide-react';

export type Service = {
  slug: string;
  icon: typeof Brain;
  title: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-machine-learning',
    icon: Brain,
    title: 'AI & Machine Learning',
    short: 'Intelligent systems that learn, adapt, and automate.',
    description:
      'We build custom AI and ML solutions that turn raw data into actionable intelligence — from predictive models to natural language processing and computer vision.',
    features: [
      'Predictive analytics & forecasting',
      'Natural language processing',
      'Computer vision & image recognition',
      'Recommendation engines',
      'Automated decision systems',
      'LLM integration & fine-tuning',
    ],
  },
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    short: 'Tailored platforms built for your exact workflow.',
    description:
      'End-to-end custom software engineered to fit your operations precisely — scalable architecture, clean code, and maintainable systems that grow with you.',
    features: [
      'Web & desktop applications',
      'API design & integration',
      'Legacy system modernization',
      'Microservices architecture',
      'Quality assurance & testing',
      'Ongoing maintenance & support',
    ],
  },
  {
    slug: 'digital-marketing',
    icon: LineChart,
    title: 'Digital Marketing & SEO',
    short: 'Data-driven growth across every channel.',
    description:
      'Full-funnel digital marketing that drives measurable growth — from search engine optimization to paid media, content strategy, and conversion optimization.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising',
      'Content & social strategy',
      'Conversion rate optimization',
      'Email & marketing automation',
      'Analytics & attribution dashboards',
    ],
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    short: 'Scalable infrastructure for modern workloads.',
    description:
      'Cloud architecture, migration, and optimization that cuts costs and boosts reliability — built on AWS, Azure, and Google Cloud best practices.',
    features: [
      'Cloud migration & strategy',
      'Infrastructure as code',
      'Containerization & orchestration',
      'Serverless architecture',
      'Cost optimization',
      '24/7 monitoring & incident response',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    short: 'Proactive defense for your digital assets.',
    description:
      'Comprehensive security services that protect your business — from penetration testing to compliance, threat monitoring, and incident response.',
    features: [
      'Security audits & penetration testing',
      'Threat detection & response',
      'Compliance & governance (SOC2, ISO 27001)',
      'Identity & access management',
      'Security awareness training',
      'Zero-trust architecture',
    ],
  },
  {
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    short: 'Native and cross-platform apps users love.',
    description:
      'High-performance mobile experiences for iOS and Android — from concept to launch, with intuitive design and robust backend integration.',
    features: [
      'iOS & Android native development',
      'Cross-platform (React Native, Flutter)',
      'UI/UX design & prototyping',
      'App Store & Play Store deployment',
      'Push notifications & real-time features',
      'Post-launch support & updates',
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: PenTool,
    title: 'UI/UX Design',
    short: 'Beautiful interfaces backed by user research.',
    description:
      'Human-centered design that converts — combining research, strategy, and pixel-perfect execution into experiences your users will love.',
    features: [
      'User research & journey mapping',
      'Wireframing & prototyping',
      'Design systems & component libraries',
      'Usability testing',
      'Interaction & motion design',
      'Accessibility (WCAG) compliance',
    ],
  },
  {
    slug: 'data-analytics',
    icon: Cpu,
    title: 'Data & Analytics',
    short: 'Turn raw data into confident decisions.',
    description:
      'End-to-end data pipelines and analytics platforms — from data warehousing to business intelligence dashboards that surface what matters.',
    features: [
      'Data engineering & pipelines',
      'Data warehouse design',
      'Business intelligence dashboards',
      'Real-time analytics',
      'Data governance & quality',
      'Predictive modeling',
    ],
  },
];

export type Industry = {
  slug: string;
  icon: typeof Globe;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    short: 'Conversion-driven storefronts and inventory systems.',
    description:
      'We help retailers build seamless omnichannel experiences — from high-converting storefronts to intelligent inventory and logistics platforms.',
    points: [
      'Headless commerce platforms',
      'Personalized shopping experiences',
      'Inventory & order management',
      'Payment & fraud protection',
    ],
  },
  {
    slug: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    short: 'HIPAA-compliant platforms that improve patient outcomes.',
    description:
      'Secure, compliant health-tech solutions that connect patients, providers, and data — improving outcomes while protecting privacy.',
    points: [
      'Telemedicine & remote monitoring',
      'Electronic health records',
      'HIPAA-compliant architecture',
      'Clinical data analytics',
    ],
  },
  {
    slug: 'finance',
    icon: Landmark,
    title: 'Finance & FinTech',
    short: 'Secure, regulated platforms for modern banking.',
    description:
      'FinTech solutions built for scale and compliance — from digital wallets to algorithmic trading and risk analytics.',
    points: [
      'Digital banking & wallets',
      'Algorithmic trading systems',
      'Risk & fraud analytics',
      'Regulatory compliance tooling',
    ],
  },
  {
    slug: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Logistics',
    short: 'Smart factories and supply chain visibility.',
    description:
      'Industry 4.0 solutions that connect machines, data, and people — optimizing production and supply chains in real time.',
    points: [
      'IoT & sensor integration',
      'Predictive maintenance',
      'Supply chain optimization',
      'Real-time production dashboards',
    ],
  },
  {
    slug: 'education',
    icon: GraduationCap,
    title: 'Education & EdTech',
    short: 'Learning platforms that scale to millions.',
    description:
      'Digital learning experiences that engage students and empower educators — from LMS platforms to adaptive learning powered by AI.',
    points: [
      'Learning management systems',
      'Adaptive learning with AI',
      'Virtual classrooms & collaboration',
      'Student analytics & retention',
    ],
  },
  {
    slug: 'travel',
    icon: Plane,
    title: 'Travel & Hospitality',
    short: 'Booking platforms and guest experience tools.',
    description:
      'Travel-tech that elevates the guest journey — from booking engines to personalized recommendations and operations management.',
    points: [
      'Booking & reservation systems',
      'Guest experience platforms',
      'Revenue management tools',
      'Loyalty & rewards programs',
    ],
  },
];

export type ProcessStep = {
  icon: typeof Lightbulb;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: Lightbulb,
    title: 'Discover',
    description:
      'We dive deep into your business, goals, and challenges to define a clear roadmap and success metrics.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'Our team crafts the architecture, user experience, and visual design — validated through prototypes and user testing.',
  },
  {
    icon: Code2,
    title: 'Develop',
    description:
      'We build in agile sprints with continuous integration, so you see working software early and often.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description:
      'We launch with confidence — automated testing, zero-downtime deployment, and full handover documentation.',
  },
];

export type Stat = {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { icon: Award, value: 250, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 120, suffix: '+', label: 'Team Members' },
  { icon: Globe, value: 30, suffix: '+', label: 'Countries Served' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Retention' },
];

export type Value = {
  icon: typeof Target;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: Target,
    title: 'Outcome-Obsessed',
    description:
      'We measure success by your results, not our hours. Every decision is guided by the impact it creates for your business.',
  },
  {
    icon: Lightbulb,
    title: 'Relentless Innovation',
    description:
      'We stay on the frontier of technology so you don\'t have to — bringing emerging tools and fresh thinking to every project.',
  },
  {
    icon: HandHeart,
    title: 'True Partnership',
    description:
      'We act as an extension of your team — transparent, accountable, and invested in your long-term success.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering Excellence',
    description:
      'Clean architecture, rigorous testing, and documentation are non-negotiable. We build software that lasts.',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  { name: 'Daniel Mercer', role: 'Chief Executive Officer', image: 'https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Aisha Patel', role: 'Chief Technology Officer', image: 'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Marcus Lee', role: 'VP of Engineering', image: 'https://images.pexels.com/photos/26820703/pexels-photo-26820703.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sofia Ramirez', role: 'Head of Design', image: 'https://images.pexels.com/photos/37079379/pexels-photo-37079379.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'James Okonkwo', role: 'Director of AI', image: 'https://images.pexels.com/photos/12311562/pexels-photo-12311562.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Elena Volkov', role: 'VP of Delivery', image: 'https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Z Labs transformed our entire digital operation. The AI platform they built cut our processing time by 70% and unlocked insights we never had access to before.',
    name: 'Rachel Montgomery',
    title: 'Chief Operating Officer',
    company: 'Northwind Logistics',
    image: 'https://images.pexels.com/photos/30609905/pexels-photo-30609905.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      'The team didn\'t just deliver software — they delivered a competitive advantage. Our new platform outperforms every rival in the space and our customers feel it.',
    name: 'David Chen',
    title: 'Founder & CEO',
    company: 'Vertex FinTech',
    image: 'https://images.pexels.com/photos/9623645/pexels-photo-9623645.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      'From discovery to deployment, Z Labs operated as a true partner. Their attention to detail and engineering rigor set them apart from every agency we\'ve worked with.',
    name: 'Amara Okafor',
    title: 'VP of Digital Transformation',
    company: 'Meridian Health',
    image: 'https://images.pexels.com/photos/10041283/pexels-photo-10041283.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export type Capability = {
  icon: typeof Server;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: Server,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture designed to handle millions of users without breaking a sweat.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust pipelines and warehouses that turn fragmented data into a single source of truth.',
  },
  {
    icon: Gauge,
    title: 'Performance Engineering',
    description: 'Sub-second response times and 99.99% uptime baked in from day one.',
  },
  {
    icon: Lock,
    title: 'Security by Design',
    description: 'Zero-trust architecture and continuous compliance embedded in every layer.',
  },
  {
    icon: Workflow,
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines that ship code safely, dozens of times a day.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Collaboration',
    description: 'WebSocket-powered features that keep teams and customers in sync instantly.',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most engagements run between 3 and 9 months depending on scope. We work in two-week agile sprints, so you see working software within the first few weeks and continuous progress throughout.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'Both. We partner with early-stage startups building their first MVP and with enterprises modernizing legacy systems. Our process scales to fit your stage, budget, and risk tolerance.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We are technology-agnostic and choose the right tool for the job. Our core expertise spans React, Node.js, Python, Go, TypeScript, AWS, Azure, Google Cloud, Kubernetes, and the leading AI/ML frameworks.',
  },
  {
    question: 'Can you augment our existing engineering team?',
    answer:
      'Absolutely. We offer staff augmentation and embedded team models where our engineers work alongside yours, following your processes and tooling, while bringing Z Labs expertise to the table.',
  },
  {
    question: 'Who owns the intellectual property?',
    answer:
      'You do — fully. All code, designs, and documentation we produce on your project are yours, transferred upon delivery. We include full source code and deployment documentation with every engagement.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. We offer flexible support retainers that include monitoring, bug fixes, feature enhancements, and SLA-backed response times. Most clients continue with us well beyond launch.',
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  result: string;
  metric: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'northwind-logistics',
    client: 'Northwind Logistics',
    industry: 'Logistics',
    title: 'AI-Powered Route Optimization',
    summary:
      'We built a machine learning platform that optimizes delivery routes in real time, reducing fuel costs and improving on-time delivery.',
    result: '70% reduction in processing time',
    metric: '70%',
  },
  {
    slug: 'vertex-fintech',
    client: 'Vertex FinTech',
    industry: 'Finance',
    title: 'Digital Banking Platform',
    summary:
      'A full-stack digital banking platform with real-time payments, fraud detection, and a consumer-facing mobile app.',
    result: '2M+ users onboarded in year one',
    metric: '2M+',
  },
  {
    slug: 'meridian-health',
    client: 'Meridian Health',
    industry: 'Healthcare',
    title: 'Telemedicine & Remote Monitoring',
    summary:
      'A HIPAA-compliant telehealth platform connecting 40 hospitals with remote patient monitoring and AI-assisted triage.',
    result: '40 hospitals connected',
    metric: '40',
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export const heroImage =
  'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const aboutImage =
  'https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const teamImage =
  'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const ctaImage =
  'https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const serverImage =
  'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const trustedLogos = [
  'Northwind', 'Vertex', 'Meridian', 'Cobalt', 'Lumina', 'Apex', 'Stratos', 'Vortex',
];

export type Feature = {
  icon: typeof Zap;
  title: string;
  description: string;
};

export const whyChooseUs: Feature[] = [
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock monitoring and incident response so your systems never skip a beat.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Cross-Platform Expertise',
    description: 'Web, mobile, desktop, and cloud — we build seamlessly across every platform your users touch.',
  },
  {
    icon: Network,
    title: 'Scalable Architecture',
    description: 'From first user to millionth, our systems are designed to scale without rewrites.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    description: 'Strategy, design, engineering, DevOps, and growth — one team, one partner, end to end.',
  },
];
