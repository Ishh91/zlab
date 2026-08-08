import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="template-orb left-[20%] top-0 h-56 w-56 bg-[#5b5bf7]/18" />
      <div className="template-orb right-[10%] bottom-0 h-56 w-56 bg-[#ff7f2a]/15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="template-panel rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to build <span className="template-gradient-text">what's next?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
            Let's talk about your vision. We'll help you turn it into a product that
            ships, scales, and stands out.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="template-primary-btn"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="template-secondary-btn"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
