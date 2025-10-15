'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { supabase, type Service } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookingForm } from '@/components/BookingForm';

type ServiceReview = {
  id: string;
  client_name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export default function ServiceDetailPage() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [reviews, setReviews] = useState<ServiceReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServiceAndReviews() {
      const { data: serviceData } = await supabase
        .from('services')
        .select('*')
        .eq('id', params.id)
        .maybeSingle();

      const { data: reviewsData } = await supabase
        .from('service_reviews')
        .select('*')
        .eq('service_id', params.id)
        .order('created_at', { ascending: false });

      if (serviceData) {
        setService(serviceData);
      }

      if (reviewsData) {
        setReviews(reviewsData);
      }

      setLoading(false);
    }

    fetchServiceAndReviews();
  }, [params.id]);

  if (loading) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Service not found</h1>
        </div>
      </div>
    );
  }

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 5;

  return (
    <div>
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">{service.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(avgRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  ({reviews.length} reviews)
                </span>
              </div>
              <div className="text-3xl font-bold text-blue-600">
                ₹{service.price.toLocaleString('en-IN')}
                <span className="text-base text-gray-500 ml-2">
                  {service.price_unit}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-8">
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {service.gallery_images.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {service.gallery_images.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}

                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {service.full_description}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {reviews.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Client Reviews
                    </h2>
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <Card key={review.id} className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {review.client_name}
                              </h3>
                              <div className="flex mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Book This Service
                  </h2>
                  <BookingForm serviceId={service.id} serviceName={service.title} />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
