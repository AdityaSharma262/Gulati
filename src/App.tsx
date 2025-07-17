import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, MapPin, Star, Users, Award, Clock, ChevronRight } from 'lucide-react';

// Background images for different sections
const heroImages = [
  'https://images.pexels.com/photos/29351977/pexels-photo-29351977.jpeg',
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/30496016/pexels-photo-30496016.jpeg',
  'https://i.pinimg.com/736x/89/42/5c/89425ca67cc0e546d1978e0912053a19.jpg',
  'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg',
  'https://images.pexels.com/photos/29368865/pexels-photo-29368865.jpeg',
  'https://images.pexels.com/photos/14666123/pexels-photo-14666123.jpeg',
  'https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg'
];

const aboutImages = [
  'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

const courseImages = [
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

// Course Card Component - UPDATED WITH NEW DESIGN
const CourseCard = ({ title, description, highlights, frontImage, backImage }: {
  title: string;
  description: string;
  highlights: string[];
  frontImage: string;
  backImage: string;
}) => (
  <div className="group perspective-1000 h-64">
    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Front of card */}
      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg flex items-center justify-center p-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${frontImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/85 to-slate-900/90"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">{title}</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto"></div>
        </div>
      </div>
      
      {/* Back of card */}
      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg p-6 flex flex-col justify-between overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/95"></div>
        <div>
          <h3 className="relative z-10 text-lg font-bold text-white mb-3">{title}</h3>
          <p className="relative z-10 text-white/90 text-sm mb-4 leading-relaxed">{description}</p>
        </div>
        
        <div>
          <h4 className="relative z-10 font-semibold text-white mb-2 text-sm">What you'll learn:</h4>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="relative z-10 flex items-start text-xs text-white/90">
                <ChevronRight size={12} className="text-rose-300 mr-1 mt-0.5 flex-shrink-0" />
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
  const [nextHeroImage, setNextHeroImage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        setNextHeroImage((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 1000); // Half of transition duration
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

  // UPDATED COURSES WITH NEW IMAGES AND STRUCTURE
  const courses = [
    {
      title: "Advanced Skincare Techniques",
      description: "Master advanced skincare treatments and facial therapy techniques for professional practice.",
      highlights: [
        "Advanced facial treatments and protocols",
        "Skin analysis and consultation techniques",
        "Chemical peels and microdermabrasion",
        "Anti-aging and corrective treatments"
      ],
      frontImage: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
      backImage: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Professional Makeup Artistry",
      description: "Master the art of professional makeup application for all occasions and skin types.",
      highlights: [
        "Color theory and skin tone matching",
        "Bridal and special occasion makeup",
        "Editorial and fashion makeup techniques",
        "Airbrush and HD makeup application"
      ],
      frontImage: "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg",
      backImage: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Hair Styling & Treatment Mastery",
      description: "Comprehensive hair styling and treatment program for professional hairstylists.",
      highlights: [
        "Advanced cutting and styling techniques",
        "Hair coloring and chemical treatments",
        "Keratin treatments and hair restoration",
        "Bridal and event hairstyling"
      ],
      frontImage: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
      backImage: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Nail Art & Extension Certification",
      description: "Professional nail artistry and extension techniques for certified nail technicians.",
      highlights: [
        "Gel and acrylic nail extensions",
        "Advanced nail art and design",
        "Nail health and hygiene protocols",
        "3D nail art and embellishments"
      ],
      frontImage: "https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg",
      backImage: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Brow Shaping & Extension Techniques",
      description: "Specialized training in eyebrow shaping, threading, and extension techniques.",
      highlights: [
        "Eyebrow threading and waxing",
        "Brow mapping and shaping",
        "Henna brow treatments",
        "Brow lamination and tinting"
      ],
      frontImage: "https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg",
      backImage: "https://images.pexels.com/photos/6663335/pexels-photo-6663335.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Permanent Makeup & Microblading",
      description: "Advanced permanent makeup and microblading certification program.",
      highlights: [
        "Microblading and powder brows",
        "Permanent eyeliner techniques",
        "Lip blush and full lip tattooing",
        "Color theory and skin healing"
      ],
      frontImage: "https://images.pexels.com/photos/5128259/pexels-photo-5128259.jpeg",
      backImage: "https://images.pexels.com/photos/5128259/pexels-photo-5128259.jpeg"
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
      <section className="relative overflow-hidden min-h-screen">
        {/* Current Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}
        ></div>
        
        {/* Next Background Image with Fade Transition */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${heroImages[nextHeroImage]})` }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/50 via-purple-500/40 to-teal-500/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-32 min-h-screen flex flex-col justify-center">
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
            
            {/* Additional Hero Content */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Expert Instructors</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const coursesSection = document.getElementById('courses');
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
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
      <section id="about" className="py-20 relative overflow-hidden">
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

      {/* Courses Section - UPDATED */}
      <section id="courses" className="py-20 relative overflow-hidden">
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
              <CourseCard 
                key={index} 
                title={course.title} 
                description={course.description} 
                highlights={course.highlights}
                frontImage={course.frontImage}
                backImage={course.backImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section - UPDATED WITH LUXURY DESIGN */}
      <section id="upcoming" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-rose-500 bg-clip-text text-transparent">
                Upcoming Courses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exciting new programs launching soon to expand your expertise in advanced beauty technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 via-gray-800/70 to-slate-900/90 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-700/50 relative overflow-hidden backdrop-blur-sm">
                {/* Luxury accent elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-rose-400/10 to-amber-400/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
                
                <div className="absolute top-6 right-6 bg-gradient-to-r from-rose-500/90 to-amber-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                  Coming Soon
                </div>
                
                <div className="relative z-10 mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{course.title}</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">{course.description}</p>
                </div>
                
                <div className="relative z-10">
                  <h4 className="font-semibold text-rose-300 mb-4 text-lg">What you'll master:</h4>
                  <ul className="space-y-3">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <div className="text-4xl md:text-5xl font-bold mb-2">+20</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
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
               <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
               <li><a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="hover:text-white transition-colors cursor-pointer">Courses</a></li>
               <li><a href="#upcoming" onClick={(e) => { e.preventDefault(); document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="hover:text-white transition-colors cursor-pointer">Upcoming Courses</a></li>
               <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
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

      {/* Permanent WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/1234567890?text=Hi! I'm interested in learning more about MT Institute's beauty courses."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;