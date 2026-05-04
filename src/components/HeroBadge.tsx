import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mx-auto mb-3 w-fit"
    >
      <Sparkles className="w-4 h-4 text-white/60" />
      <span className="text-[14px] font-normal text-white/90">
        Fluid Staking
      </span>
    </motion.div>
  );
};

export default HeroBadge;
