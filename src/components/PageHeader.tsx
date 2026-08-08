import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Props = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function PageHeader({ label, title, highlight, description }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
      <div className="template-orb left-[-8rem] top-24 h-72 w-72 bg-[#4f46e5]/35" />
      <div className="template-orb bottom-8 right-[-4rem] h-80 w-80 bg-[#ff7f2a]/20" />
      <div className="template-orb right-[28%] top-[28%] h-56 w-56 bg-[#6d5dfc]/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="template-panel w-full rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <span className="template-badge">{label}</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="template-gradient-text">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-base leading-8 text-ink-200 sm:text-lg">
              {description}
            </p>
          )}
          <Link
            to="/contact"
            className="template-primary-btn mt-8"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
