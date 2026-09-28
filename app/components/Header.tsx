'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, PhoneCall, Globe2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#120108]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with clean glow effect */}
          <Link href="/" className="group flex items-center gap-3 relative">
            <div className="relative p-1.5 rounded-xl transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="BetaAVM Logo"
                width={170}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-gray-200">
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Ana Sayfa
            </Link>

            {/* Kurumsal Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200">
                <span>Kurumsal</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#1b020a]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-2.5 shadow-2xl text-sm space-y-1">
                  <Link
                    href="/hakkimizda"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold">Hakkımızda</div>
                    <div className="text-xs text-gray-400 font-normal">Tarihçemiz ve holding yapımız</div>
                  </Link>
                  <Link
                    href="/kurucumuz"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold">Kurucumuz</div>
                    <div className="text-xs text-gray-400 font-normal">Yusuf Uğur & Diplomasi</div>
                  </Link>
                  <Link
                    href="/baskanin-notu"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold">Başkan’ın Notu</div>
                    <div className="text-xs text-gray-400 font-normal">Yönetim Kurulu mesajı</div>
                  </Link>
                  <Link
                    href="/vizyonumuz-misyonumuz"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold">Vizyonumuz & Misyonumuz</div>
                    <div className="text-xs text-gray-400 font-normal">Temel kurumsal değerlerimiz</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Markalarımız Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200">
                <span>Markalarımız</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#1b020a]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-2.5 shadow-2xl text-sm space-y-1">
                  <Link
                    href="/beta-stores"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold text-rose-200">Beta Stores Complex</div>
                    <div className="text-xs text-gray-400 font-normal">100M$ Bişkek Karma Yaşam Projesi</div>
                  </Link>
                  <Link
                    href="/beta-avm"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold text-rose-200">Beta AVM</div>
                    <div className="text-xs text-gray-400 font-normal">Modern Alışveriş & Perakende Yönetimi</div>
                  </Link>
                  <Link
                    href="/beta-insaat"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold text-rose-200">Beta İnşaat</div>
                    <div className="text-xs text-gray-400 font-normal">Deprem Güvenli & İleri Mimarlık</div>
                  </Link>
                  <Link
                    href="/sevil-cosmetics-premium"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-amber-300 text-gray-200 transition-colors"
                  >
                    <div className="font-semibold text-rose-200">Sevil Cosmetics Premium</div>
                    <div className="text-xs text-gray-400 font-normal">Seçkin Niş Parfüm & Lüks Kozmetik</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/iletisim"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              İletişim
            </Link>
          </nav>

          {/* Quick CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+902124424931"
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>+90 212 442 49 31</span>
            </a>
            <Link
              href="/iletisim"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-amber-400 via-rose-600 to-[#840740] group-hover:from-amber-400 group-hover:to-rose-600 hover:shadow-[0_0_20px_rgba(201,147,62,0.4)] transition-all duration-300"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-200 bg-[#150207] rounded-full group-hover:bg-transparent">
                Teklif / İletişim
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal/Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#160209]/95 backdrop-blur-3xl border border-white/15 rounded-3xl p-6 shadow-2xl text-white space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold border-b border-white/10 hover:text-amber-400"
          >
            Ana Sayfa
          </Link>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">Kurumsal</div>
            <div className="grid grid-cols-1 gap-1.5 pl-3 border-l border-rose-900/60 text-sm">
              <Link href="/hakkimizda" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Hakkımızda
              </Link>
              <Link href="/kurucumuz" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Kurucumuz
              </Link>
              <Link href="/baskanin-notu" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Başkan’ın Notu
              </Link>
              <Link href="/vizyonumuz-misyonumuz" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Vizyonumuz & Misyonumuz
              </Link>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">Markalarımız</div>
            <div className="grid grid-cols-1 gap-1.5 pl-3 border-l border-rose-900/60 text-sm">
              <Link href="/beta-stores" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Beta Stores Complex
              </Link>
              <Link href="/beta-avm" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Beta AVM
              </Link>
              <Link href="/beta-insaat" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Beta İnşaat
              </Link>
              <Link href="/sevil-cosmetics-premium" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-gray-300 hover:text-white">
                Sevil Cosmetics Premium
              </Link>
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold border-t border-white/10 hover:text-amber-400"
          >
            İletişim
          </Link>

          <div className="pt-2">
            <Link
              href="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-rose-700 text-white font-bold rounded-xl shadow-lg"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
