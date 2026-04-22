import { Instagram, Facebook, Twitter, Mail, Trophy } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/aidenmoffat16',
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/AidenMoffat16',
      icon: <Twitter className="h-4 w-4" />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/AidenMoffatRacing',
      icon: <Facebook className="h-4 w-4" />,
    },
  ];

  return (
    <footer id="contact" className="py-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="text-red-600 h-7 w-7" />
              <span className="text-2xl font-black tracking-tighter italic uppercase">
                Aiden<span className="text-red-600">Moffat</span>
              </span>
            </div>
            <p className="text-zinc-500 font-medium text-sm max-w-sm mb-8 leading-relaxed">
              Experience the precision and dedication of professional motorsport coaching with one of BTCC&apos;s most seasoned drivers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="p-2.5 bg-zinc-900 hover:bg-red-600 text-zinc-400 hover:text-white transition-all duration-200 rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Career', href: '#about' },
                { label: 'Training', href: '#services' },
                { label: 'Sponsors', href: '#sponsors' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <Mail className="h-4 w-4 text-red-600 flex-shrink-0" />
                <span>info@aidenmoffat.com</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <span className="text-red-600 font-black mt-px">@</span>
                <span>Power Maxed Racing, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              &copy; 2026 Aiden Moffat Racing. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="text-zinc-600">
                Website by{' '}
                <a
                  href="https://marketingcompany.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  Marketing Company
                </a>
              </span>
              <span className="text-zinc-800 hidden md:inline">|</span>
              <a
                href="https://dunross.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
              >
                Dunross Investments
              </a>
              <span className="text-zinc-800 hidden md:inline">|</span>
              <a
                href="https://alumise.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
              >
                Alumise
              </a>
            </div>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-150">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-150">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
