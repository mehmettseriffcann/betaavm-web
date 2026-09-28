import Link from 'next/link';
import { Building2, ShoppingBag, Truck, Sparkles, LineChart, Landmark, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'İnşaat & Gayrimenkul',
    tag: 'Mühendislik & Akıllı Şehir',
    desc: 'Yüksek deprem güvenliği, enerji tasarruflu yeşil bina standartları ve 110.000 m²’lik Bişkek akıllı rezidans & karma projeleri.',
    icon: Building2,
    link: '/beta-insaat',
    accent: 'hover:border-rose-500/40 hover:shadow-rose-500/5',
  },
  {
    id: 2,
    title: 'AVM & Perakende Yönetimi',
    tag: 'Uluslararası Tesis İşletmesi',
    desc: 'Kiracı ilişkileri, konsept geliştirme, marka karması optimizasyonu ve yüz binlerce ziyaretçiyi ağırlayan yaşam alanları.',
    icon: ShoppingBag,
    link: '/beta-avm',
    accent: 'hover:border-amber-500/40 hover:shadow-amber-500/5',
  },
  {
    id: 3,
    title: 'Dış Ticaret & Tedarik Zinciri',
    tag: '25 Yıllık İhracat Ağı',
    desc: 'Türkiye’den Kırgızistan, Rusya ve Orta Asya pazarlarına gıda ve tüketim ürünlerinin kesintisiz lojistiği ve dağıtımı.',
    icon: Truck,
    link: '/hakkimizda',
    accent: 'hover:border-blue-500/40 hover:shadow-blue-500/5',
  },
  {
    id: 4,
    title: 'Sevil Cosmetics Premium',
    tag: 'Lüks Parfümeri & Bakım',
    desc: 'Asia Mall ve seçkin noktalarda prestijli niş kokular, private-label koleksiyonlar ve VIP güzellik danışmanlığı.',
    icon: Sparkles,
    link: '/sevil-cosmetics-premium',
    accent: 'hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/5',
  },
  {
    id: 5,
    title: 'Pazar Araştırması & Yatırım',
    tag: 'Stratejik Girişimcilik',
    desc: 'Bölgesel tüketici davranışlarını derinlemesine analiz eden, Türk markalarını Orta Asya’ya taşıyan güvenilir ortaklık modeli.',
    icon: LineChart,
    link: '/hakkimizda',
    accent: 'hover:border-emerald-500/40 hover:shadow-emerald-500/5',
  },
  {
    id: 6,
    title: 'Beta Stores Complex',
    tag: 'Bişkek’in Yeni Simgesi',
    desc: '3 kule, 21 kat, 5 yıldızlı uluslararası otel, 5 katlı lüks alışveriş merkezi ve 550+ araçlık akıllı otopark sistemi.',
    icon: Landmark,
    link: '/beta-stores',
    accent: 'hover:border-purple-500/40 hover:shadow-purple-500/5',
  },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#840740] bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Faaliyet Alanlarımız
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Çok Sektörlü Büyüme Modeli
          </h2>
        </div>
        <p className="text-gray-500 text-sm sm:text-base max-w-md">
          Her biri kendi alanında lider markalarımızla Avrasya’da entegre bir değer ekosistemi yönetiyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${srv.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-gray-800 flex items-center justify-center group-hover:bg-[#840740] group-hover:text-white transition-colors duration-300 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#840740] transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <Link
                  href={srv.link}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-gray-700 group-hover:text-[#840740] transition-colors"
                >
                  <span>Detayları İncele</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#840740] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
