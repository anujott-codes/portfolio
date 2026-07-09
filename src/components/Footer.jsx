import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/anujott-codes',
    icon: GithubIcon,
    isCustomIcon: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anujotsingh',
    icon: LinkedinIcon,
    isCustomIcon: true,
  },
  {
    label: 'Email',
    href: 'mailto:anujott.singh@gmail.com',
    icon: Mail,
    isCustomIcon: false,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-[#030303]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left — Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-accent-400 text-lg">
              AS
            </span>
            <span className="text-txt-muted text-sm">
              &copy; {currentYear} Anujot Singh
            </span>
          </div>

          {/* Right — Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith('mailto')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={link.label}
                  className="text-txt-muted hover:text-accent-400 transition-colors"
                >
                  {link.isCustomIcon ? (
                    <IconComp size={18} className="text-current" />
                  ) : (
                    <IconComp size={18} />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-6 pt-4 border-t border-white/[0.03] text-center">
          <span className="font-mono text-[10px] text-txt-muted/50 tracking-[0.3em] uppercase">
            Designed &amp; Engineered with Precision
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
