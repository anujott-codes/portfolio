import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, #DFFF00 0%, rgba(223,255,0,0.6) 100%)',
        boxShadow: '0 0 8px rgba(223,255,0,0.4)',
      }}
    />
  );
}
