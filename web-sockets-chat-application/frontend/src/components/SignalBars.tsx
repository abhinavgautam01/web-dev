import {motion} from "framer-motion"
export const SignalBars = () => (
  <div className="flex items-end gap-[3px] h-5">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        animate={{ height: [6, 18, 8, 20, 10], opacity: [0.5, 1, 0.6] }}
        transition={{
          duration: 0.4 + i * 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`w-1.5 rounded-sm ${
          i > 3 ? "bg-cyan-400" : "bg-emerald-500"
        }`}
      />
    ))}
  </div>
);