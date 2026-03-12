import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [sparks, setSparks] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpark = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      };

      setSparks((prev) => [...prev.slice(-25), newSpark]);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#020617] z-[9999] overflow-hidden">
      {/* Rotating Tool */}
      <div className="relative flex flex-col items-center">
        <div className="text-6xl animate-spin text-blue-400">⚙</div>

        {/* Sparks */}
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className="absolute w-1 h-4 bg-orange-400 rounded-full animate-spark"
            style={{
              left: `${spark.left}%`,
              animationDelay: `${spark.delay}s`,
            }}
          />
        ))}
      </div>

      <h2 className="mt-10 text-xl tracking-widest text-gray-300">
        LOADING
      </h2>
    </div>
  );
}

