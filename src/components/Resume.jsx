import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-label">Resume</span>
      <h2 className="section-heading">Want the full technical breakdown?</h2>

      <div className="glass-card p-8 md:p-10 text-center">
        <p className="text-txt-secondary text-lg">
          Download my resume or open it in a new tab.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={18} />
            View Resume
          </a>
          <a
            href="/assets/Resume.pdf"
            download="Anujot_Singh_Resume.pdf"
            className="btn-secondary"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
