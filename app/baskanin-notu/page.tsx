import type { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Başkan'ın Notu | BetaAVM",
  description: "Yusuf Uğur'dan mesajlar.",
};

export default function ChairmanNotePage() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-24 page-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-roboto">Başkan'ın Notu</h1>
          <p className="text-sm md:text-base opacity-80">Ana Sayfa &gt; Başkan'ın Notu</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative">
          <Quote className="absolute top-8 left-8 text-[var(--color-primary)] opacity-10 w-24 h-24" />
          
          <div className="relative z-10 space-y-8 text-gray-800 text-lg md:text-xl leading-relaxed italic">
            <p>
              "1992 yılında çıktığımız Orta Asya ve Türk dünyası yolculuğumuzda her zaman dürüstlük, yüksek kalite ve insana yatırım ilkelerimizi rehber edindik."
            </p>
            
            <p>
              "Sadece binalar ve mağazalar değil, kardeş halklar arasında dostluk köprüleri kurduk. Bişkek'te hayata geçirdiğimiz 100 milyon doları aşkın değere sahip yeni çok fonksiyonlu kompleksimiz, bölgenin çehresini değiştiren bir kartvizit projedir."
            </p>

            <p>
              "Yeni nesil yöneticilerimiz, CEO'muz Selçuk Uğur ve Cuma Yusuf Uğur liderliğinde akıllı şehir teknolojileri, modern perakende anlayışı ve sürdürülebilir mimariyi holdingimizin odağına yerleştiriyoruz."
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-right">
              <h3 className="font-bold text-xl text-[var(--color-primary-dark)]">Yusuf Uğur</h3>
              <p className="text-gray-500 font-medium">Beta Holding & Beta AVM Yönetim Kurulu Başkanı</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
