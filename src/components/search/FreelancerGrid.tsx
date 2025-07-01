
import { Link } from "react-router-dom";
import { Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Freelancer {
  id: number;
  name: string;
  nameEn: string;
  skill: string;
  skillBn: string;
  rating: number;
  reviews: number;
  image: string;
  portfolio: string;
  price: string;
  priceEn: string;
  availability: string;
}

interface FreelancerGridProps {
  freelancers: Freelancer[];
  language: string;
}

const FreelancerGrid = ({ freelancers, language }: FreelancerGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {freelancers.map((freelancer) => (
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
  );
};

export default FreelancerGrid;
