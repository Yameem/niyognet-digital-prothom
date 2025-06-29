
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const navigate = useNavigate();

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project submitted:', { projectTitle, projectDescription, minBudget, maxBudget });
    setIsDialogOpen(false);
    // Navigate to search talent page with AI matches
    navigate('/search-talent');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-4"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-white">
            {t('hero.subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  className="w-full pl-12 pr-4 py-4 text-lg border-none focus:outline-none"
                />
              </div>
              <Link to="/search-talent">
                <Button size="lg" className="px-8 py-4 text-lg bg-green-700 hover:bg-green-800 rounded-none">
                  {t('hero.searchButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {t('howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('howItWorks.step1.title')}
              </h3>
              <p className="text-gray-600">
                {t('howItWorks.step1.desc')}
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('howItWorks.step2.title')}
              </h3>
              <p className="text-gray-600">
                {t('howItWorks.step2.desc')}
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('howItWorks.step3.title')}
              </h3>
              <p className="text-gray-600">
                {t('howItWorks.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.portfolios.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.portfolios.desc')}
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.payments.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.payments.desc')}
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.workflow.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.workflow.desc')}
              </p>
            </div>
            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.localPayments.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.localPayments.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {t('testimonials.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "নিয়োগনেট আমাদের ব্যবসার জন্য সেরা ফ্রিল্যান্সার খুঁজে পেতে সাহায্য করেছে। তাদের প্ল্যাটফর্ম ব্যবহার করা সহজ এবং আমরা খুব দ্রুত একজন ভালো কন্টেন্ট রাইটার পেয়েছি।"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">জন স্মিথ</div>
                  <div className="text-gray-600">সিইও, টেক কোম্পানি</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link to="/search-talent">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-3">
              {t('cta.findTalentButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* AI Matching Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('aiMatching.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('aiMatching.subtitle')}
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsDialogOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
          >
            {t('aiMatching.button')}
          </Button>
        </div>
      </section>

      {/* Project Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div></div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('projectForm.title')}</DialogTitle>
            <DialogDescription>
              {t('projectForm.description')}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleProjectSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                {t('projectForm.titleLabel')}
              </Label>
              <Input 
                id="title" 
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="col-span-3" 
                placeholder={t('projectForm.titlePlaceholder')} 
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                {t('projectForm.descriptionLabel')}
              </Label>
              <Input 
                id="description" 
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="col-span-3" 
                placeholder={t('projectForm.descriptionPlaceholder')} 
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="budget" className="text-right">
                {t('projectForm.budgetLabel')}
              </Label>
              <Input 
                id="minBudget" 
                type="number"
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="col-span-1" 
                placeholder={t('projectForm.minBudgetPlaceholder')} 
                required
              />
              <Input 
                id="maxBudget" 
                type="number"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="col-span-1" 
                placeholder={t('projectForm.maxBudgetPlaceholder')} 
                required
              />
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {t('projectForm.submitButton')}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Index;
