import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-ivory py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto bg-paper p-8 lg:p-14 border border-stone/40 rounded-lg shadow-sm">
        <div className="w-12 h-[2px] bg-gold mb-6"></div>
        <h1 className="text-3xl md:text-display text-ink mb-8">
          {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
        </h1>
        
        <div className="space-y-6 text-ink-soft leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "1. مقدمة عامة" : "1. Introduction"}
            </h2>
            <p>
              {isAr 
                ? "مرحباً بكم في الموقع الرسمي لشركة أحمد الشامسي للعقارات. تحكم هذه الشروط والأحكام استخدامكم لموقعنا وخدماتنا العقارية في إمارة الشارقة. بدخولك وتصفحك لهذا الموقع، فإنك تقر وتوافق على الالتزام الكامل بهذه الشروط."
                : "Welcome to Ahmad Al Shamsi Real Estate. These Terms and Conditions govern your use of our website and services across Sharjah. By accessing our platform, you agree to comply with these terms."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "2. الخدمات العقارية وعقود التأجير" : "2. Real Estate & Leasing Services"}
            </h2>
            <p>
              {isAr
                ? "تخضع جميع القوائم العقارية والأسعار للتحديث دون إشعار مسبق. نعمل بصفتنا وسيطاً ومستشاراً مرخصاً وفق أنظمة بلدية الشارقة ودائرة التسجيل العقاري."
                : "All property listings, prices, and availability are subject to change without prior notice. We act as licensed intermediaries and advisors under Sharjah Municipality and Real Estate Registration Department guidelines."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "3. الملكية الفكرية" : "3. Intellectual Property"}
            </h2>
            <p>
              {isAr
                ? "كافة محتويات هذا الموقع بما في ذلك النصوص، التصاميم، الصور والعلامات التجارية هي ملك حصري لشركة أحمد الشامسي للعقارات ومحمية بموجب قوانين دولة الإمارات العربية المتحدة."
                : "All content on this website, including text, graphics, logos, images, and software, is the property of Ahmad Al Shamsi Real Estate and is protected by UAE copyright laws."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "4. القانون الواجب التطبيق" : "4. Governing Law"}
            </h2>
            <p>
              {isAr
                ? "تخضع هذه الشروط وتفسر وفقاً للقوانين والتشريعات المعمول بها في إمارة الشارقة والقوانين الاتحادية لدولة الإمارات العربية المتحدة."
                : "These terms and conditions are governed by and construed in accordance with the laws of the Emirate of Sharjah and the federal laws of the United Arab Emirates."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
