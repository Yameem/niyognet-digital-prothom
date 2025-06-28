
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, MessageSquare, Shield, Star } from "lucide-react";

const testimonials = [
  {
    name: "রহিম উদ্দিন",
    role: "Café Owner, Dhaka",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "NiyogNet helped me find amazing designers for my café's social media. Quality work at fair prices!"
  },
  {
    name: "সারা খান",
    role: "Boutique Owner, Chittagong", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "The freelancers here understand local market needs. My sales increased 30% after their campaigns."
  },
  {
    name: "করিম আহমেদ",
    role: "Restaurant Chain, Sylhet",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Secure payments through bKash made everything smooth. Highly recommend for local businesses!"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Connect with Vetted Local Talent — Fast, Affordable, Reliable
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Browse portfolios, set milestones, pay securely via bKash & Nagad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-4">
              I'm a Client
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4">
              I'm a Freelancer
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Post Your Project</h3>
                <p className="text-gray-600">Submit your brief, budget, and timeline in minutes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Match & Chat</h3>
                <p className="text-gray-600">We suggest top student freelancers with real portfolios</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-yellow-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Approve & Pay</h3>
                <p className="text-gray-600">Release payment as each milestone is approved</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose NiyogNet?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <Star className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Real Portfolios & Reviews</h3>
                <p className="text-gray-600 text-sm">See before/after samples and client ratings</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <Shield className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Milestone Payments</h3>
                <p className="text-gray-600 text-sm">Secure payments released on your terms</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <CheckCircle className="h-12 w-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Guided Workflows</h3>
                <p className="text-gray-600 text-sm">Stay on track with clear project steps</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="pt-4">
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">b</div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">Local Payments</h3>
                <p className="text-gray-600 text-sm">Instant, low-fee transfers via bKash & Nagad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            What Our Clients Say
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of local businesses who trust NiyogNet for their freelancing needs
          </p>
          
          <Link to="/search-talent">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-4">
              Find Talent Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
