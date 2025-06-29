import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MessageSquare, Search, ChevronDown, ChevronUp } from "lucide-react";

const freelancers = [
  {
    id: 1,
    name: "আহমেদ হাসান",
    skill: "Digital Marketing",
    rating: 4.9,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    price: "১,৫০০",
    availability: "Available Now"
  },
  {
    id: 2,
    name: "ফাতিমা খান",
    skill: "Graphic Design",
    rating: 4.8,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    price: "১,২০০",
    availability: "Available Now"
  },
  {
    id: 3,
    name: "রাহুল দাস",
    skill: "Content Writing",
    rating: 4.7,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    price: "৮০০",
    availability: "Busy"
  },
  {
    id: 4,
    name: "নুসরাত জাহান",
    skill: "Social Media",
    rating: 5.0,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
    price: "১,০০০",
    availability: "Available Now"
  },
  {
    id: 5,
    name: "তানভীর ইসলাম",
    skill: "Web Development",
    rating: 4.6,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    price: "৩,০০০",
    availability: "Available Now"
  },
  {
    id: 6,
    name: "সাবিনা আক্তার",
    skill: "Photography",
    rating: 4.9,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
    price: "২,৫০০",
    availability: "Available Now"
  }
];

const SearchTalent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredFreelancers = freelancers.filter(freelancer => {
    return (
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Search Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for services or freelancers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-700 hover:bg-green-800">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Collapsible Filters */}
          <div className="lg:w-1/4">
            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <Card className="sticky top-24">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  {isFiltersOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="social-posts">Social Posts</SelectItem>
                          <SelectItem value="ad-setup">Ad Setup</SelectItem>
                          <SelectItem value="copywriting">Copywriting</SelectItem>
                          <SelectItem value="product-photos">Product Photos</SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Price Range</label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select price range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="under-1000">Under ৳১,০০০</SelectItem>
                          <SelectItem value="1000-2000">৳১,০০০ - ৳২,০০০</SelectItem>
                          <SelectItem value="2000-5000">৳২,০০০ - ৳৫,০০০</SelectItem>
                          <SelectItem value="over-5000">Over ৳৫,০০০</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Rating</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Minimum rating" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="4.5">4.5+ Stars</SelectItem>
                          <SelectItem value="4.0">4.0+ Stars</SelectItem>
                          <SelectItem value="3.5">3.5+ Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* AI Suggested Matches */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">AI-Suggested Matches</h2>
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {freelancers.slice(0, 3).map((freelancer) => (
                  <Card key={freelancer.id} className="min-w-[280px] hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={freelancer.image}
                          alt={freelancer.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{freelancer.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {freelancer.skill}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{freelancer.rating}</span>
                        <span className="text-sm text-gray-500">({freelancer.reviews} reviews)</span>
                      </div>
                      <p className="text-sm font-medium text-green-700">Starting at ৳{freelancer.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Results Grid */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                All Freelancers ({filteredFreelancers.length} results)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFreelancers.map((freelancer) => (
                <Card key={freelancer.id} className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="p-0">
                    <img
                      src={freelancer.portfolio}
                      alt="Portfolio sample"
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={freelancer.image}
                          alt={freelancer.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{freelancer.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {freelancer.skill}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{freelancer.rating}</span>
                        <span className="text-sm text-gray-500">({freelancer.reviews} reviews)</span>
                        <Badge 
                          variant={freelancer.availability === "Available Now" ? "default" : "secondary"}
                          className="ml-auto text-xs"
                        >
                          {freelancer.availability}
                        </Badge>
                      </div>
                      
                      <p className="text-lg font-bold text-green-700 mb-4">
                        Starting at ৳{freelancer.price}
                      </p>
                      
                      <div className="flex space-x-2">
                        <Link to={`/freelancer/${freelancer.id}`} className="flex-1">
                          <Button className="w-full" size="sm">
                            View Profile
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>Chat</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Sidebar - Project Summary */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Your Project</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Brief</label>
                  <p className="text-sm">Social media marketing for restaurant</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Budget</label>
                  <p className="text-sm font-semibold">৳৫,০০০ - ৳১০,০০০</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Deadline</label>
                  <p className="text-sm">2 weeks</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Matches Found</label>
                  <p className="text-sm font-semibold text-green-700">{filteredFreelancers.length} freelancers</p>
                </div>
                
                <Button className="w-full bg-green-700 hover:bg-green-800 mt-6">
                  Publish Job Post
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchTalent;
