import type { Metadata } from "next";
import { Eye, Target, ShieldCheck, Globe, Cpu, Leaf, HeartHandshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vizyon & Misyon | BetaAVM",
  description: "BetaAVM vizyonu, misyonu ve temel değerleri.",
};

export default function VisionMissionPage() {
  return (
    <div className="pb-16 bg-white">
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-24 page-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-roboto">Vizyonumuz & Misyonumuz</h1>
          <p className="text-sm md:text-base opacity-80">Ana Sayfa &gt; Vizyon & Misyon</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Vizyon */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6 font-roboto">Vizyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Faaliyet gösterdiğimiz perakende, AVM işletmeciliği, lüks kozmetik ve inşaat sektörlerinde; Avrasya coğrafyasında standartları belirleyen, inovatif teknolojileri modern mimariyle buluşturan ve uluslararası ölçekte en çok güven duyulan lider Türk markalarından biri olmak.
            </p>
          </div>

          {/* Misyon */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6 font-roboto">Misyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Müşterilerimize, iş ortaklarımıza ve yatırımcılarımıza en yüksek kalitede yaşam, alışveriş ve iş alanları sunmak; faaliyet gösterdiğimiz bölgelerde yerel istihdama ve sosyo-ekonomik kalkınmaya katkıda bulunmak; çevreye duyarlı, sürdürülebilir projelere imza atmak.
            </p>
          </div>
        </div>

        {/* 4 Prensip */}
        <h3 className="text-3xl font-bold text-center text-[var(--color-primary-dark)] mb-12">Temel Prensiplerimiz</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-[var(--color-green)] mb-4" />
            <h4 className="font-bold text-xl text-gray-800">Güven & İtibar</h4>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <Globe className="w-12 h-12 mx-auto text-[var(--color-green)] mb-4" />
            <h4 className="font-bold text-xl text-gray-800">Küresel Standartlar</h4>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <Cpu className="w-12 h-12 mx-auto text-[var(--color-green)] mb-4" />
            <h4 className="font-bold text-xl text-gray-800">İnovasyon & Teknoloji</h4>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <Leaf className="w-12 h-12 mx-auto text-[var(--color-green)] mb-4" />
            <h4 className="font-bold text-xl text-gray-800">Sürdürülebilirlik</h4>
          </div>
        </div>

        {/* Temel Değerler */}
        <div className="bg-[var(--color-primary-dark)] text-white rounded-3xl p-10 md:p-16">
          <h3 className="text-3xl font-bold text-center mb-10">Temel Değerlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Şeffaflık",
              "Güvenilirlik",
              "Koşulsuz Müşteri Memnuniyeti",
              "İnovasyon",
              "Çevreye ve Topluma Saygı"
            ].map((value, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0" />
                <span className="font-medium text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
