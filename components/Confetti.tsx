
import React, { useEffect, useState } from 'react';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6'];

const Confetti: React.FC = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate static particles once on mount
    const count = 75; // Number of confetti pieces
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position 0-100%
      delay: Math.random() * 2, // Random delay before falling
      duration: 2.5 + Math.random() * 2, // Random fall duration
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute -top-4 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            animation: `fall ${p.duration}s linear ${p.delay}s forwards`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
