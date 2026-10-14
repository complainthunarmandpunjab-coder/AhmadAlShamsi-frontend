export interface Property {
  id: number;
  slug?: string;
  propertyId?: string;
  titleEn: string;
  titleAr: string;
  locationEn: string;
  locationAr: string;
  typeEn: string;
  typeAr: string;
  category: 'residential' | 'commercial';
  forRent: boolean;
  price: string;
  numericPrice: number;
  sqft: string;
  numericSqft: number;
  beds: number;
  baths: number;
  rooms?: number;
  floors?: number;
  garage?: number;
  image: string;
  images?: string[];
  descriptionEn?: string;
  descriptionAr?: string;
  highlightsEn?: string[];
  highlightsAr?: string[];
  featuresEn?: string[];
  featuresAr?: string[];
  addressEn?: string;
  addressAr?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  agent?: {
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    role: string;
    image?: string;
  };
}

export const propertiesData: Property[] = [
  // 1. Buy - ID 28: 5 Bedroom Spacious Villa for Sale in Hoshi
  {
    id: 28,
    propertyId: 'hoshi24',
    titleEn: '5 Bedroom Spacious Villa for Sale | Huge Layout with Majlis | Maid Room',
    titleAr: 'فيلا فسيحة 5 غرف نوم للبيع | مخطط واسع مع مجلس | غرفة خادمة',
    locationEn: 'Hoshi, Sharjah, UAE',
    locationAr: 'حوشي، الشارقة، الإمارات',
    typeEn: 'Villa',
    typeAr: 'فيلا',
    category: 'residential',
    forRent: false,
    price: '3,200,000',
    numericPrice: 3200000,
    sqft: '10,000',
    numericSqft: 10000,
    beds: 5,
    baths: 5,
    rooms: 5,
    floors: 2,
    garage: 1,
    image: '/Golden-Hour Waterfront Skyline.png',
    images: [
      '/Golden-Hour Waterfront Skyline.png',
      '/hero.png',
      '/Golden Hour Waterfront Promenade.png',
      '/footer.png'
    ],
    descriptionEn: `Welcome to Ahmad Alshamsi Real Estate Services! Dear Landlords, List your units with us for quick and best services.
Highlights:
* Community Area
* Coffee Cafe
* Redefined Location
* High-Quality Finishes
* Car Parking

Unit Details:
5 Bedroom
5 Bathroom
Majlis
Maid Room
Dining Area
Fully fitted - Bright Kitchen
Laundry Area
Centralized A/C and Gas

Building Facilities:
Parking - covered
Outside Parking Available

Nearby:
Retail Souq, Food and Beverage Outlets, Supermarkets, Mosque, Restaurants, Hospital

Payment Details: Cash or Bank Mortgage - 3,200,000 AED`,
    descriptionAr: `أهلاً بكم في شركة أحمد الشامسي للعقارات! فيلا واسعة فاخرة 5 غرف نوم للبيع في منطقة حوشي بالشارقة.
المواصفات والتفاصيل:
5 غرف نوم رئيسية، 5 حمامات، مجلس رجالي واسع، غرفة خادمة، صالة طعام مستقلة، مطبخ عصري مجهز بالكامل ومشرق، غرفة غسيل، وتكييف مركزي وغاز متوفر.
مرافق المبنى والموقع:
مواقف مغطاة وخارجية، قريبة من الأسواق والمساجد والمدارس والمستشفيات، بموقع هادئ وسهل المداخل والمخارج. الدفع نقداً أو عبر تمويل بنكي.`,
    highlightsEn: ['Community Area', 'Coffee Cafe & Dining', 'Prime Hoshi Location', 'High-Quality Finishes', 'Private Car Parking'],
    highlightsAr: ['منطقة مجتمعية هادئة', 'مقاهي ومطاعم قريبة', 'موقع استراتيجي في حوشي', 'تشطيبات فائقة الجودة', 'مواقف سيارات خاصة'],
    featuresEn: ['Center Cooling', 'Modern Kitchen', 'Heating', 'Pet Friendly', 'Maid Room', 'Majlis', 'Covered Parking', 'Balcony'],
    featuresAr: ['تكييف مركزي', 'مطبخ حديث مجهز', 'تدفئة', 'صديق للحيوانات الأليفة', 'غرفة خادمة', 'مجلس مستقل', 'مواقف مغطاة', 'شرفة واسعة'],
    addressEn: 'Hoshi, Sharjah',
    addressAr: 'منطقة حوشي، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000',
    agent: {
      name: 'Admin',
      phone: '+97165229330',
      email: 'info@ahmadalshamsirealestate.ae',
      whatsapp: '+97165229330',
      role: 'Property Consultant',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    }
  },

  // 2. Buy - ID 31: Sahara Towers - Al Nahda
  {
    id: 31,
    propertyId: 'sahara31',
    titleEn: 'High ROI | Spacious 2BHK Apartment | Prime Location',
    titleAr: 'عائد استثماري مرتفع | شقة واسعة غرفتين وصالة | موقع استراتيجي',
    locationEn: 'Sahara Towers, Al Nahda, Sharjah, UAE',
    locationAr: 'أبراج صحارى، النهدة، الشارقة، الإمارات',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '700,000',
    numericPrice: 700000,
    sqft: '1,300',
    numericSqft: 1300,
    beds: 2,
    baths: 3,
    image: '/hero.png',
    images: ['/hero.png', '/Golden-Hour Waterfront Skyline.png', '/Golden Hour Waterfront Promenade.png'],
    descriptionEn: 'High ROI investment opportunity in Sahara Towers, Al Nahda. On the Dubai border with swift transit to Dubai and all major amenities. Spacious 2BHK layout with 3 bathrooms, large living hall, and built-in wardrobes.',
    descriptionAr: 'فرصة استثمارية ذات عائد مجزٍ في أبراج صحارى بالنهدة على حدود دبي مباشرة. شقة غرفتين وصالة واسعة مع 3 حمامات وموقف سيارة وتشطيبات ممتازة.',
    featuresEn: ['Center Cooling', 'Modern Kitchen', 'High ROI', 'Swimming Pool', 'Gym'],
    featuresAr: ['تكييف مركزي', 'مطبخ حديث', 'عائد استثماري عالٍ', 'مسبح', 'صالة رياضية'],
    addressEn: 'Sahara Towers, Al Nahda, Sharjah',
    addressAr: 'أبراج صحارى، النهدة، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 3. Buy - ID 32: Al Mamzar
  {
    id: 32,
    propertyId: 'mamzar32',
    titleEn: '1 BR with Sea View | Huge Layout | High ROI',
    titleAr: 'شقة غرفة وصالة بإطلالة بحرية | مساحة كبيرة | عائد استثماري ممتاز',
    locationEn: 'Al Mamzar, Sharjah, UAE',
    locationAr: 'الممزر، الشارقة، الإمارات',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '715,000',
    numericPrice: 715000,
    sqft: '1,080',
    numericSqft: 1080,
    beds: 1,
    baths: 2,
    image: '/Golden Hour Waterfront Promenade.png',
    images: ['/Golden Hour Waterfront Promenade.png', '/Golden-Hour Waterfront Skyline.png'],
    descriptionEn: 'Stunning 1 bedroom apartment in Al Mamzar with open sea view, large balcony, high rental demand, and quick border access to Dubai.',
    descriptionAr: 'شقة راقية غرفة وصالة في الممزر مع إطلالة بحرية خلابة، صالة واسعة، بلكونة وإمكانية وصول سريعة إلى دبي ومرافق شاطئية.',
    featuresEn: ['Sea View', 'Center Cooling', 'Covered Parking', 'Balcony'],
    featuresAr: ['إطلالة بحرية', 'تكييف مركزي', 'موقف مغطى', 'شرفة'],
    addressEn: 'Al Mamzar, Sharjah',
    addressAr: 'الممزر، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 4. Buy - ID 33: Ajmal Makan
  {
    id: 33,
    propertyId: 'ajmal33',
    titleEn: 'Luxury Living - Sea View - High ROI',
    titleAr: 'سكن فاخر - إطلالة بحرية - عائد استثماري مرتفع',
    locationEn: 'Ajmal Makan Sharjah Waterfront City, Sharjah, UAE',
    locationAr: 'مدينة أجمل مكان المائية، الشارقة، الإمارات',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '874,000',
    numericPrice: 874000,
    sqft: '961',
    numericSqft: 961,
    beds: 1,
    baths: 2,
    image: '/Golden-Hour Waterfront Skyline.png',
    images: ['/Golden-Hour Waterfront Skyline.png', '/hero.png'],
    descriptionEn: 'Luxury waterfront unit in Ajmal Makan Sharjah Waterfront City with uninterrupted lagoon views, modern smart finishes, and world-class resort amenities.',
    descriptionAr: 'وحدة سكنية فاخرة في مدينة الشارقة للواجهات المائية (أجمل مكان) بإطلالات ساحرة ومرافق منتجعية متكاملة.',
    featuresEn: ['Waterfront Living', 'Modern Kitchen', 'Sea View', 'Private Beach Access'],
    featuresAr: ['واجهة مائية', 'مطبخ حديث', 'إطلالة بحرية', 'دخول شاطئي خاص'],
    addressEn: 'Sharjah Waterfront City',
    addressAr: 'مدينة الشارقة للواجهات المائية',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 5. Buy - ID 34: Cyan Beach Residence, Maryam Island
  {
    id: 34,
    propertyId: 'cyan34',
    titleEn: 'Studio for Sale | Parking Free | Waterfront Community',
    titleAr: 'استوديو للبيع | موقف مجاني | مجتمع الواجهة المائية',
    locationEn: 'Cyan Beach Residence, Maryam Island, Al Khan, Sharjah, UAE',
    locationAr: 'مساكن شاطئ سيان، جزيرة مريم، الخان، الشارقة',
    typeEn: 'Flat',
    typeAr: 'شقة / استوديو',
    category: 'residential',
    forRent: false,
    price: '400,000',
    numericPrice: 400000,
    sqft: '474',
    numericSqft: 474,
    beds: 0,
    baths: 1,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Modern studio in Cyan Beach Residence on Maryam Island. Free parking, direct beach access, pool and gym facilities, perfect for investment or holiday home.',
    descriptionAr: 'استوديو أنيق للبيع في مساكن شاطئ سيان بجزيرة مريم مع موقف مجاني وقريب من الشاطئ والمطاعم.',
    featuresEn: ['Waterfront Community', 'Free Parking', 'Swimming Pool', 'Security'],
    featuresAr: ['مجتمع واجهة مائية', 'موقف مجاني', 'مسبح', 'أمن 24 ساعة'],
    addressEn: 'Maryam Island, Al Khan',
    addressAr: 'جزيرة مريم، الخان',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 6. Buy - ID 35: Naseem Residences, Maryam Island
  {
    id: 35,
    propertyId: 'naseem35',
    titleEn: 'Elegant 2BHK with Balcony | Pool View | All Amenities',
    titleAr: 'شقة غرفتين وصالة فاخرة مع شرفة | إطلالة على المسبح | جميع المرافق',
    locationEn: 'Naseem Residences, Maryam Island, Al Khan, Sharjah, UAE',
    locationAr: 'مساكن النسيم، جزيرة مريم، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,050,000',
    numericPrice: 1050000,
    sqft: '1,200',
    numericSqft: 1200,
    beds: 2,
    baths: 2,
    image: '/hero.png',
    descriptionEn: 'Spacious and elegant 2-bedroom apartment at Naseem Residences, Maryam Island. Features lovely pool view, wide balcony, fitted kitchen, and covered parking.',
    descriptionAr: 'شقة راقية غرفتين وصالة في مساكن النسيم بجزيرة مريم مطلة على المسبح ومجهزة بجميع وسائل الراحة.',
    featuresEn: ['Pool View', 'Balcony', 'Covered Parking', 'Gym & Pool Access'],
    featuresAr: ['إطلالة مسبح', 'شرفة', 'موقف مغطى', 'صالة ومسبح'],
    addressEn: 'Naseem Residences, Maryam Island',
    addressAr: 'مساكن النسيم، جزيرة مريم',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 7. Buy - ID 37: Nada Residences, Maryam Island
  {
    id: 37,
    propertyId: 'nada37',
    titleEn: 'Exquisite 1 BHK | Spacious Balcony | Waterfront Community',
    titleAr: 'شقة مميزة غرفة وصالة | شرفة فسيحة | مجتمع الواجهة المائية',
    locationEn: 'Nada Residences, Maryam Island, Al Khan, Sharjah, UAE',
    locationAr: 'مساكن ندى، جزيرة مريم، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '900,000',
    numericPrice: 900000,
    sqft: '1,200',
    numericSqft: 1200,
    beds: 1,
    baths: 1,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Exquisite 1 bedroom apartment in Nada Residences with an expansive private terrace overlooking the promenade and waters of Al Khan.',
    descriptionAr: 'شقة غرفة وصالة رائعة في مساكن ندى مع شرفة واسعة وإطلالات على الممشى المائي في الخان.',
    featuresEn: ['Terrace', 'Waterfront Living', 'Central A/C', 'Built-in Wardrobes'],
    featuresAr: ['تراس واسع', 'واجهة مائية', 'تكييف مركزي', 'خزائن مدمجة'],
    addressEn: 'Nada Residences, Maryam Island',
    addressAr: 'مساكن ندى، جزيرة مريم',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 8. Buy - ID 39: Tiraz, Aljada
  {
    id: 39,
    propertyId: 'tiraz39',
    titleEn: 'Studio with Terrace | Parking Free | Prime Location',
    titleAr: 'استوديو مع تراس | موقف سيارة مجاني | موقع حيوي مميز',
    locationEn: 'Tiraz, Naseej District, Aljada, Sharjah, UAE',
    locationAr: 'طراز، حي نسيج، الجادة، الشارقة',
    typeEn: 'Flat',
    typeAr: 'شقة / استوديو',
    category: 'residential',
    forRent: false,
    price: '460,000',
    numericPrice: 460000,
    sqft: '400',
    numericSqft: 400,
    beds: 0,
    baths: 1,
    image: '/hero.png',
    descriptionEn: 'Charming studio in Tiraz at Aljada’s cultural Naseej District. Features private terrace, contemporary smart home automation, and free covered parking.',
    descriptionAr: 'استوديو عصري مع تراس في مباني طراز بحي نسيج الإبداعي في الجادة، مزود بنظام المنزل الذكي وموقف خاص.',
    featuresEn: ['Smart Home', 'Private Terrace', 'Covered Parking', 'Park Access'],
    featuresAr: ['منزل ذكي', 'تراس خاص', 'موقف مغطى', 'قريب من الحدائق'],
    addressEn: 'Tiraz, Naseej District, Aljada',
    addressAr: 'طراز، حي نسيج، الجادة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 9. Buy - ID 41: Al Khan Penthouse
  {
    id: 41,
    propertyId: 'alkhan41',
    titleEn: '4BR Penthouse with Beach View | Luxurious Layout | High ROI | Private Beach Access',
    titleAr: 'بنتهاوس 4 غرف مع إطلالة شاطئية | تصميم فخم | وصول خاص للشاطئ',
    locationEn: 'Al Khan, Sharjah, UAE',
    locationAr: 'الخان، الشارقة، الإمارات',
    typeEn: 'Villa',
    typeAr: 'بنتهاوس فاخر',
    category: 'residential',
    forRent: false,
    price: '5,433,000',
    numericPrice: 5433000,
    sqft: '5,890',
    numericSqft: 5890,
    beds: 4,
    baths: 5,
    image: '/Golden-Hour Waterfront Skyline.png',
    images: ['/Golden-Hour Waterfront Skyline.png', '/Golden Hour Waterfront Promenade.png', '/hero.png'],
    descriptionEn: 'Ultra-luxurious 4 bedroom penthouse in Al Khan offering panoramic beach and skyline views, huge wrap-around terrace, private beach access, and premium custom finishes.',
    descriptionAr: 'بنتهاوس فخم للغاية 4 غرف نوم في الخان مع إطلالة بحرية بانورامية، تراس شاسع، دخول شاطئي خاص وأرقى التشطيبات العالمية.',
    featuresEn: ['Penthouse', 'Beach Access', 'Panoramic Views', 'Maid Room', 'Jacuzzi'],
    featuresAr: ['بنتهاوس', 'شاطئ خاص', 'إطلالة بانورامية', 'غرفة خادمة', 'جاكوزي'],
    addressEn: 'Al Khan Waterfront, Sharjah',
    addressAr: 'واجهة الخان المائية، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 10. Buy - ID 43: Al Khan 2BHK
  {
    id: 43,
    propertyId: 'alkhan43',
    titleEn: 'Luxurious 2BHK | Lavish Finishes | Private Beach Access | All Amenities & Parking Included',
    titleAr: 'شقة فاخرة غرفتين وصالة | تشطيبات فخمة | شاطئ خاص ومواقف مجانية',
    locationEn: 'Al Khan, Sharjah, UAE',
    locationAr: 'الخان، الشارقة، الإمارات',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,790,000',
    numericPrice: 1790000,
    sqft: '2,389',
    numericSqft: 2389,
    beds: 2,
    baths: 3,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Spacious 2,389 sqft 2-bedroom residence in Al Khan with beach access, lavish marble finishes, large living room, and inclusive amenities.',
    descriptionAr: 'شقة واسعة 2,389 قدم مربع في الخان مع وصول مباشر للشاطئ وتشطيبات رخامية فاخرة وموقف سيارة.',
    featuresEn: ['Beach Access', 'Marble Floors', 'Covered Parking', 'Balcony'],
    featuresAr: ['شاطئ خاص', 'أرضيات رخام', 'موقف مغطى', 'شرفة'],
    addressEn: 'Al Khan, Sharjah',
    addressAr: 'الخان، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 11. Buy - ID 57: Maryam Island Brand New 2BR
  {
    id: 57,
    propertyId: 'maryam57',
    titleEn: 'Brand New 2 BR | Balcony | All Amenities Included | Parking Free',
    titleAr: 'شقة جديدة كلياً غرفتين وصالة | بلكونة | جميع الخدمات مجاناً وموقف',
    locationEn: 'Maryam Island, Al Khan, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,500,000',
    numericPrice: 1500000,
    sqft: '1,300',
    numericSqft: 1300,
    beds: 2,
    baths: 3,
    image: '/hero.png',
    descriptionEn: 'Brand new 2-bedroom ready to move in Maryam Island. Features modern kitchen, spacious balcony, dedicated parking, swimming pool and fitness gym.',
    descriptionAr: 'شقة جديدة كلياً غرفتين نوم وصالة في جزيرة مريم مع شرفة ومسبح وصالة رياضية وموقف سيارة.',
    featuresEn: ['Brand New', 'Balcony', 'Covered Parking', 'Modern Gym'],
    featuresAr: ['جديدة كلياً', 'شرفة', 'موقف سيارات', 'جيم حديث'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 12. Buy - ID 60: Maryam Island 2BR
  {
    id: 60,
    propertyId: 'maryam60',
    titleEn: 'Brand New 2 BR | Balcony | All Amenities Included | Parking Free',
    titleAr: 'شقة غرفتين وصالة جديدة | شرفة فسيحة | خدمات كاملة وموقف مجاني',
    locationEn: 'Maryam Island, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,400,000',
    numericPrice: 1400000,
    sqft: '1,300',
    numericSqft: 1300,
    beds: 2,
    baths: 3,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Excellent value 2BHK on Maryam Island with premium community views and immediate delivery.',
    descriptionAr: 'شقة ممتازة غرفتين نوم بجزيرة مريم مع إطلالة هادئة وتشطيبات راقية.',
    featuresEn: ['Balcony', 'Covered Parking', 'Pool', 'High ROI'],
    featuresAr: ['شرفة', 'موقف مغطى', 'مسبح', 'عائد مجزٍ'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 13. Buy - ID 69: Maryam Island 2 BHK Pool + Sea View
  {
    id: 69,
    propertyId: 'maryam69',
    titleEn: 'Brand New 2 BHK | Pool + Sea View | Balcony | Parking Included',
    titleAr: 'شقة جديدة غرفتين وصالة | إطلالة مسبح وبحر | شرفة وموقف',
    locationEn: 'Maryam Island, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,150,000',
    numericPrice: 1150000,
    sqft: '1,250',
    numericSqft: 1250,
    beds: 2,
    baths: 3,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Dual view 2BHK apartment offering both pool and sea views in the heart of Maryam Island.',
    descriptionAr: 'شقة غرفتين وصالة بإطلالة مزدوجة على البحر والمسبح مع بلكونة وموقف في جزيرة مريم.',
    featuresEn: ['Sea View', 'Pool View', 'Balcony', 'Free Parking'],
    featuresAr: ['إطلالة بحرية', 'إطلالة مسبح', 'شرفة', 'موقف مجاني'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 14. Buy - ID 70: Maryam Island 1 BHK with Huge Terrace
  {
    id: 70,
    propertyId: 'maryam70',
    titleEn: '1 BHK with Huge Terrace | High ROI | Parking Included',
    titleAr: 'شقة غرفة وصالة مع تراس ضخم | عائد استثماري عالٍ | موقف شامل',
    locationEn: 'Maryam Island, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,000,000',
    numericPrice: 1000000,
    sqft: '1,300',
    numericSqft: 1300,
    beds: 1,
    baths: 2,
    image: '/hero.png',
    descriptionEn: 'Rare 1 bedroom apartment with an expansive outdoor terrace providing extraordinary living space.',
    descriptionAr: 'شقة نادرة غرفة وصالة مع تراس خارجي فسيح للغاية مثالي للجلسات الخارجية والشواء.',
    featuresEn: ['Huge Terrace', 'High ROI', 'Covered Parking', 'Sea Breeze'],
    featuresAr: ['تراس ضخم', 'عائد استثماري عالٍ', 'موقف سيارة', 'قريب من البحر'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 15. Buy - ID 71: La Plage Tower 2BHK + Maid's Room
  {
    id: 71,
    propertyId: 'laplage71',
    titleEn: 'Luxury 2BHK + Maid’s Room | Full Panoramic Sea View | Prime Location',
    titleAr: 'شقة فاخرة 2 نوم + غرفة خادمة | إطلالة بحرية بانورامية كاملة | موقع متميز',
    locationEn: 'La Plage Tower, Al Khan, Sharjah, UAE',
    locationAr: 'برج لا بلاج، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '1,800,000',
    numericPrice: 1800000,
    sqft: '1,800',
    numericSqft: 1800,
    beds: 2,
    baths: 3,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Signature luxury residence in La Plage Tower. Features panoramic sea views, maid room, top quality construction, and high-floor privacy.',
    descriptionAr: 'شقة فخمة في برج لا بلاج الشهير مع غرفة خادمة وإطلالة بحرية بانورامية مفتوحة.',
    featuresEn: ['Panoramic Sea View', 'Maids Room', 'Prime Location', 'High Floor'],
    featuresAr: ['إطلالة بحرية كاملة', 'غرفة خادمة', 'موقع استراتيجي', 'طابق مرتفع'],
    addressEn: 'La Plage Tower, Al Khan',
    addressAr: 'برج لا بلاج، الخان',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 16. Buy - ID 72: La Plage Tower 1BHK
  {
    id: 72,
    propertyId: 'laplage72',
    titleEn: 'Sea View | Luxurious 1BHK with Balcony | All Amenities Included',
    titleAr: 'إطلالة بحرية | شقة فاخرة غرفة وصالة مع بلكونة | شاملة جميع الخدمات',
    locationEn: 'La Plage Tower, Al Khan, Sharjah, UAE',
    locationAr: 'برج لا بلاج، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: false,
    price: '900,000',
    numericPrice: 900000,
    sqft: '1,050',
    numericSqft: 1050,
    beds: 1,
    baths: 2,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Luxury 1BHK in La Plage Tower with direct sea view, wide balcony, modern finishes, and full tower facilities.',
    descriptionAr: 'شقة راقية غرفة وصالة في برج لا بلاج مع إطلالة بحرية مباشرة وبلكونة فسيحة.',
    featuresEn: ['Sea View', 'Balcony', 'Gym & Pool', 'Covered Parking'],
    featuresAr: ['إطلالة بحرية', 'شرفة', 'جيم ومسبح', 'موقف مغطى'],
    addressEn: 'La Plage Tower, Al Khan',
    addressAr: 'برج لا بلاج، الخان',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // ================= RENT PROPERTIES =================
  // 17. Rent - ID 45: The Residence Al Khaledia Suburb
  {
    id: 45,
    propertyId: 'khaledia45',
    titleEn: 'Luxurious 3BR || Chiller Free || Maids Room || All Amenities Free',
    titleAr: 'شقة فاخرة 3 غرف || تكييف مجاني || غرفة خادمة || جميع المرافق مجانية',
    locationEn: 'The Residence, Al Khaledia Suburb, Sharjah, UAE',
    locationAr: 'ذا ريزيدنس، ضاحية الخالدية، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '160,000 / year',
    numericPrice: 160000,
    sqft: '3,100',
    numericSqft: 3100,
    beds: 3,
    baths: 5,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Prestigious 3-bedroom apartment with chiller free cooling, separate maid room, huge living salon, and top-tier amenities in Al Khaledia.',
    descriptionAr: 'شقة فسيحة وراقية 3 غرف نوم وصالة مع تكييف مجاني، غرفة خادمة، صالة كبيرة ومرافق مجانية في الخالدية.',
    featuresEn: ['Chiller Free', 'Maid Room', 'All Amenities Free', 'Central Cooling'],
    featuresAr: ['تكييف مجاني', 'غرفة خادمة', 'مرافق مجانية', 'تكييف مركزي'],
    addressEn: 'Al Khaledia Suburb, Sharjah',
    addressAr: 'ضاحية الخالدية، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 18. Rent - ID 50: Rimal Residences, Maryam Island
  {
    id: 50,
    propertyId: 'rimal50',
    titleEn: 'Brand New 2 BR with Sea View | All Amenities Included | Parking Free',
    titleAr: 'شقة جديدة غرفتين وصالة بإطلالة بحرية | جميع الخدمات مجانية | موقف مجاني',
    locationEn: 'Rimal Residences, Maryam Island, Sharjah, UAE',
    locationAr: 'مساكن رمال، جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '85,000 / year',
    numericPrice: 85000,
    sqft: '1,300',
    numericSqft: 1300,
    beds: 2,
    baths: 2,
    image: '/hero.png',
    descriptionEn: 'Brand new 2-bedroom rental apartment in Rimal Residences with sea view, state-of-the-art gym, pool, and dedicated parking.',
    descriptionAr: 'شقة غرفتين وصالة جديدة للإيجار السنوي في مساكن رمال بجزيرة مريم مع إطلالة بحرية وموقف سيارة.',
    featuresEn: ['Sea View', 'Covered Parking', 'Shared Pool', 'Gym'],
    featuresAr: ['إطلالة بحرية', 'موقف مغطى', 'مسبح مشترك', 'صالة رياضية'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 19. Rent - ID 52: Indigo Beach Residence
  {
    id: 52,
    propertyId: 'indigo52',
    titleEn: 'Prime Location | 2BHK Apartment | All Amenities Included',
    titleAr: 'موقع مميز | شقة غرفتين وصالة | جميع المرافق والخدمات متوفرة',
    locationEn: 'Indigo Beach Residence, Maryam Island, Sharjah, UAE',
    locationAr: 'مساكن شاطئ إنديجو، جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '85,000 / year',
    numericPrice: 85000,
    sqft: '1,444',
    numericSqft: 1444,
    beds: 2,
    baths: 3,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Spacious 2BHK in Indigo Beach Residence, Maryam Island with waterfront strolls and peaceful neighborhood vibes.',
    descriptionAr: 'شقة غرفتين وصالة فسيحة في مساكن شاطئ إنديجو بجزيرة مريم مع ممشى مائي ومرافق راقية.',
    featuresEn: ['Beach Walk', 'Covered Parking', 'Pool', 'Gym'],
    featuresAr: ['ممشى شاطئي', 'موقف مغطى', 'مسبح', 'جيم'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 20. Rent - ID 53: Golden Sands Tower (Al Nahda)
  {
    id: 53,
    propertyId: 'goldensands53',
    titleEn: 'Luxurious 3 Bedroom + Maid Room || Gym And Pool || Wardrobes || Free Car Parking || Open View || Ready To Move',
    titleAr: 'شقة فاخرة 3 غرف + غرفة خادمة || جيم ومسبح || خزائن حائط || موقف سيارات || إطلالة مفتوحة',
    locationEn: 'Golden Sands Tower, Al Nahda, Sharjah, UAE',
    locationAr: 'برج الرمال الذهبية، النهدة، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '82,000 / year',
    numericPrice: 82000,
    sqft: '2,486',
    numericSqft: 2486,
    beds: 3,
    baths: 4,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Huge 3 bedroom + maid room apartment in Golden Sands Tower, Al Nahda near Dubai border with open view and complete family amenities.',
    descriptionAr: 'شقة عائلية فسيحة 3 غرف نوم مع غرفة خادمة، خزائن ملابس، مسبح وجيم وموقف سيارة على مقربة من دبي.',
    featuresEn: ['Maid Room', 'Free Car Parking', 'Open View', 'Built-in Wardrobes'],
    featuresAr: ['غرفة خادمة', 'موقف مجاني', 'إطلالة مفتوحة', 'خزائن مدمجة'],
    addressEn: 'Al Nahda, Sharjah',
    addressAr: 'النهدة، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 21. Rent - ID 56: Maryam Island 3BHK with Huge Terrace
  {
    id: 56,
    propertyId: 'maryam56',
    titleEn: 'Luxury 3BHK with Huge Terrace | Maid room | Parking included',
    titleAr: 'شقة فاخرة 3 غرف وصالة مع تراس ضخم | غرفة خادمة | موقف سيارة شامل',
    locationEn: 'Maryam Island, Al Khan, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الخان، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '130,000 / year',
    numericPrice: 130000,
    sqft: '2,800',
    numericSqft: 2800,
    beds: 3,
    baths: 4,
    image: '/hero.png',
    descriptionEn: 'Luxury 3 bedroom apartment in Maryam Island boasting a huge terrace, maids room, parking, and waterfront tranquility.',
    descriptionAr: 'شقة فاخرة 3 غرف وصالة بتراس خارجي عملاق وغرفة خادمة في جزيرة مريم بالخان.',
    featuresEn: ['Huge Terrace', 'Maid Room', 'Waterfront', 'Parking Included'],
    featuresAr: ['تراس عملاق', 'غرفة خادمة', 'واجهة مائية', 'موقف شامل'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 22. Rent - ID 59: Sahara Tower 4, Al Nahda
  {
    id: 59,
    propertyId: 'sahara59',
    titleEn: 'Prime Location | 3 BHK Luxury Apartment | All Amenities Included',
    titleAr: 'موقع مميز | شقة فاخرة 3 غرف وصالة | كافة وسائل الراحة متوفرة',
    locationEn: 'Sahara Tower 4, Al Nahda, Sharjah, UAE',
    locationAr: 'برج صحارى 4، النهدة، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '80,000 / year',
    numericPrice: 80000,
    sqft: '2,200',
    numericSqft: 2200,
    beds: 3,
    baths: 3,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Prime 3BHK apartment in Sahara Tower 4, right on the border for easy commute to Dubai.',
    descriptionAr: 'شقة فسيحة 3 غرف وصالة في برج صحارى 4 بالنهدة بموقع استراتيجي على حدود دبي.',
    featuresEn: ['Prime Location', 'Covered Parking', 'Gym', 'High Speed Elevators'],
    featuresAr: ['موقع مميز', 'موقف مغطى', 'صالة لياقة', 'مصاعد سريعة'],
    addressEn: 'Al Nahda, Sharjah',
    addressAr: 'النهدة، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 23. Rent - ID 61: Maryam Island 1BHK Furnished
  {
    id: 61,
    propertyId: 'maryam61',
    titleEn: 'Fully Furnished 1BHK | Pool View | All Amenities included',
    titleAr: 'شقة مفروشة بالكامل غرفة وصالة | إطلالة مسبح | جميع الخدمات مشمولة',
    locationEn: 'Maryam Island, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '65,000 / year',
    numericPrice: 65000,
    sqft: '877',
    numericSqft: 877,
    beds: 1,
    baths: 1,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Elegantly furnished 1 bedroom apartment overlooking the pool at Maryam Island. Move-in ready.',
    descriptionAr: 'شقة مفروشة بالكامل بأثاث أنيق وعصري مع إطلالة على المسبح في جزيرة مريم.',
    featuresEn: ['Furnished', 'Pool View', 'Move-in Ready', 'Covered Parking'],
    featuresAr: ['مفروشة بالكامل', 'إطلالة مسبح', 'جاهزة للسكن', 'موقف مغطى'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 24. Rent - ID 62: Azure Beach Residence, Maryam Island
  {
    id: 62,
    propertyId: 'azure62',
    titleEn: '3BHK with balcony | Sea View | Parking Included | All Amenities Free',
    titleAr: 'شقة 3 غرف وصالة مع بلكونة | إطلالة بحرية | موقف مجاني | خدمات متكاملة',
    locationEn: 'Azure Beach Residence, Maryam Island, Sharjah, UAE',
    locationAr: 'مساكن شاطئ أزور، جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '130,000 / year',
    numericPrice: 130000,
    sqft: '1,650',
    numericSqft: 1650,
    beds: 3,
    baths: 4,
    image: '/hero.png',
    descriptionEn: 'Delightful 3 bedroom home in Azure Beach Residence with balcony sea views and beach proximity.',
    descriptionAr: 'شقة عائلية 3 غرف في مساكن شاطئ أزور بجزيرة مريم مع إطلالة بحرية وشرفة فسيحة.',
    featuresEn: ['Sea View', 'Balcony', 'Covered Parking', 'Beachfront'],
    featuresAr: ['إطلالة بحرية', 'شرفة', 'موقف مغطى', 'قريب من الشاطئ'],
    addressEn: 'Azure Beach, Maryam Island',
    addressAr: 'مساكن شاطئ أزور، جزيرة مريم',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 25. Rent - ID 63: Sahara Tower 6, Al Nahda
  {
    id: 63,
    propertyId: 'sahara63',
    titleEn: 'Furnished 2BHK Apartment + Maid room | On Dubai Border | Prime Location',
    titleAr: 'شقة مفروشة غرفتين وصالة + غرفة خادمة | على حدود دبي | موقع حيوي',
    locationEn: 'Sahara Tower 6, Al Nahda, Sharjah, UAE',
    locationAr: 'برج صحارى 6، النهدة، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '80,000 / year',
    numericPrice: 80000,
    sqft: '1,800',
    numericSqft: 1800,
    beds: 2,
    baths: 3,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Fully furnished 2-bedroom + maid room right on Dubai-Sharjah border in Sahara Tower 6.',
    descriptionAr: 'شقة مفروشة غرفتين وصالة وغرفة خادمة في برج صحارى 6 مباشرة على حدود دبي.',
    featuresEn: ['Furnished', 'Maid Room', 'Border Location', 'Parking'],
    featuresAr: ['مفروشة', 'غرفة خادمة', 'موقع حدودي', 'موقف سيارة'],
    addressEn: 'Al Nahda, Sharjah',
    addressAr: 'النهدة، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 26. Rent - ID 64: Rimal Residences, Maryam Island
  {
    id: 64,
    propertyId: 'rimal64',
    titleEn: 'Brand New 2 BR | Sea & Pool View | Parking Free',
    titleAr: 'شقة جديدة غرفتين وصالة | إطلالة بحر ومسبح | موقف مجاني',
    locationEn: 'Rimal Residences, Maryam Island, Sharjah, UAE',
    locationAr: 'مساكن رمال، جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '85,000 / year',
    numericPrice: 85000,
    sqft: '1,181',
    numericSqft: 1181,
    beds: 2,
    baths: 2,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Brand new 2-bedroom with picturesque sea and pool view in Maryam Gate Residences.',
    descriptionAr: 'شقة غرفتين وصالة جديدة بإطلالة خلابة على البحر والمسبح في جزيرة مريم.',
    featuresEn: ['Sea View', 'Pool View', 'Brand New', 'Free Parking'],
    featuresAr: ['إطلالة بحر', 'إطلالة مسبح', 'جديدة', 'موقف مجاني'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 27. Rent - ID 65: Sahab Residences
  {
    id: 65,
    propertyId: 'sahab65',
    titleEn: '2bhk | Sea & Pool View | Balcony | Parking',
    titleAr: 'شقة غرفتين وصالة | إطلالة بحر ومسبح | شرفة وموقف',
    locationEn: 'Sahab Residences, Maryam Gate Residences, Maryam Island, Sharjah, UAE',
    locationAr: 'مساكن سحاب، جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '100,000 / year',
    numericPrice: 100000,
    sqft: '1,287',
    numericSqft: 1287,
    beds: 2,
    baths: 3,
    image: '/hero.png',
    descriptionEn: 'Premium 2BHK in Sahab Residences with high finishing, great light, and dual scenic views.',
    descriptionAr: 'شقة غرفتين وصالة فاخرة في مساكن سحاب مع إطلالات بحرية ومسبح وتشطيبات عصرية.',
    featuresEn: ['Balcony', 'Sea View', 'Covered Parking', 'Gym'],
    featuresAr: ['شرفة', 'إطلالة بحرية', 'موقف مغطى', 'جيم'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 28. Rent - ID 66: Bin Ham Tower C
  {
    id: 66,
    propertyId: 'binham66',
    titleEn: 'Luxurious 3 BHK Sea View Penthouse | Free Parking | All Amenities',
    titleAr: 'بنتهاوس فاخر 3 غرف بإطلالة بحرية | موقف مجاني | كافة المرافق',
    locationEn: 'Bin Ham Tower C, Bin Ham Towers, Sharjah, UAE',
    locationAr: 'برج بن حم C، الشارقة',
    typeEn: 'Villa',
    typeAr: 'بنتهاوس للإيجار',
    category: 'residential',
    forRent: true,
    price: '90,000 / year',
    numericPrice: 90000,
    sqft: '3,030',
    numericSqft: 3030,
    beds: 3,
    baths: 4,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'Over 3,000 sqft penthouse in Bin Ham Tower with full sea view, massive halls, and covered parking.',
    descriptionAr: 'بنتهاوس فخم بمساحة تزيد عن 3000 قدم مربع مع إطلالة بحرية كاملة وصالات واسعة.',
    featuresEn: ['Penthouse', 'Sea View', 'Free Parking', 'Spacious Halls'],
    featuresAr: ['بنتهاوس', 'إطلالة بحر', 'موقف مجاني', 'صالات واسعة'],
    addressEn: 'Bin Ham Towers, Sharjah',
    addressAr: 'أبراج بن حم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 29. Rent - ID 67: W Tower
  {
    id: 67,
    propertyId: 'wtower67',
    titleEn: 'Luxury 3-Bedroom Apartment | Chiller & Parking Free | Sea View | Balcony | Full Amenities',
    titleAr: 'شقة فاخرة 3 غرف | تكييف وموقف مجاناً | إطلالة بحرية | بلكونة | خدمات متكاملة',
    locationEn: 'W Tower, Al Khan / Al Majaz, Sharjah, UAE',
    locationAr: 'برج W، الخان / المجاز، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '100,000 / year',
    numericPrice: 100000,
    sqft: '2,050',
    numericSqft: 2050,
    beds: 3,
    baths: 4,
    image: '/Golden Hour Waterfront Promenade.png',
    descriptionEn: 'Luxury 3BHK in W Tower offering chiller free cooling, sea view, balcony, and free covered parking.',
    descriptionAr: 'شقة 3 غرف في برج دبليو تاور مع تكييف مجاني وإطلالة بحرية وشرفة فسيحة.',
    featuresEn: ['Chiller Free', 'Sea View', 'Covered Parking', 'Balcony'],
    featuresAr: ['تكييف مجاني', 'إطلالة بحرية', 'موقف مغطى', 'شرفة'],
    addressEn: 'W Tower, Sharjah',
    addressAr: 'برج W، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 30. Rent - ID 68: Golden Sands Tower
  {
    id: 68,
    propertyId: 'goldensands68',
    titleEn: 'Modern 2-Bedroom Apartment | Free Parking | Balcony & Wardrobes | Full Amenities Included',
    titleAr: 'شقة حديثة غرفتين وصالة | موقف مجاني | بلكونة وخزائن حائط | مرافق كاملة',
    locationEn: 'Golden Sands Tower, Al Nahda, Sharjah, UAE',
    locationAr: 'برج الرمال الذهبية، النهدة، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '53,000 / year',
    numericPrice: 53000,
    sqft: '1,450',
    numericSqft: 1450,
    beds: 2,
    baths: 2,
    image: '/hero.png',
    descriptionEn: 'Affordable modern 2-bedroom rental in Golden Sands Tower, Al Nahda. High building maintenance, pool, gym, and swift Dubai commute.',
    descriptionAr: 'شقة غرفتين وصالة مريحة وحديثة في برج الرمال الذهبية بالنهدة بسعر مميز وخدمات متكاملة.',
    featuresEn: ['Free Parking', 'Balcony', 'Built-in Wardrobes', 'Gym & Pool'],
    featuresAr: ['موقف مجاني', 'شرفة', 'خزائن مدمجة', 'جيم ومسبح'],
    addressEn: 'Al Nahda, Sharjah',
    addressAr: 'النهدة، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  },

  // 31. Rent - ID 73: Maryam Island Luxury 3BHK
  {
    id: 73,
    propertyId: 'maryam73',
    titleEn: 'Luxury 3BHK Apartment | Sea View | Prime Location | 2 Parking Spaces',
    titleAr: 'شقة فاخرة 3 غرف وصالة | إطلالة بحرية | موقع مميز | موقفين سيارة',
    locationEn: 'Maryam Island, Sharjah, UAE',
    locationAr: 'جزيرة مريم، الشارقة',
    typeEn: 'Apartment',
    typeAr: 'شقة',
    category: 'residential',
    forRent: true,
    price: '130,000 / year',
    numericPrice: 130000,
    sqft: '1,550',
    numericSqft: 1550,
    beds: 3,
    baths: 3,
    image: '/Golden-Hour Waterfront Skyline.png',
    descriptionEn: 'High-end 3 bedroom waterfront residence at Maryam Island with sea view, 2 dedicated parking bays, and premium fittings.',
    descriptionAr: 'شقة فخمة 3 غرف وصالة على الواجهة المائية بجزيرة مريم مع إطلالة بحرية وموقفين للسيارات.',
    featuresEn: ['2 Parking Spaces', 'Sea View', 'Waterfront', 'Swimming Pool'],
    featuresAr: ['موقفين سيارة', 'إطلالة بحرية', 'واجهة مائية', 'مسبح'],
    addressEn: 'Maryam Island, Sharjah',
    addressAr: 'جزيرة مريم، الشارقة',
    city: 'Sharjah',
    state: 'Sharjah',
    zipCode: '0000'
  }
];

export const getPropertyById = (id: number | string): Property | undefined => {
  const numId = Number(id);
  return propertiesData.find((p) => p.id === numId);
};
