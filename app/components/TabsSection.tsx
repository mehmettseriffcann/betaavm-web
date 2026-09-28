'use client';

import { useState } from 'react';
import { Target, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

const tabs = [
  {
    id: 'yetkinlikler',
    title: 'Yetkinliklerimiz',
    icon: Sparkles,
    badge: 'Çok Yönlü Uzmanlık',
    highlight: 'İnşaat, perakende, dış ticaret ve kozmetik sektörlerinde 47 yıllık kurumsal tecrübe.',
    content:
      'BetaAVM ve Beta Holding olarak; üreticiler, uluslararası tedarikçiler, yatırımcılar ve iş ortakları arasında güçlü bağlar kuruyoruz. Her sektördeki uzmanlığımızı, doğru insanları ve doğru platformları bir araya getirerek sürdürülebilir bölgesel kalkınmaya dönüştürüyoruz.',
    bullets: [
      'Geniş tedarik ve lojistik ağı (Orta Asya - Türkiye)',
      'A Sınıfı AVM ve ticari alan kiralama yönetimi',
      'Yüksek mühendislik ve deprem güvenliği odaklı taahhüt',
    ],
  },
  {
    id: 'bugunden-yarin',
    title: 'Bugünden Yarına',
    icon: Target,
    badge: 'Geleceğin Şehirleri',
    highlight: 'Attığımız her adımın yarının dünyasını şekillendirdiğine inanıyoruz.',
    content:
      'İnşaatta modern ve sürdürülebilir projeler, perakendede müşteri odaklı deneyimler, dış ticarette güçlü bağlantılar ve lüks kozmetikte öncü konseptlerle geleceğin gereksinimlerini bugünden karşılıyoruz. Bişkek’te yükselen 100M$’lık akıllı kompleksimiz bu vizyonun somut bir örneğidir.',
    bullets: [
      'Akıllı bina otomasyonu ve enerji tasarrufu',
      'Yeni nesil dijital perakende ve ziyaretçi deneyimi',
      'Çevreye duyarlı sürdürülebilir mimari standartları',
    ],
  },
  {
    id: 'felsefemiz',
    title: 'Felsefemiz',
    icon: HeartHandshake,
    badge: 'Kültürel & Ekonomik Köprü',
    highlight: 'Bizim için başarı, yalnızca bugünü kazanmak değil; kardeş halklar arasında dostluk köprüleri kurmaktır.',
    content:
      '1992 yılından itibaren Türk dünyasında başlattığımız ticari faaliyetlerimizde her zaman dürüstlük, yüksek kalite ve insana yatırım ilkelerini rehber edindik. Güvene dayalı iş ortaklıklarımızla nesiller boyu sürecek kalıcı eserler bırakıyoruz.',
    bullets: [
      'Koşulsuz müşteri ve iş ortağı memnuniyeti',
      'Şeffaf ve etik kurumsal yönetim ilkeleri',
      'Sosyal fayda, eğitim ve istihdam önceliği',
    ],
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#840740] bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Kurumsal Yaklaşım
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Vizyonumuzu Şekillendiren İlkeler
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white shadow-sm border border-gray-200">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-[#840740] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#840740] flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-rose-800">
                {currentTab.badge}
              </span>
              <h3 className="text-2xl font-black text-gray-900">
                {currentTab.title}
              </h3>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-amber-950 font-semibold text-sm sm:text-base mb-6 leading-relaxed">
            {currentTab.highlight}
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {currentTab.content}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            {currentTab.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-gray-700 leading-snug">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
