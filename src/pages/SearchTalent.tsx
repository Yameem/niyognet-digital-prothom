
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
  const [priceRange, setPriceRange] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
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
        <div className="flex gap-8">
          {/* Left Collapsible Filters */}
          <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <div className="relative">
              <CollapsibleTrigger className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-r-lg p-2 shadow-lg hover:bg-gray-50">
                {isFiltersOpen ? (
                  <ChevronLeft className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <Card className="w-64 sticky top-24">
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold">
                      {language === 'bn' ? 'ফিল্টার' : 'Filters'}
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'bn' ? 'ক্যাটেগরি' : 'Category'}
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'bn' ? 'ক্যাটেগরি নির্বাচন করুন' : 'Select category'} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="social-posts">{language === 'bn' ? 'সোশ্যাল পোস্ট' : 'Social Posts'}</SelectItem>
                          <SelectItem value="ad-setup">{language === 'bn' ? 'বিজ্ঞাপন সেটআপ' : 'Ad Setup'}</SelectItem>
                          <SelectItem value="copywriting">{language === 'bn' ? 'কপিরাইটিং' : 'Copywriting'}</SelectItem>
                          <SelectItem value="product-photos">{language === 'bn' ? 'প্রোডাক্ট ফটো' : 'Product Photos'}</SelectItem>
                          <SelectItem value="web-design">{language === 'bn' ? 'ওয়েব ডিজাইন' : 'Web Design'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'bn' ? 'মূল্য পরিসীমা' : 'Price Range'}
                      </label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'bn' ? 'মূল্য পরিসীমা নির্বাচন করুন' : 'Select price range'} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="under-1000">{language === 'bn' ? '৳১,০০০ এর নিচে' : 'Under ৳1,000'}</SelectItem>
                          <SelectItem value="1000-2000">{language === 'bn' ? '৳১,০০০ - ৳২,০০০' : '৳1,000 - ৳2,000'}</SelectItem>
                          <SelectItem value="2000-5000">{language === 'bn' ? '৳২,০০০ - ৳৫,০০০' : '৳2,000 - ৳5,000'}</SelectItem>
                          <SelectItem value="over-5000">{language === 'bn' ? '৳৫,০০০ এর উপরে' : 'Over ৳5,000'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'bn' ? 'রেটিং' : 'Rating'}
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'bn' ? 'সর্বনিম্ন রেটিং' : 'Minimum rating'} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="4.5">{language === 'bn' ? '৪.৫+ তারকা' : '4.5+ Stars'}</SelectItem>
                          <SelectItem value="4.0">{language === 'bn' ? '৪.০+ তারকা' : '4.0+ Stars'}</SelectItem>
                          <SelectItem value="3.5">{language === 'bn' ? '৩.৫+ তারকা' : '3.5+ Stars'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </CollapsibleContent>
            </div>
          </Collapsible>
          
          {/* Main Content Area */}
          <div className={`transition-all duration-300 ${isFiltersOpen ? 'ml-64' : 'ml-0'} flex-1`}>
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
          
          {/* Right Sidebar - Project Summary */}
          <div className="w-1/4">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">
                {language === 'bn' ? 'আপনার প্রকল্প' : 'Your Project'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {language === 'bn' ? 'সংক্ষিপ্ত বিবরণ' : 'Brief'}
                  </label>
                  <p className="text-sm">
                    {language === 'bn' ? 'রেস্তোরাঁর জন্য সোশ্যাল মিডিয়া মার্কেটিং' : 'Social media marketing for restaurant'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {language === 'bn' ? 'বাজেট' : 'Budget'}
                  </label>
                  <p className="text-sm font-semibold">৳৫,০০০ - ৳১০,০০০</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {language === 'bn' ? 'সময়সীমা' : 'Deadline'}
                  </label>
                  <p className="text-sm">
                    {language === 'bn' ? '২ সপ্তাহ' : '2 weeks'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {language === 'bn' ? 'পাওয়া ম্যাচ' : 'Matches Found'}
                  </label>
                  <p className="text-sm font-semibold text-green-700">
                    {filteredFreelancers.length} {language === 'bn' ? 'ফ্রিল্যান্সার' : 'freelancers'}
                  </p>
                </div>
                
                <Button className="w-full bg-green-700 hover:bg-green-800 mt-6">
                  {language === 'bn' ? 'কাজের পোস্ট প্রকাশ করুন' : 'Publish Job Post'}
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
