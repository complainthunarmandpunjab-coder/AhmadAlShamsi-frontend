import { ArrowRight, MapPin, Sparkles, Building, Waves, Trees } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const communities = [
  { 
    name: 'Maryam Island', 
    nameAr: 'جزيرة مريم',
    descEn: 'Sharjah’s premier downtown waterfront destination offering upscale promenade dining, retail pavilions, and direct beach proximity.',
    descAr: 'الوجهة المائية الأولى في قلب الشارقة، تتميز بممشى واجهة بحرية فاخر، شواطئ هادئة ومطاعم عصرية.',
    img: '/Golden Hour Waterfront Promenade.png',
    icon: <Waves size={20} className="text-gold" />,
    featuresEn: [
      "Waterfront promenade with retail & dining",
      "Direct beach & lagoon views",
      "High rental demand for holiday & long-term leases"
    ],
    featuresAr: [
      "ممشى واجهة بحرية مع مطاعم ومقاهي راقية",
      "إطلالات مباشرة على الشاطئ والبحيرة",
      "طلب تأجيري مرتفع جداً للإيجارات السنوية والقصيرة"
    ]
  },
  { 
    name: 'Aljada', 
    nameAr: 'الجادة',
    descEn: 'The most progressive master-planned city in Sharjah, featuring the Madar entertainment complex, drive-in cinema, and international school zones.',
    descAr: 'أكبر مدينة عصرية متكاملة ذكية في الشارقة، تضم مجمع مدار الترفيهي، مساحات خضراء، ومدارس دولية.',
    img: '/hero.png',
    icon: <Sparkles size={20} className="text-gold" />,
    featuresEn: [
      "Madar family entertainment district & sports complex",
      "Walkable urban design with cycle paths",
      "Strong capital appreciation & young professional tenant base"
    ],
    featuresAr: [
      "مجمع مدار الترفيهي العائلي ومرافق رياضية متطورة",
      "تصميم حضري ذكي مع مسارات مخصصة للمشاة والدراجات",
      "نمو رأسمالي مستمر ونسبة إشغال عالية من المهنيين والعائلات"
    ]
  },
  { 
    name: 'Masaar', 
    nameAr: 'مسار',
    descEn: 'A secluded forested sanctuary in Suyoh featuring over 50,000 trees, 5km looped cycling track, and smart villa compounds designed for wellness.',
    descAr: 'ملاذ غابي استثنائي في منطقة السيوح يضم أكثر من 50 ألف شجرة، ومسار دراجات بطول 5 كم، وفلل ذكية تركز على الصحة والهدوء.',
    img: '/Golden-Hour Waterfront Skyline.png',
    icon: <Trees size={20} className="text-gold" />,
    featuresEn: [
      "50,000+ trees forming a natural lush canopy",
      "Continuous 5km illuminated cycling and jogging tracks",
      "Ultra-private luxury villas & spacious townhouses"
    ],
    featuresAr: [
      "أكثر من 50,000 شجرة توفر غطاءً نباتياً طبيعياً خلاباً",
      "مسارات مضاءة للجري وركوب الدراجات بطول 5 كم",
      "فلل وتاون هاوس فاخرة توفر أقصى درجات الخصوصية"
    ]
  },
  { 
    name: 'Al Khan & Al Majaz', 
    nameAr: 'الخان والمجاز',
    descEn: 'Sharjah’s vibrant coastal corridor on the border of Dubai, famous for Khalid Lagoon, cultural museums, and bustling commercial activity.',
    descAr: 'الشريان الساحلي النابض بين الشارقة ودبي، يشتهر ببحيرة خالد، والمتاحف الثقافية، وعوائد الإيجار السنوية الممتازة.',
    img: '/Golden Hour Waterfront Promenade.png',
    icon: <Building size={20} className="text-gold" />,
    featuresEn: [
      "Immediate commute access into Dubai via E11 & Al Taawun",
      "Iconic skyline views over Khalid Lagoon & Al Qasba",
      "Established rental market with consistent 8%+ gross yields"
    ],
    featuresAr: [
      "سهولة وصول فائقة إلى دبي عبر شارع الاتحاد والتعاون",
      "إطلالات خلابة على بحيرة خالد وقناة القصباء",
      "سوق تأجيري ناضج ومستقر بعوائد إيجارية تصل إلى 8%+"
    ]
  },
];

export default function Communities() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "المجتمعات والمناطق" : "COMMUNITIES"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "استكشف أبرز المناطق السكنية والاستثمارية في الشارقة. لكل منطقة طابعها الخاص وميزاتها الفريدة من الواجهات البحرية إلى المجتمعات الخضراء."
              : "Discover the most sought-after neighborhoods across Sharjah. Each community offers its own distinct character, amenities, and lifestyle profile."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 space-y-24">
        {communities.map((comm, idx) => (
          <motion.div 
            key={comm.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="lg:w-1/2 h-[450px] w-full overflow-hidden rounded-lg relative group shadow-md">
              <img src={comm.img} alt={comm.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-2 text-gold">
                  <MapPin size={16} /> Sharjah, UAE
                </div>
                <div className="text-3xl font-heading">
                  {isAr ? comm.nameAr : comm.name}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:px-8">
              <div className="flex items-center gap-2.5 mb-4">
                {comm.icon}
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                  {isAr ? "مميزات المنطقة" : "Area Highlights"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-ink mb-5">
                {isAr ? `الحياة في ${comm.nameAr}` : `Living in ${comm.name}`}
              </h2>
              <p className="text-ink-soft mb-8 leading-relaxed text-sm md:text-base">
                {isAr ? comm.descAr : comm.descEn}
              </p>

              {/* Unique Highlights list */}
              <ul className="space-y-3.5 mb-10 text-ink text-sm font-medium">
                {(isAr ? comm.featuresAr : comm.featuresEn).map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full shrink-0 mt-1.5"></div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/properties" 
                className="inline-flex border border-ink bg-transparent text-ink px-8 py-3.5 items-center justify-center gap-3 hover:bg-ink hover:text-white transition-colors font-medium text-xs tracking-wider uppercase rounded-md"
              >
                <span>{isAr ? `استكشف عقارات ${comm.nameAr}` : `Explore Properties in ${comm.name}`}</span>
                <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
