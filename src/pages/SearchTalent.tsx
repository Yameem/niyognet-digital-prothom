
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MessageSquare, Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useFilterContext } from "@/contexts/FilterContext";
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
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [minimumRating, setMinimumRating] = useState("");
  const [isProjectSidebarOpen, setIsProjectSidebarOpen] = useState(false);
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
          <div className="w-80 sticky top-24 h-fit">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'bn' ? 'ফিল্টার' : 'Filters'}
                  </h3>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  {language === 'bn' ? 'সব পরিষ্কার করুন' : 'Clear All'}
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="featured" 
                  checked={featuredOnly}
                  onCheckedChange={setFeaturedOnly}
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  {language === 'bn' ? 'শুধুমাত্র ফিচার্ড' : 'Featured Only'}
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  {language === 'bn' ? 'ক্যাটেগরি' : 'Categories'}
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={language === 'bn' ? 'সব ক্যাটেগরি' : 'All Categories'} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="graphics-design" className="hover:bg-gray-50">
                      {language === 'bn' ? 'গ্রাফিক্স ও ডিজাইন' : 'Graphics & Design'}
                    </SelectItem>
                    <SelectItem value="digital-marketing" className="hover:bg-gray-50">
                      {language === 'bn' ? 'ডিজিটাল মার্কেটিং' : 'Digital Marketing'}
                    </SelectItem>
                    <SelectItem value="writing-translation" className="hover:bg-gray-50">
                      {language === 'bn' ? 'লেখা ও অনুবাদ' : 'Writing & Translation'}
                    </SelectItem>
                    <SelectItem value="video-animation" className="hover:bg-gray-50">
                      {language === 'bn' ? 'ভিডিও ও অ্যানিমেশন' : 'Video & Animation'}
                    </SelectItem>
                    <SelectItem value="programming-tech" className="hover:bg-gray-50">
                      {language === 'bn' ? 'প্রোগ্রামিং ও প্রযুক্তি' : 'Programming & Tech'}
                    </SelectItem>
                    <SelectItem value="business" className="hover:bg-gray-50">
                      {language === 'bn' ? 'ব্যবসা' : 'Business'}
                    </SelectItem>
                    <SelectItem value="lifestyle" className="hover:bg-gray-50">
                      {language === 'bn' ? 'জীবনযাত্রা' : 'Lifestyle'}
                    </SelectItem>
                    <SelectItem value="music-audio" className="hover:bg-gray-50">
                      {language === 'bn' ? 'সংগীত ও অডিও' : 'Music & Audio'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
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
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>৳{priceRange[0].toLocaleString()}</span>
                    <span>৳{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  {language === 'bn' ? 'সর্বনিম্ন রেটিং' : 'Minimum Rating'}
                </label>
                <Select value={minimumRating} onValueChange={setMinimumRating}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={language === 'bn' ? 'কোন রেটিং নেই' : 'Any Rating'} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="5" className="hover:bg-yellow-50">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{language === 'bn' ? '৫+ তারকা' : '5+ stars'}</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="4.5" className="hover:bg-yellow-50">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{language === 'bn' ? '৪.৫+ তারকা' : '4.5+ stars'}</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="4" className="hover:bg-yellow-50">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{language === 'bn' ? '৪+ তারকা' : '4+ stars'}</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
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
          
          {/* Right Sidebar - Project Summary (Fixed Position) */}
          <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isProjectSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 space-y-4 mt-20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-green-900">
                  {language === 'bn' ? 'আপনার প্রকল্প' : 'Your Project'}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsProjectSidebarOpen(false)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    {language === 'bn' ? 'সংক্ষিপ্ত বিবরণ' : 'Brief'}
                  </label>
                  <p className="text-sm text-green-800 bg-green-50 p-2 rounded">
                    {language === 'bn' ? 'রেস্তোরাঁর জন্য সোশ্যাল মিডিয়া মার্কেটিং' : 'Social media marketing for restaurant'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    {language === 'bn' ? 'বাজেট' : 'Budget'}
                  </label>
                  <p className="text-sm font-semibold text-green-800 bg-green-50 p-2 rounded">৳৫,০০০ - ৳১০,০০০</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    {language === 'bn' ? 'সময়সীমা' : 'Deadline'}
                  </label>
                  <p className="text-sm text-green-800 bg-green-50 p-2 rounded">
                    {language === 'bn' ? '২ সপ্তাহ' : '2 weeks'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    {language === 'bn' ? 'পাওয়া ম্যাচ' : 'Matches Found'}
                  </label>
                  <p className="text-sm font-semibold text-green-800 bg-green-50 p-2 rounded">
                    {filteredFreelancers.length} {language === 'bn' ? 'ফ্রিল্যান্সার' : 'freelancers'}
                  </p>
                </div>
                
                <Button className="w-full bg-green-700 hover:bg-green-800 mt-6 shadow-lg">
                  {language === 'bn' ? 'কাজের পোস্ট প্রকাশ করুন' : 'Publish Job Post'}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar Toggle Button */}
          <Button
            onClick={() => setIsProjectSidebarOpen(!isProjectSidebarOpen)}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-l-lg shadow-lg"
          >
            {isProjectSidebarOpen ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchTalent;
