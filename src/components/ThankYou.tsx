import { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { CheckCircle, ArrowLeft } from "lucide-react";

export const ThankYou = () => {
  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ["#33a6ff", "#4ACBEC", "#166eb1"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--surface-page)]">
      {/* Top-left logo / back link */}
      <a
        href="#"
        className="fixed top-0 left-0 z-50 flex items-center gap-2 px-6 py-5 font-mono text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-inko-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        inko
      </a>

      <div className="flex flex-1 items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8 inline-flex"
        >
          <CheckCircle className="h-20 w-20 text-inko-blue" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 font-mono text-5xl tracking-tight font-bold text-[var(--text-primary)]"
        >
          Successfully subscribed!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="mb-2 text-2xl text-[var(--text-secondary)]">
            You&apos;re on the Waiting List.
          </p>
          <p className="mb-10 text-lg text-[var(--text-muted)]">
            We&apos;ll reach out soon with early access. Keep an eye on your inbox.
          </p>
        </motion.div>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-block rounded-2xl bg-inko-blue px-10 py-4 font-mono text-lg font-medium text-white shadow-2xl shadow-inko-blue/30 transition-all hover:scale-105 hover:bg-inko-blue/90 active:scale-95"
        >
          Back to Home
        </motion.a>
      </motion.div>
      </div>
    </div>
  );
};
