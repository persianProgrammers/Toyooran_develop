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

          {/* 🚀 Mind-Blowing Interactive Horizontal Accordion Redesign */}
          <div className="relative z-10 w-full py-6">
            {/* The Expandable Container */}
            <div className="flex flex-col lg:flex-row h-[600px] lg:h-[480px] w-full gap-4 group/accordion">
              
              {categoryCards.map((card, idx) => {
                const Icon = card.icon;
                const gradients = [
                  'from-[#001c3d] to-[#003F86]',
                  'from-slate-900 to-slate-800',
                  'from-[#4A3000] to-amber-700',
                  'from-[#00224B] to-indigo-900'
                ];
                
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectCategory(card.id)}
                    className={`
                      group relative flex-1 hover:flex-[3] 
                      w-full h-full rounded-[32px] overflow-hidden
                      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
                      border border-slate-200/20 hover:border-white/40
                      shadow-lg hover:shadow-2xl hover:shadow-blue-900/20
                      bg-slate-900
                    `}
                  >
                    {/* Rich Gradient & Texture */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-90 transition-opacity duration-700 group-hover:opacity-100`} />
                    <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
                    
                    {/* Animated Glow Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-400/20 group-hover:scale-150 transition-all duration-1000 ease-out" />

                    {/* Huge Watermark Icon */}
                    <div className="absolute -right-8 -bottom-8 lg:top-1/2 lg:-translate-y-1/2 lg:-right-12 text-white/5 group-hover:text-white/10 transition-all duration-1000 ease-out group-hover:scale-125 group-hover:-rotate-12 pointer-events-none">
                      <Icon className="w-48 h-48 lg:w-72 lg:h-72" strokeWidth={1} />
                    </div>

                    {/* Content Structure */}
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                      {/* Top Row: Huge Number & Arrow */}
                      <div className="flex items-start justify-between">
                        <span className="text-4xl lg:text-5xl font-black text-white/40 group-hover:text-white transition-colors duration-700 font-mono tracking-tighter drop-shadow-md">
                          0{idx + 1}
                        </span>
                        <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 group-hover:scale-110 transition-all duration-500 shadow-xl">
                          <ArrowLeft className="w-5 h-5 transform rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                        </div>
                      </div>

                      {/* Bottom Row: Title, Badge, Description */}
                      <div className="mt-auto flex flex-col justify-end min-h-[120px]">
                        {/* This wrapper slides up on hover */}
                        <div className="transform lg:translate-y-12 lg:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                          
                          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-xs font-bold mb-3 border border-white/20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 text-amber-300 whitespace-nowrap">
                            {card.badge}
                          </span>
                          
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-lg">
                            {card.title}
                          </h3>
                          
                          {/* Description - Fades in on hover (Desktop) or always visible (Mobile) */}
                          <p className="text-xs sm:text-sm text-blue-50/80 line-clamp-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-200 w-full lg:w-4/5 leading-relaxed font-medium">
                            {card.desc}
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Epic Floating Brand CTA Banner below the accordion */}
            <div className="mt-6 w-full relative group cursor-pointer" onClick={onOpenConsultation}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-[#FF9F14] to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative bg-slate-900 border border-slate-700 hover:border-amber-400/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 overflow-hidden">
                {/* Background Graphic */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#003F86] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#003F86] to-[#001c3d] border border-blue-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1">طیوران صنعت پویا</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-emerald-400/90"><CheckCircle2 className="w-4 h-4" /> گارانتی ۲۴ ماهه</span>
                      <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <span className="flex items-center gap-1 text-amber-400/90"><ShieldCheck className="w-4 h-4" /> خدمات نصب سراسر کشور</span>
                    </div>
                  </div>
                </div>
                
                <button className="relative z-10 w-full md:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform duration-300 transform active:scale-95 shadow-lg">
                  <span>درخواست مشاوره مهندسی</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
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
