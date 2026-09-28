import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Medal, Building, Globe, CheckCircle2 } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-28 bg-[#110107] text-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#840740]/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Sol Kolon - Portre & Kart */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Image Frame with glow and borders */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900">
                <Image
                  src="https://www.betaavm.com.tr/wp-content/uploads/2025/10/baskan-sooon.png"
                  alt="Yusuf Uğur - Yönetim Kurulu Başkanı"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                      Beta Holding Kurucusu
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Yusuf Uğur</h3>
                  <p className="text-xs text-gray-300">Kırgızistan-Türkiye Fahri Konsolosu</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-2xl shadow-2xl max-w-[210px]">
                <div className="text-3xl font-black text-amber-400">47+ Yıl</div>
                <div className="text-xs text-gray-200 font-medium mt-1 leading-snug">
                  Avrasya ve Türkiye’de Girişimcilik Mirası
                </div>
              </div>

            </div>
          </div>

          {/* Sağ Kolon - Detaylı Anlatım */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-amber-300 tracking-wider">
                <Medal className="w-3.5 h-3.5" />
                <span>LİDERLİK & VİZYON</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Uluslararası Ticaretin ve Bölgesel Kalkınmanın Öncüsü
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              <p>
                1963 yılında Elazığ’da doğan <strong className="text-white">Yusuf Uğur</strong>, genç yaşta iş hayatına atılarak Türkiye’nin girişimcilik ruhunu uluslararası platformlara taşıyan vizyoner bir lider haline gelmiştir. 1978 yılında Adana’da başladığı ticaret yolculuğunu, stratejik yönetim becerileriyle İstanbul’a taşıyarak büyütmüş; 2000 yılında Kırgızistan’da ilk Beta Stores mağazasını açarak bölge perakende sektörüne öncülük etmiştir.
              </p>
              <p>
                BetaAVM, Beta İnşaat ve Beta Stores markalarının kurucusu olan Yusuf Uğur, aynı zamanda Kırgızistan Türkiye Fahri Konsolosu ve DEİK Türk-Kırgız İş Konseyi Yürütme Kurulu Üyesi olarak iki ülke arasında ekonomik ve kültürel iş birliklerinin güçlenmesinde en ön safta yer almaktadır.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white text-sm mb-0.5">Fahri Profesörlük</strong>
                  Kırgızistan Devlet Teknik Üniversitesi Onur Unvanı
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white text-sm mb-0.5">100M$ Mega Proje</strong>
                  Bişkek Beta Stores Complex Yatırımı
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                href="/kurucumuz"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-gray-900 font-bold text-sm hover:bg-amber-300 transition-all duration-300 shadow-xl"
              >
                <span>Biyografiyi Oku</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/baskanin-notu"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <span>Başkan’ın Notu Mesajı</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
