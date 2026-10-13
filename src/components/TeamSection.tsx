import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface TeamMember {
  name: string;
  nameAr?: string;
  role: string;
  roleAr?: string;
  languages: string;
  languagesAr?: string;
  phone: string;
  email: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Al Shamsi",
    nameAr: "أحمد الشامسي",
    role: "Founder & Managing Director",
    roleAr: "المؤسس والمدير العام",
    languages: "Arabic, English",
    languagesAr: "العربية، الإنجليزية",
    phone: "+971 6 555 1234",
    email: "ahmad@alshamsirealestate.ae",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Tariq Mansoor",
    nameAr: "طارق منصور",
    role: "Head of Rentals & Property Management",
    roleAr: "رئيس قسم التأجير وإدارة العقارات",
    languages: "Arabic, English",
    languagesAr: "العربية، الإنجليزية",
    phone: "+971 6 555 1235",
    email: "rentals@alshamsirealestate.ae",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Mariam Al Suwaidi",
    nameAr: "مريم السويدي",
    role: "Senior Leasing Consultant",
    roleAr: "مستشار تأجير أول",
    languages: "Arabic, English",
    languagesAr: "العربية، الإنجليزية",
    phone: "+971 6 555 1236",
    email: "mariam@alshamsirealestate.ae",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Farhan Siddiqui",
    nameAr: "فرحان صديقي",
    role: "Property Management & Operations Lead",
    roleAr: "مسؤول إدارة العقارات والعمليات",
    languages: "English, Urdu, Hindi",
    languagesAr: "الإنجليزية، الأردية، الهندية",
    phone: "+971 6 555 1237",
    email: "farhan@alshamsirealestate.ae",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function TeamSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {isAr ? "فريق عملنا المتخصص" : "Our Experienced Advisors"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading text-ink">
              {isAr ? "تعرف على فريقنا" : "MEET OUR TEAM"}
            </h2>
          </div>
          <p className="text-ink-soft text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            {isAr
              ? "مستشارون محليون يتمتعون بخبرة واسعة في سوق الشارقة العقاري، ملتزمون بمساعدتك في البيع والشراء وإدارة أملاكك بكل أمانة واحترافية."
              : "Dedicated Sharjah specialists offering transparent guidance across residential sales, leasing, and portfolio management."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-paper rounded-lg border border-stone/40 overflow-hidden hover:shadow-lg hover:border-gold/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 w-full overflow-hidden bg-stone/20">
                <img
                  src={member.img}
                  alt={isAr && member.nameAr ? member.nameAr : member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white text-xs">
                    <span className="font-semibold">{isAr ? "اللغات: " : "Languages: "}</span>
                    {isAr && member.languagesAr ? member.languagesAr : member.languages}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading text-ink font-bold mb-1">
                    {isAr && member.nameAr ? member.nameAr : member.name}
                  </h3>
                  <p className="text-xs text-gold font-semibold mb-4">
                    {isAr && member.roleAr ? member.roleAr : member.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone/30 flex items-center justify-between text-ink-soft text-xs">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 hover:text-gold transition-colors"
                    title={member.phone}
                  >
                    <Phone size={14} className="text-gold" />
                    <span>{isAr ? "اتصال" : "Call"}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 hover:text-gold transition-colors"
                    title={member.email}
                  >
                    <Mail size={14} className="text-gold" />
                    <span>{isAr ? "إيميل" : "Email"}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
