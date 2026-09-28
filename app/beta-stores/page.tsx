import { Metadata } from "next";
import { ChevronRight, MapPin, Building, Car, Home, Star, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beta Stores | Beta AVM",
  description: "Beta Stores Kompleksi - Kırgızistan Bişkek'te perakende ve süpermarket kültürünün öncüsü.",
};

export default function BetaStoresPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary-dark)] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Beta Stores</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Beta Stores Complex</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200">
            Beta Stores, 1990'lı yıllardan itibaren Kırgızistan'ın başkenti Bişkek'te modern perakende ve süpermarket kültürünün öncüsü olmuştur.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Beta Stores-1</h3>
              <p className="text-[var(--color-accent)] font-medium mb-4">Çuy Caddesi, Bişkek</p>
              <p className="text-gray-600 leading-relaxed">
                Bişkek'in tam kalbinde yer alan Beta Stores-1, geniş süpermarket alanı, seçkin butikleri, 
                yerel ve uluslararası lezzetler sunan restoranlarıyla şehrin en önemli buluşma noktalarından biridir.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Beta Stores-2</h3>
              <p className="text-[var(--color-accent)] font-medium mb-4">Yunusaliev Caddesi, Bişkek</p>
              <p className="text-gray-600 leading-relaxed">
                Modern mimarisi ve geniş mağaza karmasıyla dikkat çeken Beta Stores-2, ailelerin ve gençlerin 
                keyifle vakit geçirebileceği alışveriş, eğlence ve gastronomi merkezidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Project Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Beta Stores Complex - Mega Proje</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12 text-gray-100">
                100 milyon doları aşkın yatırımla Bişkek'te temeli atılan mega proje; 110.000 m² inşaat alanı, 
                3 kuleden oluşan 21 katlı akıllı rezidanslar, 5 yıldızlı otel, 5 katlı lüks alışveriş merkezi ve 
                550'den fazla araç kapasiteli 3 katlı yer altı otoparkını kapsamaktadır.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Building className="w-8 h-8 mb-3 text-[var(--color-green)]" />
                  <span className="text-2xl font-bold font-poppins mb-1">110.000 m²</span>
                  <span className="text-sm text-gray-300">İnşaat Alanı</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Building2 className="w-8 h-8 mb-3 text-[var(--color-green)]" />
                  <span className="text-2xl font-bold font-poppins mb-1">21 Kat</span>
                  <span className="text-sm text-gray-300">Yükseklik</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Home className="w-8 h-8 mb-3 text-[var(--color-green)]" />
                  <span className="text-2xl font-bold font-poppins mb-1">3 Kule</span>
                  <span className="text-sm text-gray-300">Akıllı Rezidans</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Star className="w-8 h-8 mb-3 text-[var(--color-green)]" />
                  <span className="text-2xl font-bold font-poppins mb-1">5 Yıldız</span>
                  <span className="text-sm text-gray-300">Otel Konforu</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Car className="w-8 h-8 mb-3 text-[var(--color-green)]" />
                  <span className="text-2xl font-bold font-poppins mb-1">550+</span>
                  <span className="text-sm text-gray-300">Araçlık Otopark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
