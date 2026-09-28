import { Metadata } from "next";
import { ChevronRight, Users, Lightbulb, Store, Wrench, Car, Film, Utensils, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beta AVM | Alışveriş Merkezi Yönetimi",
  description: "Beta AVM, Türkiye ve uluslararası pazarlarda modern alışveriş merkezi işletmeciliği yapmaktadır.",
};

export default function BetaAVMPage() {
  const services = [
    { icon: Users, title: "Kiracı İlişkileri", desc: "Markalarla güçlü ve sürdürülebilir işbirlikleri yönetimi" },
    { icon: Lightbulb, title: "Konsept Geliştirme", desc: "Yenilikçi, ziyaretçi odaklı AVM konseptleri tasarımı" },
    { icon: Store, title: "Ticari Alan Kiralama", desc: "Doğru marka karması ile yüksek verimli kiralama stratejileri" },
    { icon: Wrench, title: "Tesis Yönetimi", desc: "Uluslararası standartlarda operasyonel ve teknik tesis yönetimi" },
  ];

  const facilities = [
    { icon: Car, title: "Otopark" },
    { icon: Film, title: "Sinema/Eğlence" },
    { icon: Utensils, title: "Restoran & Cafe" },
    { icon: ShieldCheck, title: "Güvenlik & Vale" },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[var(--color-primary-dark)] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Beta AVM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Beta AVM</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200">
            Profesyonel AVM işletmeciliği ve değer yaratan perakende çözümleri.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Beta AVM (Beta Alış Veriş Merkezleri İnş. Gıd. Turz. Yat. San. ve Dış Tic. A.Ş.)</strong>, 
              Türkiye ve uluslararası pazarlarda perakende sektörüne yön veren modern alışveriş merkezi işletmeciliği yapmaktadır. 
              AVM bünyesinde uluslararası moda, gastronomi, teknoloji, eğlence ve kozmetik markaları bir araya getirilmekte; 
              yüksek ziyaretçi trafiğine sahip cazibe merkezleri oluşturulmaktadır.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-10 font-poppins text-gray-900 text-center">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-[var(--color-primary)] transition-colors group">
                <s.icon className="w-10 h-10 text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 font-poppins text-gray-900">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-[var(--color-primary-dark)] rounded-3xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8 font-poppins text-center">Sosyal ve Fiziksel İmkanlar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facilities.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <f.icon className="w-8 h-8 text-[var(--color-green)]" />
                  </div>
                  <span className="font-medium">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
