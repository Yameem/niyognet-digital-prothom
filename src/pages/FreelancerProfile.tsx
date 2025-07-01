
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Shield, MessageSquare, CheckCircle, Bell } from "lucide-react";

const freelancerData = {
  id: 1,
  name: "আহমেদ হাসান",
  title: "Certified Digital Marketing Specialist",
  rating: 4.9,
  completedJobs: 47,
  status: "Available Now",
  coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  bio: "4th year Computer Science student at Dhaka University, specialized in Facebook Ads & Canva design. Helped 40+ local businesses increase their online presence by 150% on average.",
  skills: ["Facebook Ads", "Instagram Marketing", "Canva Design", "Content Writing", "Analytics", "Social Media Strategy"],
  portfolio: [
    {
      id: 1,
      title: "Restaurant Social Media Campaign",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      result: "+25% Customer Engagement"
    },
    {
      id: 2,
      title: "E-commerce Ad Campaign",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      result: "+40% Sales Conversion"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      result: "Complete Brand Makeover"
    },
    {
      id: 4,
      title: "Content Marketing Strategy",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
      result: "+60% Organic Reach"
    },
    {
      id: 5,
      title: "Product Photography",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      result: "Professional Product Shots"
    },
    {
      id: 6,
      title: "Video Marketing Campaign",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      result: "+80% Video Engagement"
    }
  ],
  packages: [
    {
      title: "৩টি সোশ্যাল পোস্ট + ক্যাপশন",
      price: "১,২০০",
      description: "High-quality social media posts with engaging captions"
    },
    {
      title: "বেসিক অ্যাড সেটআপ + রিপোর্টিং",
      price: "২,০০০",
      description: "Facebook & Instagram ad setup with weekly performance reports"
    },
    {
      title: "প্রোডাক্ট ফটোশুট (১০টি ছবি)",
      price: "১,৫০০",
      description: "Professional product photography with basic editing"
    }
  ],
  reviews: [
    {
      client: "রহিম উদ্দিন",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent work on our restaurant's social media. Sales increased by 30% after his campaign!"
    },
    {
      client: "সারা আক্তার",
      rating: 5,
      date: "1 month ago", 
      comment: "Very professional and delivered exactly what was promised. Highly recommended!"
    },
    {
      client: "করিম খান",
      rating: 4,
      date: "2 months ago",
      comment: "Good work quality and timely delivery. Will work with him again."
    }
  ]
};

const FreelancerProfile = () => {
  const { id } = useParams();
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [customBrief, setCustomBrief] = useState("");
  const [customBudget, setCustomBudget] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Cover Image & Profile Header */}
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${freelancerData.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-8">
            <img
              src={freelancerData.profileImage}
              alt={freelancerData.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4 md:mb-0 md:mr-6"
            />
            
            <div className="flex-1">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {freelancerData.name}
                    </h1>
                    <p className="text-green-700 font-medium mb-3">
                      {freelancerData.title}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{freelancerData.rating}</span>
                      </div>
                      <span className="text-gray-600">
                        {freelancerData.completedJobs} completed jobs
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        {freelancerData.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Bell className="h-4 w-4" />
                          <span>Schedule Call</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Schedule a Call</DialogTitle>
                        </DialogHeader>
                        <p className="text-gray-600">Call scheduling feature would be implemented here.</p>
                        <Button className="mt-4">Request Call</Button>
                      </DialogContent>
                    </Dialog>
                    
                    <Button className="bg-green-700 hover:bg-green-800 flex items-center space-x-2">
                      <span>Hire Me</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About & Skills */}
            <Card>
              <CardHeader>
                <CardTitle>About & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{freelancerData.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {freelancerData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Portfolio Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {freelancerData.portfolio.map((item) => (
                    <div 
                      key={item.id}
                      className="relative group cursor-pointer rounded-lg overflow-hidden hover-scale"
                      onClick={() => setSelectedPortfolio(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="font-semibold text-sm mb-1">{item.title}</p>
                          <p className="text-xs">{item.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Workflow Preview */}
            <Card>
              <CardHeader>
                <CardTitle>What to Expect - Workflow Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="step1">
                    <AccordionTrigger>Step 1: Brief Review</AccordionTrigger>
                    <AccordionContent>
                      I'll carefully review your project requirements and ask clarifying questions to ensure we're aligned on goals, target audience, and deliverables.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step2">
                    <AccordionTrigger>Step 2: Design Draft</AccordionTrigger>
                    <AccordionContent>
                      I'll create initial designs and concepts based on your brief, incorporating your brand guidelines and preferences.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step3">
                    <AccordionTrigger>Step 3: Feedback & Revision</AccordionTrigger>
                    <AccordionContent>
                      You'll review the draft and provide feedback. I include up to 2 rounds of revisions to ensure everything meets your expectations.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step4">
                    <AccordionTrigger>Step 4: Final Delivery & Payment</AccordionTrigger>
                    <AccordionContent>
                      Final files will be delivered in your preferred format, and payment will be automatically released through our secure escrow system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            
            {/* Client Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {freelancerData.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold">{review.client}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Packages */}
            <Card>
              <CardHeader>
                <CardTitle>Milestones & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {freelancerData.packages.map((pkg, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-2">{pkg.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-700">৳{pkg.price}</span>
                        <Button size="sm">Select</Button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Custom Offer */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Custom Offer
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request Custom Offer</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Project Brief</label>
                          <Textarea
                            placeholder="Describe your project requirements..."
                            value={customBrief}
                            onChange={(e) => setCustomBrief(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Budget Range</label>
                          <Input
                            placeholder="e.g., ৳২,০০০ - ৳৫,০০০"
                            value={customBudget}
                            onChange={(e) => setCustomBudget(e.target.value)}
                          />
                        </div>
                        <Button className="w-full">Send Custom Request</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
            
            {/* Secure Payment Notice */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-sm">Secure Payment</h4>
                    <p className="text-xs text-gray-600">
                      Pay securely through our milestone escrow. Funds released on approval.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start Chat
                </Button>
                <Button variant="outline" className="w-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Save to Favorites
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Portfolio Modal */}
      {selectedPortfolio && (
        <Dialog open={!!selectedPortfolio} onOpenChange={() => setSelectedPortfolio(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedPortfolio.title}</DialogTitle>
            </DialogHeader>
            <img
              src={selectedPortfolio.image}
              alt={selectedPortfolio.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-green-700 font-semibold">{selectedPortfolio.result}</p>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-700 hover:bg-green-800 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default FreelancerProfile;
