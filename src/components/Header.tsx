
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe, User, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileType, setProfileType] = useState<'client' | 'freelancer'>('client');
  const { language, toggleLanguage, t } = useLanguage();

  const toggleProfileType = () => {
    setProfileType(prev => prev === 'client' ? 'freelancer' : 'client');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Niyog</span>
          <span className="text-secondary">Net</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.howItWorks')}
          </Link>
          <Link to="#for-clients" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.forClients')}
          </Link>
          <Link to="#for-freelancers" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.forFreelancers')}
          </Link>
          <Link to="#about" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-white hover:bg-primary"
          >
            <Globe className="h-4 w-4 mr-2" />
            {language === 'bn' ? 'বাংলা' : 'English'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleProfileType}
            className="text-muted-foreground"
          >
            {profileType === 'client' ? <User className="h-4 w-4 mr-2" /> : <Briefcase className="h-4 w-4 mr-2" />}
            {profileType === 'client' ? 
              (language === 'bn' ? 'ক্লায়েন্ট' : 'Client') : 
              (language === 'bn' ? 'ফ্রিল্যান্সার' : 'Freelancer')
            }
          </Button>
          
          {profileType === 'freelancer' && (
            <Link to="/freelancer-dashboard">
              <Button variant="ghost" className="text-muted-foreground">
                {language === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard'}
              </Button>
            </Link>
          )}
          
          <Button variant="ghost" className="text-muted-foreground">
            {t('nav.login')}
          </Button>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {t('nav.getStarted')}
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
              <Link to="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.howItWorks')}
              </Link>
              <Link to="#for-clients" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.forClients')}
              </Link>
              <Link to="#for-freelancers" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.forFreelancers')}
              </Link>
              <Link to="#about" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-muted-foreground hover:text-white hover:bg-primary justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'bn' ? 'বাংলা' : 'English'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleProfileType}
                  className="text-muted-foreground justify-start"
                >
                  {profileType === 'client' ? <User className="h-4 w-4 mr-2" /> : <Briefcase className="h-4 w-4 mr-2" />}
                  {profileType === 'client' ? 
                    (language === 'bn' ? 'ক্লায়েন্ট' : 'Client') : 
                    (language === 'bn' ? 'ফ্রিল্যান্সার' : 'Freelancer')
                  }
                </Button>
                
                {profileType === 'freelancer' && (
                  <Link to="/freelancer-dashboard">
                    <Button variant="ghost" className="text-muted-foreground w-full justify-start">
                      {language === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard'}
                    </Button>
                  </Link>
                )}
                
                <Button variant="ghost" className="text-muted-foreground">
                  {t('nav.login')}
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('nav.getStarted')}
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
