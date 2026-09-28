import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="relative -mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Telefon */}
          <div className="flex items-center gap-4 pt-3 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 text-[#840740] flex items-center justify-center shrink-0 shadow-inner">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Doğrudan Hat
              </span>
              <a
                href="tel:+902124424931"
                className="text-base font-extrabold text-gray-900 hover:text-[#840740] transition-colors"
              >
                +90 212 442 49 31
              </a>
            </div>
          </div>

          {/* E-posta */}
          <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-inner">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Kurumsal E-Posta
              </span>
              <a
                href="mailto:beta@betaavm.com.tr"
                className="text-base font-extrabold text-gray-900 hover:text-[#840740] transition-colors"
              >
                beta@betaavm.com.tr
              </a>
            </div>
          </div>

          {/* Adres */}
          <div className="flex items-center gap-4 pt-3 md:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700 flex items-center justify-center shrink-0 shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Genel Merkez
              </span>
              <p className="text-sm font-extrabold text-gray-900">
                Metroport Busidence, İst.
              </p>
            </div>
          </div>

          {/* CTA Buton */}
          <div className="pt-4 lg:pt-0 lg:pl-6 flex items-center justify-start lg:justify-end">
            <Link
              href="/iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#840740] hover:bg-[#1f020a] text-white text-sm font-bold shadow-lg shadow-rose-950/20 hover:shadow-xl transition-all duration-300 group"
            >
              <span>Merkez Ofise Ulaşın</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
