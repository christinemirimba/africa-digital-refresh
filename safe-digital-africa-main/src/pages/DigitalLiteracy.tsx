import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { CourseCard } from '@/components/CourseCard';
import { Search } from 'lucide-react';

const literacyIconPrivacyUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/literacy-icon-privacy-1rwppt2-1764281331657.webp';
const literacyIconPhishingUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/literacy-icon-phishing-ydcubhd-1764281336660.webp';
const literacyIconSocialUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/literacy-icon-social-fxg6xzl-1764281342307.webp';

const courses = [
  {
    title: 'Online Privacy Fundamentals',
    description: 'Learn to manage your digital footprint, secure your accounts with strong passwords and 2FA, and understand data encryption.',
    category: 'Privacy & Security',
    iconUrl: literacyIconPrivacyUrl,
    path: '/digital-literacy/online-privacy',
  },
  {
    title: 'Social Media Safety',
    description: 'Master your privacy settings on popular platforms, handle harassment, and learn safe posting practices to protect your reputation.',
    category: 'Social Media',
    iconUrl: literacyIconSocialUrl,
    path: '/digital-literacy/social-media',
  },
  {
    title: 'Identifying Online Threats',
    description: 'Become an expert at spotting phishing scams, avoiding social engineering tactics, and protecting yourself from financial fraud.',
    category: 'Threat Detection',
    iconUrl: literacyIconPhishingUrl,
    path: '/digital-literacy/online-threats',
  },
  {
    title: 'Digital Communication Security',
    description: 'Understand the world of encrypted messaging, secure your email, and learn best practices for safe video calls and file sharing.',
    category: 'Communication',
    iconUrl: literacyIconPrivacyUrl, // Reusing icon
    path: '/digital-literacy/communication-security',
  },
];

const DigitalLiteracy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => 
    courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className='bg-background text-foreground py-16 md:py-24'>
      <div className='container mx-auto px-4
'>
        <motion.div 
          className='text-center max-w-3xl mx-auto mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Digital Literacy Hub</h1>
          <p className='text-lg text-muted-foreground'>Knowledge is power. Our expert-led courses are designed to give you the skills and confidence to navigate the digital world safely.</p>
        </motion.div>

        <div className='mb-12 max-w-lg mx-auto relative'>
          <Input 
            type='text'
            placeholder='Search for courses (e.g., Privacy, Phishing...)'
            className='pl-10 h-12 text-base'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
        </div>

        <motion.div 
          className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {filteredCourses.map(course => (
            <CourseCard key={course.title} {...course} />
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className='text-center py-16
'>
            <p className='text-xl text-muted-foreground'>No courses found for \'{searchTerm}\'. Try another search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalLiteracy;
