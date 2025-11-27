import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const infographicUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/how-it-works-infographic-y8phimb-1764281299558.webp';

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='bg-background text-foreground py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <motion.div 
          className='text-center max-w-3xl mx-auto mb-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Your Journey to Digital Safety</h1>
          <p className='text-lg text-muted-foreground'>We provide a clear, structured path to help you navigate the digital world with confidence. Follow these four simple steps to empower yourself.</p>
        </motion.div>

        <motion.div 
          className='flex justify-center mb-16'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src={infographicUrl} alt='How it works infographic' className='max-w-4xl w-full rounded-lg shadow-xl' />
        </motion.div>

        <motion.div 
          className='grid md:grid-cols-2 gap-12 items-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-3 text-primary'>Step 1: Assess Your Risk Profile</h3>
            <p className='text-muted-foreground leading-relaxed'>Start with our confidential Safety Assessment to understand your current digital vulnerabilities. This personalized report identifies potential risks and provides a baseline for your learning journey. It only takes 5 minutes.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-3 text-primary'>Step 2: Build Your Knowledge</h3>
            <p className='text-muted-foreground leading-relaxed'>Explore our Digital Literacy Hub, filled with expert-curated courses. From identifying phishing scams to securing your social media, our bite-sized modules are designed for easy, impactful learning.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-3 text-primary'>Step 3: Utilize Safety Tools</h3>
            <p className='text-muted-foreground leading-relaxed'>Access our suite of practical Safety Tools. Check your password strength, analyze your digital footprint, and use our guides to implement robust security measures across your devices and online accounts.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-3 text-primary'>Step 4: Connect with the Community</h3>
            <p className='text-muted-foreground leading-relaxed'>Join the SafeSpace Africa forum. It’s a private, supportive environment to share experiences, ask questions, and connect with peers and experts. You are not alone on this journey.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className='text-center mt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <h2 className='text-3xl font-bold mb-4'>Ready to Start?</h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto mb-8'>Take the first step towards a safer digital life today.</p>
          <Link to='/safety-assessment'>
            <Button size='lg' className='group'>
              Start Your Safety Assessment
              <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
