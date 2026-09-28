import { Metadata } from "next";
import { ChevronRight, MapPin, Phone, Mail, Globe, Train } from "lucide-react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Beta AVM",
  description: "Beta AVM iletişim bilgileri, adres, telefon ve mesaj formu.",
};

export default function IletisimPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[var(--color-primary-dark)] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">İletişim</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">İletişim</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200">
            Sorularınız, kiralama talepleriniz ve yatırım fırsatları için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 font-poppins text-gray-900">İletişim Bilgileri</h2>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h3 className="font-bold text-lg mb-6 text-[var(--color-primary-dark)]">
                  Beta Alış Veriş Merkezleri İnşaat Gıda Turizm Yatırım Sanayi ve Dış Ticaret A.Ş.
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-[var(--color-primary)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Adres (Merkez)</p>
                      <p className="text-gray-600">Metroport Busidence, Bahçelievler Mah. Eski Londra Asfaltı Kültür Sokak No: 1, Kat: 10, Daire: 1007, Bahçelievler / İstanbul</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-[var(--color-primary)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Telefon</p>
                      <p className="text-gray-600">+90 212 442 49 31</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-[var(--color-primary)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">E-posta</p>
                      <a href="mailto:beta@betaavm.com.tr" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">beta@betaavm.com.tr</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-6 h-6 text-[var(--color-primary)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Web</p>
                      <a href="https://www.betaavm.com.tr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">www.betaavm.com.tr</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h3 className="font-bold text-lg mb-4 text-[var(--color-primary-dark)]">Yurtdışı Temsilcilik</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] mr-3" />
                  <span>Bişkek / Kırgızistan</span>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center">
                <Train className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Ulaşım</h4>
                  <p className="text-blue-800 text-sm">Merkez ofisimize Metro ve Metrobüs bağlantıları ile kolayca ulaşabilirsiniz. Bahçelievler durağına yürüme mesafesindedir.</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3010.840742512185!2d28.861783015413444!3d40.99590697930263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb79e1925b41%3A0xc39f2ebcfbfd69ff!2sMetroport%20Busidence!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Beta AVM Merkez Ofis Konumu"
          className="absolute inset-0"
        ></iframe>
      </section>
    </main>
  );
}
