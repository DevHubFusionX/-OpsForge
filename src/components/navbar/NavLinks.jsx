import React from 'react';

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'Docs', href: '#' },
];

export const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-[1.02]"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
