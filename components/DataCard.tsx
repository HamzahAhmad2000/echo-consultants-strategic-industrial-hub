import React from 'react';

interface DataCardProps {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const DataCard: React.FC<DataCardProps> = ({ label, value, subtext, highlight = false, size = 'md' }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-lg p-4 border transition-all duration-300
      ${highlight 
        ? 'bg-white border-echo-primary shadow-[0_4px_20px_rgba(5,150,105,0.15)] ring-1 ring-echo-primary/10' 
        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}
    `}>
      <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">{label}</p>
      <div className={`font-mono font-bold text-slate-900 ${size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-2xl' : 'text-xl'}`}>
        <span className={highlight ? 'text-echo-primary' : 'text-slate-900'}>{value}</span>
      </div>
      {subtext && <p className="text-xs text-slate-500 mt-1">{subtext}</p>}
    </div>
  );
};

export default DataCard;