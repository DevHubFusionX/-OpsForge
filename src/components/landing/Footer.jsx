import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Updates', href: '/updates' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Brand', href: '/brand' },
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community', href: '/community' },
    ],
    legal: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-gray-900 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/5 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Top section with logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-gray-900">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">OpsForge</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Automate your operations with intelligent workflows
            </p>
          </div>
          
          {/* Social links with creative hover */}
          <div className="flex gap-3">
            {[
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group relative w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#38BDF8] transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#38BDF8] transition-colors" />
                <div className="absolute inset-0 rounded-full bg-[#38BDF8]/0 group-hover:bg-[#38BDF8]/10 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Links grid with rare diagonal layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Product */}
          <div className="transform md:translate-y-0">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">PRODUCT</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#38BDF8] text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="transform md:translate-y-4">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#38BDF8] text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="transform md:translate-y-0">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">RESOURCES</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#38BDF8] text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="transform md:translate-y-4">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#38BDF8] text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} OpsForge. All rights reserved.
          </p>
          
          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-full border border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 text-xs font-medium">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
