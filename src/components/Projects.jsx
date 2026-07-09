import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Box, X } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { projects } from '../data/projects';

/* ── Premium easing ── */
const EASE = [0.22, 1, 0.36, 1];

/* ── Animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* ── Link icon map ── */
const linkMeta = {
  github: { icon: Github, label: 'GitHub' },
  live: { icon: ExternalLink, label: 'Live site' },
  demo: { icon: Play, label: 'Demo video' },
  huggingface: { icon: Box, label: 'Hugging Face' },
};

/* ── Thumbnail with fallback ── */
function Thumbnail({ project }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative h-48 overflow-hidden bg-base-800">
      {!broken ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
          <span className="font-mono text-accent-400 text-sm tracking-wide">
            {project.title}
          </span>
        </div>
      )}

      {/* Status badge */}
      <span
        className={`absolute top-3 right-3 ${
          project.isLive ? 'status-badge-live' : 'status-badge'
        }`}
      >
        {project.isLive && (
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        )}
        {project.statusBadge}
      </span>
    </div>
  );
}

/* ── Project card ── */
function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-card p-0 overflow-hidden group cursor-default"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s, background 0.35s',
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(223, 255, 0, 0.22)',
        boxShadow:
          '0 20px 40px -12px rgba(0,0,0,0.55), 0 0 24px rgba(223,255,0,0.07)',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Thumbnail project={project} />

      <div className="px-5 py-5">
        {/* Title + description */}
        <h3 className="text-lg font-bold text-txt-primary">{project.title}</h3>
        <p className="text-sm text-txt-secondary mt-1 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-[11px] text-txt-muted tracking-wide"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Bottom row */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/[0.05]">
          {/* Icon links */}
          <div className="flex items-center gap-3">
            {Object.entries(project.links).map(([key, url]) => {
              const meta = linkMeta[key];
              if (!meta || !url) return null;
              const Icon = meta.icon;
              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={meta.label}
                  className="text-txt-muted hover:text-accent-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>

          {/* View details */}
          <button
            onClick={() => onSelect(project)}
            className="text-accent-400 font-mono text-xs hover:underline transition cursor-pointer"
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Detail modal ── */
function DetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-txt-muted hover:text-txt-primary transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Title + badge */}
        <h2 className="text-2xl font-bold text-txt-primary pr-8">
          {project.title}
        </h2>
        <span
          className={`mt-2 inline-block ${
            project.isLive ? 'status-badge-live' : 'status-badge'
          }`}
        >
          {project.isLive && (
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          )}
          {project.statusBadge}
        </span>

        {/* Description */}
        <p className="text-sm text-txt-secondary mt-4 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-xs text-accent-400 tracking-wide"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Details */}
        <p className="text-txt-secondary text-sm leading-relaxed mt-6">
          {project.details}
        </p>

        {/* Links row */}
        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/[0.05]">
          {Object.entries(project.links).map(([key, url]) => {
            const meta = linkMeta[key];
            if (!meta || !url) return null;
            const Icon = meta.icon;
            return (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono
                           text-txt-secondary border border-white/[0.07] bg-white/[0.02]
                           hover:border-accent-400/30 hover:text-accent-400 transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={14} />
                {meta.label}
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main export ── */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      id="projects"
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="section-label">Selected Work</span>
      <h2 className="section-heading">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelected}
          />
        ))}
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <DetailModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
