
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MessageSquare, Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const freelancers = [
  {
    id: 1,
    name: "আহমেদ হাসান",
    nameEn: "Ahmed Hasan",
    skill: "Digital Marketing",
    skillBn: "ডিজিটাল মার্কেটিং",
    rating: 4.9,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    price: "১,৫০০",
    priceEn: "1,500",
    availability: "Available Now"
  },
  {
    id: 2,
    name: "ফাতিমা খান",
    nameEn: "Fatima Khan",
    skill: "Graphic Design",
    skillBn: "গ্রাফিক ডিজাইন",
    rating: 4.8,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    price: "১,২০০",
    priceEn: "1,200",
    availability: "Available Now"
  },
  {
    id: 3,
    name: "রাহুল দাস",
    nameEn: "Rahul Das",
    skill: "Content Writing",
    skillBn: "কন্টেন্ট রাইটিং",
    rating: 4.7,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    price: "৮০০",
    priceEn: "800",
    availability: "Busy"
  },
  {
    id: 4,
    name: "নুসরাত জাহান",
    nameEn: "Nusrat Jahan",
    skill: "Social Media",
    skillBn: "সোশ্যাল মিডিয়া",
    rating: 5.0,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
    price: "১,০০০",
    priceEn: "1,000",
    availability: "Available Now"
  },
  {
    id: 5,
    name: "তানভীর ইসলাম",
    nameEn: "Tanvir Islam",
    skill: "Web Development",
    skillBn: "ওয়েব ডেভেলপমেন্ট",
    rating: 4.6,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    price: "৩,০০০",
    priceEn: "3,000",
    availability: "Available Now"
  },
  {
    id: 6,
    name: "সাবিনা আক্তার",
    nameEn: "Sabina Akter",
    skill: "Photography",
    skillBn: "ফটোগ্রাফি",
    rating: 4.9,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    portfolio: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
    price: "২,৫০০",
    priceEn: "2,500",
    availability: "Available Now"
  }
];

const SearchTalent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [isProjectSidebarOpen, setIsProjectSidebarOpen] = useState(true);
  const { language, t } = useLanguage();

  const filteredFreelancers = freelancers.filter(freelancer => {
    const name = language === 'bn' ? freelancer.name : freelancer.nameEn;
    const skill = language === 'bn' ? freelancer.skillBn : freelancer.skill;
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.toLowerCase().includes(searchQuery.toLowerCase())
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
                  placeholder={language === 'bn' ? "সেবা বা ফ্রিল্যান্সার খুঁজুন..." : "Search for services or freelancers..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-700 hover:bg-green-800">
                {language === 'bn' ? 'খুঁজুন' : 'Search'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8 relative">
          {/* Fixed Left Filters */}
          <div className="w-64 sticky top-24 h-fit">
            <Card className="bg-gradient-to-b from-blue-50 to-indigo-50 border-blue-200">
              <div className="p-6 space-y-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  {language === 'bn' ? 'ফিল্টার' : 'Filters'}
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-blue-800">
                    {language === 'bn' ? 'ক্যাটেগরি' : 'Category'}
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-blue-200 bg-white/80 hover:bg-white transition-colors">
                      <SelectValue placeholder={language === 'bn' ? 'ক্যাটেগরি নির্বাচন করুন' : 'Select category'} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-blue-200">
                      <SelectItem value="social-posts" className="hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                          {language === 'bn' ? 'সোশ্যাল পোস্ট' : 'Social Posts'}
                        </div>
                      </SelectItem>
                      <SelectItem value="ad-setup" className="hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                          {language === 'bn' ? 'বিজ্ঞাপন সেটআপ' : 'Ad Setup'}
                        </div>
                      </SelectItem>
                      <SelectItem value="copywriting" className="hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          {language === 'bn' ? 'কপিরাইটিং' : 'Copywriting'}
                        </div>
                      </SelectItem>
                      <SelectItem value="product-photos" className="hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                          {language === 'bn' ? 'প্রোডাক্ট ফটো' : 'Product Photos'}
                        </div>
                      </SelectItem>
                      <SelectItem value="web-design" className="hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                          {language === 'bn' ? 'ওয়েব ডিজাইন' : 'Web Design'}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-blue-800">
                    {language === 'bn' ? 'মূল্য পরিসীমা' : 'Price Range'}
                  </label>
                  <div className="space-y-4">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={10000}
                        min={0}
                        step={100}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-blue-700 font-medium">
                      <span>৳{priceRange[0].toLocaleString()}</span>
                      <span>৳{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-blue-800">
                    {language === 'bn' ? 'রেটিং' : 'Rating'}
                  </label>
                  <Select>
                    <SelectTrigger className="border-blue-200 bg-white/80 hover:bg-white transition-colors">
                      <SelectValue placeholder={language === 'bn' ? 'সর্বনিম্ন রেটিং' : 'Minimum rating'} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-blue-200">
                      <SelectItem value="4.5" className="hover:bg-yellow-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          {language === 'bn' ? '৪.৫+ তারকা' : '4.5+ Stars'}
                        </div>
                      </SelectItem>
                      <SelectItem value="4.0" className="hover:bg-yellow-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                          {language === 'bn' ? '৪.০+ তারকা' : '4.0+ Stars'}
                        </div>
                      </SelectItem>
                      <SelectItem value="3.5" className="hover:bg-yellow-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                          {language === 'bn' ? '৩.৫+ তারকা' : '3.5+ Stars'}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Main Content Area */}
          <div className={`transition-all duration-300 ${isProjectSidebarOpen ? 'mr-80' : 'mr-0'} flex-1`}>
            {/* AI Suggested Matches */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'bn' ? 'AI সুপারিশকৃত ফ্রিল্যান্সার' : 'AI-Suggested Matches'}
              </h2>
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {freelancers.slice(0, 3).map((freelancer) => (
                  <Card key={freelancer.id} className="min-w-[280px] hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={freelancer.image}
                          alt={language === 'bn' ? freelancer.name : freelancer.nameEn}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">
                            {language === 'bn' ? freelancer.name : freelancer.nameEn}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {language === 'bn' ? freelancer.skillBn : freelancer.skill}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{freelancer.rating}</span>
                        <span className="text-sm text-gray-500">
                          ({freelancer.reviews} {language === 'bn' ? 'রিভিউ' : 'reviews'})
                        </span>
                      </div>
                      <p className="text-sm font-medium text-green-700">
                        {language === 'bn' ? 'শুরু' : 'Starting at'} ৳{language === 'bn' ? freelancer.price : freelancer.priceEn}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Results Grid */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'bn' ? `সকল ফ্রিল্যান্সার (${filteredFreelancers.length} ফলাফল)` : `All Freelancers (${filteredFreelancers.length} results)`}
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
                          alt={language === 'bn' ? freelancer.name : freelancer.nameEn}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">
                            {language === 'bn' ? freelancer.name : freelancer.nameEn}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {language === 'bn' ? freelancer.skillBn : freelancer.skill}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{freelancer.rating}</span>
                        <span className="text-sm text-gray-500">
                          ({freelancer.reviews} {language === 'bn' ? 'রিভিউ' : 'reviews'})
                        </span>
                      </div>
                      
                      <p className="text-lg font-bold text-green-700 mb-4">
                        {language === 'bn' ? 'শুরু' : 'Starting at'} ৳{language === 'bn' ? freelancer.price : freelancer.priceEn}
                      </p>
                      
                      <div className="flex space-x-2">
                        <Link to={`/freelancer/${freelancer.id}`} className="flex-1">
                          <Button className="w-full" size="sm">
                            {language === 'bn' ? 'প্রোফাইল দেখুন' : 'View Profile'}
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{language === 'bn' ? 'চ্যাট' : 'Chat'}</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Collapsible Right Sidebar - Project Summary */}
          <Collapsible open={isProjectSidebarOpen} onOpenChange={setIsProjectSidebarOpen}>
            <div className="relative">
              <CollapsibleTrigger className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-green-600 to-green-700 text-white border-0 rounded-l-lg p-3 shadow-lg hover:from-green-700 hover:to-green-800 transition-all">
                {isProjectSidebarOpen ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <Card className="w-72 sticky top-24 bg-gradient-to-b from-green-50 to-emerald-50 border-green-200">
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-green-900">
                      {language === 'bn' ? 'আপনার প্রকল্প' : 'Your Project'}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">
                          {language === 'bn' ? 'সংক্ষিপ্ত বিবরণ' : 'Brief'}
                        </label>
                        <p className="text-sm text-green-800 bg-white/60 p-2 rounded">
                          {language === 'bn' ? 'রেস্তোরাঁর জন্য সোশ্যাল মিডিয়া মার্কেটিং' : 'Social media marketing for restaurant'}
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">
                          {language === 'bn' ? 'বাজেট' : 'Budget'}
                        </label>
                        <p className="text-sm font-semibold text-green-800 bg-white/60 p-2 rounded">৳৫,০০০ - ৳১০,০০০</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">
                          {language === 'bn' ? 'সময়সীমা' : 'Deadline'}
                        </label>
                        <p className="text-sm text-green-800 bg-white/60 p-2 rounded">
                          {language === 'bn' ? '২ সপ্তাহ' : '2 weeks'}
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">
                          {language === 'bn' ? 'পাওয়া ম্যাচ' : 'Matches Found'}
                        </label>
                        <p className="text-sm font-semibold text-green-800 bg-white/60 p-2 rounded">
                          {filteredFreelancers.length} {language === 'bn' ? 'ফ্রিল্যান্সার' : 'freelancers'}
                        </p>
                      </div>
                      
                      <Button className="w-full bg-green-700 hover:bg-green-800 mt-6 shadow-lg">
                        {language === 'bn' ? 'কাজের পোস্ট প্রকাশ করুন' : 'Publish Job Post'}
                      </Button>
                    </div>
                  </div>
                </Card>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchTalent;
