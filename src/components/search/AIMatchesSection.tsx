
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Freelancer {
  id: number;
  name: string;
  nameEn: string;
  skill: string;
  skillBn: string;
  rating: number;
  reviews: number;
  image: string;
  price: string;
  priceEn: string;
}

interface AIMatchesSectionProps {
  freelancers: Freelancer[];
  language: string;
}

const AIMatchesSection = ({ freelancers, language }: AIMatchesSectionProps) => {
  const navigate = useNavigate();

  const handleCardClick = (freelancerId: number) => {
    navigate(`/freelancer/${freelancerId}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {language === 'bn' ? 'AI সুপারিশকৃত ফ্রিল্যান্সার' : 'AI-Suggested Matches'}
      </h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {freelancers.slice(0, 3).map((freelancer) => (
          <Card 
            key={freelancer.id} 
            className="min-w-[280px] hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(freelancer.id)}
          >
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
  );
};

export default AIMatchesSection;
