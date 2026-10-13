import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-ivory py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto bg-paper p-8 lg:p-14 border border-stone/40 rounded-lg shadow-sm">
        <div className="w-12 h-[2px] bg-gold mb-6"></div>
        <h1 className="text-3xl md:text-display text-ink mb-8">
          {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        
        <div className="space-y-6 text-ink-soft leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "المعلومات التي نجمعها" : "Information We Collect"}
            </h2>
            <p>
              {isAr
                ? "في شركة أحمد الشامسي للعقارات، نولي خصوصيتكم اهتماماً بالغاً. قد نقوم بجمع معلومات الاتصال الأساسية مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند تعبئة نماذج الاستفسار أو طلب إدارة وتأجير العقارات."
                : "At Ahmad Al Shamsi Real Estate, we respect your privacy. We collect personal information such as name, email address, and phone number when you submit inquiry forms or request tenancy management services."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "كيف نستخدم معلوماتكم" : "How We Use Your Information"}
            </h2>
            <p>
              {isAr
                ? "تُستخدم بياناتكم فقط لتقديم الاستشارات والخدمات العقارية التي تطلبونها وتسهيل إجراءات عقود الإيجار ونقل الملكية. نلتزم بعدم بيع أو مشاركة بياناتكم مع أي أطراف ثالثة لأغراض تسويقية."
                : "Your data is used solely to deliver requested advisory and property management services, prepare tenancy agreements, and communicate directly with you. We do not sell your personal data."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading text-ink mb-2 font-bold">
              {isAr ? "أمان وسرية البيانات" : "Data Security"}
            </h2>
            <p>
              {isAr
                ? "نطبق أعلى معايير الحماية التقنية والتنظيمية لضمان أمان بياناتكم ومنع أي وصول غير مصرح به إليها."
                : "We apply industry-standard organizational and technological measures to protect your personal data from unauthorized access or alteration."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
