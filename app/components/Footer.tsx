import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Sol Kolon - İletişim & Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://www.betaavm.com.tr/wp-content/uploads/2020/04/betastores.png"
                alt="Beta Stores"
                width={140}
                height={80}
                className="h-16 w-auto object-contain brightness-110"
              />
            </Link>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p>
                  Bahçelievler Mah. D-100 Yanyolu Metroport Busidence 14/B K.10 D:1007
                  <br />
                  Bahçelievler - İstanbul / Türkiye
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 shrink-0" />
                <a href="tel:+902124424931" className="hover:text-white transition-colors">
                  +90 212 442 49 31
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400 shrink-0" />
                <a href="mailto:beta@betaavm.com.tr" className="hover:text-white transition-colors">
                  beta@betaavm.com.tr
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Çalışma Saatleri:</p>
                  <p>Pazartesi – Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-400">Cumartesi – Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Sayfalar */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-3 inline-block">
              Hızlı Erişim & Sayfalar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Link href="/hakkimizda" className="hover:text-amber-300 transition-colors">
                › Hakkımızda
              </Link>
              <Link href="/beta-stores" className="hover:text-amber-300 transition-colors">
                › Beta Stores Complex
              </Link>
              <Link href="/kurucumuz" className="hover:text-amber-300 transition-colors">
                › Kurucumuz
              </Link>
              <Link href="/beta-avm" className="hover:text-amber-300 transition-colors">
                › Beta AVM
              </Link>
              <Link href="/baskanin-notu" className="hover:text-amber-300 transition-colors">
                › Başkan’ın Notu
              </Link>
              <Link href="/beta-insaat" className="hover:text-amber-300 transition-colors">
                › Beta İnşaat
              </Link>
              <Link href="/vizyonumuz-misyonumuz" className="hover:text-amber-300 transition-colors">
                › Vizyon & Misyon
              </Link>
              <Link href="/sevil-cosmetics-premium" className="hover:text-amber-300 transition-colors">
                › Sevil Cosmetics
              </Link>
              <Link href="/iletisim" className="hover:text-amber-300 transition-colors">
                › İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Telif & Alt Bar */}
      <div className="border-t border-gray-800 bg-[#121221] py-4 text-center text-xs text-gray-400">
        <p>© 2025 Beta Holding / Beta AVM – MSC DESIGN</p>
      </div>
    </footer>
  );
}
