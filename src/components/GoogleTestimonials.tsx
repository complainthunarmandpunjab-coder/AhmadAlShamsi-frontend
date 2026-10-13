import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function GoogleTestimonials() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const reviews = [
    {
      author: "Salem Al Qasimi",
      authorAr: "سالم القاسمي",
      time: "2 weeks ago",
      timeAr: "منذ أسبوعين",
      textEn: "Ahmad Al Shamsi Real Estate helped me lease out two commercial units in Al Majaz within days. Extremely professional contracts and smooth municipality coordination.",
      textAr: "ساعدني مكتب أحمد الشامسي في تأجير وحدتين تجاريتين في المجاز خلال أيام قليلة. تعامل احترافي جداً وتوثيق سلس للعقود في البلدية.",
      badge: "Verified Tenant / Owner"
    },
    {
      author: "Dr. Karen Mitchell",
      authorAr: "د. كارين ميتشل",
      time: "1 month ago",
      timeAr: "منذ شهر",
      textEn: "Found my dream rental apartment on Maryam Island through their team. Tariq was very honest, transparent about all service fees, and always on time.",
      textAr: "وجدت شقة أحلامي للإيجار في جزيرة مريم من خلال فريقهم. الأستاذ طارق كان في قمة الأمانة والشفافية بخصوص كافة الرسوم، والتزام تام بالمواعيد.",
      badge: "Tenant Review"
    },
    {
      author: "Mohammed Al Zaabi",
      authorAr: "محمد الزعابي",
      time: "3 months ago",
      timeAr: "منذ 3 أشهر",
      textEn: "They manage my entire 4-storey residential building in Sharjah. Zero stress with rent collection, maintenance calls are solved swiftly. Top-tier property management!",
      textAr: "يديرون بنايتي السكنية المكونة من 4 طوابق في الشارقة بالكامل. راحة بال تامة في تحصيل الإيجارات ومتابعة الصيانة فوراً. إدارة أملاك ممتازة!",
      badge: "Property Management Client"
    }
  ];

  return (
    <section className="px-6 lg:px-16 py-20 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* Google G icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="text-[11px] font-bold tracking-wider uppercase text-ink">
                {isAr ? "تقييمات موثقة من جوجل" : "Verified Google Reviews"}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading text-ink">
              {isAr ? "آراء عملائنا الحقيقية" : "WHAT OUR CLIENTS SAY"}
            </h2>
          </div>

          {/* Rating Summary Block */}
          <div className="flex items-center gap-4 bg-paper p-4 rounded-lg border border-stone/40">
            <div className="text-3xl font-heading font-bold text-ink">4.9</div>
            <div>
              <div className="flex gap-1 text-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="text-[11px] text-ink-soft">
                {isAr ? "استناداً إلى 120+ تقييم في جوجل" : "Based on 120+ reviews on Google"}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-paper p-7 rounded-lg border border-stone/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold font-bold flex items-center justify-center text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">
                        {isAr ? rev.authorAr : rev.author}
                      </div>
                      <div className="text-[11px] text-muted">
                        {isAr ? rev.timeAr : rev.time}
                      </div>
                    </div>
                  </div>
                  {/* Google mini icon */}
                  <div className="w-5 h-5 opacity-70">
                    <svg viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-1 text-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <p className="text-xs text-ink-soft leading-relaxed mb-6 italic">
                  "{isAr ? rev.textAr : rev.textEn}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone/30 flex items-center gap-1.5 text-[11px] text-green-700 font-medium">
                <CheckCircle size={13} />
                <span>{isAr ? "مراجعة معتمدة على خرائط جوجل" : rev.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google link */}
        <div className="flex justify-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-ink hover:text-gold transition-colors underline underline-offset-4"
          >
            <span>{isAr ? "عرض جميع التقييمات على صفحتنا في جوجل" : "View all reviews on our Google Business Profile"}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
