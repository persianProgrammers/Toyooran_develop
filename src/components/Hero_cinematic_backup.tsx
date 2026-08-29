import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const heroPoultryImg = '/images/poultry-1.jpg';
import { 
  ChevronLeft, 
  ChevronDown,
  Building2, 
  Factory,
  Fan,
  Pill,
  ShieldCheck,
  ArrowDown,
  PhoneCall,
  Package,
  Award,
  CheckCircle2,
  Cpu,
  ArrowLeft
} from 'lucide-react';
import { PageSection, ProductCategory } from '../types';

interface HeroProps {
  cmsHero?: import('../types').HeroCms;
  onNavigate: (section: PageSection) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onOpenAiAssistant?: () => void;
  children?: React.ReactNode;
}

interface CircleCategoryCard {
  id: ProductCategory;
  title: string;
  categoryEn: string;
  icon: React.ElementType;
  desc: string;
  badge: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  specs: string[];
}

export const Hero: React.FC<HeroProps> = ({
  cmsHero,
  onNavigate,
  onSelectCategory,
  onOpenConsultation,
  onOpenQuote,
  onOpenAiAssistant,
  children,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardsSectionRef = useRef<HTMLDivElement>(null);

  // Default beautiful images for poultry & feed mill
  const defaultImages = [
    '/images/hero-1.jpg', // Poultry
    '/images/hero-2.jpg', // Field/Agriculture
    '/images/hero-3.jpg', // Factory/Industrial
  ];

  const validCmsImages = cmsHero?.backgroundImages?.filter(img => img && img.trim() !== '') || [];
  
  const heroImages = validCmsImages.length > 0 
    ? validCmsImages 
    : (cmsHero?.backgroundImage ? [cmsHero.backgroundImage] : defaultImages);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds for a calm, luxurious feel
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToCards = () => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoryCards: CircleCategoryCard[] = [
    {
      id: 'machinery',
      title: 'ماشین‌آلات خوراک',
      categoryEn: 'Feed Machinery',
      icon: Factory,
      desc: 'پرس پلت، اکسترودر، میکرودایزینگ و آسیاب میکسر',
      badge: 'کارخانجات خوراک',
      accentColor: '#003F86',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-[#003F86]',
      specs: ['پرس پلت ۲ الی ۲۰ تن/ساعت', 'میکرودایزینگ دقیق افزودنی‌ها']
    },
    {
      id: 'ventilation',
      title: 'تجهیزات مرغداری',
      categoryEn: 'Farm Equipment',
      icon: Fan,
      desc: 'بشقاب پروانه‌ای FDA، آبخوری نیپل و جت هیتر',
      badge: 'تاییدیه FDA آمریکا',
      accentColor: '#FF9F14',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-700',
      specs: ['بشقاب پروانه‌ای لیسانس آمریکا', 'جت هیتر و سیستم‌های گرمایشی']
    },
    {
      id: 'structure',
      title: 'سوله و سالن صنعتی',
      categoryEn: 'Turnkey Shed',
      icon: Building2,
      desc: 'طراحی، ساخت سازه و تجهیز کامل سالن',
      badge: 'اجرای صفر تا صد',
      accentColor: '#003F86',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      specs: ['سازه‌های سبک و بهداشتی', 'عایق‌بندی و هوابندی کامل']
    },
    {
      id: 'feed_pharma',
      title: 'خوراک و مکمل',
      categoryEn: 'Feed & Supplements',
      icon: Pill,
      desc: 'کنسانتره تخصصی، پریمیکس و روغن خام سویا',
      badge: 'فرمولاسیون علمی',
      accentColor: '#FF9F14',
      badgeBg: 'bg-purple-50',
      badgeText: 'text-purple-700',
      specs: ['کنسانتره گوشتی و تخم‌گذار', 'پریمیکس دامی و روغن‌های گیاهی']
    },
  ];

  return (
    <div className="w-full relative min-h-screen bg-slate-950">
      
      {/* ========================================================================= */}
      {/* 1. 100% FIXED HERO (Redesigned: Clean, Minimalist, Image-Focused) */}
      {/* ========================================================================= */}
      <section 
        id="hero-fixed-pinned-section"
        className="fixed top-0 left-0 right-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 z-0 pointer-events-auto"
      >
        
        {/* Full-bleed Background Image with Elegant Vignette */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="شرکت طیوران صنعت پویا"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          {/* Subtle gradient to ensure text readability but keep image prominent */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50 z-10" />
        </div>

        {/* Minimalist Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full mt-[-8vh] sm:mt-[-5vh]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-slate-100 tracking-wide">
              پیشگام در طراحی سالن و تجهیزات مدرن مرغداری
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.15] tracking-tight drop-shadow-2xl mb-6"
          >
            {cmsHero?.title || 'طیوران صنعت پویا'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-xl text-slate-200/90 leading-relaxed max-w-2xl font-light drop-shadow-lg mb-10"
          >
            {cmsHero?.subtitle || 'توسعه، تجهیز و هوشمندسازی کارخانجات خوراک دام و طیور با بالاترین استانداردهای مهندسی روز دنیا.'}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToCards}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-[#FF9F14] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1 transition-all"
            >
              <Package className="w-4 h-4" />
              <span>{cmsHero?.ctaPrimaryText || 'محصولات و تجهیزات'}</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-slate-900/40 hover:bg-slate-800/60 text-white font-bold px-8 py-3.5 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 border border-white/20 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{cmsHero?.ctaSecondaryText || 'تماس با ما'}</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
          onClick={scrollToCards}
        >
          <span className="text-[10px] sm:text-xs tracking-widest text-white/50 font-medium">اسکرول کنید</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm bg-slate-950/20">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full"
            />
          </div>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* 2. INVISIBLE SCROLL SPACER (Fits exact viewport height) */}
      {/* ========================================================================= */}
      <div className="w-full h-[100dvh] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 3. SLIDING DRAWER / COVER SHEET */}
      {/* ========================================================================= */}
      <div 
        ref={cardsSectionRef}
        id="categories-drawer-sheet"
        className="relative z-20 w-full bg-[#F8FAFC] shadow-[0_-30px_70px_rgba(0,0,0,0.65)] rounded-t-lg sm:rounded-t-lg border-t border-slate-200/90 py-6 sm:py-8"
      >
        
        {/* Subtle Top Pull Handle Bar */}
        <div className="w-14 h-1.5 bg-slate-300 hover:bg-amber-400 rounded-full mx-auto mb-4 transition-colors" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Title Header */}
          <div className="w-full mb-6 text-center sm:text-right flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block mb-1.5">
                دسته‌بندی تخصصی طیوران صنعت پویا
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#003F86]">
                خطوط تولید، تجهیزات و خدمات صفر تا صد مرغداری
              </h2>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="self-center sm:self-auto text-xs bg-white hover:bg-slate-100 text-[#003F86] font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-500" />
              <span>ارتباط با واحد فروش و مهندسی</span>
            </button>
          </div>

          {/* ✨ Ultra-Premium Cinematic Hover-Preview Layout */}
          <div className="relative z-10 w-full py-6 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full min-h-[500px]">
              
              {/* Right Column: The Interactive Menu Stack (takes 5 columns) */}
              <div className="col-span-1 lg:col-span-5 flex flex-col gap-3 order-2 lg:order-1">
                {/* Brand Header above menu */}
                <div className="px-2 mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-wider text-slate-500">
                    انتخاب دسته‌بندی خدمات
                  </span>
                  <div className="h-px flex-1 bg-slate-200/80 mx-4" />
                </div>

                {categoryCards.map((card, idx) => {
                  const Icon = card.icon;
                  const isActive = hoveredIndex === idx;
                  
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => onSelectCategory(card.id)}
                      className={`
                        relative group flex items-center p-4 sm:p-5 rounded-2xl sm:rounded-[24px] cursor-pointer
                        transition-all duration-500 overflow-hidden border
                        ${isActive 
                          ? 'bg-[#003F86] border-[#003F86] shadow-xl shadow-blue-900/20 lg:-translate-x-3' 
                          : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-blue-200 backdrop-blur-md shadow-sm'
                        }
                      `}
                    >
                      {/* Active Glow */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent blur-xl" />
                      )}
                      
                      <div className={`
                        w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-500 relative z-10
                        ${isActive ? 'bg-white/20 text-white shadow-inner' : 'bg-blue-50 text-[#003F86] group-hover:bg-blue-100'}
                      `}>
                        <Icon className={`w-6 h-6 transition-transform duration-500 ${isActive ? 'scale-110' : ''}`} />
                      </div>
                      
                      <div className="flex-1 mr-4 text-right relative z-10">
                        <h3 className={`text-sm sm:text-base font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-800'}`}>
                          {card.title}
                        </h3>
                        <span className={`text-[10px] font-bold mt-1 inline-block px-2 py-0.5 rounded-md transition-colors duration-500 ${isActive ? 'bg-white/10 text-blue-100' : 'bg-slate-100 text-slate-500'}`}>
                          {card.badge}
                        </span>
                      </div>
                      
                      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-amber-400 text-slate-900 shadow-[0_0_15px_rgba(251,191,36,0.4)]' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#003F86]'}`}>
                        <ArrowLeft className={`w-4 h-4 transition-transform duration-500 ${isActive ? '-translate-x-1' : ''}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Left Column: The Cinematic Display Stage (takes 7 columns) */}
              <div className="col-span-1 lg:col-span-7 order-1 lg:order-2">
                <div className="relative w-full h-full min-h-[420px] lg:min-h-full rounded-[32px] overflow-hidden bg-slate-950 shadow-2xl border border-white/10 group">
                  
                  {/* Persistent background elements */}
                  <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
                  
                  <AnimatePresence mode="wait">
                    {hoveredIndex === null ? (
                      <motion.div
                        key="brand-state"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 z-10 flex flex-col p-8 sm:p-10 lg:p-12 justify-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#003F86]/90 via-[#001c3d] to-amber-900/30" />
                        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#003F86] rounded-full blur-[120px] opacity-40 animate-pulse pointer-events-none" />
                        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-amber-600/20 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="relative z-20 h-full flex flex-col justify-between">
                          <div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-black text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20 backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.15)] mb-6">
                              <Award className="w-4 h-4" />
                              خدمات مهندسی سطح یک
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
                              طیوران صنعت پویا
                            </h2>
                            <p className="text-sm sm:text-base text-blue-100/90 mt-5 max-w-md leading-relaxed font-medium">
                              طراحی، مشاوره و اجرای پیشرفته‌ترین سیستم‌های پرورشی و کارخانجات خوراک دام و طیور با رعایت دقیق‌ترین استانداردهای مهندسی روز دنیا.
                            </p>
                            <p className="text-xs text-amber-400/80 mt-3 font-bold">
                              «برای مشاهده جزئیات، روی دسته‌بندی‌ها نگه دارید»
                            </p>
                          </div>
                          
                          <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button onClick={onOpenConsultation} className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_5px_20px_rgba(251,191,36,0.3)] cursor-pointer">
                              <span>درخواست مشاوره رایگان</span>
                              <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              <span className="text-white text-xs sm:text-sm font-bold">گارانتی طلایی ۲۴ ماهه</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`category-${hoveredIndex}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 z-10 flex flex-col p-8 sm:p-10 lg:p-12 justify-center"
                      >
                        {(() => {
                          const card = categoryCards[hoveredIndex];
                          const Icon = card.icon;
                          return (
                            <>
                              {/* Dynamic category background */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-[#003F86]/60" />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
                              
                              {/* Massive watermark icon */}
                              <div className="absolute -left-16 -bottom-16 text-white/5 -rotate-12 pointer-events-none">
                                <Icon className="w-96 h-96" strokeWidth={0.5} />
                              </div>
                              
                              <div className="relative z-20 h-full flex flex-col">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.2)] mb-8">
                                  <Icon className="w-8 h-8" />
                                </div>
                                
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 drop-shadow-md leading-tight">
                                  {card.title}
                                </h2>
                                
                                <p className="text-sm sm:text-base text-blue-50/90 leading-relaxed max-w-lg mb-8 font-medium">
                                  {card.desc}
                                </p>
                                
                                <div className="mt-auto self-start">
                                  <button
                                    onClick={() => onSelectCategory(card.id)}
                                    className="group/btn relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black px-6 py-3.5 rounded-2xl flex items-center justify-center gap-4 transition-all backdrop-blur-md cursor-pointer shadow-lg"
                                  >
                                    <span className="relative z-10">ورود به بخش {card.title.split(' ')[0]}</span>
                                    <span className="relative z-10 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:-translate-x-1 transition-transform">
                                      <ArrowLeft className="w-4 h-4" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quick Feature Strip */}
          <div className="relative z-10 w-full mt-6">
            <div className="bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-3 sm:px-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 shadow-2xs">
              
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  استاندارد ماشین‌آلات سنگین CE
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="hidden sm:inline text-slate-500">
                  پشتیبانی فنی ۲۴/۷ و تامین فوری قطعات کارخانه
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#003F86] hover:text-amber-500 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>مشاوره و تماس با ما</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Seamless Content Continuation (About & Contact Unified Section) */}
          {children && (
            <div className="relative z-10 w-full mt-8 sm:mt-10">
              {children}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
