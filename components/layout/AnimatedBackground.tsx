"use client";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 bg-grid pointer-events-none"
      style={{
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }}
    >
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[140px]" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[140px]" />
    </div>
  );
}
