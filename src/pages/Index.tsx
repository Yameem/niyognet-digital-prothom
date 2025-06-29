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
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-gray-800">
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
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('howItWorks.step1.title')}
              </h3>
              <p className="text-gray-600">
                {t('howItWorks.step1.desc')}
              </p>
            </div>
            {/* Step 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('howItWorks.step2.title')}
              </h3>
              <p className="text-gray-600">
                {t('howItWorks.step2.desc')}
              </p>
            </div>
            {/* Step 3 */}
            <div>
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
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.portfolios.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.portfolios.desc')}
              </p>
            </div>
            {/* Feature 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.payments.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.payments.desc')}
              </p>
            </div>
            {/* Feature 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('features.workflow.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.workflow.desc')}
              </p>
            </div>
            {/* Feature 4 */}
            <div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            "নিয়োগনেট আমাদের ব্যবসার জন্য সেরা ফ্রিল্যান্সার খুঁজে পেতে সাহায্য করেছে।
            তাদের প্ল্যাটফর্ম ব্যবহার করা সহজ এবং আমরা খুব দ্রুত একজন ভালো কন্টেন্ট
            রাইটার পেয়েছি।" - জন স্মিথ, সিইও
          </p>
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
              {t('projectForm.descriptionPlaceholder')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="budget" className="text-right">
                {t('projectForm.budgetLabel')}
              </Label>
              <Input 
                id="minBudget" 
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="col-span-1" 
                placeholder={t('projectForm.minBudgetPlaceholder')} 
              />
              <Input 
                id="maxBudget" 
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="col-span-1" 
                placeholder={t('projectForm.maxBudgetPlaceholder')} 
              />
            </div>
          </div>
          <Button onClick={handleProjectSubmit} className="bg-blue-600 hover:bg-blue-700">
            {t('projectForm.submitButton')}
          </Button>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Index;
