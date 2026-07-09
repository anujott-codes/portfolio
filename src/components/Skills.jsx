import { motion } from 'framer-motion';
import { Brain, Server, MessageSquare, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Brain,
  Server,
  MessageSquare,
  Cpu,
};

/* ── Premium easing ── */
const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

const tagContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="section-label">Toolkit</span>
      <h2 className="section-heading">Skills &amp; Technologies</h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category) => {
          const IconComponent = iconMap[category.icon];

          return (
            <motion.div
              key={category.title}
              className="glass-card p-6 group"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.07)',
                transition:
                  'border-color 0.35s, box-shadow 0.35s, transform 0.35s, background 0.35s',
              }}
              variants={cardVariants}
              whileHover={{
                y: -4,
                borderColor: 'rgba(223, 255, 0, 0.22)',
                boxShadow:
                  '0 16px 32px -8px rgba(0,0,0,0.5), 0 0 20px rgba(223,255,0,0.06)',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                {IconComponent && (
                  <IconComponent
                    size={20}
                    className="text-accent-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  />
                )}
                <h3 className="text-lg font-semibold text-txt-primary">
                  {category.title}
                </h3>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full mb-5"
                style={{
                  background:
                    'linear-gradient(to right, rgba(223,255,0,0.2), transparent)',
                }}
              />

              {/* Skill Tags */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={tagContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="tech-tag"
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.08,
                      borderColor: 'rgba(223, 255, 0, 0.35)',
                      color: '#DFFF00',
                      background: 'rgba(223, 255, 0, 0.08)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
