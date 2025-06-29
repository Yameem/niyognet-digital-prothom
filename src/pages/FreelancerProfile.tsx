import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MapPin, MessageSquare, Heart } from "lucide-react";

const freelancerData = {
  id: 1,
  name: "আহমেদ হাসান",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  skill: "Digital Marketing",
  rating: 4.9,
  reviews: 47,
  location: "Dhaka, Bangladesh",
  bio: "Experienced digital marketer helping businesses grow their online presence.",
  skills: ["SEO", "Social Media", "Content Marketing", "PPC"],
  portfolio: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
  ],
  hourlyRate: "1,500",
  responseTime: "1 hour",
  availability: "Available Now",
  projectsCompleted: 120,
  onTimeDelivery: "95%",
  repeatClients: "40%"
};

const FreelancerProfile = () => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(freelancerData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-3xl font-bold">{freelancer.name}</h1>
                      <Badge 
                        variant={freelancer.availability === "Available Now" ? "default" : "secondary"}
                        className="text-sm hover:bg-none"
                      >
                        {freelancer.availability}
                      </Badge>
                    </div>
                    
                    <p className="text-xl text-green-700 font-semibold mb-2">{freelancer.skill}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{freelancer.rating}</span>
                        <span className="text-gray-600">({freelancer.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{freelancer.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{freelancer.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {freelancer.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Portfolio Section */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {freelancer.portfolio.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Portfolio sample ${index + 1}`}
                      className="rounded-lg object-cover h-48 w-full"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                
                <div className="space-y-4">
                  {/* Sample Review 1 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1531427186511-016694c6b3eb?w=50&h=50&fit=crop&crop=face"
                        alt="Reviewer 1"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">5.0</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Excellent work! Ahmed was very professional and delivered high-quality results on time."
                    </p>
                  </div>
                  
                  {/* Sample Review 2 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1570295999680-5e27cac9d2ca?w=50&h=50&fit=crop&crop=face"
                        alt="Reviewer 2"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">Jane Smith</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Great communication and very skilled. I would definitely hire again."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Contact & Pricing */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-green-700 mb-2">
                    Starting at ৳{freelancer.hourlyRate}/hour
                  </p>
                  <p className="text-gray-600">Typically responds within {freelancer.responseTime}</p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Save Freelancer
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Quick Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Projects Completed:</span>
                      <span className="font-medium">{freelancer.projectsCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">On-time Delivery:</span>
                      <span className="font-medium">{freelancer.onTimeDelivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repeat Clients:</span>
                      <span className="font-medium">{freelancer.repeatClients}</span>
                    </div>
                  </div>
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
