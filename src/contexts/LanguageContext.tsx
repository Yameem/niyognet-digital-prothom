
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
    
    // Features
    'features.title': 'কেন নিয়োগনেট বেছে নেবেন?',
    'features.portfolios.title': 'বাস্তব পোর্টফলিও ও রিভিউ',
    'features.portfolios.desc': 'আগে/পরে নমুনা এবং ক্লায়েন্ট রেটিং দেখুন',
    'features.payments.title': 'মাইলস্টোন পেমেন্ট',
    'features.payments.desc': 'আপনার শর্তে নিরাপদ পেমেন্ট ছাড়',
    'features.workflow.title': 'গাইডেড ওয়ার্কফ্লো',
    'features.workflow.desc': 'স্পষ্ট প্রকল্প পদক্ষেপ দিয়ে ট্র্যাকে থাকুন',
    'features.localPayments.title': 'স্থানীয় পেমেন্ট',
    'features.localPayments.desc': 'বিকাশ ও নগদের মাধ্যমে তাৎক্ষণিক, কম ফি ট্রান্সফার',
    
    // Testimonials
    'testimonials.title': 'আমাদের ক্লায়েন্টরা কী বলেন',
    
    // CTA Section
    'cta.title': 'আপনার প্রকল্প শুরু করতে প্রস্তুত?',
    'cta.subtitle': 'হাজারো স্থানীয় ব্যবসার সাথে যোগ দিন যারা তাদের ফ্রিল্যান্সিং প্রয়োজনে নিয়োগনেটে বিশ্বাস করে',
    'cta.findTalentButton': 'এখনই প্রতিভা খুঁজুন',
    
    // AI Matching Section
    'aiMatching.title': 'বা আমাদের AI ম্যাচিং ব্যবহার করুন',
    'aiMatching.subtitle': 'আপনার প্রকল্পের জন্য নিখুঁত ফ্রিল্যান্সার খুঁজে পেতে আমাদের স্মার্ট ম্যাচিং সিস্টেম ব্যবহার করুন',
    'aiMatching.button': 'প্রকল্প পোস্ট করুন',
    
    // Project Form
    'projectForm.title': 'আপনার প্রকল্পের বিবরণ',
    'projectForm.titleLabel': 'প্রকল্পের শিরোনাম',
    'projectForm.titlePlaceholder': 'যেমন: আমার ব্যবসার জন্য লোগো ডিজাইন',
    'projectForm.descriptionLabel': 'প্রকল্পের বিবরণ',
    'projectForm.descriptionPlaceholder': 'আপনার প্রয়োজনীয়তা বিস্তারিত বর্ণনা করুন...',
    'projectForm.budgetLabel': 'বাজেট (টাকা)',
    'projectForm.minBudgetPlaceholder': 'সর্বনিম্ন',
    'projectForm.maxBudgetPlaceholder': 'সর্বোচ্চ',
    'projectForm.submitButton': 'AI ম্যাচ খুঁজুন',
    
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
    
    // Features
    'features.title': 'Why Choose NiyogNet?',
    'features.portfolios.title': 'Real Portfolios & Reviews',
    'features.portfolios.desc': 'See before/after samples and client ratings',
    'features.payments.title': 'Milestone Payments',
    'features.payments.desc': 'Secure payments released on your terms',
    'features.workflow.title': 'Guided Workflows',
    'features.workflow.desc': 'Stay on track with clear project steps',
    'features.localPayments.title': 'Local Payments',
    'features.localPayments.desc': 'Instant, low-fee transfers via bKash & Nagad',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // CTA Section
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': 'Join thousands of local businesses who trust NiyogNet for their freelancing needs',
    'cta.findTalentButton': 'Find Talent Now',
    
    // AI Matching Section
    'aiMatching.title': 'Or Use Our AI Matching',
    'aiMatching.subtitle': 'Use our smart matching system to find the perfect freelancer for your project',
    'aiMatching.button': 'Post Project',
    
    // Project Form
    'projectForm.title': 'Project Details',
    'projectForm.titleLabel': 'Project Title',
    'projectForm.titlePlaceholder': 'e.g., Logo design for my business',
    'projectForm.descriptionLabel': 'Project Description',
    'projectForm.descriptionPlaceholder': 'Describe your requirements in detail...',
    'projectForm.budgetLabel': 'Budget (BDT)',
    'projectForm.minBudgetPlaceholder': 'Minimum',
    'projectForm.maxBudgetPlaceholder': 'Maximum',
    'projectForm.submitButton': 'Find AI Matches',
    
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
