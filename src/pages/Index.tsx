import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Star, ArrowRight, Users, CheckCircle, Clock, Shield, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Afsar Ali",
    title: "CEO at StyleLab",
    comment: "Working with this platform has been a game-changer for our business. We've found top-notch talent and streamlined our project management process.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sonia Rahman",
    title: "Marketing Director at FoodieZone",
    comment: "I'm impressed with the quality of freelancers available here. Our marketing campaigns have seen a significant boost in engagement and conversions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b2933e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Fatima Khan",
    title: "Founder of TechSolutions",
    comment: "This platform has helped us scale our development team quickly and efficiently. The talent pool is diverse, and the communication tools are excellent.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const howItWorksSteps = [
  {
    id: 1,
    title: "Post Your Project",
    titleBn: "আপনার প্রকল্প পোস্ট করুন",
    description: "Submit your brief, budget, and timeline in minutes",
    descriptionBn: "মিনিটেই আপনার বিবরণ, বাজেট এবং সময়সীমা জমা দিন",
    icon: CheckCircle,
    bgColor: "bg-green-100",
    iconColor: "text-green-700"
  },
  {
    id: 2,
    title: "Match & Chat",
    titleBn: "ম্যাচ ও চ্যাট",
    description: "We suggest top freelancers with real portfolios",
    descriptionBn: "আমরা সত্যিকারের পোর্টফলিও সহ শীর্ষ ফ্রিল্যান্সারদের সুপারিশ করি",
    icon: MessageSquare,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    id: 3,
    title: "Approve & Pay",
    titleBn: "অনুমোদন ও পেমেন্ট",
    description: "Release payment as each milestone is approved",
    descriptionBn: "প্রতিটি মাইলস্টোন অনুমোদিত হওয়ার সাথে সাথে পেমেন্ট ছাড় করুন",
    icon: Shield,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-700"
  }
];

const features = [
  {
    id: 1,
    title: "Real Portfolios & Reviews",
    titleBn: "বাস্তব পোর্টফলিও ও রিভিউ",
    description: "See before/after samples and client ratings",
    descriptionBn: "আগে/পরে নমুনা এবং ক্লায়েন্ট রেটিং দেখুন",
    icon: Star,
    bgColor: "bg-green-100",
    iconColor: "text-green-700"
  },
  {
    id: 2,
    title: "Milestone Payments",
    titleBn: "মাইলস্টোন পেমেন্ট",
    description: "Secure payments released on your terms",
    descriptionBn: "আপনার শর্তে নিরাপদ পেমেন্ট ছাড়",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    id: 3,
    title: "Guided Workflows",
    titleBn: "গাইডেড ওয়ার্কফ্লো",
    description: "Stay on track with clear project steps",
    descriptionBn: "স্পষ্ট প্রকল্প পদক্ষেপ দিয়ে ট্র্যাকে থাকুন",
    icon: CheckCircle,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-700"
  }
];

const Index = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAIMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project submitted:", { projectTitle, deadline, minBudget, maxBudget });
    setIsDialogOpen(false);
    navigate("/search-talent");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in text-white">
            {t('hero.subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex-1">
                <Input
                  type="search"
                  placeholder={t('hero.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-gray-900"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Search className="h-4 w-4 mr-2" />
                {t('hero.searchButton')}
              </Button>
            </div>
          </div>

          {/* AI Matching CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-white">{t('hero.aiMatching.title')}</h3>
            <p className="text-white/90 mb-4">{t('hero.aiMatching.subtitle')}</p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  {t('hero.aiMatching.button')}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t('hero.aiMatching.dialogTitle')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAIMatchSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('hero.aiMatching.projectTitle')}</label>
                    <Input
                      placeholder={t('hero.aiMatching.projectTitlePlaceholder')}
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('hero.aiMatching.deadline')}</label>
                    <Input
                      placeholder={t('hero.aiMatching.deadlinePlaceholder')}
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('hero.aiMatching.minBudget')}</label>
                      <Input
                        type="number"
                        placeholder="5000"
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('hero.aiMatching.maxBudget')}</label>
                      <Input
                        type="number"
                        placeholder="10000"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    {t('hero.aiMatching.findMatches')}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {language === 'bn' ? 'এটি কীভাবে কাজ করে' : 'How It Works'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step) => (
              <Card key={step.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`flex items-center justify-center h-16 w-16 rounded-full ${step.bgColor} ${step.iconColor} mb-6 mx-auto`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {language === 'bn' ? step.titleBn : step.title}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'bn' ? step.descriptionBn : step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NiyogNet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {language === 'bn' ? 'কেন নিয়োগনেট বেছে নেবেন?' : 'Why Choose NiyogNet?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`flex items-center justify-center h-16 w-16 rounded-full ${feature.bgColor} ${feature.iconColor} mb-6 mx-auto`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {language === 'bn' ? feature.titleBn : feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'bn' ? feature.descriptionBn : feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('testimonials.title')}
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonials[currentTestimonial].comment}"
              </p>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-4 space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link to="/search-talent">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Your Search
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
