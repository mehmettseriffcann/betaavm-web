import { Compass, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 1,
    title: 'Vizyon Odaklı',
    tag: 'Geleceği Tasarlama',
    desc: 'BetaAVM, yarının ihtiyaçlarını bugünden analiz ederek gayrimenkul, inşaat ve perakendede trendleri belirleyen stratejiler geliştirir.',
    icon: Compass,
    color: 'from-rose-500/10 to-rose-500/0 text-[#840740]',
    border: 'hover:border-rose-400',
  },
  {
    id: 2,
    title: 'Toplumsal Odaklı',
    tag: 'Sosyal Sorumluluk',
    desc: 'Avrasya halkları arasında kardeşlik köprüleri kurarak yerel istihdamı, kültürel diplomasisi ve ekonomik refahı daima önceliklendirir.',
    icon: Users2,
    color: 'from-amber-500/10 to-amber-500/0 text-amber-700',
    border: 'hover:border-amber-400',
  },
  {
    id: 3,
    title: 'Stratejik Yönetim',
    tag: '47 Yıllık Güvence',
    desc: 'Köklü kurumsal disiplin, etkin risk yönetimi ve güçlü uluslararası sermaye yapısıyla yatırımları başarıyla geleceğe taşır.',
    icon: ShieldCheck,
    color: 'from-emerald-500/10 to-emerald-500/0 text-emerald-800',
    border: 'hover:border-emerald-400',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#840740] bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Kurumsal Kimliğimiz
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Değerlerimiz & Güçlü Yönlerimiz
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            Yarım asra yaklaşan ticari hafızamız ve yenilikçi bakış açımızla sürdürülebilir başarı üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className={`relative p-8 rounded-3xl bg-slate-50/70 border border-gray-100 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1.5 ${feat.border}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-b ${feat.color} flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1 block">
                  {feat.tag}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#840740] transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                  {feat.desc}
                </p>

                <Link
                  href="/vizyonumuz-misyonumuz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 group-hover:text-[#840740] transition-colors"
                >
                  <span>İlkelerimizi İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
