import { Metadata } from "next";
import { ChevronRight, Sparkles, Droplets, Smile, Star, Crown, Gift, HandHeart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sevil Cosmetics Premium | Beta AVM",
  description: "Seçkin kozmetik, lüks cilt bakımı ve niş parfümeri ürünlerini üst segment mağaza konseptiyle tüketiciyle buluşturuyoruz.",
};

export default function SevilCosmeticsPage() {
  const categories = [
    { icon: Sparkles, title: "Parfüm", desc: "Dünyaca ünlü markalar ve niş parfümler" },
    { icon: Droplets, title: "Cilt Bakımı", desc: "Lüks ve dermokozmetik cilt bakım ürünleri" },
    { icon: Smile, title: "Makyaj", desc: "Profesyonel ve premium makyaj koleksiyonları" },
    { icon: HandHeart, title: "Kişisel Bakım", desc: "Özel seçki saç ve vücut bakım serileri" },
    { icon: Star, title: "Özel Koleksiyonlar", desc: "Sınırlı üretim ve exclusive ürünler" },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-rose-950 to-[var(--color-primary-dark)] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center text-sm mb-4 text-rose-200">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Sevil Cosmetics Premium</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins flex items-center">
            Sevil Cosmetics Premium
            <Crown className="ml-4 w-8 h-8 text-rose-300" />
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-rose-100">
            Güzelliğe adanmış lüks bir deneyim.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Beta Holding perakende yatırımları bünyesinde yer alan <strong>Sevil Cosmetics Premium</strong>; 
              seçkin kozmetik, lüks cilt bakımı ve niş parfümeri ürünlerini üst segment mağaza konseptiyle tüketiciyle buluşturmaktadır.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-10 font-poppins text-center text-gray-900">Kategoriler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {categories.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-300 transition-all group">
                <div className="w-16 h-16 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <c.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
              <Gift className="w-10 h-10 text-rose-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Private Label Ürünler</h3>
              <p className="text-gray-700 leading-relaxed">
                Uluslararası markaların yanı sıra, yüksek kalite standartlarında üretilen kendi özel markalı (private label) kozmetik ve bakım ürünlerimizle müşterilerimize benzersiz alternatifler sunuyoruz.
              </p>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-8 border border-gray-800">
              <Crown className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-poppins">VIP Müşteri Hizmetleri</h3>
              <p className="text-gray-300 leading-relaxed">
                Güzellik uzmanlarımız eşliğinde kişiye özel cilt analizi, randevulu makyaj uygulamaları ve özel hediye paketleme servislerimizle kusursuz bir alışveriş deneyimi vaat ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
