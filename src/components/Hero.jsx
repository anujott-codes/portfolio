import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroGrid from './HeroGrid';

/* ── animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── floating hero chips ── */
const chips = [
  { label: 'ML Engineering', delay: 0 },
  { label: 'GenAI / RAG', delay: 0.8 },
  { label: 'MLOps', delay: 1.6 },
  { label: 'FastAPI + Docker', delay: 2.4 },
];

/* ── smooth scroll helper ── */
const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ backgroundColor: '#030303' }}
    >
      {/* ── Layer 1: Interactive grid with parallax ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <HeroGrid containerRef={sectionRef} />
      </motion.div>

      {/* ── Layer 2: Corner depth gradients (very subtle, NOT center) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-left corner */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(223,255,0,0.04) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-right corner */}
        <div
          className="absolute -bottom-[10%] -right-[8%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(223,255,0,0.025) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Layer 3: Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(3,3,3,0.35) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Layer 4: Animated grain texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '128px 128px',
          animation: 'grain 0.5s steps(1) infinite',
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-24 pb-16 w-full">
        {/* ═══ Left side ═══ */}
        <motion.div
          className="lg:w-3/5"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1
            variants={fadeLeft}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-txt-primary leading-tight tracking-tight"
          >
            Anujot Singh
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-xl md:text-2xl mt-3"
            style={{ color: '#DFFF00' }}
          >
            AI/ML Engineer
          </motion.p>

          {/* Positioning statement */}
          <motion.p
            variants={fadeUp}
            className="text-txt-secondary text-base md:text-lg mt-6 max-w-2xl leading-relaxed"
          >
            I build deployable ML and GenAI systems — from NLP pipelines and
            RAG apps to MLOps platforms with FastAPI, Docker, CI/CD, and
            production-style engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText size={18} />
              View Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="btn-secondary"
            >
              <ArrowRight size={18} />
              Explore Projects
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/anujott-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-txt-muted hover:text-accent-400 social-link"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anujotsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-txt-muted hover:text-accent-400 social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:anujott.singh@gmail.com"
              className="text-txt-muted hover:text-accent-400 social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3 mt-10"
          >
            {chips.map((chip) => (
              <motion.span
                key={chip.label}
                className="hero-chip"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: chip.delay,
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══ Right side — Profile image ═══ */}
        <motion.div
          className="lg:w-2/5 hidden lg:flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        >
          <motion.div
            className="rounded-2xl p-1 backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 40px rgba(223,255,0,0.15)',
              borderColor: 'rgba(223,255,0,0.25)',
            }}
            transition={{ duration: 0.35 }}
          >
            <img
              src="/assets/profile.png"
              alt="Anujot Singh"
              className="w-72 h-80 md:w-80 md:h-[22rem] rounded-2xl object-contain object-top"
            />
          </motion.div>

          <p className="text-center font-mono text-xs text-txt-muted mt-4 tracking-wide">
            B.Tech AI &amp; ML • GGSIPU-EDC
          </p>
        </motion.div>
      </div>
    </section>
  );
}
