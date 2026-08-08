import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { footerContacts, footerQuickLinks, footerServices } from '@/data/layout84';

const legalLinks = [
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#080d1b]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="template-panel rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Newsletter</h2>
              
            </div>

            <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">
              <input
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                placeholder="Enter Your Email"
              />
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#5b5bf7] to-[#ff7f2a] text-white shadow-lg shadow-[#352d91]/30"
                aria-label="Submit newsletter form"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ZLab logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-xl font-extrabold text-white">Z Labs</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  IT Solution
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-ink-300">
              Modern IT solutions for businesses that want better design, delivery, and dependable support.
            </p>

            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-[#ff9d2f]/40 hover:text-[#ff9d2f]"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Contact Us</h3>
            <div className="mt-5 space-y-5">
              {footerContacts.map((item, index) => (
                <div key={`${item.label}-${index}`}>
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-2 block text-sm text-ink-200 transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/8 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-ink-400 text-center sm:text-left">
              Copyright © 2026 ZLab. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map((item, i) => (
                <div key={item.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
                  )}
                  <Link
                    to={item.path}
                    className="text-sm text-ink-400 transition-colors hover:text-white hover:underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
