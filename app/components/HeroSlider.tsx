'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'Mimarlık & İnşaat',
    title: 'Geleceğin Şehirlerini İnşa Ediyoruz',
    desc: 'Yüksek mühendislik, ileri sismik güvenlik ve sürdürülebilir mimari çözümlerle Avrasya’nın prestij yapılarına imza atıyoruz.',
    image: '/images/slide-insaat.jpg',
    link: '/beta-insaat',
    cta: 'Beta İnşaat Projeleri',
    stats: '110.000 m² Karma Yaşam',
  },
  {
    id: 2,
    tag: 'AVM & Perakende',
    title: 'Orta Asya’nın Öncü Alışveriş Merkezleri',
    desc: 'Beta Stores, 1978’den bu yana modern perakende standartlarını belirleyen, Bişkek’in kalbinde yükselen güvenilir AVM zinciri.',
    image: '/images/slide-stores.jpg',
    link: '/beta-stores',
    cta: 'Beta Stores Complex',
    stats: '2 Büyük AVM + Mega Kompleks',
  },
  {
    id: 3,
    tag: 'Uluslararası Ticaret',
    title: 'Avrasya Coğrafyasına Uzanan Ticaret Köprüsü',
    desc: 'İstanbul merkezli operasyonumuzla 25 yılı aşkın süredir Türkiye’den Kırgızistan, Rusya ve Orta Asya pazarlarına gıda ve tüketim ürünleri ihracatı.',
    image: '/images/slide-betaavm.jpg',
    link: '/beta-avm',
    cta: 'Beta AVM Dış Ticaret',
    stats: '25+ Yıllık İhracat Ağı',
  },
  {
    id: 4,
    tag: 'Lüks & Güzellik',
    title: 'Sevil Cosmetics Premium Koleksiyonları',
    desc: 'Beta Stores çatısı altında lüks parfümeri, seçkin cilt bakımı ve dünyaca ünlü prestij markalarıyla benzersiz bir güzellik deneyimi.',
    image: '/images/slide-sevil.png',
    link: '/sevil-cosmetics-premium',
    cta: 'Lüks Koleksiyonu İncele',
    stats: 'Premium Niş Parfümeri',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[92vh] min-h-[640px] max-h-[960px] overflow-hidden bg-black select-none">
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with overlay gradient */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center brightness-50"
              priority={idx === 0}
            />

            {/* Radial Vignette & Smooth Contrast Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0106] via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120108]/90 via-[#120108]/50 to-transparent" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 sm:px-12 pt-16">
              <div className="max-w-2xl text-white space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{slide.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span className="text-gray-300">{slide.stats}</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-300 drop-shadow-sm">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-xl">
                  {slide.desc}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-400 via-rose-600 to-[#840740] hover:brightness-110 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(132,7,64,0.4)] hover:shadow-[0_15px_40px_rgba(201,147,62,0.5)] hover:-translate-y-0.5"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/hakkimizda"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white font-semibold text-sm transition-all duration-200"
                  >
                    Holding Yapısı
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Nav Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Önceki"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-black/30 hover:bg-black/60 text-white border border-white/15 backdrop-blur-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Sonraki"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-black/30 hover:bg-black/60 text-white border border-white/15 backdrop-blur-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Trackers & Glass Indicator Card */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/40 border border-white/15 backdrop-blur-xl px-5 py-2.5 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-9 h-2 bg-gradient-to-r from-amber-400 to-rose-500'
                : 'w-2 h-2 bg-white/40 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
