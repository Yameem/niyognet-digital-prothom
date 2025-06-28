
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">নিয়োগনেট</h3>
            <p className="text-gray-300">
              Connecting Bangladesh's best freelancers with local businesses
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 NiyogNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
