
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  language: string;
}

const SearchBar = ({ searchQuery, setSearchQuery, language }: SearchBarProps) => {
  return (
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
  );
};

export default SearchBar;
