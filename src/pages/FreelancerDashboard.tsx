
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Edit, Eye, BarChart3, MessageSquare, DollarSign, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FreelancerDashboard = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const gigs = [
    {
      id: 1,
      title: language === 'bn' ? 'সোশ্যাল মিডিয়া পোস্ট ডিজাইন' : 'Social Media Post Design',
      price: '১,২০০',
      priceEn: '1,200',
      status: 'active',
      orders: 12,
      views: 234
    },
    {
      id: 2,
      title: language === 'bn' ? 'ফেসবুক অ্যাডস সেটআপ' : 'Facebook Ads Setup',
      price: '২,০০০',
      priceEn: '2,000',
      status: 'paused',
      orders: 8,
      views: 156
    },
    {
      id: 3,
      title: language === 'bn' ? 'প্রোডাক্ট ফটোগ্রাফি' : 'Product Photography',
      price: '৩,৫০০',
      priceEn: '3,500',
      status: 'active',
      orders: 5,
      views: 89
    }
  ];

  const stats = {
    totalEarnings: language === 'bn' ? '৪৫,৬০০' : '45,600',
    activeOrders: 3,
    completedOrders: 25,
    rating: 4.9
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {language === 'bn' ? 'ফ্রিল্যান্সার ড্যাশবোর্ড' : 'Freelancer Dashboard'}
          </h1>
          <p className="text-gray-600">
            {language === 'bn' ? 'আপনার গিগ এবং অর্ডার পরিচালনা করুন' : 'Manage your gigs and orders'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 border-b">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {language === 'bn' ? 'ওভারভিউ' : 'Overview'}
            </button>
            <button
              onClick={() => setActiveTab('gigs')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gigs'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {language === 'bn' ? 'গিগসমূহ' : 'Gigs'}
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'orders'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {language === 'bn' ? 'অর্ডার' : 'Orders'}
            </button>
          </nav>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">৳{stats.totalEarnings}</p>
                      <p className="text-gray-600 text-sm">
                        {language === 'bn' ? 'মোট আয়' : 'Total Earnings'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.activeOrders}</p>
                      <p className="text-gray-600 text-sm">
                        {language === 'bn' ? 'সক্রিয় অর্ডার' : 'Active Orders'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.completedOrders}</p>
                      <p className="text-gray-600 text-sm">
                        {language === 'bn' ? 'সম্পন্ন অর্ডার' : 'Completed Orders'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="text-2xl font-bold">{stats.rating}</p>
                      <p className="text-gray-600 text-sm">
                        {language === 'bn' ? 'গড় রেটিং' : 'Average Rating'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'সাম্প্রতিক কার্যকলাপ' : 'Recent Activity'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">
                        {language === 'bn' ? 'নতুন অর্ডার পেয়েছেন' : 'New order received'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'সোশ্যাল মিডিয়া পোস্ট ডিজাইন - ৳১,২০০' : 'Social Media Post Design - ৳1,200'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">
                        {language === 'bn' ? 'অর্ডার সম্পন্ন হয়েছে' : 'Order completed'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'ফেসবুক অ্যাডস সেটআপ - ৫ স্টার রেটিং' : 'Facebook Ads Setup - 5 star rating'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'gigs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {language === 'bn' ? 'আমার গিগসমূহ' : 'My Gigs'}
              </h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                {language === 'bn' ? 'নতুন গিগ তৈরি করুন' : 'Create New Gig'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gigs.map((gig) => (
                <Card key={gig.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-lg">{gig.title}</h3>
                      <Badge 
                        variant={gig.status === 'active' ? 'default' : 'secondary'}
                        className={gig.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {gig.status === 'active' ? 
                          (language === 'bn' ? 'সক্রিয়' : 'Active') : 
                          (language === 'bn' ? 'বিরতি' : 'Paused')
                        }
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-xl font-bold text-green-700">
                        ৳{language === 'bn' ? gig.price : gig.priceEn}
                      </p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>
                          {gig.orders} {language === 'bn' ? 'অর্ডার' : 'orders'}
                        </span>
                        <span>
                          {gig.views} {language === 'bn' ? 'ভিউ' : 'views'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        {language === 'bn' ? 'সম্পাদনা' : 'Edit'}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        {language === 'bn' ? 'দেখুন' : 'View'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              {language === 'bn' ? 'অর্ডার পরিচালনা' : 'Order Management'}
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {language === 'bn' ? 'কোন অর্ডার নেই' : 'No orders yet'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'bn' ? 
                      'আপনার প্রথম অর্ডার পেতে আপনার গিগ প্রমোট করুন' : 
                      'Promote your gigs to get your first order'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
