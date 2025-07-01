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
    
    // AI Matching Section
    'hero.aiMatching.title': 'AI-এর সাহায্যে নিখুঁত ফ্রিল্যান্সার খুঁজুন',
    'hero.aiMatching.subtitle': 'আপনার প্রকল্পের বিষয়ে বলুন এবং আমাদের AI আপনার জন্য সেরা ফ্রিল্যান্সারদের খুঁজে দিক',
    'hero.aiMatching.button': 'AI ম্যাচিং ব্যবহার করুন',
    'hero.aiMatching.dialogTitle': 'AI-ম্যাচিং ফ্রিল্যান্সার পান',
    'hero.aiMatching.projectTitle': 'প্রকল্পের শিরোনাম',
    'hero.aiMatching.projectTitlePlaceholder': 'যেমন: রেস্তোরাঁর জন্য সোশ্যাল মিডিয়া মার্কেটিং',
    'hero.aiMatching.deadline': 'সময়সীমা',
    'hero.aiMatching.deadlinePlaceholder': 'যেমন: ২ সপ্তাহ, ১ মাস',
    'hero.aiMatching.minBudget': 'সর্বনিম্ন বাজেট (৳)',
    'hero.aiMatching.maxBudget': 'সর্বোচ্চ বাজেট (৳)',
    'hero.aiMatching.findMatches': 'AI ম্যাচ খুঁজুন',
    
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
    'footer.copyright': '© ২০২৫ নিয়োগনেট। সকল অধিকার সংরক্ষিত।',
    
    // Search Talent Page
    'search.placeholder': 'সেবা বা ফ্রিল্যান্সার খুঁজুন...',
    'search.button': 'খুঁজুন',
    'search.filters': 'ফিল্টার',
    'search.category': 'ক্যাটেগরি',
    'search.selectCategory': 'ক্যাটেগরি নির্বাচন করুন',
    'search.priceRange': 'মূল্য পরিসীমা',
    'search.selectPriceRange': 'মূল্য পরিসীমা নির্বাচন করুন',
    'search.rating': 'রেটিং',
    'search.minRating': 'সর্বনিম্ন রেটিং',
    'search.aiSuggested': 'AI সুপারিশকৃত ফ্রিল্যান্সার',
    'search.allFreelancers': 'সকল ফ্রিল্যান্সার',
    'search.results': 'ফলাফল',
    'search.reviews': 'রিভিউ',
    'search.startingAt': 'শুরু',
    'search.viewProfile': 'প্রোফাইল দেখুন',
    'search.chat': 'চ্যাট',
    'search.yourProject': 'আপনার প্রকল্প',
    'search.brief': 'সংক্ষিপ্ত বিবরণ',
    'search.budget': 'বাজেট',
    'search.deadline': 'সময়সীমা',
    'search.matchesFound': 'পাওয়া ম্যাচ',
    'search.freelancers': 'ফ্রিল্যান্সার',
    'search.publishJob': 'কাজের পোস্ট প্রকাশ করুন',
    
    // Categories
    'category.socialPosts': 'সোশ্যাল পোস্ট',
    'category.adSetup': 'বিজ্ঞাপন সেটআপ',
    'category.copywriting': 'কপিরাইটিং',
    'category.productPhotos': 'প্রোডাক্ট ফটো',
    'category.webDesign': 'ওয়েব ডিজাইন',
    
    // Price ranges
    'price.under1000': '৳১,০০০ এর নিচে',
    'price.1000to2000': '৳১,০০০ - ৳২,০০০',
    'price.2000to5000': '৳২,০০০ - ৳৫,০০০',
    'price.over5000': '৳৫,০০০ এর উপরে',
    
    // Ratings
    'rating.4.5plus': '৪.৫+ তারকা',
    'rating.4.0plus': '৪.০+ তারকা',
    'rating.3.5plus': '৩.৫+ তারকা',
    
    // Skills
    'skill.digitalMarketing': 'ডিজিটাল মার্কেটিং',
    'skill.graphicDesign': 'গ্রাফিক ডিজাইন',
    'skill.contentWriting': 'কন্টেন্ট রাইটিং',
    'skill.socialMedia': 'সোশ্যাল মিডিয়া',
    'skill.webDevelopment': 'ওয়েব ডেভেলপমেন্ট',
    'skill.photography': 'ফটোগ্রাফি'
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
    
    // AI Matching Section
    'hero.aiMatching.title': 'Get AI-Matched with Perfect Freelancers',
    'hero.aiMatching.subtitle': 'Tell us about your project and let our AI find the best freelancers for you',
    'hero.aiMatching.button': 'Try AI Matching',
    'hero.aiMatching.dialogTitle': 'Get AI-Matched Freelancers',
    'hero.aiMatching.projectTitle': 'Project Title',
    'hero.aiMatching.projectTitlePlaceholder': 'e.g., Social media marketing for restaurant',
    'hero.aiMatching.deadline': 'Deadline',
    'hero.aiMatching.deadlinePlaceholder': 'e.g., 2 weeks, 1 month',
    'hero.aiMatching.minBudget': 'Min Budget (৳)',
    'hero.aiMatching.maxBudget': 'Max Budget (৳)',
    'hero.aiMatching.findMatches': 'Find AI Matches',
    
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
    'footer.copyright': '© 2025 NiyogNet. All rights reserved.',
    
    // Search Talent Page
    'search.placeholder': 'Search for services or freelancers...',
    'search.button': 'Search',
    'search.filters': 'Filters',
    'search.category': 'Category',
    'search.selectCategory': 'Select category',
    'search.priceRange': 'Price Range',
    'search.selectPriceRange': 'Select price range',
    'search.rating': 'Rating',
    'search.minRating': 'Minimum rating',
    'search.aiSuggested': 'AI-Suggested Matches',
    'search.allFreelancers': 'All Freelancers',
    'search.results': 'results',
    'search.reviews': 'reviews',
    'search.startingAt': 'Starting at',
    'search.viewProfile': 'View Profile',
    'search.chat': 'Chat',
    'search.yourProject': 'Your Project',
    'search.brief': 'Brief',
    'search.budget': 'Budget',
    'search.deadline': 'Deadline',
    'search.matchesFound': 'Matches Found',
    'search.freelancers': 'freelancers',
    'search.publishJob': 'Publish Job Post',
    
    // Categories
    'category.socialPosts': 'Social Posts',
    'category.adSetup': 'Ad Setup',
    'category.copywriting': 'Copywriting',
    'category.productPhotos': 'Product Photos',
    'category.webDesign': 'Web Design',
    
    // Price ranges
    'price.under1000': 'Under ৳1,000',
    'price.1000to2000': '৳1,000 - ৳2,000',
    'price.2000to5000': '৳2,000 - ৳5,000',
    'price.over5000': 'Over ৳5,000',
    
    // Ratings
    'rating.4.5plus': '4.5+ Stars',
    'rating.4.0plus': '4.0+ Stars',
    'rating.3.5plus': '3.5+ Stars',
    
    // Skills
    'skill.digitalMarketing': 'Digital Marketing',
    'skill.graphicDesign': 'Graphic Design',
    'skill.contentWriting': 'Content Writing',
    'skill.socialMedia': 'Social Media',
    'skill.webDevelopment': 'Web Development',
    'skill.photography': 'Photography'
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
