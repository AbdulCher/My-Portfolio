import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  direction = "up",  // "up", "down", "left", "right"
  delay = 0,
  className = ""
}) {
  const directions = {
    up: { hidden: { opacity: 0, y: 80 }, visible: { opacity: 2, y: 10 } },
    down: { hidden: { opacity: 0, y: -80 }, visible: { opacity: 2, y: 10 } },
    left: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 2, x: 10 } },
    right: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 2, x: 10 } }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,        // ⬅️ rejoue à chaque scroll
        amount: 0.2         // ratio visible avant d’activer
      }}
      transition={{ duration: 0.6, delay, infinite: true }}
      variants={directions[direction]}
    >
      {children}
    </motion.div>
  );
}
