import { Instagram, Facebook, Twitter, Mail, Trophy } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/aidenmoffat16', icon: <Instagram className="h-5 w-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/AidenMoffat16', icon: <Twitter className="h-5 w-5" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/AidenMoffatRacing', icon: <Facebook className="h-5 w-5" /> },
  ];

  return (
    <footer id="contact" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="text-red-600 h-8 w-8" />
              <span className="text-3xl font-black tracking-tighter italic uppercase">
                Aiden<span className="text-red-600">Moffat</span>
              </span>
            </div>
            <p className="text-zinc-500 font-bold uppercase italic text-sm max-w-sm mb-8 leading-relaxed">
              Experience the adrenaline and precision of professional motorsport training with one of BTCC's most experienced drivers.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-3 bg-zinc-900 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">Career</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Training</a></li>
              <li><a href="#sponsors" className="hover:text-red-600 transition-colors">Sponsors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-4 text-zinc-400 font-bold uppercase text-xs tracking-widest">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span>info@aidenmoffat.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600 font-black">@</span>
                <span>Power Maxed Racing, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-600">
          <p>© 2026 Aiden Moffat Racing. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
