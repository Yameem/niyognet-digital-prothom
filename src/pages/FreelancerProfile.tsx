
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MapPin, MessageSquare, Heart, Shield, ChevronDown } from "lucide-react";

const freelancerData = {
  id: 1,
  name: "আহমেদ হাসান",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  skill: "Certified Digital Marketing Specialist",
  rating: 4.9,
  reviews: 47,
  location: "Dhaka, Bangladesh",
  bio: "4th year Computer Science student at Dhaka University, specialized in Facebook Ads & Canva design. Helped 40+ local businesses increase their online presence by 150% on average.",
  skills: ["Facebook Ads", "Instagram Marketing", "Canva Design", "Content Writing", "Analytics", "Social Media Strategy"],
  portfolio: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  ],
  availability: "Available Now",
  milestones: [
    {
      title: "সোশ্যাল মিডিয়া পোস্ট + ক্যাপশন",
      description: "High-quality social media posts with engaging captions",
      price: "১,২০০"
    },
    {
      title: "বেসিক অ্যাডস সেটআপ + রিপোর্টিং",
      description: "Facebook & Instagram ad setup with weekly performance reports",
      price: "২,০০০"
    },
    {
      title: "প্রোডাক্ট ফটোগ্রাফি (১০টি ছবি)",
      description: "Professional product photography with basic editing",
      price: "৩,৫০০"
    }
  ]
};

const FreelancerProfile = () => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(freelancerData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto mt-16">
            <div className="flex items-start space-x-6">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{freelancer.name}</h1>
                    <p className="text-green-700 font-semibold mb-2">{freelancer.skill}</p>
                    
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{freelancer.rating}</span>
                        <span className="text-gray-600">{freelancer.reviews} completed jobs</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {freelancer.availability}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button className="bg-green-700 hover:bg-green-800">
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* About & Skills */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About & Skills</h2>
                <p className="text-gray-600 mb-6">{freelancer.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Portfolio Gallery */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Portfolio Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {freelancer.portfolio.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Portfolio sample ${index + 1}`}
                      className="rounded-lg object-cover h-32 w-full"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* What to Expect - Workflow Preview */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What to Expect - Workflow Preview</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Step 1: Brief Review</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Step 2: Design Draft</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Step 3: Feedback & Revision</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Step 4: Final Delivery & Payment</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Client Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">রহিম উদ্দিন</span>
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">Excellent work on our restaurant's social media. Sales increased by 30% after his campaign!</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">সারা আক্তার</span>
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">1 month ago</span>
                    </div>
                    <p className="text-gray-700">Very professional and delivered exactly what was promised. Highly recommended!</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">করিম খান</span>
                      <div className="flex">
                        {[1,2,3,4].map((i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">2 months ago</span>
                    </div>
                    <p className="text-gray-700">Good work quality and timely delivery. Will work with him again.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Milestones & Pricing */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Milestones & Pricing</h3>
                
                <div className="space-y-4 mb-6">
                  {freelancer.milestones.map((milestone, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{milestone.title}</h4>
                        <Button size="sm" variant="outline">Select</Button>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                      <p className="font-bold text-lg">৳{milestone.price}</p>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    Custom Offer
                  </Button>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-sm">Secure Payment</p>
                      <p className="text-xs text-gray-600">Pay securely through our milestone escrow. Funds released on approval.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Save to Favorites
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FreelancerProfile;
