
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/search/SearchBar";
import FilterSidebar from "@/components/search/FilterSidebar";
import AIMatchesSection from "@/components/search/AIMatchesSection";
import FreelancerGrid from "@/components/search/FreelancerGrid";
import ProjectSidebar from "@/components/search/ProjectSidebar";
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
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
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
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [minimumRating, setMinimumRating] = useState("");
  const [isProjectSidebarOpen, setIsProjectSidebarOpen] = useState(false);
  const { language } = useLanguage();

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
      
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        language={language}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8 relative">
          <FilterSidebar
            featuredOnly={featuredOnly}
            setFeaturedOnly={setFeaturedOnly}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minimumRating={minimumRating}
            setMinimumRating={setMinimumRating}
            language={language}
          />
          
          <div className={`transition-all duration-300 ${isProjectSidebarOpen ? 'mr-80' : 'mr-0'} flex-1`}>
            <AIMatchesSection 
              freelancers={freelancers}
              language={language}
            />
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'bn' ? `সকল ফ্রিল্যান্সার (${filteredFreelancers.length} ফলাফল)` : `All Freelancers (${filteredFreelancers.length} results)`}
              </h2>
            </div>
            
            <FreelancerGrid 
              freelancers={filteredFreelancers}
              language={language}
            />
          </div>
          
          <ProjectSidebar
            isOpen={isProjectSidebarOpen}
            setIsOpen={setIsProjectSidebarOpen}
            filteredCount={filteredFreelancers.length}
            language={language}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchTalent;
