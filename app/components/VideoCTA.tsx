import Link from 'next/link';
import { Play, Sparkles, ArrowRight } from 'lucide-react';

export default function VideoCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#150209] text-white">
      {/* Background Gradients and Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18020b] via-[#3d031c] to-[#120108] opacity-90" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-amber-300 mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VİDEO TANITIM</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl mx-auto">
          Beta Holding’in 47 Yıllık Vizyonunu ve Başarı Hikayesini Keşfedin
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Türkiye’den Orta Asya’ya uzanan perakende, mega karma yaşam projeleri ve uluslararası ticaret başarılarımızı izleyin.
        </p>

        {/* Video Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.youtube.com/watch?v=c8eSbiXAOD0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl bg-white text-gray-900 font-extrabold text-sm hover:bg-amber-300 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-[#840740] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
            <span>Tanıtım Filmini İzle</span>
          </a>

          <Link
            href="/beta-stores"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all duration-200"
          >
            <span>Beta Stores Complex</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
