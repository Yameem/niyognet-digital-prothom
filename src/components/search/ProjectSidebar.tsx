
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  filteredCount: number;
  language: string;
}

const ProjectSidebar = ({ isOpen, setIsOpen, filteredCount, language }: ProjectSidebarProps) => {
  return (
    <>
      {/* Right Sidebar - Project Summary (Fixed Position) */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-4 mt-20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-green-900">
              {language === 'bn' ? 'আপনার প্রকল্প' : 'Your Project'}
            </h3>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsOpen(false)}
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
                {filteredCount} {language === 'bn' ? 'ফ্রিল্যান্সার' : 'freelancers'}
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
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-l-lg shadow-lg"
      >
        {isOpen ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </>
  );
};

export default ProjectSidebar;
