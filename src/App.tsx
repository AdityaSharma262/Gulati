import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, MapPin, Star, Users, Award, Clock, ChevronRight } from 'lucide-react';

// Background images for different sections
const heroImages = [
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

const aboutImages = [
  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

const courseImages = [
  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

// WhatsApp Popup Component
const WhatsAppPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Get in Touch!</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-white" size={24} />
          </div>
          <p className="text-gray-600 mb-4">
            Ready to start your beauty education journey? Contact us on WhatsApp for instant support and course details!
          </p>
        </div>
        
        <div className="space-y-3">
          <a
            href="https://wa.me/1234567890?text=Hi! I'm interested in learning more about MT Institute's beauty courses."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
          <button
            onClick={onClose}
            className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ title , description, highlights }: {
  title: string;
  description: string;
  highlights: string[];
}) => (
  <div className="group perspective-1000 h-64">
    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Front of card */}
      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg flex items-center justify-center p-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-700/90"></div>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-tight">{title}</h3>
      </div>
      
      {/* Back of card */}
      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg p-6 flex flex-col justify-between overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/90 to-orange-700/90"></div>
        <div>
          <h3 className="relative z-10 text-lg font-bold text-white mb-3">{title}</h3>
          <p className="relative z-10 text-white/90 text-sm mb-4 leading-relaxed">{description}</p>
        </div>
        
        <div>
          <h4 className="relative z-10 font-semibold text-white mb-2 text-sm">What you'll learn:</h4>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="relative z-10 flex items-start text-xs text-white/90">
                <ChevronRight size={12} className="text-white mr-1 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function App() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [currentCourseImage, setCurrentCourseImage] = useState(0);

  useEffect(() => {
    // Show WhatsApp popup after 2 seconds
    const timer = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Change hero background every 6 seconds
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    // Change about background every 8 seconds
    const aboutTimer = setInterval(() => {
      setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length);
    }, 8000);

    // Change course background every 7 seconds
    const courseTimer = setInterval(() => {
      setCurrentCourseImage((prev) => (prev + 1) % courseImages.length);
    }, 7000);

    return () => {
      clearInterval(heroTimer);
      clearInterval(aboutTimer);
      clearInterval(courseTimer);
    };
  }, []);

  const courses = [
    {
      title: "Advanced Skincare Techniques",
      description: "Master advanced skincare treatments and facial therapy techniques for professional practice.",
      highlights: [
        "Advanced facial treatments and protocols",
        "Skin analysis and consultation techniques",
        "Chemical peels and microdermabrasion",
        "Anti-aging and corrective treatments"
      ]
    },
    {
      title: "Professional Makeup Artistry",
      description: "Master the art of professional makeup application for all occasions and skin types.",
      highlights: [
        "Color theory and skin tone matching",
        "Bridal and special occasion makeup",
        "Editorial and fashion makeup techniques",
        "Airbrush and HD makeup application"
      ]
    },
    {
      title: "Hair Styling & Treatment Mastery",
      description: "Comprehensive hair styling and treatment program for professional hairstylists.",
      highlights: [
        "Advanced cutting and styling techniques",
        "Hair coloring and chemical treatments",
        "Keratin treatments and hair restoration",
        "Bridal and event hairstyling"
      ]
    },
    {
      title: "Nail Art & Extension Certification",
      description: "Professional nail artistry and extension techniques for certified nail technicians.",
      highlights: [
        "Gel and acrylic nail extensions",
        "Advanced nail art and design",
        "Nail health and hygiene protocols",
        "3D nail art and embellishments"
      ]
    },
    {
      title: "Brow Shaping & Extension Techniques",
      description: "Specialized training in eyebrow shaping, threading, and extension techniques.",
      highlights: [
        "Eyebrow threading and waxing",
        "Brow mapping and shaping",
        "Henna brow treatments",
        "Brow lamination and tinting"
      ]
    },
    {
      title: "Permanent Makeup & Microblading",
      description: "Advanced permanent makeup and microblading certification program.",
      highlights: [
        "Microblading and powder brows",
        "Permanent eyeliner techniques",
        "Lip blush and full lip tattooing",
        "Color theory and skin healing"
      ]
    }
  ];

  const upcomingCourses = [
    {
      title: "Laser Aesthetics & Technology",
      description: "Comprehensive training in laser aesthetics and advanced beauty technology.",
      highlights: [
        "Laser skin rejuvenation",
        "IPL and RF treatments",
        "Laser safety protocols",
        "Advanced aesthetic equipment"
      ]
    },
    {
      title: "Advanced Hair Removal Techniques",
      description: "Professional hair removal methods using latest technology and techniques.",
      highlights: [
        "Laser hair removal certification",
        "IPL hair removal techniques",
        "Electrolysis methods",
        "Client consultation and aftercare"
      ]
    },
    {
      title: "Laser Tattoo Removal",
      description: "Specialized training in safe and effective laser tattoo removal procedures.",
      highlights: [
        "Q-switched laser technology",
        "Tattoo assessment and treatment planning",
        "Safety protocols and aftercare",
        "Business setup and regulations"
      ]
    },
    {
      title: "Professional Tattoo Artistry",
      description: "Complete tattoo artistry program covering design, technique, and business aspects.",
      highlights: [
        "Tattoo machine operation and maintenance",
        "Design creation and transfer",
        "Hygiene and sterilization protocols",
        "Portfolio development and client relations"
      ]
    }
  ];

  const features = [
    {
      icon: <Award className="text-white" size={24} />,
      title: "Certified Training",
      description: "Internationally recognized certifications upon successful completion of courses."
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience."
    },
    {
      icon: <Star className="text-white" size={24} />,
      title: "Hands-on Practice",
      description: "Extensive practical training with real clients and professional equipment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform"
          style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/80 via-purple-500/70 to-teal-500/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                MT Institute
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Transform Your Passion Into Profession
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
              Premier beauty education institute offering comprehensive courses in makeup artistry, skincare, and beauty business management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform"
          style={{ backgroundImage: `url(${aboutImages[currentAboutImage]})` }}
        ></div>
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                About MT Institute
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to MT Institute, a distinguished beacon of excellence where passion meets precision in the ever-evolving realm of beauty and aesthetics. Renowned for its uncompromising standards, avant-garde training methodologies, and an unwavering commitment to empowering the next generation of beauty professionals, MT Institute stands as a paragon of quality education and transformative learning. With an atmosphere that fosters creativity, confidence, and craftsmanship, we pride ourselves on cultivating not just skill, but artistry. Join an institution where innovation is celebrated, talent is nurtured, and every learner is sculpted into a master of their craft.
            </p>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform"
          style={{ backgroundImage: `url(${courseImages[currentCourseImage]})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-gray-100/95"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                Our Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to equip you with industry-relevant skills and knowledge.
            </p>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <style>{`
            .perspective-1000 {
              perspective: 1000px;
            }
            .transform-style-preserve-3d {
              transform-style: preserve-3d;
            }
            .backface-hidden {
              backface-visibility: hidden;
            }
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
            .group:hover .group-hover\\:rotate-y-180 {
              transform: rotateY(180deg);
            }
          `}</style>
            {courses.map((course, index) => (
              <CourseCard key={index} title={course.title} description={course.description} highlights={course.highlights} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Upcoming Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new programs launching soon to expand your expertise in advanced beauty technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Coming Soon
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm text-gray-600">
                        <ChevronRight size={16} className="text-teal-500 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Get Notified
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                MT Institute
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering beauty professionals with world-class education and hands-on training. Join us to transform your passion into a thriving career.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <span>123 Beauty Street, Fashion District, City 12345</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@mtinstitute.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MT Institute. All rights reserved. | Designed with ❤️ for beauty education</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Popup */}
      <WhatsAppPopup 
        isOpen={showWhatsAppPopup} 
        onClose={() => setShowWhatsAppPopup(false)} 
      />
    </div>
  );
}

export default App;