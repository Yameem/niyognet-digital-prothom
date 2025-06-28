
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-700">
          নিয়োগনেট
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="#how-it-works" className="text-gray-600 hover:text-green-700 transition-colors">
            How It Works
          </Link>
          <Link to="#for-clients" className="text-gray-600 hover:text-green-700 transition-colors">
            For Clients
          </Link>
          <Link to="#for-freelancers" className="text-gray-600 hover:text-green-700 transition-colors">
            For Freelancers
          </Link>
          <Link to="#about" className="text-gray-600 hover:text-green-700 transition-colors">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600">
            Login
          </Button>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            Get Started — It's Free
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link to="#how-it-works" className="text-gray-600 hover:text-green-700 transition-colors">
                How It Works
              </Link>
              <Link to="#for-clients" className="text-gray-600 hover:text-green-700 transition-colors">
                For Clients
              </Link>
              <Link to="#for-freelancers" className="text-gray-600 hover:text-green-700 transition-colors">
                For Freelancers
              </Link>
              <Link to="#about" className="text-gray-600 hover:text-green-700 transition-colors">
                About Us
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600">
                  Login
                </Button>
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Get Started — It's Free
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
