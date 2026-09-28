import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kurucumuz | BetaAVM",
  description: "Yusuf Uğur - Beta Holding & Beta AVM Yönetim Kurulu Başkanı",
};

export default function FounderPage() {
  return (
    <div className="pb-16">
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-24 page-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-roboto">Kurucumuz</h1>
          <p className="text-sm md:text-base opacity-80">Ana Sayfa &gt; Kurucumuz</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-4 border-b pb-2">Girişimcilik Yolculuğu</h2>
              <p className="leading-relaxed">
                Elazığ kökenli Uğur ailesinin bir ferdi olarak 1978 yılında iş hayatına başlayan Yusuf Uğur, çay ve gıda sektöründeki uluslararası başarının ardından Beta Şirketler Grubu ve Beta Holding'i kurarak perakende ve inşaat sektörlerine öncülük etmiştir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-4 border-b pb-2">Orta Asya Yatırımları</h2>
              <p className="leading-relaxed">
                1992 yılından itibaren Kırgızistan'da başlattığı yatırımlarla Orta Asya'da ilk modern AVM konseptini hayata geçirmiştir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-4 border-b pb-2">Diplomatik Misyon</h2>
              <p className="leading-relaxed">
                Kırgızistan-Türkiye Fahri Konsolosu ve DEİK Türk-Kırgız İş Konseyi Yürütme Kurulu Üyesi olarak iki ülke arasındaki ekonomik ve diplomatik ilişkilere önemli katkılar sağlamaktadır.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-4 border-b pb-2">Ödüller</h2>
              <p className="leading-relaxed">
                Uluslararası düzeyde pek çok başarı ödülü ile taçlandırılan bu vizyoner yaklaşım, kurumsal ilkelerin temel taşını oluşturmaktadır.
              </p>
            </section>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/baskan-sooon.png" 
                alt="Yusuf Uğur - Kurucu" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
