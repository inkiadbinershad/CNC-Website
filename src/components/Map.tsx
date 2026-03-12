import { MapPin } from 'lucide-react';

export function Map() {
  return (
    <div className="h-64 rounded-lg bg-slate-900/50 border border-slate-700/50 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="w-12 h-12 mx-auto mb-2 text-cyan-500/50" />
        <p className="text-slate-500">Map placeholder</p>
      </div>
    </div>
  );
}

