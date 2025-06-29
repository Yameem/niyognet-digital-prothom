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
    image: "https://images.unsplash.com/photo-1531427186511-c25b4050efcd?w=100&h=100&fit=crop&crop=face"
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
    name: "Imran Hossain",
    title: "Founder of TechSolutions",
    comment: "This platform has helped us scale our development team quickly and efficiently. The talent pool is diverse, and the communication tools are excellent.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive and scalable websites tailored to your business needs.",
    icon: Clock
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Reach your target audience and grow your brand with effective marketing strategies.",
    icon: MessageSquare
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Create visually stunning designs that capture your brand's essence.",
    icon: CheckCircle
  },
  {
    id: 4,
    title: "Content Writing",
    description: "Engage your audience with compelling and informative content.",
    icon: Users
  }
];

const Index = () => {
  const { t } = useLanguage();
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
      <section className="relative bg-gradient-to-r from-green-700 to-green-800 text-white py-20 overflow-hidden">
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
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8">
                <Search className="h-4 w-4 mr-2" />
                {t('hero.searchButton')}
              </Button>
            </div>
          </div>

          {/* AI Matching CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-white">Get AI-Matched with Perfect Freelancers</h3>
            <p className="text-white/90 mb-4">Tell us about your project and let our AI find the best freelancers for you</p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                  Try AI Matching
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get AI-Matched Freelancers</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAIMatchSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Title</label>
                    <Input
                      placeholder="e.g., Social media marketing for restaurant"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Deadline</label>
                    <Input
                      placeholder="e.g., 2 weeks, 1 month"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Min Budget (৳)</label>
                      <Input
                        type="number"
                        placeholder="5000"
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Max Budget (৳)</label>
                      <Input
                        type="number"
                        placeholder="10000"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Find AI Matches
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700 mb-4 mx-auto">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
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
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link to="/search-talent">
            <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
