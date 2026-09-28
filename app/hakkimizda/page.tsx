import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | BetaAVM",
  description: "Köklü geçmişimiz, küresel vizyonumuz ve başarı hikayemiz.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-24 page-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-roboto">Hakkımızda</h1>
          <p className="text-sm md:text-base opacity-80">Ana Sayfa &gt; Hakkımızda</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 gap-12 text-gray-800">
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">Köklü Geçmişimiz ve Başarı Hikayemiz</h2>
            <p className="leading-relaxed mb-4">
              Temelleri 1978 yılına uzanan Uğur ailesinin ticari birikimiyle temellenen Beta Grubu, perakende, AVM işletmeciliği, inşaat, lüks kozmetik ve dış ticaret alanlarında öncü yatırımlara imza atmıştır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">Küresel Vizyon ve Çok Sektörlü Büyüme</h2>
            <p className="leading-relaxed mb-4">
              İstanbul Bahçelievler Metroport Busidence merkezli yönetim yapısıyla grup, Türkiye ve Avrasya coğrafyasında modern alışveriş merkezleri, akıllı konut kompleksleri ve perakende zincirlerini yönetmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">Türk Dünyasına ve Orta Asya'ya Uzanan Köprü</h2>
            <p className="leading-relaxed mb-4">
              1990'lı yılların başında Sovyetler Birliği'nin dağılmasıyla birlikte Kırgızistan başta olmak üzere Orta Asya pazarına ilk adım atan Türk sermayeli gruplar arasında yer almıştır.
            </p>
          </section>

          <section className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-8 text-center">Kilometre Taşlarımız</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="font-bold text-[var(--color-accent)] w-24 shrink-0 text-xl">1978</div>
                <div>Ticari yolculuğumuzun temellerinin atılması.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[var(--color-accent)] w-24 shrink-0 text-xl">1992</div>
                <div>Kırgızistan ve Orta Asya pazarına ilk yatırımların başlaması.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[var(--color-accent)] w-24 shrink-0 text-xl">2000s</div>
                <div>Perakende, lüks kozmetik ve AVM işletmeciliğinde liderliğin pekişmesi.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[var(--color-accent)] w-24 shrink-0 text-xl">2025+</div>
                <div>Akıllı şehirler ve sürdürülebilir konut kompleksleri ile geleceği inşa etmeye devam ediyoruz.</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
