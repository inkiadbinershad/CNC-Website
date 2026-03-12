import { useCallback, useEffect, useRef, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idCounter = useRef(0);
  const colors = ['#06b6d4', '#f97316', '#f8fafc', '#3b82f6'];

  const handleClick = useCallback((e: MouseEvent) => {
    const newSparks: Spark[] = Array.from({ length: 8 }, () => ({
      id: idCounter.current++,
      x: e.clientX,
      y: e.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setSparks(prev => [...prev, ...newSparks]);

    // Auto remove after animation
    setTimeout(() => {
      setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id)));
    }, 300);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none animate-spark"
          style={{
            left: spark.x,
            top: spark.y,
            backgroundColor: spark.color,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 10px ${spark.color}`,
          }}
        />
      ))}
      <style>{`
        @keyframes spark {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(
              calc(-50% + cos(random() * 6.28) * 50px),
              calc(-50% + sin(random() * 6.28) * 50px)
            ) scale(0);
          }
        }
        .animate-spark {
          animation: spark 300ms ease-out forwards;
        }
      `}</style>
    </>
  );
}

