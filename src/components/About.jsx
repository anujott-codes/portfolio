import { motion } from 'framer-motion';

const focusItems = [
  'End-to-end ML pipelines',
  'NLP and transformer systems',
  'GenAI and RAG applications',
  'MLOps with Docker, DVC, MLflow, and CI/CD',
  'FastAPI-based model serving',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-label">About</span>
      <h2 className="section-heading">Background &amp; Focus</h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        {/* ── Left: Narrative card ── */}
        <div className="glass-card p-7">
          <div className="text-txt-secondary text-sm leading-relaxed space-y-4">
            <p>
              I&apos;m a 4th-semester B.Tech student in AI &amp; ML at
              GGSIPU–EDC / USAR, New Delhi, with a CGPA of 9.1.
            </p>
            <p>
              My focus is building deployable machine learning systems: clean
              APIs, reproducible experiments, Dockerized services, model
              tracking, and full-stack ML products.
            </p>
            <p>
              I care more about shipping useful ML systems than collecting
              notebook experiments.
            </p>
          </div>
        </div>

        {/* ── Right: Engineering focus cards ── */}
        <div>
          <span className="text-txt-muted font-mono text-xs uppercase tracking-[0.15em] mb-4 block">
            Engineering Focus
          </span>

          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {focusItems.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 rounded-xl
                           border border-white/[0.05] bg-white/[0.02]
                           hover:border-accent-400/20 hover:text-accent-300 transition group"
              >
                <span className="w-2 h-2 rounded-full bg-accent-400 shrink-0 group-hover:shadow-[0_0_6px_rgba(223,255,0,0.4)] transition" />
                <span className="font-mono text-sm text-txt-secondary group-hover:text-accent-300 transition">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
