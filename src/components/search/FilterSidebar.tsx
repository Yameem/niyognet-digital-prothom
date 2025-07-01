
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  featuredOnly: boolean;
  setFeaturedOnly: (featured: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  minimumRating: string;
  setMinimumRating: (rating: string) => void;
  language: string;
}

const FilterSidebar = ({
  featuredOnly,
  setFeaturedOnly,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minimumRating,
  setMinimumRating,
  language
}: FilterSidebarProps) => {
  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <div className="w-80 sticky top-24 h-fit">
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              {language === 'bn' ? 'ফিল্টার' : 'Filters'}
            </h3>
          </div>
          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
            {language === 'bn' ? 'সব পরিষ্কার করুন' : 'Clear All'}
          </Button>
        </div>
        
        {/* Featured Only Checkbox */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="featured" 
              checked={featuredOnly}
              onCheckedChange={(checked) => setFeaturedOnly(checked === true)}
              className="border-green-400 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
            />
            <label htmlFor="featured" className="text-sm font-medium text-green-800 cursor-pointer">
              {language === 'bn' ? 'শুধুমাত্র ফিচার্ড' : 'Featured Only'}
            </label>
          </div>
        </div>
        
        {/* Categories */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            {language === 'bn' ? 'ক্যাটেগরি' : 'Categories'}
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full border-gray-300 focus:border-green-600 focus:ring-green-600">
              <SelectValue placeholder={language === 'bn' ? 'সব ক্যাটেগরি' : 'All Categories'} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="graphics-design" className="hover:bg-green-50">
                {language === 'bn' ? 'গ্রাফিক্স ও ডিজাইন' : 'Graphics & Design'}
              </SelectItem>
              <SelectItem value="digital-marketing" className="hover:bg-green-50">
                {language === 'bn' ? 'ডিজিটাল মার্কেটিং' : 'Digital Marketing'}
              </SelectItem>
              <SelectItem value="writing-translation" className="hover:bg-green-50">
                {language === 'bn' ? 'লেখা ও অনুবাদ' : 'Writing & Translation'}
              </SelectItem>
              <SelectItem value="video-animation" className="hover:bg-green-50">
                {language === 'bn' ? 'ভিডিও ও অ্যানিমেশন' : 'Video & Animation'}
              </SelectItem>
              <SelectItem value="programming-tech" className="hover:bg-green-50">
                {language === 'bn' ? 'প্রোগ্রামিং ও প্রযুক্তি' : 'Programming & Tech'}
              </SelectItem>
              <SelectItem value="business" className="hover:bg-green-50">
                {language === 'bn' ? 'ব্যবসা' : 'Business'}
              </SelectItem>
              <SelectItem value="lifestyle" className="hover:bg-green-50">
                {language === 'bn' ? 'জীবনযাত্রা' : 'Lifestyle'}
              </SelectItem>
              <SelectItem value="music-audio" className="hover:bg-green-50">
                {language === 'bn' ? 'সংগীত ও অডিও' : 'Music & Audio'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Price Range */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {language === 'bn' ? 'মূল্য পরিসীমা' : 'Price Range'}
          </label>
          <div className="space-y-4">
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                max={50000}
                min={0}
                step={500}
                className="w-full [&>span:first-child]:bg-green-100 [&>span:first-child>span]:bg-green-600 [&>span:last-child]:space-x-2"
              />
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-green-700 font-semibold">
                <span className="text-xs text-gray-600 mr-1">Min:</span>
                ৳{priceRange[0].toLocaleString()}
              </div>
              <div className="text-green-700 font-semibold">
                <span className="text-xs text-gray-600 mr-1">Max:</span>
                ৳{priceRange[1].toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimum Rating */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            {language === 'bn' ? 'সর্বনিম্ন রেটিং' : 'Minimum Rating'}
          </label>
          <Select value={minimumRating} onValueChange={setMinimumRating}>
            <SelectTrigger className="w-full border-gray-300 focus:border-green-600 focus:ring-green-600">
              <SelectValue placeholder={language === 'bn' ? 'কোন রেটিং নেই' : 'Any Rating'} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="5" className="hover:bg-green-50">
                {language === 'bn' ? '৫+ তারকা' : '5+ stars'}
              </SelectItem>
              <SelectItem value="4.5" className="hover:bg-green-50">
                {language === 'bn' ? '৪.৫+ তারকা' : '4.5+ stars'}
              </SelectItem>
              <SelectItem value="4" className="hover:bg-green-50">
                {language === 'bn' ? '৪+ তারকা' : '4+ stars'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
