import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Contact() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "اتصل بنا" : "CONTACT US"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "فريق مستشارينا المعتمدين جاهز للرد على استفساراتكم ومساعدتكم في كل ما يخص الشراء، التأجير، أو إدارة أملاككم في الشارقة."
              : "Our experienced advisory and property management team is ready to guide you through your real estate decisions in Sharjah."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row gap-16">
        {/* Contact Form */}
        <div className="lg:w-3/5 bg-paper p-8 lg:p-14 border border-stone/40 rounded-lg shadow-sm">
          <h2 className="text-2xl font-heading text-ink mb-2">
            {isAr ? "أرسل لنا رسالة أو طلب استشارة" : "Send us a message"}
          </h2>
          <p className="text-xs text-ink-soft mb-8">
            {isAr ? "سنقوم بالرد عليك خلال أقل من ساعتي عمل." : "We will respond to your inquiry within 2 business hours."}
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center flex flex-col items-center">
              <CheckCircle2 size={36} className="text-emerald-600 mb-2" />
              <h3 className="font-bold text-base mb-1">{isAr ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}</h3>
              <p className="text-xs text-emerald-700">{isAr ? "شكراً لتواصلك، سيتصل بك مستشارنا العقاري قريباً." : "Thank you for reaching out. Our advisor will get in touch shortly."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                    {isAr ? "الاسم الأول" : "First Name"}
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm" 
                    placeholder={isAr ? "أحمد" : "John"} 
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                    {isAr ? "اسم العائلة" : "Last Name"}
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm" 
                    placeholder={isAr ? "الشامسي" : "Doe"} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                    {isAr ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm" 
                    placeholder="email@example.com" 
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                    {isAr ? "رقم الهاتف / الواتساب" : "Phone / WhatsApp"}
                  </label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm" 
                    placeholder="+971 50 123 4567" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                  {isAr ? "نوع الخدمة المطلوبة" : "Service Required"}
                </label>
                <select className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm cursor-pointer">
                  <option>{isAr ? "تأجير أو إدارة عقار" : "Property Leasing & Management"}</option>
                  <option>{isAr ? "شراء عقار جاهز" : "Buying Ready Property"}</option>
                  <option>{isAr ? "استثمار قيد الإنشاء (Off-Plan)" : "Off-Plan Investment"}</option>
                  <option>{isAr ? "عرض عقار للبيع" : "Selling a Property"}</option>
                  <option>{isAr ? "استشارة عامة" : "General Inquiry"}</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-2 block">
                  {isAr ? "الرسالة أو تفاصيل العقار" : "Message or Property Details"}
                </label>
                <textarea 
                  required
                  rows={4} 
                  className="w-full bg-white border border-stone/50 px-4 py-3 rounded-md outline-none focus:border-gold text-sm resize-none" 
                  placeholder={isAr ? "كيف يمكننا مساعدتك اليوم؟" : "How can we assist you with your real estate goals?"}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-ink text-white py-4 rounded-md font-semibold text-xs tracking-wider uppercase hover:bg-ink-soft transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isAr ? "إرسال الرسالة" : "Send Message"}</span> 
                <Send size={14} className={isAr ? "rotate-180" : ""} />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="lg:w-2/5 space-y-10">
          <div>
            <h3 className="text-xl font-heading text-ink mb-6">
              {isAr ? "معلومات مكتبنا" : "Headquarters"}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-ink-soft">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-bold text-ink mb-1 text-sm">
                    {isAr ? "شركة أحمد الشامسي للعقارات" : "Ahmad Al Shamsi Real Estate HQ"}
                  </div>
                  <p className="text-xs leading-relaxed">
                    {isAr
                      ? "برج المجاز 1، واجهة المجاز المائية، الشارقة، الإمارات العربية المتحدة"
                      : "Al Majaz Tower 1, Al Majaz Waterfront, Sharjah, United Arab Emirates"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-ink-soft">
                <Phone className="text-gold shrink-0" size={20} />
                <div>
                  <div className="text-xs font-medium text-ink">+971 6 555 1234</div>
                  <div className="text-xs font-medium text-ink">+971 50 123 4567 (WhatsApp)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-ink-soft">
                <Mail className="text-gold shrink-0" size={20} />
                <div className="text-xs font-medium text-ink">info@alshamsirealestate.ae</div>
              </div>
              
              <div className="flex items-start gap-4 text-ink-soft">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="text-xs font-bold text-ink mb-1">
                    {isAr ? "أوقات الدوام الرسمية" : "Working Hours"}
                  </div>
                  <div className="text-xs">{isAr ? "السبت - الخميس: 9:00 ص - 7:00 م" : "Monday - Saturday: 9:00 AM - 7:00 PM"}</div>
                  <div className="text-xs">{isAr ? "الجمعة: مغلق" : "Sunday: Closed"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-paper p-6 rounded-lg border border-stone/30">
            <h4 className="font-bold text-sm text-ink mb-2">
              {isAr ? "هل أنت مستثمر أو مالك بناية؟" : "Landlord or Building Owner?"}
            </h4>
            <p className="text-xs text-ink-soft leading-relaxed mb-4">
              {isAr
                ? "تواصل مباشرة مع قسم إدارة العقارات والتأجير لبحث اتفاقيات التشغيل وإدارة الإيجارات السنوية."
                : "Connect directly with our dedicated property management team for building management and bulk tenancy."}
            </p>
            <a 
              href="tel:+97165551235"
              className="text-xs font-bold text-gold hover:underline inline-flex items-center gap-1"
            >
              <span>{isAr ? "اتصل بمدير التأجير: 1235 555 6 971+" : "Call Leasing Dept: +971 6 555 1235"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
