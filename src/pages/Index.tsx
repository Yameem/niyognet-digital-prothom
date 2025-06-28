
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, MessageSquare, Shield, Star, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "রহিম উদ্দিন",
    role: "ক্যাফে মালিক, ঢাকা",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "নিয়োগনেট আমাকে আমার ক্যাফের সোশ্যাল মিডিয়ার জন্য দুর্দান্ত ডিজাইনার খুঁজে পেতে সাহায্য করেছে। ন্যায্য দামে মানসম্পন্ন কাজ!"
  },
  {
    name: "সারা খান",
    role: "বুটিকের মালিক, চট্টগ্রাম", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "এখানকার ফ্রিল্যান্সাররা স্থানীয় বাজারের চাহিদা বুঝে। তাদের প্রচারণার পর আমার বিক্রয় ৩০% বেড়েছে।"
  },
  {
    name: "করিম আহমেদ",
    role: "রেস্তোরাঁ চেইন, সিলেট",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "বিকাশের মাধ্যমে নিরাপদ পেমেন্ট সবকিছু সহজ করে দিয়েছে। স্থানীয় ব্যবসার জন্য অত্যন্ত সুপারিশ!"
  }
];

const Index = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project submitted:", { projectTitle, projectDescription, minBudget, maxBudget });
    setIsDialogOpen(false);
    // Navigate to search page with AI matches
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-800 text-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-gray-900">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in text-gray-800">
            {t('hero.subtitle')}
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto animate-fade-in">
            <div className="flex bg-white rounded-lg p-2 shadow-lg">
              <Input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 text-gray-900 text-lg focus-visible:ring-0"
              />
              <Button type="submit" size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                <Search className="h-5 w-5 mr-2" />
                {t('hero.searchButton')}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t('howItWorks.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('howItWorks.step1.title')}</h3>
                <p className="text-gray-600">{t('howItWorks.step1.desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('howItWorks.step2.title')}</h3>
                <p className="text-gray-600">{t('howItWorks.step2.desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-yellow-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('howItWorks.step3.title')}</h3>
                <p className="text-gray-600">{t('howItWorks.step3.desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t('features.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <Star className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{t('features.portfolios.title')}</h3>
                <p className="text-gray-600 text-sm">{t('features.portfolios.desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <Shield className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{t('features.payments.title')}</h3>
                <p className="text-gray-600 text-sm">{t('features.payments.desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <CheckCircle className="h-12 w-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{t('features.workflow.title')}</h3>
                <p className="text-gray-600 text-sm">{t('features.workflow.desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">b</div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('features.localPayments.title')}</h3>
                <p className="text-gray-600 text-sm">{t('features.localPayments.desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t('testimonials.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  
                  <div className="text-center md:text-left flex-1">
                    <p className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-700' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8">
              {t('cta.subtitle')}
            </p>
            <Link to="/search-talent">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-4">
                {t('cta.findTalentButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Matching Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t('aiMatching.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              {t('aiMatching.subtitle')}
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-4">
                  {t('aiMatching.button')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{t('projectForm.title')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="project-title">{t('projectForm.titleLabel')}</Label>
                    <Input
                      id="project-title"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      placeholder={t('projectForm.titlePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="project-description">{t('projectForm.descriptionLabel')}</Label>
                    <Textarea
                      id="project-description"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder={t('projectForm.descriptionPlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <Label>{t('projectForm.budgetLabel')}</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="number"
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                        placeholder={t('projectForm.minBudgetPlaceholder')}
                        required
                      />
                      <Input
                        type="number"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(e.target.value)}
                        placeholder={t('projectForm.maxBudgetPlaceholder')}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    {t('projectForm.submitButton')}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
