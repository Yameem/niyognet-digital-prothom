
import React, { createContext, useContext, useState } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  bn: {
    // Header
    'nav.howItWorks': 'এটি কীভাবে কাজ করে',
    'nav.forClients': 'ক্লায়েন্টদের জন্য',
    'nav.forFreelancers': 'ফ্রিল্যান্সারদের জন্য',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.login': 'লগইন',
    'nav.getStarted': 'শুরু করুন — এটি বিনামূল্যে',
    
    // Hero Section
    'hero.title': 'যাচাইকৃত স্থানীয় প্রতিভার সাথে সংযোগ — দ্রুত, সাশ্রয়ী, নির্ভরযোগ্য',
    'hero.subtitle': 'পোর্টফলিও ব্রাউজ করুন, মাইলস্টোন সেট করুন, বিকাশ ও নগদের মাধ্যমে নিরাপদে পেমেন্ট করুন',
    'hero.searchPlaceholder': 'আপনি কোন সেবা খুঁজছেন?',
    'hero.searchButton': 'খুঁজুন',
    
    // How It Works
    'howItWorks.title': 'এটি কীভাবে কাজ করে',
    'howItWorks.step1.title': 'আপনার প্রকল্প পোস্ট করুন',
    'howItWorks.step1.desc': 'মিনিটেই আপনার বিবরণ, বাজেট এবং সময়সীমা জমা দিন',
    'howItWorks.step2.title': 'ম্যাচ ও চ্যাট',
    'howItWorks.step2.desc': 'আমরা সত্যিকারের পোর্টফলিও সহ শীর্ষ ফ্রিল্যান্সারদের সুপারিশ করি',
    'howItWorks.step3.title': 'অনুমোদন ও পেমেন্ট',
    'howItWorks.step3.desc': 'প্রতিটি মাইলস্টোন অনুমোদিত হওয়ার সাথে সাথে পেমেন্ট ছাড় করুন',
    
    // Footer
    'footer.brand': 'নিয়োগনেট',
    'footer.description': 'বাংলাদেশের সেরা ফ্রিল্যান্সারদের স্থানীয় ব্যবসার সাথে সংযুক্ত করা',
    'footer.quickLinks': 'দ্রুত লিংক',
    'footer.privacyPolicy': 'গোপনীয়তা নীতি',
    'footer.termsOfService': 'সেবার শর্তাবলী',
    'footer.contactUs': 'যোগাযোগ করুন',
    'footer.blog': 'ব্লগ',
    'footer.forBusinesses': 'ব্যবসার জন্য',
    'footer.postJob': 'কাজ পোস্ট করুন',
    'footer.successStories': 'সফলতার গল্প',
    'footer.followUs': 'আমাদের ফলো করুন',
    'footer.copyright': '© ২০২৫ নিয়োগনেট। সকল অধিকার সংরক্ষিত।'
  },
  en: {
    // Header
    'nav.howItWorks': 'How It Works',
    'nav.forClients': 'For Clients',
    'nav.forFreelancers': 'For Freelancers',
    'nav.about': 'About Us',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started — It\'s Free',
    
    // Hero Section
    'hero.title': 'Connect with Vetted Local Talent — Fast, Affordable, Reliable',
    'hero.subtitle': 'Browse portfolios, set milestones, pay securely via bKash & Nagad',
    'hero.searchPlaceholder': 'What service are you looking for?',
    'hero.searchButton': 'Search',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1.title': 'Post Your Project',
    'howItWorks.step1.desc': 'Submit your brief, budget, and timeline in minutes',
    'howItWorks.step2.title': 'Match & Chat',
    'howItWorks.step2.desc': 'We suggest top freelancers with real portfolios',
    'howItWorks.step3.title': 'Approve & Pay',
    'howItWorks.step3.desc': 'Release payment as each milestone is approved',
    
    // Footer
    'footer.brand': 'NiyogNet',
    'footer.description': 'Connecting Bangladesh\'s best freelancers with local businesses',
    'footer.quickLinks': 'Quick Links',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.contactUs': 'Contact Us',
    'footer.blog': 'Blog',
    'footer.forBusinesses': 'For Businesses',
    'footer.postJob': 'Post a Job',
    'footer.successStories': 'Success Stories',
    'footer.followUs': 'Follow Us',
    'footer.copyright': '© 2025 NiyogNet. All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bn');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['bn']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
