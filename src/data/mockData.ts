import { Project, Product, Service, Article } from '../types';

export const COMPANY_INFO = {
  nameFa: 'طیوران صنعت پویا',
  nameEn: 'TOYOORAN',
  tagline: 'مشاور، طراح و مجری توسعه و بهره‌برداری پروژه‌های صنعتی',
  subTagline: 'تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA | تولیدکننده تخصصی جت هیتر و ماشین‌آلات خوراک',
  experienceYears: '۵۰+',
  completedProjects: '۲۰۰+',
  activeProvinces: 'ملی و بین‌المللی',
  customerSatisfaction: '۹۸٪',
  phone: '۰۵۱-۳۶۶۶۵۶۰۰',
  directSalesPhone: '۰۹۱۵۱۱۲۶۲۵۸',
  technicalSupportPhone: '۰۹۱۱۵۱۱۶۲۵۸',
  email: 'info@toyooran.com',
  website: 'www.toyooran.com',
  address: 'مشهد، میدان مادر، مجتمع تجاری ادیب، طبقه ۳، واحد ۴۰۶',
  rdAddress: 'گرگان، دانشگاه منابع طبیعی گلستان، ساختمان دفتر تحقیق و توسعه، همکاری‌های علمی و بین‌الملل',
  factoryAddress: 'مشهد، بلوار میثاق، کارخانجات صنعتی طیوران صنعت پویا',
  workingHours: 'شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰ | پنج‌شنبه‌ها ۸:۰۰ الی ۱۳:۰۰',
  fdaLicense: 'تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA',
  socialLinks: {
    instagram: 'https://instagram.com/toyooran',
    telegram: 'https://t.me/toyooran',
    whatsapp: 'https://wa.me/989151126258',
    linkedin: 'https://linkedin.com/company/toyooran',
    bale: 'https://ble.ir/toyooran',
    eitaa: 'https://eitaa.com/toyooran',
    rubika: 'https://rubika.ir/toyooran',
  },
  locations: [
    {
      id: 'hq-01',
      title: 'دفتر مرکزی مشهد',
      type: 'headquarter',
      address: 'مشهد، میدان مادر، مجتمع تجاری ادیب، طبقه ۳، واحد ۴۰۶',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.225574526543!2d59.50566!3d36.3263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE5JzM0LjciTiA1OcKwMzAnMjAuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s'
    },
    {
      id: 'fact-01',
      title: 'کارخانه صنعتی و خط تولید',
      type: 'factory',
      address: 'مشهد، بلوار میثاق، کارخانجات صنعتی طیوران صنعت پویا',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.125574526543!2d59.45566!3d36.3363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE5JzM0LjciTiA1OcKwMzAnMjAuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s'
    },
    {
      id: 'rd-01',
      title: 'دفتر تحقیق و توسعه (R&D)',
      type: 'rd',
      address: 'گرگان، دانشگاه منابع طبیعی گلستان',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.868770258107!2d54.436329!3d36.840243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzI0LjkiTiA1NMKwMjYnMTAuOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s'
    },
    {
      id: 'branch-tehran',
      title: 'دفتر نمایندگی تهران',
      type: 'branch',
      address: 'تهران، میدان ونک، خیابان ولیعصر، برج نگار، طبقه ۱۰',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.924843187216!2d51.40871141525946!3d35.75266738017772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e068b55555555%3A0x8e5e6b0f98cd3a21!2sVanak%20Square!5e0!3m2!1sen!2sus!4v1689234567890!5m2!1sen!2sus'
    }
  ]
};

export const CATEGORIES_DATA = [
  {
    id: 'machinery',
    title: 'ماشین‌آلات خط تولید خوراک و مکمل',
    titleEn: 'Feed Mill Machinery',
    description: 'پرس پلت، اکسترودر آبزیان، فلیکر اسب، میکرودایزینگ، آسیاب چکشی، میکسر، کاندیشنر، کرامبلر، کولر درایر و خشک‌کن تونلی',
    icon: 'Factory',
    productCount: 15,
    badge: 'طراحی و ساخت سنگین',
    image: '/images/machine-1.jpg',
  },
  {
    id: 'feeding',
    title: 'تجهیزات سیستم دانخوری',
    titleEn: 'Feeding Systems',
    description: 'تنها تولیدکننده بشقاب پروانه‌ای Butterfly Concepts آمریکا با تاییدیه FDA، بشقاب پویا، پارس، کناوی، خطوط انتقال و سیلو',
    icon: 'Wheat',
    productCount: 18,
    badge: 'تاییدیه FDA آمریکا',
    image: '/images/poultry-1.jpg',
  },
  {
    id: 'drinking',
    title: 'تجهیزات سیستم آبخوری (TSPK)',
    titleEn: 'Drinking Systems (TSPK)',
    description: 'سیستم آبخوری نیپل تمام استیل کارنو، فشارشکن، پمپ مدیکاتور دوزاترون کارنوتک، کاپ دوپایه Sدار و اتصالات تخصصی',
    icon: 'Droplets',
    productCount: 14,
    badge: 'از ۱ روزگی تا پایان دوره',
    image: '/images/equipment-1.jpg',
  },
  {
    id: 'ventilation',
    title: 'تجهیزات تهویه و گرمایش',
    titleEn: 'Ventilation & Heating',
    description: 'تولید تخصصی جت هیتر ۱۰۰ و ۵۰ (گازی، گازوئیلی، دوگانه)، دریچه اینلت، هواکش ۱۴۰، ۱۰۰ و ۵ پره، هیتر کابینی، پد سلولزی و مه‌پاش ۳ میکرون',
    icon: 'Fan',
    productCount: 20,
    badge: 'تولید تخصصی جت هیتر',
    image: '/images/machine-1.jpg',
  },
  {
    id: 'structure',
    title: 'ساخت و تجهیز سوله و کارخانجات',
    titleEn: 'Structures & Turnkey Plants',
    description: 'ساخت و تجهیز صفر تا صد سوله، کارخانجات و سالن‌های مرغداری با سازه‌های مدرن و سبک بهداشتی و صنعتی',
    icon: 'Warehouse',
    productCount: 8,
    badge: 'سوله بهداشتی و صنعتی',
    image: '/images/poultry-1.jpg',
  },
  {
    id: 'feed_pharma',
    title: 'تولید خوراک، مکمل، روغن و دارو',
    titleEn: 'Feed, Pharma & Oils',
    description: 'جایگزین‌های ذرت و جو، کنسانتره Mac و تخم‌گذار (۲.۵٪ و ۵٪)، دان آماده مک، پریمیکس دامی و اسب، روغن خام سویا/آفتابگردان، اسید چرب و پودر گوشت',
    icon: 'Pill',
    productCount: 16,
    badge: 'فرمولاسیون اختصاصی',
    image: '/images/equipment-1.jpg',
  },
];

export const PRODUCTS: Product[] = [
  // --- 1. Machinery (ماشین‌آلات خط تولید خوراک و مکمل) ---
  {
    id: 'mach-pellet-press',
    code: 'TY-PELLET-PRESS',
    name: 'دستگاه پرس پلت صنعتی (Pellet Press)',
    nameEn: 'Industrial Pellet Press Machine',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'دستگاه پلت پرس صنعتی جهت تولید تخصصی انواع خوراک پلت شده دام، طیور و آبزیان با بالاترین تراکم و کمترین خاکه.',
    fullDescription: 'دستگاه پلت پرس طیوران صنعت پویا با سیستم انتقال قدرت گیربکسی هلیکال دوبل و کاندیشنر دوجداره استیل، خوراک همگن و فشرده با ماندگاری بالا تولید می‌کند. این دستگاه مجهز به سیستم فیدر متغیر و حفاظت مغناطیسی ورودی است.',
    image: '/images/machine-1.jpg',
    advantages: [
      'تولید پلت استاندارد با شاخص دوام PDI بالای ۹۶ درصد',
      'کاندیشنر بخار دوجداره تمام استنلس استیل جهت ژلاتیناسیون کامل نشاسته',
      'سیستم روغن‌کاری اتوماتیک بلبرینگ‌ها در حین کارکرد مداوم',
      'تعویض سریع دای و رولر با مکانیزم استاندارد'
    ],
    applications: [
      'کارخانجات صنعتی تولید خوراک دام، طیور و آبزیان',
      'واحدهای بزرگ پرورشی دارای خط اختصاصی تولید دان پلت'
    ],
    specs: [
      { label: 'ظرفیت تولید', value: '۲ الی ۲۰ تن در ساعت (بسته به قطر دای)' },
      { label: 'توان الکتروموتور', value: '۵۵ الی ۱۳۲ کیلووات' },
      { label: 'نوع کاندیشنر', value: 'دوجداره استیل با ورودی تزریق بخار و مایعات' },
      { label: 'کاربرد اصلی', value: 'تولید پلت خوراک دام و طیور' }
    ],
    models: ['TY-PP-350 (55kW)', 'TY-PP-420 (110kW)', 'TY-PP-508 (132kW)'],
    catalogPdfName: 'Datasheet_PelletPress_Toyooran.pdf',
    relatedProjectIds: ['proj-feed-mill-damoon'],
    relatedArticleIds: ['art-pellet-quality-opt']
  },
  {
    id: 'mach-microdosing',
    code: 'TY-MICRODOSING',
    name: 'دستگاه میکرودایزینگ (Microdosing / Microdysing)',
    nameEn: 'Precision Microdosing System',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'سیستم اندازه‌گیری و دوزینگ فوق‌دقیق میکروارگانیسم‌ها، ویتامین‌ها، داروها و مواد افزودنی در خوراک دام، طیور و آبزیان.',
    fullDescription: 'دستگاه میکرودایزینگ طیوران صنعت پویا امکان اندازه‌گیری و تزریق خودکار انواع ریزمغذی‌ها، ویتامین‌ها، اسیدهای آمینه، پروبیوتیک‌ها و افزودنی‌های حساس را با دقت گرمی و بدون خطا در خطوط تولید خوراک فراهم می‌آورد.',
    image: '/images/silo-1.jpg',
    advantages: [
      'توزین دیجیتال فوق‌دقیق چندکاناله برای مواد بسیار ریز و دارویی',
      'جلوگیری از خطای انسانی و تضمین یکنواختی کامل فرمولاسیون',
      'محفظه تمام استیل ۳۰۴ ضد سایش و ضد چسبندگی',
      'اتصال مستقیم به تابلوی PLC و سامانه فرمول‌نویسی مرکزی'
    ],
    applications: [
      'خطوط تولید مکمل، کنسانتره و پری‌میکس‌های دارویی',
      'کارخانجات خوراک مدرن با استانداردهای دارویی'
    ],
    specs: [
      { label: 'دقت اندازه‌گیری', value: 'کمتر از ۱ الی ۵ گرم در هر بچ' },
      { label: 'تعداد هاپرهای دوزینگ', value: '۴ الی ۱۲ بین مستقل استیل' },
      { label: 'سیستم انتقال', value: 'میکرواوگرهای استیل کنترل شونده با اینورتر' }
    ],
    models: ['TY-MDS-6H (۶ هاپره)', 'TY-MDS-10H (۱۰ هاپره)'],
    catalogPdfName: 'Datasheet_Microdosing_Toyooran.pdf'
  },
  {
    id: 'mach-extruder-aquatic',
    code: 'TY-EXTRUDER',
    name: 'دستگاه اکسترودر صنعتی (Extruder)',
    nameEn: 'Heavy Industrial Aqua Feed Extruder',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'تولید خوراک تخصصی اکسترود و شناور/فرورونده آبزیان، ماهی قزل‌آلا، کپور و میگو با قابلیت هضم فوق‌العاده.',
    fullDescription: 'دستگاه اکسترودر تک و دوشفت طیوران صنعت پویا با فرآیند پخت تحت فشار و دمای بالا (HTST)، خوراک شناور و نیمه‌شناور آبزیان را با ضریب پایداری در آب بالا و چگالی کنترل‌شده تولید می‌کند.',
    image: '/images/poultry-1.jpg',
    advantages: [
      'پخت کامل و افزایش قابلیت هضم پروتئین‌ها و نشاسته خوراک ماهی',
      'کنترل شناوری (شناور، نیمه‌شناور، فرورونده) با سیستم خلاء و برش',
      'پایداری بالا در آب بدون متلاشی شدن تا ۲۴ ساعت',
      'طول عمر بالای ماردون‌ها و سیلندرهای آلیاژی سخت‌کاری شده'
    ],
    applications: ['کارخانجات تولید خوراک ماهی و میگو', 'تولید غذای حیوانات خانگی (Pet Food)'],
    specs: [
      { label: 'ظرفیت تولید', value: '۱ الی ۸ تن در ساعت' },
      { label: 'قطر پلت اکسترود', value: '۱.۰ تا ۱۰.۰ میلی‌متر' },
      { label: 'کاربرد هدف', value: 'تولید تخصصی خوراک آبزیان' }
    ],
    models: ['TY-EXT-1000', 'TY-EXT-3000', 'TY-EXT-5000'],
    catalogPdfName: 'Datasheet_Extruder_Toyooran.pdf'
  },
  {
    id: 'mach-flaker-horse',
    code: 'TY-FLAKER',
    name: 'ماشین فلیکر صنعتی (Flaker) - تولید خوراک اسب',
    nameEn: 'Industrial Grain Flaker Machine',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'ماشین فلیکر تخصصی جهت پرک‌کردن و فرآوری دانه‌های جو و ذرت با بخار جهت تولید خوراک اسب و نشخوارکنندگان.',
    fullDescription: 'دستگاه فلیکر با بهره‌گیری از رولرهای سنگین ضدسایش و شکاف رولر هیدرولیکی قابل تنظیم، غلات بخاردیده را به پرک‌های یکنواخت و ترد تبدیل می‌کند که هضم نشاسته را در دستگاه گوارش حساس اسب به شدت تسهیل می‌نماید.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'افزایش چشمگیر قابلیت هضم آنزیمی نشاسته در روده باریک اسب',
      'رولرهای کست آیرون با سختی بالا و شیارهای مهندسی‌شده',
      'مکانیزم ایمنی بازشدن فنری و هیدرولیکی در برابر ورود اجسام سخت',
      'کاهش نفخ و خطرات کولیک در اسب‌های مسابقه و پرورشی'
    ],
    applications: ['باشگاه‌ها و کارخانجات تولید خوراک اسب', 'واحدهای پرورش گاو شیری پربازده'],
    specs: [
      { label: 'ظرفیت فرآوری', value: '۲ الی ۱۰ تن در ساعت' },
      { label: 'قطر رولرها', value: '۵۰۰ الی ۸۰۰ میلی‌متر' },
      { label: 'کاربرد تخصصی', value: 'تولید خوراک اسب و پرک غلات' }
    ],
    catalogPdfName: 'Datasheet_Flaker_Toyooran.pdf'
  },
  {
    id: 'mach-hammer-mill',
    code: 'TY-HAMMER-MILL',
    name: 'آسیاب چکشی صنعتی (Hammer Mill)',
    nameEn: 'Heavy Industrial Hammer Mill',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'خرد کردن و پودر نمودن یکنواخت مواد خوراک دام، طیور و آبزیان با محفظه قطره‌ای و حداقل غبار.',
    fullDescription: 'آسیاب چکشی طیوران صنعت پویا با طراحی محفظه قطره‌ای Tear-drop و چکش‌های پوشش‌دهی شده با تنگستن کارباید، راندمان خردایش ذرت، سویا، گندم و کنجاله‌ها را با چرخش دوطرفه روتور به حداکثر می‌رساند.',
    image: '/images/silo-1.jpg',
    advantages: [
      'خردایش یکنواخت مواد خوراک دام، طیور و آبزیان',
      'تعویض فوق‌سریع توری سرند در کمتر از ۳ دقیقه',
      'چکش‌های آبکاری شده با تنگستن کارباید ضد سایش',
      'سیستم آسپیراسیون و فیلتراسیون هوای خروجی ضد غبار'
    ],
    applications: ['کارخانجات خوراک دام و طیور', 'سیلوهای دان مرغداری‌های بزرگ'],
    specs: [
      { label: 'ظرفیت خردایش', value: '۵ الی ۲۵ تن در ساعت' },
      { label: 'توان موتور', value: '۴۵ الی ۱۱۰ کیلووات' },
      { label: 'تعداد چکش‌ها', value: '۴۸ الی ۹۶ عدد چکش دولبه سخت‌کاری شده' }
    ],
    catalogPdfName: 'Datasheet_HammerMill_Toyooran.pdf'
  },
  {
    id: 'mach-mixer',
    code: 'TY-MIXER',
    name: 'میکسر صنعتی دوشفت و آسیاب میکسر (Mixer)',
    nameEn: 'Twin-Shaft Paddle Mixer',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'مخلوط و همگن‌سازی مواد جامد خشک با منطقه بی‌وزنی و ضریب پراکندگی CV زیر ۵ درصد.',
    fullDescription: 'میکسر صنعتی طیوران صنعت پویا با طراحی پدلی دوشفت، اختلاط سریع و یکنواخت غلات خردشده، ویتامین‌ها، مکمل‌ها و پودرها را در زمان ۶۰ تا ۹۰ ثانیه با امکان تزریق مایعات (روغن و ملاس) فراهم می‌سازد.',
    image: '/images/machine-1.jpg',
    advantages: [
      'مخلوط و همگن‌سازی کامل مواد جامد خشک در کمتر از ۹۰ ثانیه',
      'ضریب پراکندگی (CV) کمتر از ۵٪ مطابق استانداردهای دارویی',
      'دریچه تخلیه سراسری زیرین (Bomb-door) بدون هیچ‌گونه ماند مواد',
      'امکان نصب نازل‌های تزریق مایعات و روغن'
    ],
    applications: ['میکس خوراک دقیق طیور، دام و آبزیان', 'تولید پری‌میکس و مکمل'],
    specs: [
      { label: 'ظرفیت محفظه', value: '۵۰۰ الی ۴۰۰۰ لیتر در هر بچ' },
      { label: 'زمان میکس استاندارد', value: '۶۰ تا ۹۰ ثانیه' },
      { label: 'مکانیزم تخلیه', value: 'پنوماتیک تمام‌عرض Bomb-Door' }
    ],
    catalogPdfName: 'Datasheet_Mixer_Toyooran.pdf'
  },
  {
    id: 'mach-air-conditioner',
    code: 'TY-CONDITIONER',
    name: 'دستگاه کاندیشنر پخت خوراک (Air/Steam Conditioner)',
    nameEn: 'Industrial Feed Steam Conditioner',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'ژلاتینه‌کردن و همگن‌سازی مواد با بخار و سایر افزودنی‌های مجاز قبل از مرحله پلت‌کردن.',
    fullDescription: 'کاندیشنر دوجداره تمام استیل طیوران صنعت پویا با زاویه پدل‌های قابل تنظیم، زمان ماند مواد و دمای بخار را تنظیم کرده تا ژلاتیناسیون نشاسته و پخت حرارتی خوراک پیش از ورود به دای پلت به طور کامل انجام گیرد.',
    image: '/images/poultry-1.jpg',
    advantages: [
      'ژلاتینه کردن و همگن‌سازی مواد با بخار و افزودنی‌های مجاز',
      'جنس بدنه و شفت تماماً از استنلس استیل ۳۰۴ ضد اسید',
      'حذف پاتوژن‌ها و باکتری‌های مضر (سالمونلا) با پخت حرارتی',
      'کاهش استهلاک دای و رولر دستگاه پرس پلت'
    ],
    applications: ['نصب بر روی دستگاه‌های پرس پلت و اکسترودر'],
    specs: [
      { label: 'طول کاندیشنر', value: '۲ الی ۳.۵ متر تک و دوطبقه' },
      { label: 'دمای کاری', value: '۷۰ الی ۹۰ درجه سانتی‌گراد' },
      { label: 'متریال', value: 'استیل نگیر ۳۰۴ ضد سایش' }
    ],
    catalogPdfName: 'Datasheet_Conditioner_Toyooran.pdf'
  },
  {
    id: 'mach-crumbler',
    code: 'TY-CRUMBLER',
    name: 'دستگاه کرامبلر پلت (Crumpler / Crumbler)',
    nameEn: 'Heavy Duty Pellet Crumbler',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'خرد کردن پلت‌ها به ذرات کوچک‌تر و یکنواخت‌تر (کرامبل) مناسب تغذیه جوجه در سنین ابتدایی.',
    fullDescription: 'دستگاه کرامبلر مجهز به رولرهای شیاردار ضدسایش دیفرانسیلی است که پلت‌های خنک‌شده را بدون ایجاد پودر به گرانول‌ها و دانه‌های ریز کرامبل استاندارد برای سنین آغازین جوجه و طیور تبدیل می‌نماید.',
    image: '/images/tech-1.jpg',
    advantages: [
      'خرد کردن پلت‌ها به ذرات کوچک‌تر و کاملاً یکنواخت',
      'حداقل تولید خاکه دان به دلیل حرکت دیفرانسیلی رولرها',
      'دریچه بای‌پاس اتوماتیک پنوماتیک در زمان عدم نیاز به کرامبل',
      'تنظیم دقیق فاصله بین رولرها با مکانیزم اهرمی سریع'
    ],
    applications: ['تولید خوراک پیش‌دان و کرامبل جوجه گوشتی و بوقلمون'],
    specs: [
      { label: 'ظرفیت کرامبل', value: '۵ الی ۱۵ تن در ساعت' },
      { label: 'سایز ذرات خروجی', value: '۱.۵ الی ۳.۵ میلی‌متر' },
      { label: 'سیستم بای‌پس', value: 'مجهز به دمپر بای‌پس پنوماتیک' }
    ],
    catalogPdfName: 'Datasheet_Crumbler_Toyooran.pdf'
  },
  {
    id: 'mach-pellet-cooling',
    code: 'TY-COOLER-DRYER',
    name: 'دستگاه کولر درایر و خنک‌سازی پلت (Pellet Cooling Dryer)',
    nameEn: 'Counterflow Pellet Cooler & Dryer',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'خنک‌سازی و رطوبت‌گیری تدریجی پلت بلافاصله پس از خروج از پرس پلت جهت تثبیت سختی.',
    fullDescription: 'دستگاه کولر پلت کانترفلو با جریان هوای معکوس، دمای پلت داغ را به حداکثر ۳ الی ۵ درجه بالاتر از دمای محیط رسانده و رطوبت اضافی را بدون شوک حرارتی و شکستگی تخلیه می‌نماید.',
    image: '/images/machine-1.jpg',
    advantages: [
      'خنک‌سازی و تثبیت پلت جهت جلوگیری از کپک‌زدگی در انبار',
      'تخلیه یکنواخت با سنسورهای خازنی تشخیص سطح پلت',
      'سیکلون و فن قوی جداسازی گردوغبار و بازگشت به چرخه'
    ],
    applications: ['خطوط پلت خوراک دام، طیور، آبزیان و کود پلت'],
    specs: [
      { label: 'ظرفیت خنک‌کاری', value: '۳ الی ۲۰ تن در ساعت' },
      { label: 'دمای خروجی پلت', value: '+۳ الی +۵ درجه دمای محیط' }
    ],
    catalogPdfName: 'Datasheet_CoolerDryer_Toyooran.pdf'
  },
  {
    id: 'mach-tunnel-dryer',
    code: 'TY-TUNNEL-DRYER',
    name: 'دستگاه خشک‌کن تونلی (Tunnel Dryer)',
    nameEn: 'Continuous Multi-Layer Tunnel Dryer',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'خشک‌کردن دقیق، ملایم و یکنواخت غذای حیوانات خانگی (Pet Food) و خوراک شناور ماهی.',
    fullDescription: 'خشک‌کن پیوسته چندطبقه تونلی با سیستم گردش هوای گرم و کنترل دیجیتال رطوبت، رطوبت پلت‌های اکسترود شده آبزیان و غذای سگ و گربه را تا سطح استاندارد ۸ الی ۱۰ درصد کاهش می‌دهد.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'خشک کردن دقیق و ملایم غذای حیوانات خانگی و خوراک ماهی',
      'توری‌های نقاله تمام استیل ضد زنگ',
      'بهینه‌سازی مصرف حرارت با سیستم بازیافت هوای گرم',
      'حفظ عطر، طعم و ارزش تغذیه‌ای پروتئین‌ها'
    ],
    applications: ['کارخانجات خوراک آبزیان و کارخانجات غذای حیوانات خانگی'],
    specs: [
      { label: 'ظرفیت خشک‌کن', value: '۱ الی ۶ تن در ساعت' },
      { label: 'منبع حرارتی', value: 'بخار / گازسوز / مبدل حرارتی غیرمستقیم' }
    ],
    catalogPdfName: 'Datasheet_TunnelDryer_Toyooran.pdf'
  },
  {
    id: 'mach-packaging-system',
    code: 'TY-PACK-ELEV',
    name: 'سیستم بسته‌بندی اتوماتیک، الواتور و خط انتقال دان',
    nameEn: 'Automatic Packaging System, Elevator & Silo',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: true,
    shortDescription: 'کیسه‌پرکن اتوماتیک، الواتورهای زنجیری و کاسه‌ای، سیلوهای فلزی ذخیره و خطوط انتقال پیوسته.',
    fullDescription: 'مجموعه تجهیزات جابجایی و بسته‌بندی شامل الواتورهای کاسه‌ای ضدسایش، نوار نقاله، سیلوهای ذخیره گالوانیزه و دستگاه کیسه‌پرکن توزین‌دار با دوخت اتوماتیک سرکیسه.',
    image: '/images/machine-1.jpg',
    advantages: [
      'توزین و بسته‌بندی دقیق کیسه‌های ۱۰ الی ۵۰ کیلوگرمی با سرعت بالا',
      'الواتورهای کاسه‌ای مقاوم با تسمه‌های ضدسایش و ضدچربی',
      'سیلوهای ذخیره دانه و پلت با پوشش گالوانیزه مقاوم به خوردگی'
    ],
    applications: ['پایان خطوط تولید خوراک دام، طیور و آبزیان'],
    specs: [
      { label: 'سرعت کیسه‌گیری', value: '۲۰۰ الی ۶۰۰ کیسه در ساعت' },
      { label: 'دقت توزین', value: '±۲۰ گرم در هر کیسه' }
    ],
    catalogPdfName: 'Datasheet_PackagingElevator_Toyooran.pdf'
  },

  // --- 2. Feeding Systems (تجهیزات سیستم دانخوری) ---
  {
    id: 'feed-butterfly-pan-fda',
    code: 'TY-BUTTERFLY-FDA',
    name: 'بشقاب پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA',
    nameEn: 'Butterfly Concepts Feeder Pan (FDA Approved)',
    category: 'feeding',
    categoryTitle: 'تجهیزات سیستم دانخوری',
    shortDescription: 'تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA جهت تغذیه از ۱ روزگی تا پایان دوره.',
    fullDescription: 'شرکت طیوران صنعت پویا تنها تولیدکننده انحصاری بشقاب‌های پروانه‌ای تحت لیسانس شرکت Butterfly Concepts آمریکا دارای تاییدیه رسمی FDA است. این بشقاب با طراحی ویژه پروانه‌ای، پرنده را از سن یک‌روزگی تا انتهای دوره پرورش بدون نیاز به سینی دان اضافی و بدون کمترین اتلاف تغذیه می‌نماید.',
    image: '/images/poultry-1.jpg',
    advantages: [
      'تنها بشقاب دانخوری دارای تاییدیه معتبر FDA در ایران',
      'تولید انحصاری تحت لیسانس Butterfly Concepts آمریکا',
      'قابلیت تغذیه جوجه از روز اول تا پایان دوره بدون سینی دستی',
      'کاهش هدررفت دان تا ۱۵٪ به دلیل لبه برگشتی پروانه‌ای ضدپاشش',
      'پلیمر بهداشتی فودگرید مقاوم به ضربه، شوینده‌ها و اشعه UV',
      'شستشو و ضدعفونی سریع با مکانیزم بازشوندگی لولایی ۳۶۰ درجه'
    ],
    applications: [
      'سالن‌های مرغ گوشتی مدرن و مزارع پرورش پولت',
      'مزارع مرغ مادر و بوقلمون'
    ],
    specs: [
      { label: 'مجوز و لیسانس', value: 'تحت لیسانس Butterfly Concepts آمریکا با تاییدیه رسمی FDA' },
      { label: 'رده سنی مصرف', value: 'از ۱ روزگی تا پایان دوره پرورش' },
      { label: 'ظرفیت هر بشقاب', value: '۵۰ الی ۶۵ قطعه پرنده' },
      { label: 'جنس متریال', value: 'پلیمر فودگرید FDA Approved ضد سایش و ضربه' }
    ],
    models: ['بشقاب پروانه‌ای Butterfly Concepts اورجینال', 'بشقاب پویا', 'بشقاب پارس', 'بشقاب کناوی (Konavi)'],
    catalogPdfName: 'Datasheet_ButterflyFeeder_FDA_Toyooran.pdf',
    relatedProjectIds: ['proj-broiler-novin-120k', 'proj-breeder-pardis-45k'],
    relatedArticleIds: ['art-feeder-efficiency'],
    faqs: [
      {
        q: 'آیا برای جوجه یک‌روزه نیاز به سینی دستی یا کاغذ رول دانخوری است؟',
        a: 'خیر، به دلیل شیب ملایم بال‌های پروانه‌ای و ارتفاع بسیار مناسب لبه، جوجه‌ها از همان ساعت اول مستقیماً از بشقاب پروانه‌ای تغذیه کرده و نیاز به سینی دستی کاملاً برطرف می‌شود.'
      }
    ]
  },
  {
    id: 'feed-pans-pouya-pars-konavi',
    code: 'TY-PAN-POUYA-PARS',
    name: 'دانخوری بشقابی پویا، پارس و کناوی (Konavi)',
    nameEn: 'Pouya, Pars & Konavi Pan Feeder Series',
    category: 'feeding',
    categoryTitle: 'تجهیزات سیستم دانخوری',
    shortDescription: 'مجموعه بشقاب‌های دانخوری بشقابی (Plate Feeder) جهت تغذیه جوجه از ۱۰ روزگی تا پایان دوره پرورش.',
    fullDescription: 'مجموعه بشقاب‌های دانخوری بشقابی شامل مدل‌های پویا، پارس و کناوی (Konavi) با گریل‌های مقاوم و رگلاژ آسان، جریان دان یکنواخت در کل طول سالن را تضمین می‌نمایند.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'دانخوری بشقابی (Plate feeder) مناسب تغذیه جوجه از ۱۰ روزگی تا پایان دوره',
      'دانخوری پروانه‌ای (Butterfly feeder) مناسب از ۱ روزگی تا پایان دوره',
      'رگلاژ چندمرحله‌ای برای کنترل دقیق ارتفاع دان',
      'قابلیت نصب روی لوله‌های دانخوری استاندارد ۴۵ میلی‌متری'
    ],
    applications: ['سالن‌های پرورش مرغ گوشتی و پولت تخم‌گذار'],
    specs: [
      { label: 'مدل‌های موجود', value: 'بشقاب پویا، بشقاب پارس، بشقاب کناوی (Konavi)' },
      { label: 'قطر بشقاب', value: '۳۶۰ میلی‌متر' },
      { label: 'ظرفیت پذیرش', value: '۵۵ قطعه پرنده' }
    ],
    catalogPdfName: 'Datasheet_PanSeries_Toyooran.pdf'
  },
  {
    id: 'feed-accessories-lines',
    code: 'TY-FEED-SYSTEM-PARTS',
    name: 'خط کامل دانخوری، سیلو، هاپر، وینچ و لوازم جانبی',
    nameEn: 'Complete Feeding Line, Silo, Winch & Accessories',
    category: 'feeding',
    categoryTitle: 'تجهیزات سیستم دانخوری',
    shortDescription: 'لوله دانخوری، وینچ دانخوری، وینچ انسف، قرقره انسف، فنر، رابط لوله، تابلو فرمان، سنسور، هاپر، موتور گیربکس و بالابر مرغداری.',
    fullDescription: 'تأمین کامل تمامی قطعات خطوط دانخوری شامل: لوله دانخوری، وینچ دانخوری، وینچ انسف، قرقره انسف، فنر اوگر، رابط لوله دان، تابلو فرمان هوشمند، سنسورهای خازنی و نوری، هندل، موتور، گیربکس، هاپر، شافت، دسته، گلدانی، آسیاب میکسر و بالابر مرغداری، سیستم و خط انتقال دان از سیلو.',
    image: '/images/machine-1.jpg',
    advantages: [
      'پکیج ۱۰۰٪ جامع قطعات یدکی و اورجینال خط دانخوری',
      'موتور گیربکس موتوژن با گشتاور بالا و ترمز الکترومغناطیسی',
      'سنسورهای دقیق انتهای خط جهت اتوماسیون کامل پرکردن دانخوری‌ها',
      'فنر اوگر انعطاف‌پذیر از فولاد پرکربن ساخت اروپا'
    ],
    applications: ['تجهیز و نوسازی کامل خطوط دانخوری سالن‌های مرغداری'],
    specs: [
      { label: 'قطعات اصلی', value: 'وینچ انسف، قرقره انسف، هاپر، فنر اوگر، لوله دان، تابلو فرمان' },
      { label: 'قطر لوله دان', value: '۴۵ میلی‌متر گالوانیزه بدون درز' },
      { label: 'لوازم خط انتقال', value: 'سیلو فلزی، بوت، لوله ۹۰ و ۱۲۵، موتور گیربکس' }
    ],
    catalogPdfName: 'Datasheet_FeedingAccessories_Toyooran.pdf'
  },

  // --- 3. Drinking Systems TSPK (تجهیزات سیستم آبخوری) ---
  {
    id: 'drink-nipple-tspk-karno',
    code: 'TY-NIPPLE-TSPK-KARNO',
    name: 'سیستم آبخوری نیپل TSPK کارنو - نیپل‌های تمام استیل ۳۶۰ درجه',
    nameEn: 'TSPK Karno All-Stainless Steel Nipple Drinking System',
    category: 'drinking',
    categoryTitle: 'تجهیزات سیستم آبخوری (TSPK)',
    shortDescription: 'تأمین آب مصرفی بهداشتی طیور از ۱ روزگی تا پایان دوره با سوزن‌های تمام استیل ضدچکه، فشارشکن و کاپ دوپایه Sدار.',
    fullDescription: 'سیستم آبخوری نیپل TSPK کارنو با سوزن‌های تمام استیل و نیمه‌استیل ۳۶۰ درجه، دبی یکنواخت آب را از روز اول جوجه‌ریزی تا پایان دوره بدون چکه و با حفظ خشکی ۱۰۰ درصدی بستر تأمین می‌کند. مجهز به فشارشکن دقیق، کاپ‌های تک‌پایه، دوپایه و دوپایه Sدار.',
    image: '/images/poultry-1.jpg',
    advantages: [
      'تأمین آب مصرفی طیور از ۱ روزگی تا پایان دوره پرورش',
      'سوزن نیپل تمام استیل ضد زنگ و ضد رسوب',
      'کاپ دوپایه و دوپایه Sدار جهت حفظ کامل خشکی بستر',
      'فشارشکن سرخط با نشانگر شیشه‌ای تنظیم دقیق ارتفاع ستون آب',
      'آبخوری کله‌قندی جهت استفاده‌های کمکی اولیه'
    ],
    applications: ['سالن‌های مرغ گوشتی، تخم‌گذار، مادر و بوقلمون'],
    specs: [
      { label: 'نوع نیپل', value: 'نیپل کارنو تمام استیل ۳۶۰ درجه / نیپل ترک' },
      { label: 'کاپ نگهدارنده', value: 'کاپ تک‌پایه، دوپایه و کاپ دوپایه Sدار' },
      { label: 'لوله پشتیبان', value: 'لوله ۴ متری نیپل چهارگوش (پله‌ای) و لوله گرد ۴ متری' },
      { label: 'تجهیزات سرخط', value: 'فشارشکن صنعتی، پرچمی آبخوری، فنر شوکر' }
    ],
    models: ['نیپل کارنو تمام استیل ۳۶۰ درجه', 'نیپل ترک', 'آبخوری کله‌قندی'],
    catalogPdfName: 'Datasheet_NippleTSPK_Toyooran.pdf',
    relatedProjectIds: ['proj-broiler-novin-120k', 'proj-layer-negin-150k']
  },
  {
    id: 'drink-medicator-dosatron',
    code: 'TY-DOSATRON-KARNOTECH',
    name: 'دوزاترون (سیستم تزریق دارو و مدیکاتور) مرغداری کارنوتک',
    nameEn: 'Dosatron Precision Medicator Proportioner',
    category: 'drinking',
    categoryTitle: 'تجهیزات سیستم آبخوری (TSPK)',
    shortDescription: 'پمپ تزریق دارو و ویتامین در خط آبخوری بدون نیاز به برق، کارکرد با فشار آب و دقت دوزینگ فوق‌العاده.',
    fullDescription: 'سیستم تزریق داروی دوزاترون کارنوتک، دارو، واکسن، ویتامین‌ها و اسیدفایرها را دقیقاً متناسب با جریان آب مصرفی سالن دوزبندی و تزریق می‌نماید. عملکرد کاملاً هیدرولیکی بدون نیاز به برق و نوسان‌ناپذیر.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'بدون نیاز به برق (نیروی محرکه از فشار آب خط)',
      'دقت فوق‌العاده در دوز دارو از ۰.۲٪ تا ۲٪',
      'کاهش هدررفت داروها و تضمین اثربخشی واکسیناسیون'
    ],
    applications: ['دارورمانی، واکسیناسیون و اسیدشویی خطوط آب سالن مرغداری'],
    specs: [
      { label: 'دبی ورودی', value: '۱۰ الی ۲۵۰۰ لیتر در ساعت' },
      { label: 'درصد دوزینگ', value: '۰.۲ الی ۲ درصد قابل تنظیم' }
    ],
    catalogPdfName: 'Datasheet_Dosatron_Toyooran.pdf'
  },
  {
    id: 'drink-accessories-tspk',
    code: 'TY-DRINK-PARTS-TSPK',
    name: 'لوازم و اتصالات سیستم آبخوری TSPK',
    nameEn: 'Drinking System Parts, Fittings & Accessories',
    category: 'drinking',
    categoryTitle: 'تجهیزات سیستم آبخوری (TSPK)',
    shortDescription: 'بست رابط شاخه نیپل چهارگوش، بست کوپلینگ، پرچمی، فنر شوکر، قرقره، موف ترک، چسب رازی، رابط لوله مهار، کرپی و وینچ سقفی.',
    fullDescription: 'تأمین جامع قطعات آبخوری TSPK شامل: بست رابط شاخه نیپل چهارگوش، بست کوپلینگ، پرچمی آبخوری، فنر شوکر آبخوری نیپل، قرقره پلاستیکی، نیپل ترک، چسب رازی، موف ترک، رابط لوله مهار، کرپی (کرپی ۳، کرپی ۵، کرپی فولاد)، جوش آبخوری، لوله ۴ متری نیپل چهارگوش پله‌ای، لوله آبخوری نیپل گرد ۴ متری، لوله مهار آبخوری و وینچ سقفی آبخوری نیپل.',
    image: '/images/poultry-1.jpg',
    advantages: [
      'قطعات اصل با آب‌بندی مطمئن و بدون نشتی',
      'تأمین فوری تمامی سایزهای کرپی، بست، لوله و وینچ سقفی',
      'سیم بکسل‌های فولادی گالوانیزه نمره ۲، ۳ و ۴'
    ],
    applications: ['نصب، توسعه و سرویس دوره‌ای خطوط آبخوری'],
    specs: [
      { label: 'لوازم اصلی', value: 'لوله ۴ متری چهارگوش/گرد، بست کوپلینگ، موف ترک، وینچ سقفی' },
      { label: 'اتصالات مهار', value: 'کرپی ۳، کرپی ۵، کرپی فولاد، سیم بکسل، قرقره پلاستیکی' }
    ],
    catalogPdfName: 'Datasheet_DrinkAccessories_Toyooran.pdf'
  },

  // --- 4. Ventilation & Heating (تجهیزات تهویه و گرمایش) ---
  {
    id: 'vent-jet-heater-series',
    code: 'TY-JET-HEATER',
    name: 'جت هیتر تخصصی مرغداری (Jet Heater) - گازی، گازوئیلی و دوگانه ۱۰۰ و ۵۰',
    nameEn: 'Specialized Industrial Jet Heater 100kW & 50kW',
    category: 'ventilation',
    categoryTitle: 'تجهیزات تهویه و گرمایش',
    shortDescription: 'تولیدکننده تخصصی جت هیتر با راندمان حرارتی ۹۹٪: جت هیتر ۱۰۰ گازی/گازوئیلی/دوگانه و ۵۰ گازی/گازوئیلی/دوگانه.',
    fullDescription: 'شرکت طیوران صنعت پویا تولیدکننده تخصصی جت هیتر و تجهیزات گرمایشی مرغداری است. جت هیترهای موشکی ۱۰۰ هزار و ۵۰ هزار در انواع گازی، گازوئیلی و دوگانه‌سوز با بدنه تمام استیل دوجداره، سنسورهای هوشمند شعله و اتصال به تابلوی اتوماسیون سالن تولید می‌گردند.',
    image: '/images/tech-1.jpg',
    advantages: [
      'تولید تخصصی جت هیتر با راندمان حرارتی بیش از ۹۹ درصد',
      'تنوع کامل: جت هیتر ۱۰۰ گازی، ۱۰۰ گازوئیلی، ۱۰۰ دوگانه، ۵۰ گازی، ۵۰ گازوئیلی، ۵۰ دوگانه',
      'بدنه داخلی و خارجی تمام استیل نسوز مقاوم به خوردگی و آمونیاک',
      'مجهز به سیستم جرقه‌زن یونیزاسیون اتوماتیک و برد ضد پارازیت'
    ],
    applications: ['تأمین گرمایش سالن‌های مرغداری گوشتی، تخم‌گذار، مادر و گلخانه‌ها'],
    specs: [
      { label: 'توان‌های حرارتی', value: '۱۰۰,۰۰۰ کیلوکالری (۱۱۶kW) و ۵۰,۰۰۰ کیلوکالری (۵۸kW)' },
      { label: 'انواع سوخت', value: 'گازی (NG/LPG)، گازوئیلی (Diesel) و دوگانه‌سوز' },
      { label: 'راندمان حرارتی', value: 'بیش از ۹۹٪ با توزیع یکنواخت گرما' }
    ],
    models: [
      'جت هیتر ۱۰۰ گازی',
      'جت هیتر ۱۰۰ گازوئیلی',
      'جت هیتر ۱۰۰ دوگانه',
      'جت هیتر ۵۰ گازی',
      'جت هیتر ۵۰ گازوئیلی',
      'جت هیتر ۵۰ دوگانه'
    ],
    catalogPdfName: 'Datasheet_JetHeater_Toyooran.pdf',
    relatedProjectIds: ['proj-broiler-novin-120k', 'proj-breeder-pardis-45k'],
    relatedArticleIds: ['art-winter-ventilation-mgmt']
  },
  {
    id: 'vent-inlet-valve',
    code: 'TY-INLET-VALVE',
    name: 'دریچه پنجره اینلت (Inlet Valve)',
    nameEn: 'Precision Air Inlet Valve',
    category: 'ventilation',
    categoryTitle: 'تجهیزات تهویه و گرمایش',
    shortDescription: 'ورودی هوا در تهویه عرضی و انتقالی جهت جابجایی هوای گرم زیر سقف با سطح گله و ایجاد جریان یکنواخت هوا در کل سالن.',
    fullDescription: 'دریچه‌های ورودی هوای اینلت (Inlet valve) از تجهیزات کلیدی تهویه مدرن هستند. با هدایت هوای تازه سرد به زیر سقف سالن، هوا با گرمای انباشته شده زیر سقف ترکیب شده و پس از گرم شدن به آرامی به سطح گله می‌رسد و جریان هوای یکنواخت و بدون افت دما در کل سالن ایجاد می‌کند.',
    image: '/images/machine-1.jpg',
    advantages: [
      'جابجایی هوای گرم زیر سقف با سطح گله در تهویه عرضی و انتقالی',
      'ایجاد جریان هوای یکنواخت و حذف نقاط کور و کوران سرد روی سر جوجه',
      'کاهش مصرف سوخت زمستانه تا ۳۰ درصد',
      'عایق‌بندی کامل پلی‌یورتان و هوابندی در زمان بسته بودن'
    ],
    applications: ['تهویه حداقلی، تهویه عرضی و تهویه انتقالی سالن‌های مرغداری'],
    specs: [
      { label: 'کاربرد مهندسی', value: 'تهویه عرضی و انتقالی سالن‌های مرغداری' },
      { label: 'جنس بدنه', value: 'پلیمر دوجداره ضد UV با عایق پلی‌یورتان' },
      { label: 'سیستم بازشو', value: 'وینچی اتوماتیک با موتور محرکه خطی' }
    ],
    catalogPdfName: 'Datasheet_InletValve_Toyooran.pdf',
    relatedArticleIds: ['art-winter-ventilation-mgmt']
  },
  {
    id: 'vent-fans-140-100-5blade',
    code: 'TY-FANS-SERIES',
    name: 'هواکش‌های صنعتی ۱۴۰، ۱۰۰، ۵ پره و بیگ هردزمن',
    nameEn: 'Industrial Exhaust Fans 140, 100, 5-Blade & Big Herdsman',
    category: 'ventilation',
    categoryTitle: 'تجهیزات تهویه و گرمایش',
    shortDescription: 'هواکش ۱۴۰، هواکش ۱۰۰، هواکش ۵ پره تهویه عرضی و هواکش بیگ هردزمن با پره‌های استیل و دمپر گالوانیزه.',
    fullDescription: 'مجموعه هواکش‌های صنعتی طیوران صنعت پویا شامل مدل‌های ۱۴۰ سانتی‌متری ۶ پره، ۱۰۰ سانتی‌متری، هواکش ۵ پره مخصوص تهویه عرضی و مدل‌های بیگ هردزمن، تخلیه حجم عظیم هوا با کمترین مصرف برق و بیشترین فشار استاتیکی را تضمین می‌کنند.',
    image: '/images/machine-1.jpg',
    advantages: [
      'پره‌های استنلس استیل ۳۰۴ با بالانس دینامیکی دقیق',
      'هواکش ۵ پره جهت تهویه عرضی پربازده در سالن‌های مرغداری',
      'دمپر گریز از مرکز تمام‌بسته ضد نفوذ باد و گردوغبار',
      'موتورهای کم‌مصرف IE3 با استاندارد حفاظتی IP55'
    ],
    applications: ['تهویه تونلی و تهویه عرضی سالن‌های مرغداری، دامداری و گلخانه‌ها'],
    specs: [
      { label: 'مدل‌های موجود', value: 'هواکش ۱۴۰، هواکش ۱۰۰، هواکش ۵ پره، هواکش بیگ هردزمن' },
      { label: 'ظرفیت هوادهی فن ۱۴۰', value: '۴۴,۵۰۰ مترمکعب در ساعت' },
      { label: 'توان موتور', value: '۱.۱ کیلووات (۱.۵ اسب)' }
    ],
    models: ['هواکش ۱۴۰ دمپر گریز از مرکز', 'هواکش ۱۰۰', 'هواکش ۵ پره تهویه عرضی', 'هواکش بیگ هردزمن'],
    catalogPdfName: 'Datasheet_ExhaustFans_Toyooran.pdf',
    relatedArticleIds: ['art-fan-selection-guide']
  },
  {
    id: 'vent-cabin-heater',
    code: 'TY-CABIN-HEATER',
    name: 'هیتر کابینی سالن مرغداری (Cabin Heater)',
    nameEn: 'Industrial Cabin Space Heater',
    category: 'ventilation',
    categoryTitle: 'تجهیزات تهویه و گرمایش',
    shortDescription: 'تأمین گرمایش هوای پاک و تهویه استاندارد با مبدل حرارتی غیرمستقیم و دودکش خروجی.',
    fullDescription: 'هیتر کابینی با کوره استیل نسوز و رادیاتور لوله‌ای، هوای کاملاً پاک و گرم بدون گازهای حاصل از احتراق را به داخل سالن هدایت می‌کند و گزینه‌ای ایده‌آل برای سالن‌های حساس و دوره‌های ابتدایی پرورش است.',
    image: '/images/tech-1.jpg',
    advantages: [
      'تأمین گرمایش مطبوع و تهویه هوای پاک بدون دی‌اکسید کربن',
      'کوره حرارتی استنلس استیل نسوز با طول عمر بالا',
      'راندمان حرارتی بالا با اتلاف سوخت به حداقل رسیده'
    ],
    applications: ['گرمایش سالن‌های مرغداری گوشتی، مادر و گلخانه‌ها'],
    specs: [
      { label: 'توان حرارتی', value: '۱۵۰,۰۰۰ الی ۲۵۰,۰۰۰ کیلوکالری' },
      { label: 'نوع کوره', value: 'استیل نسوز ۳۱۰S' }
    ],
    catalogPdfName: 'Datasheet_CabinHeater_Toyooran.pdf'
  },
  {
    id: 'vent-cooling-pads-fogger',
    code: 'TY-PAD-FOGGER',
    name: 'پدهای خنک‌کننده سلولزی و مه‌پاش ۳ میکرون (3 Micron Fog Nozzle)',
    nameEn: 'Cellulose Cooling Pads & 3 Micron Fogger System',
    category: 'ventilation',
    categoryTitle: 'تجهیزات تهویه و گرمایش',
    shortDescription: 'سرمادهی در محیط با پد سلولزی مرغداری و گلخانه و مه‌پاشی مناسب جهت مرغداری‌ها با نازل‌های ۳ میکرون.',
    fullDescription: 'سیستم سرمایش تبخیری پد سلولزی ۷۰۹۰ با فریم آلومینیومی و سیستم مه‌پاش نازل ۳ میکرون صنعتی، افت دمای ۱۰ تا ۱۵ درجه در تابستان و رطوبت‌دهی استاندارد سالن را بدون خیس‌کردن بستر رقم می‌زند.',
    image: '/images/machine-1.jpg',
    advantages: [
      'پدهای خنک‌کننده سلولزی ویژه مرغداری و گلخانه: سرمادهی پربازده در محیط',
      'نازل مه‌پاش ۳ میکرون: مه‌پاشی ریز و مناسب جهت مرغداری‌ها بدون خیسی بستر',
      'فریم آلومینیوم آنودایز شده ضد زنگ و رسوب'
    ],
    applications: ['سرمایش تابستانه سالن‌های مرغداری در سراسر کشور'],
    specs: [
      { label: 'ضخامت پد سلولزی', value: '۱۰ و ۱۵ سانتی‌متر' },
      { label: 'سایز قطرات نازل مه‌پاش', value: '۳ میکرون پودری استیل ضدچکه' }
    ],
    catalogPdfName: 'Datasheet_CoolingPad_Toyooran.pdf'
  },

  // --- 5. Structure & Turnkey Plants (ساخت و تجهیز سوله و کارخانجات) ---
  {
    id: 'struct-turnkey-shed',
    code: 'TY-SHED-TURNKEY',
    name: 'طراحی، ساخت و تجهیز کامل سوله و کارخانجات مرغداری',
    nameEn: 'Turnkey Construction: Poultry Halls & Feed Plants',
    category: 'structure',
    categoryTitle: 'ساخت و تجهیز سوله و کارخانجات',
    shortDescription: 'ساخت و تجهیز صفر تا صد سوله، کارخانجات و سالن‌های مرغداری با سازه‌های مدرن و سبک بهداشتی و صنعتی.',
    fullDescription: 'خدمات جامع طیوران صنعت پویا شامل طراحی مهندسی، ساخت کامل سوله با سازه‌های مدرن و سبک، اجرای سوله‌های بهداشتی و صنعتی، پوشش ساندویچ پانل، کف‌سازی بتن صیقلی و نصب کامل تجهیزات سیستم دانخوری، آبخوری، تهویه و کنترل هوشمند سالن‌های مرغداری است.',
    image: '/images/tech-1.jpg',
    advantages: [
      'ساخت و تجهیز صفر تا صد سوله، کارخانجات و سالن‌های مرغداری',
      'ساخت کامل سوله با سازه‌های مدرن و سبک استاندارد',
      'پوشش انواع سوله و کارخانجات: بهداشتی و صنعتی',
      'تجهیز همزمان سیستم‌های دانخوری، آبخوری، تهویه و اتوماسیون مرکزی'
    ],
    applications: ['فارم‌های گوشتی، تخم‌گذار، مزارع مادر و کارخانجات تولید خوراک'],
    specs: [
      { label: 'نوع سازه', value: 'سازه‌های مدرن و سبک دهانه باز (۱۲ الی ۲۴ متر)' },
      { label: 'انواع پروژه‌ها', value: 'سوله‌های بهداشتی، سوله‌های صنعتی و کارخانجات خوراک' },
      { label: 'سطح خدمات', value: 'صفر تا ۱۰۰ از نقشه و خاک‌برداری تا جوجه‌ریزی' }
    ],
    catalogPdfName: 'Datasheet_TurnkeyShed_Toyooran.pdf',
    relatedProjectIds: ['proj-broiler-novin-120k', 'proj-layer-negin-150k', 'proj-feed-mill-damoon']
  },

  // --- 6. Feed, Supplements, Oils & Pharma (تولید خوراک، مکمل، روغن و دارو) ---
  {
    id: 'feed-concentrate-mac-layers',
    code: 'TY-CONCENTRATE-MAC',
    name: 'کنسانتره تخصصی Mac و تخم‌گذار (۲.۵٪ و ۵٪) و دان آماده مک',
    nameEn: 'Mac Specialized & Layer Concentrates (2.5% & 5%)',
    category: 'feed_pharma',
    categoryTitle: 'تولید خوراک، مکمل، روغن و دارو',
    shortDescription: 'کنسانتره Mac (۲.۵ درصد و ۵ درصد)، کنسانتره تخم‌گذار (۲.۵ درصد و ۵ درصد) و دان آماده مک با فرمولاسیون اختصاصی.',
    fullDescription: 'تولید انواع خوراک و کنسانتره‌های پیشرفته شامل کنسانتره Mac ۲.۵٪ و ۵٪ گوشتی، کنسانتره تخم‌گذار ۲.۵٪ و ۵٪ و دان آماده مک جهت دستیابی به حداکثر سرعت رشد، کاهش ضریب تبدیل FCR و افزایش تولید تخم‌مرغ.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'کنسانتره Mac (۲.۵ درصد و ۵ درصد) گوشتی',
      'کنسانتره تخم‌گذار (۲.۵ درصد و ۵ درصد)',
      'دان آماده مک با بالانس دقیق اسیدهای آمینه و انرژی',
      'کاهش چشمگیر ضریب تبدیل غذایی و ارتقای وزن‌گیری گله'
    ],
    applications: ['مزارع پرورش مرغ گوشتی و فارم‌های تخم‌گذار تجاری'],
    specs: [
      { label: 'انواع کنسانتره', value: 'کنسانتره Mac (۲.۵٪ و ۵٪) | کنسانتره تخم‌گذار (۲.۵٪ و ۵٪)' },
      { label: 'دان آماده', value: 'دان آماده مک (پیش‌دان، میان‌دان، پس‌دان)' },
      { label: 'بسته‌بندی', value: 'کیسه‌های لمینت ۲۵ کیلوگرمی استاندارد' }
    ],
    catalogPdfName: 'Datasheet_MacConcentrate_Toyooran.pdf',
    relatedProjectIds: ['proj-broiler-novin-120k']
  },
  {
    id: 'feed-substitutes-corn-barley',
    code: 'TY-CORN-BARLEY-SUB',
    name: 'تولید جایگزین‌های ذرت و جو برای کارخانجات تولید خوراک',
    nameEn: 'Corn & Barley Raw Material Substitutes',
    category: 'feed_pharma',
    categoryTitle: 'تولید خوراک، مکمل، روغن و دارو',
    shortDescription: 'تولید فرمولاسیون و مواد جایگزین باکیفیت ذرت و جو جهت کاهش هزینه‌های تمام‌شده کارخانجات خوراک.',
    fullDescription: 'شرکت طیوران صنعت پویا با تکیه بر ۵۰ سال تجربه تغذیه دام و طیور، ترکیبات فرآوری‌شده جایگزین ذرت و جو با ارزش غذایی، انرژی و پروتئین معادل را برای کارخانجات تولید خوراک و مزارع بزرگ تولید و عرضه می‌نماید.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'تولید جایگزین‌های ذرت و جو برای کارخانجات تولید خوراک',
      'کاهش هزینه‌های تأمین نهاده بدون افت ارزش غذایی خوراک',
      'قابلیت هضم عالی و بالانس انرژی قابل متابولیسم'
    ],
    applications: ['کارخانجات خوراک دام و طیور و فارم‌های پرورشی بزرگ'],
    specs: [
      { label: 'کاربرد هدف', value: 'جایگزینی اقتصادی ذرت و جو در فرمول خوراک' },
      { label: 'پروتئین و انرژی', value: 'فرموله شده مطابق با آنالیز دقیق آزمایشگاهی' }
    ],
    catalogPdfName: 'Datasheet_Substitutes_Toyooran.pdf'
  },
  {
    id: 'feed-premix-oils-pharma',
    code: 'TY-PREMIX-OILS-PHARMA',
    name: 'پریمیکس دامی و اسب، روغن خام سویا/آفتابگردان، اسید چرب، دارو و پودر گوشت',
    nameEn: 'Premixes, Raw Oils, Fatty Acids, Pharma & Meat Meal',
    category: 'feed_pharma',
    categoryTitle: 'تولید خوراک، مکمل، روغن و دارو',
    shortDescription: 'پریمیکس (دامی، اسب)، آنتی‌بیوتیک، شیرافزا، پودر گوشت (دامی، طیور، ماهی)، روغن خام سویا، روغن خام آفتابگردان، اسید چرب، بذر، کود و بازرگانی.',
    fullDescription: 'تولید و تأمین تخصصی: انواع خوراک، مکمل، روغن و دارو، پریمیکس‌های ویژه دام و اسب، داروهای آنتی‌بیوتیک، شیرافزا، پودر گوشت باکیفیت (دامی، طیور و ماهی)، روغن‌های خام سویا و آفتابگردان، اسید چرب خالص، بذر و کود و کلیه ملحقات کشاورزی و خدمات بازرگانی.',
    image: '/images/equipment-1.jpg',
    advantages: [
      'پریمیکس اختصاصی دامی و پریمیکس اسب',
      'تولید دارو و آنتی‌بیوتیک‌های درمانی و پیشگیری و شیرافزا',
      'پودر گوشت غنی‌شده (دامی، طیور، ماهی)',
      'روغن و اسید چرب: روغن خام سویا، روغن خام آفتابگردان، اسید چرب خالص',
      'تولید بذر و کود و کلیه ملحقات مورد نیاز کشاورزی و خدمات بازرگانی'
    ],
    applications: ['کارخانجات خوراک، مزارع پرورش دام، اسب، طیور و آبزیان'],
    specs: [
      { label: 'محصولات روغنی', value: 'روغن خام سویا، روغن خام آفتابگردان، اسید چرب' },
      { label: 'محصولات پروتئینی', value: 'پودر گوشت دامی، پودر طیور، پودر ماهی' },
      { label: 'مکمل و دارو', value: 'پریمیکس دامی و اسب، آنتی‌بیوتیک، شیرافزا' },
      { label: 'کشاورزی و بازرگانی', value: 'تولید بذر و کود و ملحقات کشاورزی' }
    ],
    catalogPdfName: 'Datasheet_PremixOils_Toyooran.pdf'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-broiler-novin-120k',
    title: 'مجتمع پرورش مرغ گوشتی ۱۲۰ هزار قطعه‌ای نوین فارم',
    type: 'broiler',
    typeTitle: 'مرغداری گوشتی مکانیزه',
    capacity: '۱۲۰,۰۰۰ قطعه در هر دوره',
    location: 'مازندران، ساری',
    year: '۱۴۰۲',
    image: '/images/poultry-1.jpg',
    servicesProvided: [
      'طراحی و احداث صفر تا صد سوله مدرن سبک بهداشتی',
      'نصب بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA',
      'تجهیز خطوط آبخوری نیپل TSPK تمام استیل کارنو',
      'نصب دریچه‌های اینلت، هواکش‌های ۱۴۰ و جت هیترهای ۱۰۰ دوگانه‌سوز'
    ],
    equipmentSummary: [
      'بشقاب‌های دانخوری پروانه‌ای Butterfly Concepts آمریکا با تاییدیه FDA',
      'خطوط آبخوری نیپل TSPK با سوزن استیل و کاپ دوپایه Sدار',
      'دریچه‌های اینلت هوشمند و هواکش‌های ۱۴۰ دمپردار',
      'جت هیترهای تمام استیل ۱۰۰ هزار دوگانه‌سوز'
    ],
    keyOutcome: 'دستیابی به ضریب تبدیل ۱.۵۱ و صفر شدن نیاز به سینی دان دستی از روز اول پرورش',
    caseStudy: {
      problem: 'کارفرما با مشکل اتلاف بالای دان با سینی‌های دستی در سنین ابتدایی، رطوبت بالای بستر و نوسانات دمایی سالن مواجه بود.',
      clientNeed: 'نیاز به سوله عایق بهداشتی، دانخوری با قابلیت تغذیه از یک‌روزگی و تهویه استاندارد با جت هیترهای بدون دود و کم‌مصرف.',
      solution: 'احداث سوله سبک بهداشتی، نصب بشقاب‌های پروانه‌ای Butterfly Concepts دارای تاییدیه FDA، خطوط آبخوری نیپل TSPK، دریچه‌های اینلت و جت هیترهای ۱۰۰ دوگانه طیوران صنعت پویا.',
      processSteps: [
        { title: 'فاز ۱: طراحی و ساخت سوله بهداشتی', desc: 'احداث سازه سبک با پوشش ساندویچ پانل و کف صیقلی' },
        { title: 'فاز ۲: نصب تجهیزات دانخوری و آبخوری', desc: 'نصب بشقاب‌های پروانه‌ای FDA آمریکا و نیپل‌های TSPK کارنو' },
        { title: 'فاز ۳: تجهیز سیستم تهویه و گرمایش', desc: 'استقرار دریچه‌های اینلت، فن‌های ۱۴۰ و جت هیترهای ۱۰۰' },
        { title: 'فاز ۴: راه‌اندازی و تست خط', desc: 'تست بدون بار و تست جوجه‌ریزی زیر نظر تیم فنی شرکت' }
      ],
      equipmentList: [
        'بشقاب پروانه‌ای Butterfly Concepts آمریکا (FDA Approved)',
        'سیستم آبخوری نیپل TSPK کارنو تمام استیل',
        'دریچه پنجره اینلت تهویه عرضی',
        'جت هیتر ۱۰۰ دوگانه‌سوز موشکی',
        'هواکش ۱۴۰ صنعتی دمپردار'
      ],
      results: [
        { label: 'ضریب تبدیل (FCR)', value: '۱.۵۱', detail: 'بهترین رکورد فارم با تغذیه از ۱ روزگی' },
        { label: 'کاهش تلفات', value: '۱.۸٪', detail: 'کنترل کامل اقلیم و کیفیت بستر' },
        { label: 'صرفه‌جویی سوخت', value: '۳۵٪', detail: 'به لطف جت هیترها و دریچه‌های اینلت' }
      ]
    }
  },
  {
    id: 'proj-layer-negin-150k',
    title: 'فارم مرغ تخم‌گذار تمام اتوماتیک ۱۵۰ هزار سر نگین زرین',
    type: 'layer',
    typeTitle: 'مرغداری تخم‌گذار صنعتی',
    capacity: '۱۵۰,۰۰۰ سر مرغ تخم‌گذار',
    location: 'اصفهان، شهرک طیور',
    year: '۱۴۰۱',
    image: '/images/poultry-1.jpg',
    servicesProvided: [
      'ساخت سوله استاندارد صنعتی',
      'تجهیز خطوط آبخوری نیپل TSPK کارنو',
      'تأمین کنسانتره تخصصی Mac تخم‌گذار ۲.۵٪ و ۵٪',
      'نصب سیستم تهویه تونلی و پدهای سلولزی'
    ],
    equipmentSummary: [
      'سیستم آبخوری نیپل TSPK تمام استیل',
      'کنسانتره تخصصی Mac تخم‌گذار',
      'هواکش‌های ۱۴۰ و پدهای سلولزی ۷۰۹۰'
    ],
    keyOutcome: 'تولید روزانه ۱۴۰,۰۰۰ عدد تخم‌مرغ با کیفیت پوسته عالی و حداقل افت شکستگی'
  },
  {
    id: 'proj-feed-mill-damoon',
    title: 'کارخانه صنعتی فرآوری خوراک دام، طیور و آبزیان دامون (۲۰ تن/ساعت)',
    type: 'feed_mill',
    typeTitle: 'کارخانه خوراک و مکمل',
    capacity: '۲۰ تن در ساعت پلت استاندارد',
    location: 'خراسان رضوی، مشهد',
    year: '۱۴۰۳',
    image: '/images/equipment-1.jpg',
    servicesProvided: [
      'طراحی کامل خط فرآوری و ساخت ماشین‌آلات سنگین',
      'تأمین دستگاه‌های پرس پلت، میکرودایزینگ، آسیاب چکشی و میکسر دوشفت',
      'نصب کاندیشنر پخت، کرامبلر، کولر درایر و سیستم بسته‌بندی',
      'فرمولاسیون مکمل‌ها و جایگزین‌های ذرت و جو'
    ],
    equipmentSummary: [
      'پرس پلت‌های صنعتی گیربکسی',
      'دستگاه میکرودایزینگ دقیق ریزمغذی‌ها',
      'آسیاب چکشی قطره‌ای و میکسر دوشفت پرسرعت',
      'کاندیشنر استیل، کرامبلر، کولر درایر و الواتور انتقال'
    ],
    keyOutcome: 'تولید پلت با شاخص PDI بالای ۹۶.۸٪ و ضریب یکنواختی CV زیر ۴٪',
    caseStudy: {
      problem: 'کیفیت پایین پلت‌های تولیدی، خطای دوزینگ ویتامین‌ها و هزینه‌های بالای نهاده‌های ذرت و جو.',
      clientNeed: 'احداث خط تمام اتوماتیک با دستگاه میکرودایزینگ و پرس پلت‌های پربازده با ماندگاری بالا.',
      solution: 'طراحی خط جامع با ماشین‌آلات ساخت طیوران صنعت پویا شامل میکرودایزینگ، پرس پلت، کاندیشنر دوجداره، اکسترودر، آسیاب چکشی و سیستم خنک‌کننده.',
      processSteps: [
        { title: 'فاز ۱: مهندسی خط و ساخت ماشین‌آلات', desc: 'طراحی استراکچر ۴ طبقه و ساخت پلت پرس و میکرودایزینگ' },
        { title: 'فاز ۲: نصب و پایپینگ خط بخار', desc: 'نصب کاندیشنرها، لوله‌کشی بویلر و سرندها' },
        { title: 'فاز ۳: تست بچینگ و کنترل کیفیت پلت', desc: 'آزمون دوام PDI و آزمون CV یکنواختی میکس' }
      ],
      equipmentList: [
        'پرس پلت صنعتی گیربکسی',
        'دستگاه میکرودایزینگ چندهاپره',
        'میکسر دوشفت پدلی و آسیاب چکشی',
        'کاندیشنر دوجداره استیل و کولر درایر'
      ],
      results: [
        { label: 'شاخص دوام پلت (PDI)', value: '۹۶.۸٪', detail: 'حداقل خاکه در حمل‌ونقل و فارم' },
        { label: 'یکنواختی میکس (CV)', value: '۳.۵٪', detail: 'دقت بی‌نظیر با سیستم میکرودایزینگ' },
        { label: 'کاهش هزینه نهاده', value: '۱۸٪', detail: 'به کمک فرمولاسیون جایگزین ذرت و جو' }
      ]
    }
  },
  {
    id: 'proj-aqua-feed-plant',
    title: 'خط تولید تخصصی خوراک آبزیان و پت فود دریای خزر',
    type: 'feed_mill',
    typeTitle: 'خط خوراک آبزیان و پت فود',
    capacity: '۵ تن در ساعت پلت اکسترود شناور',
    location: 'گیلان، رشت',
    year: '۱۴۰۲',
    image: '/images/silo-1.jpg',
    servicesProvided: [
      'تأمین دستگاه اکسترودر صنعتی آبزیان',
      'نصب خشک‌کن تونلی (Tunnel Dryer) چندطبقه',
      'تجهیز خط کوتینگ روغن و ملاس',
      'تأمین پودر ماهی و مکمل‌های تخصصی آبزیان'
    ],
    equipmentSummary: [
      'اکسترودر صنعتی آبزیان',
      'خشک‌کن تونلی پیوسته (Tunnel Dryer)',
      'سیستم بسته‌بندی اتوماتیک'
    ],
    keyOutcome: 'تولید خوراک شناور و پایدار ماهی با زمان غوطه‌وری بیش از ۱۸ ساعت در آب'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-turnkey-shed',
    title: 'طراحی، ساخت و تجهیز کامل سوله و کارخانجات',
    tagline: 'ساخت و تجهیز صفر تا صد سوله، کارخانجات و سالن‌های مرغداری با سازه‌های مدرن و سبک بهداشتی و صنعتی',
    iconName: 'Building2',
    problemSolved: 'ناهماهنگی میان سازنده سوله و نصاب تجهیزات، هدررفت زمان و انرژی و ساخت سوله‌های غیراستاندارد.',
    whatWeProvide: [
      'ساخت و تجهیز صفر تا صد سوله، کارخانجات و سالن‌های مرغداری',
      'ساخت کامل سوله با سازه‌های مدرن و سبک استاندارد',
      'پوشش انواع سوله و کارخانجات: بهداشتی و صنعتی',
      'تجهیز کامل سیستم دانخوری، آبخوری، تهویه و کنترل هوشمند'
    ],
    workflow: [
      { stepNumber: 1, title: 'مشاوره و طراحی سازه', description: 'طراحی نقشه‌های محاسباتی سوله سبک بهداشتی و صنعتی', deliverable: 'دفترچه محاسبات و نقشه اجرایی' },
      { stepNumber: 2, title: 'ساخت اسکلت و پوشش پانل', description: 'برپایی سازه، پوشش ساندویچ پانل و کف‌سازی صیقلی', deliverable: 'سازه هوابند و عایق کامل' },
      { stepNumber: 3, title: 'تجهیز خطوط و تحویل آماده جوجه‌ریزی', description: 'نصب خطوط دان، آب، فن‌ها، اینلت و جت هیترها', deliverable: 'پروژه آماده بهره‌برداری کامل' }
    ],
    suitableFor: ['سرمایه‌گذاران جدید مرغداری، کارخانجات خوراک و فارم‌های در حال توسعه'],
    relatedEquipmentCategories: ['structure', 'feeding', 'drinking', 'ventilation'],
    sampleProjectIds: ['proj-broiler-novin-120k', 'proj-layer-negin-150k'],
    faqs: [
      {
        q: 'آیا سازه‌های سبک قابلیت تحمل بار برف و باد سنگین را دارند؟',
        a: 'بله، تمامی سازه‌ها بر مبنای مباحث مقررات ملی ساختمان و آیین‌نامه ۲۸۰۰ به طور دقیق برای اقلیم هر منطقه محاسبه و مهندسی می‌شوند.'
      }
    ]
  },
  {
    id: 'srv-machinery-manufacturing',
    title: 'طراحی و تولید ماشین‌آلات خط تولید خوراک و مکمل',
    tagline: 'پرس پلت، اکسترودر، میکرودایزینگ، فلیکر اسب، آسیاب چکشی، میکسر، کاندیشنر، کرامبلر و خشک‌کن تونلی',
    iconName: 'Factory',
    problemSolved: 'کیفیت پایین پلت، عدم یکنواختی مخلوط مواد دارویی، استهلاک بالای دای و قطعات در خطوط خوراک.',
    whatWeProvide: [
      'طراحی و تولید پرس پلت‌های گیربکسی با شاخص دوام PDI بالای ۹۶٪',
      'تولید سیستم میکرودایزینگ جهت اندازه‌گیری دقیق ویتامین‌ها و میکروارگانیسم‌ها',
      'ساخت اکسترودر آبزیان، فلیکر خوراک اسب و خشک‌کن تونلی پت‌فود',
      'تولید آسیاب چکشی، میکسر دوشفت، کاندیشنر استیل، کرامبلر و کولر درایر'
    ],
    workflow: [
      { stepNumber: 1, title: 'طراحی فرآیند تولید', description: 'تعیین ظرفیت تن/ساعت و جانمایی ماشین‌آلات در برج تولید', deliverable: 'دیاگرام فرآیند P&ID' },
      { stepNumber: 2, title: 'ساخت و کنترل کیفی ماشین‌آلات', description: 'تراشکاری CNC، سخت‌کاری حرارتی و بالانس روتورها', deliverable: 'تست کارگاهی ماشین‌آلات' },
      { stepNumber: 3, title: 'نصب، راه‌اندازی و آموزش', description: 'مونتاژ خط، کالیبراسیون و آموزش اپراتورهای کارخانه', deliverable: 'خط در حال تولید پایدار' }
    ],
    suitableFor: ['کارخانجات تولید خوراک دام، طیور، آبزیان، پت فود و مکمل‌سازی'],
    relatedEquipmentCategories: ['machinery'],
    sampleProjectIds: ['proj-feed-mill-damoon', 'proj-aqua-feed-plant'],
    faqs: [
      {
        q: 'آیا قطعات یدکی دای، رولر و چکش‌ها همواره موجود است؟',
        a: 'بله، انبار مرکزی کارخانجات طیوران صنعت پویا قطعات مصرفی و یدکی فابریک تمامی ماشین‌آلات را همواره تأمین می‌نماید.'
      }
    ]
  },
  {
    id: 'srv-poultry-equipment-supply',
    title: 'تأمین و نصب تجهیزات تخصصی مرغداری',
    tagline: 'تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه FDA و تجهیزات آبخوری TSPK',
    iconName: 'Wrench',
    problemSolved: 'هدررفت دان، خیس شدن بستر با نیپل‌های نامرغوب و افت بهره‌وری گله در سالن‌های مرغداری.',
    whatWeProvide: [
      'تجهیز دانخوری پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه رسمی FDA',
      'تأمین بشقاب‌های پویا، پارس و کناوی (Konavi) و خطوط انتقال دان',
      'تجهیز سیستم آبخوری نیپل TSPK کارنو تمام استیل با فشارشکن و کاپ دوپایه Sدار',
      'تولید و نصب جت هیترهای ۱۰۰ و ۵۰ (گازی، گازوئیلی، دوگانه)، اینلت و هواکش ۱۴۰'
    ],
    workflow: [
      { stepNumber: 1, title: 'محاسبه خطوط بر اساس ابعاد سالن', description: 'تعیین تعداد خطوط دان و آب و توان گرمایشی و تهویه', deliverable: 'پیش‌فاکتور رسمی و نقشه چیدمان' },
      { stepNumber: 2, title: 'ارسال مستقیم از کارخانه', description: 'بسته‌بندی ایمن و ارسال تجهیزات اصل به فارم', deliverable: 'تحویل در محل پروژه' },
      { stepNumber: 3, title: 'نصب، تراز و راه‌اندازی', description: 'نصب با وینچ‌های سقفی، کالیبراسیون فشار آب و سنسور دان', deliverable: 'تست عملکرد با گارانتی ۲۴ ماهه' }
    ],
    suitableFor: ['مرغداری‌های گوشتی، تخم‌گذار، مزارع مادر و بوقلمون'],
    relatedEquipmentCategories: ['feeding', 'drinking', 'ventilation'],
    sampleProjectIds: ['proj-broiler-novin-120k', 'proj-layer-negin-150k'],
    faqs: [
      {
        q: 'تفاوت بشقاب پروانه‌ای FDA آمریکا با بشقاب‌های معمولی چیست؟',
        a: 'بشقاب پروانه‌ای دارای تأییدیه رسمی FDA است و به دلیل طراحی ارگونومیک، جوجه از روز اول بدون نیاز به سینی دان از آن تغذیه می‌کند و هدررفت دان تا ۱۵٪ کاهش می‌یابد.'
      }
    ]
  },
  {
    id: 'srv-feed-formulation-pharma',
    title: 'تولید خوراک، کنسانتره، جایگزین‌های نهاده، روغن و دارو',
    tagline: 'کنسانتره Mac، جایگزین‌های ذرت و جو، پریمیکس دامی و اسب، روغن خام سویا/آفتابگردان و دارو',
    iconName: 'Pill',
    problemSolved: 'نوسانات قیمت نهاده‌ها، کمبود دان باکیفیت و بیماری‌های ناشی از ضعف تغذیه در گله.',
    whatWeProvide: [
      'تولید جایگزین‌های ذرت و جو برای کارخانجات تولید خوراک جهت کاهش هزینه‌ها',
      'تولید کنسانتره تخصصی Mac و تخم‌گذار (۲.۵ درصد و ۵ درصد) و دان آماده مک',
      'تأمین پریمیکس‌های دامی و اسب، شیرافزا و آنتی‌بیوتیک‌های درمانی',
      'تولید روغن خام سویا، روغن خام آفتابگردان، اسید چرب و پودر گوشت (دامی، طیور، ماهی)'
    ],
    workflow: [
      { stepNumber: 1, title: 'آنالیز نیاز تغذیه‌ای گله', description: 'بررسی نژاد، سن و اهداف وزنی یا تخم‌گذاری', deliverable: 'فرمول اختصاصی بهینه' },
      { stepNumber: 2, title: 'تولید تحت نظارت آزمایشگاهی', description: 'ترکیب دقیق در خطوط استاندارد کارخانه', deliverable: 'محصول با آنالیز تضمین‌شده' },
      { stepNumber: 3, title: 'پایش مستمر نتایج در فارم', description: 'بررسی شاخص FCR و سلامت گله در طول دوره', deliverable: 'گزارش ارتقای راندمان' }
    ],
    suitableFor: ['مرغداران، دامداران، پرورش‌دهندگان اسب و کارخانجات خوراک'],
    relatedEquipmentCategories: ['feed_pharma'],
    sampleProjectIds: ['proj-broiler-novin-120k'],
    faqs: [
      {
        q: 'چگونه جایگزین‌های ذرت و جو به کاهش هزینه‌ها کمک می‌کنند؟',
        a: 'با بالانس علمی اسیدهای آمینه و منابع انرژی فرآوری‌شده، بدون افت عملکرد گله، هزینه تمام‌شده خوراک به طور چشمگیری کاهش می‌یابد.'
      }
    ]
  },
  {
    id: 'srv-consulting-efficiency',
    title: 'مشاوره توسعه، بهره‌برداری و افزایش راندمان صنعتی',
    tagline: 'راهکار جامع توسعه، تجهیز و بهره‌برداری با بیش از ۵۰ سال تجربه و مجری بیش از ۲۰۰ پروژه ملی و بین‌المللی',
    iconName: 'TrendingUp',
    problemSolved: 'بهره‌برداری غیراقتصادی، خطاهای مدیریتی در اقلیم و تغذیه و افت سودآوری پروژه‌های صنعتی.',
    whatWeProvide: [
      'بیش از ۵۰ سال تجربه مهندسی در صنعت دام، طیور و آبزیان',
      'تجارب حاصل از اجرای بیش از ۲۰۰ پروژه بزرگ ملی و بین‌المللی',
      'ممیزی کامل تهویه، مدیریت بستر، برنامه‌های نوری و بهینه‌سازی مصرف سوخت',
      'مشاوره امکان‌سنجی اقتصادی، انتخاب ماشین‌آلات و اخذ مجوزهای جهاد کشاورزی'
    ],
    workflow: [
      { stepNumber: 1, title: 'عارضه‌یابی و ممیزی میدانی', description: 'بازدید کارشناسان ارشد از فارم یا کارخانه', deliverable: 'گزارش ارزیابی نقاط ضعف و قوت' },
      { stepNumber: 2, title: 'تدوین پروتکل بهبود راندمان', description: 'ارائه برنامه زمان‌بندی اصلاح تجهیزات و مدیریت', deliverable: 'پروتکل جامع افزایش سودآوری' },
      { stepNumber: 3, title: 'نظارت بر اجرا و پشتیبانی', description: 'همراهی تیم مهندسی تا دستیابی به تارگت‌های تولیدی', deliverable: 'تثبیت شاخص‌های برتر تولید' }
    ],
    suitableFor: ['مدیران و سرمایه‌گذاران مزارع پرورش و کارخانجات فرآوری'],
    relatedEquipmentCategories: ['structure', 'machinery', 'feeding', 'ventilation'],
    sampleProjectIds: ['proj-broiler-novin-120k', 'proj-feed-mill-damoon'],
    faqs: [
      {
        q: 'دفاتر مهندسی و تحقیق و توسعه شرکت در چه شهرهایی مستقر هستند؟',
        a: 'دفتر تحقیق و توسعه در دانشگاه منابع طبیعی گرگان و دفتر مرکزی و کارخانجات شرکت در مشهد مستقر می‌باشند و به سراسر کشور و پروژه‌های بین‌المللی خدمات ارائه می‌دهند.'
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'how-to-calculate-ventilation-capacity',
    title: 'چگونه ظرفیت تهویه سالن مرغداری را محاسبه کنیم؟ (راهنمای جامع)',
    category: 'technical-guide',
    categoryLabel: 'راهنمای فنی مهندسی',
    readTime: '۱۲ دقیقه',
    date: '۱۴۰۳/۰۶/۱۵',
    image: '/images/article_ventilation_1787987977267.jpg',
    summary: 'راهنمای گام‌به‌گام و کاملا علمی برای محاسبه دقیق ظرفیت تهویه، انتخاب هواکش‌های مناسب و تضمین هوای مطلوب در سالن‌های مرغداری گوشتی و تخم‌گذار.',
    content: [
      'محاسبه دقیق ظرفیت تهویه سالن مرغداری یکی از حیاتی‌ترین عوامل در موفقیت پرورش طیور است. تهویه مناسب به معنای کنترل دما، رطوبت و خروج گازهای سمی مانند آمونیاک از سالن است. عدم توجه به این موضوع می‌تواند منجر به بروز بیماری‌های تنفسی، کاهش ضریب تبدیل و افزایش چشمگیر تلفات گله شود.',
      '[IMG|/images/article_ventilation_1787987977267.jpg|نمایی از هواکش‌ها و پدهای سلولزی در یک مرغداری صنعتی و مدرن]',
      '## اهمیت تهویه در مرغداری مدرن',
      'در سیستم‌های پرورش متراکم امروزی، پرندگان گرمای بسیار زیادی تولید می‌کنند. به خصوص در نیمه دوم دوره پرورش مرغ گوشتی، دفع این حرارت و تأمین اکسیژن کافی به یک چالش مهندسی تبدیل می‌شود. تهویه درست، نه تنها هوای تازه را تأمین می‌کند، بلکه بستر را خشک نگه داشته و از تجمع رطوبت جلوگیری می‌کند.',
      '## روش‌های محاسبه ظرفیت تهویه',
      'برای محاسبه دقیق ظرفیت تهویه، باید چند پارامتر کلیدی را در نظر بگیریم. این پارامترها شامل حجم کل سالن، وزن زنده گله در پایان دوره و شرایط اقلیمی منطقه است.',
      '- گام اول: محاسبه حجم سالن (طول × عرض × میانگین ارتفاع)',
      '- گام دوم: تعیین حداکثر وزن زنده گله (تعداد پرنده × وزن هدف)',
      '- گام سوم: محاسبه دبی هوای مورد نیاز بر اساس فرمول‌های استاندارد (معمولاً ۵ تا ۷ متر مکعب هوا در ساعت به ازای هر کیلوگرم وزن زنده)',
      '## بررسی تهویه تونلی (Tunnel Ventilation)',
      'در روزهای گرم سال، تهویه حداقل (Minimum Ventilation) جای خود را به تهویه تونلی می‌دهد. هدف از تهویه تونلی، ایجاد جریان هوای سریع در طول سالن است که باعث ایجاد پدیده "Wind Chill" (خنک‌کنندگی با باد) روی بدن پرنده می‌شود.',
      '- سرعت عبور هوا (Air Velocity) باید بین ۲.۵ تا ۳ متر بر ثانیه طراحی شود.',
      '- برای رسیدن به این سرعت، باید سطح مقطع سالن را محاسبه کرده و هواکش‌های ۱۴۰ سانتی‌متری با قدرت تخلیه بالا را در انتهای سالن نصب کنیم.',
      '[CTA|دریافت مشاوره محاسبه تهویه رایگان|/contact]',
      '## اشتباهات رایج در تهویه',
      'بسیاری از مرغداران بدون در نظر گرفتن افت فشار استاتیک ناشی از پدهای سلولزی یا اینلت‌ها، صرفاً بر اساس ظرفیت اسمی هواکش‌ها اقدام به خرید می‌کنند. این کار باعث می‌شود تا در عمل، هواکش‌ها نتوانند به ظرفیت واقعی خود برسند و سالن دچار خفگی شود.',
      'استفاده از سیستم کنترل اقلیم هوشمند (PLC) که به طور اتوماتیک اینلت‌ها و هواکش‌ها را تنظیم می‌کند، بهترین راهکار برای جلوگیری از خطاهای انسانی در مدیریت تهویه است.'
    ],
    relatedProductIds: ['vent-fans-140-100-5blade', 'vent-inlet-valve'],
    relatedServiceId: 'srv-consulting-efficiency'
  },
  {
    id: 'common-mistakes-in-poultry-design',
    title: '۵ اشتباه رایج در طراحی سالن مرغداری که به قیمت ورشکستگی تمام می‌شود',
    category: 'technical-guide',
    categoryLabel: 'راهنمای فنی مهندسی',
    readTime: '۱۰ دقیقه',
    date: '۱۴۰۳/۰۶/۱۰',
    image: '/images/article_design_1787987990156.jpg',
    summary: 'بررسی خطاهای متداول در ابعاد سالن، عایق‌بندی و جانمایی تجهیزات که منجر به افت راندمان، استرس گله و افزایش هزینه‌های انرژی می‌شود.',
    content: [
      'طراحی اولیه سالن مرغداری پایه‌گذار تمام موفقیت‌ها یا شکست‌های آتی یک فارم است. متأسفانه بسیاری از سرمایه‌گذاران به دلیل عدم دریافت مشاوره تخصصی، در ساخت‌وساز دچار اشتباهات ساختاری عمیقی می‌شوند که اصلاح آن‌ها پس از احداث تقریباً غیرممکن یا بسیار پرهزینه است.',
      '[IMG|/images/article_design_1787987990156.jpg|نمای داخلی یک سالن مرغداری مدرن پیش از جوجه‌ریزی]',
      '## ۱. ابعاد غیراستاندارد سالن',
      'اولین و بزرگ‌ترین اشتباه، انتخاب عرض نامناسب برای سالن است. عرض استاندارد برای یک سالن مرغداری مدرن معمولاً بین ۱۲ تا ۱۵ متر در نظر گرفته می‌شود. سالن‌هایی با عرض بیش از ۱۵ متر برای تهویه عرضی و تونلی نیازمند طراحی بسیار پیچیده‌تر و هواکش‌های قدرتمندتری هستند. در صورت عدم رعایت این تناسب، نقاط کور هوایی (Dead Zones) ایجاد شده و پرندگان در مرکز سالن دچار خفگی و استرس گرمایی می‌شوند.',
      '## ۲. عایق‌بندی ضعیف سقف و دیوارها',
      'دومین اشتباه رایج، عدم توجه به عایق‌بندی است. ضریب انتقال حرارت (R-Value) پایین باعث هدررفت شدید انرژی در زمستان و جذب گرمای طاقت‌فرسا در تابستان می‌شود.',
      '- استفاده از پشم شیشه و کارتن‌پلاست دیگر روشی منسوخ و ناکارآمد است.',
      '- استفاده از ساندویچ‌پانل‌های پلی‌اورتان با دانسیته بالا، یک راه‌حل استاندارد جهانی است که مصرف سوخت را تا ۴۰ درصد کاهش می‌دهد.',
      '[CTA|درخواست طراحی نقشه استاندارد مرغداری|/contact]',
      '## ۳. جانمایی نادرست سیلوها و تجهیزات',
      'سیلوهای ذخیره خوراک باید در محلی نصب شوند که کمترین میزان تابش مستقیم آفتاب را داشته باشند. تابش آفتاب به بدنه فلزی سیلو باعث ایجاد تعریق در داخل آن و در نتیجه رشد قارچ و کپک در خوراک گله می‌شود.',
      '## ۴. شیب‌بندی نادرست کف سالن',
      'کف سالن پرورش باید دارای شیب ملایم و مهندسی‌شده به سمت خروجی‌های فاضلاب باشد. شیب‌بندی نادرست، شستشو و ضدعفونی سالن در پایان دوره را به شدت دشوار کرده و باعث باقی‌ماندن آلودگی‌ها برای دوره‌های بعدی می‌شود.',
      '## نتیجه‌گیری',
      'صرفه‌جویی در هزینه‌های طراحی مهندسی در ابتدای کار، منجر به ضررهای میلیاردی در طول سال‌های بهره‌برداری خواهد شد. مهندسین فنی طیوران صنعت پویا آماده ارائه نقشه‌های دقیق اجرایی برای پروژه‌های شما هستند.'
    ],
    relatedProductIds: ['structure-sandwich-panel'],
    relatedServiceId: 'srv-consulting-efficiency'
  },
  {
    id: 'comparison-of-heating-systems',
    title: 'مقایسه جامع سیستم‌های گرمایشی: جت هیتر بهتر است یا سیستم تابشی؟',
    category: 'technical-guide',
    categoryLabel: 'راهنمای فنی مهندسی',
    readTime: '۱۱ دقیقه',
    date: '۱۴۰۳/۰۶/۰۵',
    image: '/images/article_heating_1787988003088.jpg',
    summary: 'جت هیتر، کوره‌های کابینتی یا سیستم‌های گرماتاب؟ کدام تکنولوژی گرمایشی برای شرایط اقلیمی سالن مرغداری شما اقتصادی‌تر و کارآمدتر است؟',
    content: [
      'تأمین گرمایش یکنواخت در سالن‌های پرورش، به خصوص در روزهای اولیه جوجه‌ریزی، تأثیر مستقیمی بر ضریب تبدیل و سلامت گله دارد. اما انتخاب سیستم مناسب همواره یک چالش است. مرغداران با گزینه‌های متنوعی همچون جت هیترها، کوره‌های هوای گرم و سیستم‌های تابشی روبرو هستند.',
      '[IMG|/images/article_heating_1787988003088.jpg|جت هیتر صنعتی نصب‌شده در سقف یک سالن مرغداری مدرن]',
      '## ۱. جت هیترها (موشکی)',
      'جت هیترها به دلیل راندمان حرارتی بسیار بالا (نزدیک به ۹۹ درصد) و پرتاب باد عالی، هنوز هم محبوب‌ترین گزینه برای سالن‌های مرغداری محسوب می‌شوند.',
      '- **مزایا:** هزینه اولیه مناسب، پرتاب هوای عالی، رسیدن سریع به دمای مطلوب.',
      '- **معایب در نوع بدون اگزوز:** ورود بخشی از گازهای ناشی از احتراق به داخل سالن و کاهش میزان اکسیژن هوای محیط.',
      '- **راهکار مدرن:** استفاده از جت هیترهای دو موتوره اگزوزدار (دودکش‌دار) که خروجی احتراق را به بیرون از سالن هدایت می‌کنند و هوایی کاملاً پاک و بدون آلاینده‌های کربنی فراهم می‌آورند.',
      '## ۲. هیترهای کابینتی (کوره هوای گرم)',
      'کوره‌های هوای گرم گزینه‌ای ایده‌آل برای سالن‌هایی هستند که مرغدار تمایلی به ورود هیچ‌گونه گاز احتراقی به داخل سالن ندارد. این سیستم‌ها گرما را از طریق مبدل‌های حرارتی به داخل سالن می‌دمند.',
      'البته باید در نظر داشت که راندمان حرارتی این سیستم‌ها نسبت به جت هیترها پایین‌تر است (حدود ۸۰ تا ۸۵ درصد) و برای توزیع یکنواخت گرما، نیازمند کانال‌کشی و یا جت‌فن‌های سیرکوله در داخل سالن می‌باشند.',
      '[CTA|استعلام قیمت انواع جت هیتر و هیتر کابینتی|/contact]',
      '## ۳. سیستم‌های تابشی (گرماتاب)',
      'سیستم‌های تابشی با الگوبرداری از تابش خورشید، به جای گرم کردن کل هوای سالن (که کاری پرهزینه است)، سطح بستر و بدن پرنده را گرم می‌کنند. این تکنولوژی می‌تواند مصرف سوخت را بین ۴۰ تا ۵۰ درصد کاهش دهد.',
      '- یکی از بزرگترین مزایای سیستم تابشی، خشک ماندن بستر است. گرمای تابیده‌شده به سطح بستر، رطوبت فضولات را به سرعت تبخیر کرده و از شیوع بیماری‌های تنفسی و کوکسیدیوز به شدت جلوگیری می‌کند.',
      '## نتیجه‌گیری',
      'ترکیب هوشمندانه این سیستم‌ها با توجه به اقلیم منطقه، بهترین نتیجه را رقم می‌زند. در مناطق بسیار سرد، ترکیب جت هیتر و گرماتاب می‌تواند ایده‌آل‌ترین سناریو باشد.'
    ],
    relatedProductIds: ['vent-jet-heater-series', 'vent-inlet-valve'],
    relatedServiceId: 'srv-poultry-equipment-supply'
  },
  {
    id: 'introduction-to-pouya-butterfly-feeder',
    title: 'معرفی جامع دانخوری پروانه‌ای پویا تحت لیسانس آمریکا (استاندارد FDA)',
    category: 'product-guide',
    categoryLabel: 'معرفی محصول',
    readTime: '۸ دقیقه',
    date: '۱۴۰۳/۰۵/۲۸',
    image: '/images/article_feeder_1787988014850.jpg',
    summary: 'آشنایی عمیق با تکنولوژی انحصاری بشقاب‌های دانخوری پروانه‌ای طیوران صنعت پویا؛ بررسی کاهش پرت دان، بهبود ضریب تبدیل و مزیت‌های بهداشتی.',
    content: [
      'بشقاب دانخوری پروانه‌ای پویا، یک شاهکار مهندسی در صنعت تجهیزات پرورش طیور است. این محصول با الگوبرداری دقیق از استانداردهای روز دنیا و تحت لیسانس شرکت معتبر Butterfly Concepts آمریکا طراحی و در ایران توسط شرکت طیوران صنعت پویا به صورت انحصاری تولید می‌شود.',
      '[IMG|/images/article_feeder_1787988014850.jpg|دانخوری‌های پروانه‌ای با طراحی ارگونومیک برای جوجه‌های یک‌روزه]',
      '## مزیت رقابتی: حذف کامل سینی‌های دستی',
      'مهم‌ترین ویژگی این دانخوری، طراحی منحصربه‌فرد لبه‌ها و کفی آن است. در سیستم‌های سنتی، مرغداران مجبورند در هفته اول جوجه‌ریزی از سینی‌های پلاستیکی یا رول‌های کاغذی در بستر استفاده کنند تا جوجه‌ها بتوانند دان بخورند. این کار علاوه بر صرف نیروی کار زیاد، باعث آلودگی سریع خوراک با فضولات می‌شود.',
      'در بشقاب پروانه‌ای پویا، طراحی ارگونومیک "بال‌های پروانه‌ای" به جوجه یک‌روزه اجازه می‌دهد بدون نیاز به ورود به داخل بشقاب، به راحتی از لبه‌های کوتاه آن دان تمیز را دریافت کند.',
      '## کاهش هدررفت دان تا ۱۵ درصد',
      'با بزرگ‌تر شدن پرنده، لبه‌های دوبل و ضدپاشش (Anti-spill) این بشقاب وارد عمل می‌شوند.',
      '- جلوگیری از بیرون ریختن دان هنگام نوک زدن پرنده',
      '- طراحی شبکه‌ای که مانع از ورود پرنده به داخل بشقاب و کثیف شدن دان می‌شود',
      '- تنظیم دقیق سطح دان در داخل بشقاب بر اساس سن گله',
      '[CTA|استعلام قیمت و سفارش دانخوری پروانه‌ای|/contact]',
      '## متریال و تاییدیه FDA',
      'یکی از افتخارات ما در تولید این محصول، استفاده از پلی‌پروپیلن (PP) گرید بهداشتی کاملاً نو (Virgin) است که توانسته تاییدیه رسمی سازمان غذا و داروی آمریکا (FDA) را دریافت کند. این متریال در برابر اشعه UV، شستشوی مداوم با اسیدها و ضدعفونی‌کننده‌های قوی مرغداری کاملاً مقاوم بوده و طول عمر بالای ۱۰ سال را تضمین می‌کند.',
      'برای یک مرغداری با ظرفیت بالا، حتی ۱ درصد بهبود در ضریب تبدیل (FCR) به معنای ده‌ها میلیون تومان سود خالص در سال است. دانخوری پروانه‌ای پویا، این سودآوری را برای شما تضمین می‌کند.'
    ],
    relatedProductIds: ['feed-butterfly-pan-fda'],
    relatedServiceId: 'srv-poultry-equipment-supply'
  },
  {
    id: 'case-study-implemented-project',
    title: 'مطالعه موردی: تجهیز صفر تا صد مجتمع گوشتی ۱۰۰ هزار قطعه‌ای در قزوین',
    category: 'case-study',
    categoryLabel: 'مطالعه موردی',
    readTime: '۱۵ دقیقه',
    date: '۱۴۰۳/۰۵/۲۰',
    image: '/images/article_casestudy_1787988026030.jpg',
    summary: 'تحلیل دقیق و گزارش فنی از چالش‌ها، راهکارها و دستاوردهای پروژه احداث و تجهیز یک فارم مدرن ۱۰۰ هزار قطعه‌ای مرغ گوشتی.',
    content: [
      'در این مقاله، به بررسی یکی از پروژه‌های موفق و شاخص اجرا شده توسط شرکت طیوران صنعت پویا در استان قزوین می‌پردازیم. این مجتمع شامل ۴ سالن ۲۵ هزار قطعه‌ای مرغ گوشتی بود که کارفرما درخواست اجرای پروژه به صورت Turn-key (کلید تحویل) را داشت.',
      '[IMG|/images/article_casestudy_1787988026030.jpg|نمای بیرونی مجتمع مرغداری گوشتی ۱۰۰ هزار قطعه‌ای احداث‌شده]',
      '## چالش‌های اقلیمی پروژه',
      'استان قزوین دارای تابستان‌های گرم و خشک و زمستان‌های بسیار سرد و سوزناک است. این اختلاف دمای فاحش، نیازمند طراحی یک سیستم تهویه و کنترل اقلیم بسیار منعطف و دقیق بود.',
      '## راهکارهای مهندسی ارائه‌شده',
      'تیم مهندسی طیوران صنعت پویا پس از نقشه‌برداری دقیق، استراتژی زیر را پیاده‌سازی کرد:',
      '- نصب ساندویچ‌پانل‌های پلی‌اورتان ۵ سانتی‌متری در دیواره‌ها و سقف برای ایزولاسیون کامل حرارتی.',
      '- اجرای سیستم تهویه تونلی مجهز به هواکش‌های ۱۴۰ سانتی‌متری استیل با دمپرهای گریز از مرکز.',
      '- استفاده از پدهای سلولزی با ضخامت ۱۰ سانتی‌متر و قاب آلومینیومی در ابتدای سالن‌ها.',
      '- تجهیز کل فارم به سیستم گرمایش جت هیترهای اگزوزدار دوموتوره برای جلوگیری از ورود گازهای آلاینده به سالن.',
      '[CTA|مشاهده پروژه‌های کلیدتحویل و مشاوره رایگان|/contact]',
      '## اتوماسیون و مانیتورینگ آنلاین',
      'برای یک مجتمع با این وسعت، خطای انسانی غیرقابل قبول است. تمامی سالن‌ها به تابلو برق‌های مجهز به PLC شرکت طیوران صنعت مجهز شدند.',
      'این سیستم نه تنها وضعیت دما، رطوبت و آمونیاک را تنظیم می‌کند، بلکه داده‌ها را لحظه‌به‌لحظه بر روی گوشی هوشمند مدیریت فارم ارسال می‌نماید تا نظارت ۲۴ ساعته امکان‌پذیر باشد.',
      '## نتایج و دستاوردها',
      'پس از پایان دومین دوره جوجه‌ریزی در این مجتمع مدرن، رکوردهای بی‌نظیری ثبت شد:',
      '۱. دستیابی به ضریب تبدیل (FCR) فوق‌العاده ۱.۶۲ در وزن زنده ۲.۸ کیلوگرم.',
      '۲. کاهش ۲۵ درصدی مصرف سوخت زمستانه نسبت به واحدهای سنتی همجوار.',
      '۳. یکنواختی (CV) گله بالای ۹۰ درصد که نشان‌دهنده توزیع یکنواخت دما و خوراک در تمامی نقاط سالن بود.',
      'این پروژه اثبات کرد که استفاده از تجهیزات استاندارد، نه تنها یک هزینه اضافه نیست، بلکه تضمین‌کننده بازگشت سریع سرمایه است.'
    ],
    relatedProductIds: ['automation-plc-panel', 'vent-fans-140-100-5blade', 'feed-butterfly-pan-fda'],
    relatedServiceId: 'srv-turnkey-projects'
  },
  {
    id: 'cost-and-components-of-equipping-a-hall',
    title: 'تحلیل هزینه و اجزای تجهیز یک سالن مرغداری استاندارد در سال ۱۴۰۳',
    category: 'business',
    categoryLabel: 'اقتصاد و مدیریت',
    readTime: '۱۰ دقیقه',
    date: '۱۴۰۳/۰۵/۱۲',
    image: '/images/article_costs_1787988037875.jpg',
    summary: 'آنالیز دقیق هزینه‌های راه‌اندازی و بررسی تجهیزات ضروری برای استانداردسازی یک سالن مرغداری مدرن، به همراه فرمول بازگشت سرمایه.',
    content: [
      'یکی از سوالات پرتکرار سرمایه‌گذاران، برآورد هزینه‌های تجهیز یک سالن مرغداری است. در شرایط اقتصادی فعلی، مدیریت هزینه‌های ثابت (CAPEX) و هزینه‌های عملیاتی (OPEX) برای بقا در صنعت طیور ضروری است. هزینه‌ها بر اساس ظرفیت، ابعاد سالن و سطح اتوماسیون متفاوت است، اما اجزای اصلی همواره ثابت هستند.',
      '[IMG|/images/article_costs_1787988037875.jpg|سیلوهای ذخیره و خطوط انتقال دان در یک مرغداری مکانیزه]',
      '## ۱. سیستم دانخوری و انتقال دان',
      'سیستم دانخوری بشقابی اتوماتیک، خطوط انتقال دان (اوگر) و سیلوهای ذخیره، بخش مهمی از بودجه تجهیزات را به خود اختصاص می‌دهند. سرمایه‌گذاری در این بخش مستقیماً بازگشت سرمایه را از طریق کاهش پرت دان تضمین می‌کند.',
      '- خطوط دانخوری پروانه‌ای با موتورگیربکس‌های قدرتمند، اتلاف دان را به صفر رسانده و رقابت پرندگان بر سر خوراک را کاهش می‌دهند.',
      '## ۲. سیستم آبخوری',
      'سیستم آبخوری نیپل استیل (مانند نیپل‌های TSPK) قلب آبرسانی سالن است. استفاده از نیپل‌های بی‌کیفیت موجب چکه کردن آب، خیس شدن بستر و تولید گازهای سمی آمونیاک می‌شود که در نهایت هزینه دارویی گله را افزایش خواهد داد.',
      '[CTA|درخواست استعلام قیمت و پیش‌فاکتور تجهیزات|/contact]',
      '## ۳. تهویه و کنترل اقلیم',
      'بخش حیاتی دیگر هزینه‌ها، مربوط به سیستم‌های تهویه و کنترل اقلیم است (هواکش‌ها، پدها، اینلت‌ها و تابلو برق هوشمند). هیچ‌گاه نباید در کیفیت این تجهیزات صرفه‌جویی کرد.',
      'نصب هواکش‌های ۱۴۰ سانتی‌متری استیل با الکتروموتورهای کلاس F و راندمان بالا، در درازمدت هزینه‌های مصرف برق مرغداری را به شدت کاهش می‌دهد.',
      '## نتیجه‌گیری سرمایه‌گذاری',
      'برای یک سالن ۲۰ هزار قطعه‌ای، تفاوت تجهیز با لوازم ارزان‌قیمت و لوازم استاندارد (با گارانتی شرکتی)، در طی کمتر از ۴ الی ۵ دوره پرورش (به دلیل کاهش تلفات و بهبود ضریب تبدیل) کاملاً جبران می‌شود. برای دریافت آنالیز دقیق و پیش‌فاکتور به‌روز، کارشناسان طیوران صنعت پویا آماده مشاوره رایگان هستند.'
    ],
    relatedProductIds: ['feed-butterfly-pan-fda', 'drink-nipple-steel'],
    relatedServiceId: 'srv-poultry-equipment-supply'
  },
  {
    id: 'before-and-after-renovation',
    title: 'قبل و بعد از نوسازی یک مرغداری: معجزه مکانیزاسیون در کاهش تلفات',
    category: 'case-study',
    categoryLabel: 'مطالعه موردی',
    readTime: '۹ دقیقه',
    date: '۱۴۰۳/۰۴/۲۸',
    image: '/images/article_renovation_1787988050732.jpg',
    summary: 'گزارش تصویری و تحلیلی از تاثیر نوسازی تجهیزات یک مرغداری قدیمی بر افزایش بهره‌وری، کاهش استرس گله و افزایش سودآوری نهایی.',
    content: [
      'بسیاری از مرغداری‌های سنتی به دلیل فرسودگی تجهیزات، با افت شدید راندمان، افزایش تلفات، و بالا رفتن هزینه‌های دارویی مواجه هستند. در این شرایط، مرغدار به جای سودآوری، مدام در حال جبران خسارت است. نوسازی و مکانیزاسیون، راهکاری قطعی برای بازگشت به چرخه رقابت است.',
      '[IMG|/images/article_renovation_1787988050732.jpg|آبخوری‌های نیپل تمام استیل براق و مدرن جایگزین سیستم‌های آویز سنتی]',
      '## چالش‌های واحد پیش از نوسازی',
      'در پروژه نوسازی واحد ۶۰ هزار قطعه‌ای در استان مازندران، مرغدار با مشکلات متعددی دست‌وپنجه نرم می‌کرد:',
      '- خیسی دائمی بستر به دلیل چکه کردن آبخوری‌های آویز و قدیمی',
      '- شیوع شدید بیماری‌های تنفسی و کوکسیدیوز به خاطر گاز آمونیاک ناشی از بستر خیس',
      '- هوای راکد و تهویه ضعیف به دلیل فرسودگی موتور فن‌ها',
      '## اقدامات انجام‌شده در فرآیند نوسازی',
      'تیم مهندسی شرکت طیوران صنعت پویا، در یک بازه زمانی ۱۵ روزه بین دو دوره جوجه‌ریزی، تمامی زیرساخت‌ها را دگرگون کرد:',
      '- **تعویض سیستم آبخوری:** تمامی آبخوری‌های آویز با سیستم نیپل تمام استیل ۳۶۰ درجه ضدچکه (دارای کاپ‌های قرمز رنگ باکیفیت) جایگزین شدند.',
      '- **نوسازی تهویه:** جایگزینی هواکش‌های فرسوده با فن‌های ۱۴۰ گریز از مرکز جدید و نصب پدهای سلولزی با قاب آلومینیومی مستحکم.',
      '- **هوشمندسازی:** نصب یک سیستم کنترل مرکزی (اتوماسیون) جهت پایش دقیق دما و رطوبت.',
      '[CTA|مشاوره فنی رایگان جهت نوسازی فارم شما|/contact]',
      '## بررسی بازدهی پس از یک دوره',
      'بررسی‌های پس از اولین دوره جوجه‌ریزی با تجهیزات جدید، شگفت‌انگیز بود:',
      'به دلیل رفع مشکل رطوبت بستر، مصرف داروهای آنتی‌بیوتیک ۳۰ درصد کاهش یافت. همچنین وزن‌گیری گله به طرز چشمگیری یکنواخت‌تر شده بود و تلفات پایان دوره از ۷ درصد به کمتر از ۲.۵ درصد تقلیل یافت.',
      'این مطالعه اثبات می‌کند که نوسازی هزینه نیست، بلکه یکی از پرسودترین سرمایه‌گذاری‌هایی است که مرغدار می‌تواند انجام دهد.'
    ],
    relatedProductIds: ['drink-nipple-steel', 'vent-cellulose-pad'],
    relatedServiceId: 'srv-turnkey-projects'
  }
];

export const TESTIMONIALS_AND_PROOF = [
  {
    author: 'مهندس احمدی',
    role: 'مدیرعامل مجتمع پرورش طیور نوین فارم',
    location: 'مازندران',
    text: 'استفاده از بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts با تاییدیه FDA باعث شد تلفات هفته اول ما به حداقل برسد و بدون سینی دستی، جوجه‌ها از روز اول به دان دسترسی عالی داشته باشند.',
  },
  {
    author: 'دکتر علیزاده',
    role: 'مدیر فنی کارخانه خوراک دامون',
    location: 'مشهد',
    text: 'سیستم میکرودایزینگ و پرس پلت‌های شرکت طیوران صنعت پویا یکنواختی مخلوط مکمل‌ها و سختی پلت ما را به استاندارد صادراتی رساندند. پشتیبانی ۵۰ ساله این مجموعه واقعاً مایه اطمینان است.',
  },
  {
    author: 'مهندس رضایی',
    role: 'مدیر فارم تخم‌گذار نگین',
    location: 'اصفهان',
    text: 'جت هیترهای تخصصی و سیستم آبخوری نیپل TSPK کارنو با کمترین استهلاک و بدون هیچ‌گونه چکه آب، بستر سالن‌های ما را در اوج زمستان کاملاً خشک نگه داشتند.',
  }
];

export const DEFAULT_HERO_CMS = {
  title: 'طیوران صنعت پویا',
  subtitle: 'توسعه، تجهیز و هوشمندسازی کارخانجات خوراک دام و طیور با بالاترین استانداردهای مهندسی روز دنیا.',
  pillText: 'پیشگام در طراحی سالن و تجهیزات مدرن مرغداری',
  ctaPrimaryText: 'محصولات و تجهیزات',
  ctaSecondaryText: 'تماس با ما',
  backgroundImage: '/images/hero-1.jpg'
};

export const DEFAULT_AI_CONFIG = {
  systemPrompt: `شما «دستیار مهندسی و هوش مصنوعی طیوران صنعت پویا» هستید. شما متخصص طراحی سالن‌های مرغداری گوشتی، تخم‌گذار، مادر، خطوط تولید خوراک دام و طیور، محاسبات تهویه (اینلت، پد سلولزی، هواکش)، سیستم‌های دانخوری بشقابی پروانه‌ای Butterfly Concepts آمریکا (با تاییدیه FDA)، سیستم‌های آبخوری نیپل استیل TSPK و جت هیترهای صنعتی هستید.
وظیفه شما پاسخ دقیق، علمی و مهندسی به زبان فارسی روان، مودبانه و تخصصی است. در صورت نیاز به استعلام قیمت، کاربران را به ثبت درخواست پیش‌فاکتور یا تماس با دفاتر طیوران صنعت پویا هدایت کنید.`,
  welcomeMessage: 'سلام و احترام؛ من دستیار هوشمند فنی و مهندسی طیوران صنعت پویا هستم. چطور می‌توانم در زمینه محاسبات تهویه، انتخاب ماشین‌آلات خوراک، ظرفیت‌سنجی فارم و تجهیزات سالن به شما کمک کنم؟',
  suggestions: [
    'محاسبه تعداد هواکش و اینلت برای سالن مرغداری گوشتی با ظرفیت ۳۰ هزار قطعه',
    'مزایای بشقاب پروانه‌ای تحت لیسانس FDA نسبت به بشقاب‌های سنتی چیست؟',
    'تجهیزات اصلی مورد نیاز برای خط تولید خوراک پلت با ظرفیت ۵ تن در ساعت',
    'روش تنظیم جت هیتر و مدیریت رطوبت در فصول سرد سال'
  ]
};

export const INITIAL_QUOTES = [
  {
    id: 'quote-101',
    createdAt: '۱۴۰۳/۰۸/۱۲ - ۱۱:۳۰',
    status: 'new' as const,
    formData: {
      projectType: 'مرغداری گوشتی ۳۰ هزار قطعه‌ای',
      targetCategory: 'feeding' as const,
      selectedEquipment: ['بشقاب پروانه‌ای Butterfly Concepts', 'خطوط انتقال دان اوگر', 'سیلو ذخیره دان ۱۵ تن'],
      capacity: '۳۰,۰۰۰ قطعه',
      deliveryLocation: 'مازندران، آمل',
      companyName: 'مزرعه پرورشی طبرستان',
      fullName: 'مهندس سعید میرزایی',
      phoneNumber: '09112255880',
      email: 'mirzaei@farm.ir',
      additionalNotes: 'نیاز به برآورد قیمت خط کامل دانخوری بشقابی با موتور گیربکس اروپایی داریم. لطفا پیش‌فاکتور رسمی ارسال فرمایید.',
      hasAttachment: false,
    },
    adminNotes: 'نیاز به بررسی موجودی خطوط اوگر با مهندس فروش'
  },
  {
    id: 'quote-102',
    createdAt: '۱۴۰۳/۰۸/۱۰ - ۱۴:۱۵',
    status: 'in_progress' as const,
    formData: {
      projectType: 'کارخانه خوراک دام و طیور',
      targetCategory: 'machinery' as const,
      selectedEquipment: ['دستگاه پرس پلت صنعتی', 'سیستم میکرودایزینگ ریزمغذی‌ها', 'کاندیشنر دوجداره استیل'],
      capacity: '۱۰ تن در ساعت',
      deliveryLocation: 'خراسان رضوی، نیشابور',
      companyName: 'کارخانه خوراک شرق نوین',
      fullName: 'دکتر علیرضا کاظمی',
      phoneNumber: '09153184490',
      email: 'kazemi@feedmill.com',
      additionalNotes: 'طرح توسعه کارخانه خوراک داریم و مایل به استعلام دای و رولر ۵۰۸ به همراه کاندیشنر بخار دوجداره هستیم.',
      hasAttachment: true,
    },
    adminNotes: 'کاتالوگ و پیشنهاد فنی از طریق واتساپ ارسال شد. در انتظار تایید مالی.'
  }
];

export const INITIAL_CONSULTATIONS = [
  {
    id: 'cons-201',
    createdAt: '۱۴۰۳/۰۸/۱۴ - ۰۹:۴۵',
    status: 'new' as const,
    formData: {
      fullName: 'حاج بهروز ناصری',
      phoneNumber: '09123456789',
      requestType: 'project-design' as const,
      projectType: 'فارم تخم‌گذار قفس اتوماتیک',
      projectCapacity: '۶۰,۰۰۰ سر',
      location: 'قزوین، بوئین‌زهرا',
      message: 'می‌خواهیم دو سوله جدید برای پرورش پولت و تخم‌گذار احداث کنیم. درخواست مشاوره حضوری در دفتر تهران یا مشهد داریم.'
    },
    adminNotes: ''
  },
  {
    id: 'cons-202',
    createdAt: '۱۴۰۳/۰۸/۰۹ - ۱۶:۲۰',
    status: 'contacted' as const,
    formData: {
      fullName: 'مهندس حسینی',
      phoneNumber: '09358899120',
      requestType: 'efficiency-audit' as const,
      projectType: 'مرغداری گوشتی ۴ سالنه',
      projectCapacity: '۴۵,۰۰۰ قطعه',
      location: 'گرگان',
      message: 'مشکل عدم یکنواختی دما در انتهای سالن داریم. تهویه تونلی در تابستان جوابگو نیست و نیاز به ممیزی پد سلولزی و اینلت‌ها داریم.'
    },
    adminNotes: 'مهندس ناظر در گرگان با ایشان هماهنگ کردند برای بازدید میدانی.'
  }
];


export const INITIAL_MEDIA = [
  { id: 'img-casestudy', url: '/images/article_casestudy_1787988026030.jpg', title: 'نمای بیرونی مجتمع مرغداری گوشتی ۱۰۰ هزار قطعه‌ای', createdAt: new Date().toISOString() },
  { id: 'img-costs', url: '/images/article_costs_1787988037875.jpg', title: 'سیلوهای ذخیره و خطوط انتقال دان', createdAt: new Date().toISOString() },
  { id: 'img-design', url: '/images/article_design_1787987990156.jpg', title: 'نمای داخلی سالن مرغداری پیش از جوجه‌ریزی', createdAt: new Date().toISOString() },
  { id: 'img-feeder', url: '/images/article_feeder_1787988014850.jpg', title: 'دانخوری‌های پروانه‌ای برای جوجه یک‌روزه', createdAt: new Date().toISOString() },
  { id: 'img-heating', url: '/images/article_heating_1787988003088.jpg', title: 'جت هیتر صنعتی نصب‌شده در سقف', createdAt: new Date().toISOString() },
  { id: 'img-renovation', url: '/images/article_renovation_1787988050732.jpg', title: 'آبخوری‌های نیپل استیل براق و مدرن', createdAt: new Date().toISOString() },
  { id: 'img-ventilation', url: '/images/article_ventilation_1787987977267.jpg', title: 'نمای هواکش‌ها و پدهای سلولزی در مرغداری', createdAt: new Date().toISOString() }
];
