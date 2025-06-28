
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">{t('footer.brand')}</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.termsOfService')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.contactUs')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.blog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.forBusinesses')}</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.postJob')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('nav.howItWorks')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.successStories')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
