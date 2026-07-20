import { CountUp } from '../CountUp';
import { stats } from '../../constants/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-brand-navy py-14 lg:py-16 text-white relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="w-full max-w-[260px] bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left relative"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shadow-inner">
                {s.icon}
              </div>
              <div>
                <span className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white block tracking-tight">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest leading-none mt-1 block">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
