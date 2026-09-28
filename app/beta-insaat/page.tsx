import { Metadata } from "next";
import { ChevronRight, HardHat, Building, Leaf, Shield, Zap, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beta İnşaat | Beta AVM",
  description: "Türkiye ve Avrasya genelinde konut, otel, ticari kompleks ve AVM projelerini projelendiren ve inşa eden holding kolu.",
};

export default function BetaInsaatPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[var(--color-primary-dark)] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Beta İnşaat</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Beta İnşaat</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200">
            Beta İnşaat, Türkiye ve Avrasya genelinde konut, otel, ticari kompleks ve AVM projelerini projelendiren ve inşa eden holding taahhüt ve gayrimenkul koludur.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <HardHat className="w-10 h-10 text-[var(--color-primary)] mb-6" />
              <h3 className="text-xl font-bold mb-4 font-poppins">İleri Mühendislik</h3>
              <p className="text-gray-600">En güncel inşaat teknolojileri ve deprem güvenliği standartlarına uygun yapı tasarımı ve inşası.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Building className="w-10 h-10 text-[var(--color-primary)] mb-6" />
              <h3 className="text-xl font-bold mb-4 font-poppins">Karma Yaşam Projeleri</h3>
              <p className="text-gray-600">Rezidans, ofis, AVM ve otel fonksiyonlarını tek bir çatı altında birleştiren vizyoner kompleksler.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Leaf className="w-10 h-10 text-[var(--color-primary)] mb-6" />
              <h3 className="text-xl font-bold mb-4 font-poppins">Sürdürülebilir Mimari</h3>
              <p className="text-gray-600">Yeşil bina konsepti, enerji verimliliği ve doğaya saygılı çevre düzenlemeleri ile sürdürülebilirlik.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-gray-900">Öne Çıkan Proje: Bişkek Mega Kompleks</h2>
            <p className="text-lg text-gray-700 mb-8">
              Kırgızistan'ın başkenti Bişkek'te, devlet protokolünün katılımıyla temeli atılan 3 kuleli 21 katlı karma proje.
              Şehrin silüetini değiştirecek bu yapı, uluslararası standartlarda lüks ve konforu bir araya getiriyor.
            </p>
            
            <h3 className="text-xl font-bold mb-6 font-poppins text-gray-900">Teknik Özellikler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Info className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="font-medium text-gray-800">Akıllı bina otomasyonu</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="font-medium text-gray-800">Yangın güvenliği</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-[var(--color-green)]" />
                <span className="font-medium text-gray-800">Yeşil bina/enerji tasarrufu</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
