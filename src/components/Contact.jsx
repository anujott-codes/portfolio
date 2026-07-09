import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const contactLinks = [
  {
    label: 'anujott.singh@gmail.com',
    href: 'mailto:anujott.singh@gmail.com',
    icon: Mail,
    isCustomIcon: false,
    external: false,
  },
  {
    label: 'linkedin.com/in/anujotsingh',
    href: 'https://www.linkedin.com/in/anujotsingh',
    icon: LinkedinIcon,
    isCustomIcon: true,
    external: true,
  },
  {
    label: 'github.com/anujott-codes',
    href: 'https://github.com/anujott-codes',
    icon: GithubIcon,
    isCustomIcon: true,
    external: true,
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-label">Get In Touch</span>
      <h2 className="section-heading">Let&apos;s Connect</h2>

      <div className="glass-card p-8 md:p-10 relative overflow-hidden ambient-glow">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-accent-400/5 blur-3xl pointer-events-none" />

        <p className="text-txt-secondary text-lg mb-8 relative z-10">
          Open to ML Engineering, AI Engineering, GenAI internships, and
          freelance AI/ML product work.
        </p>

        {/* Contact links */}
        <div className="flex flex-col gap-4 relative z-10">
          {contactLinks.map((link) => {
            const IconComp = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex items-center gap-3 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all"
                  whileHover={{
                    y: -2,
                    boxShadow: '0 0 12px rgba(223,255,0,0.15)',
                  }}
                >
                  {link.isCustomIcon ? (
                    <IconComp size={18} className="text-txt-secondary group-hover:text-accent-300 transition-colors" />
                  ) : (
                    <IconComp size={18} className="text-txt-secondary group-hover:text-accent-300 transition-colors" />
                  )}
                </motion.span>
                <span className="text-txt-secondary group-hover:text-accent-300 transition-colors">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-8 relative z-10">
          <a href="mailto:anujott.singh@gmail.com" className="btn-primary">
            <Mail size={18} />
            Send Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
