import { motion } from 'framer-motion';
import { ToolCard } from '@/components/ToolCard';
import { Lock, Fingerprint, ShieldCheck, FileScan } from 'lucide-react';

const tools = [
  {
    icon: Lock,
    title: 'Password Strength Checker',
    description: 'Test the strength of your passwords against common attack vectors and get recommendations for creating stronger ones.',
    path: '/password-strength',
  },
  {
    icon: Fingerprint,
    title: 'Digital Footprint Analyzer',
    description: 'Discover what information about you is publicly available online and learn how to manage your digital identity.',
    path: '/digital-footprint-analyzer',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Assessment',
    description: 'Take our comprehensive assessment to get a personalized digital safety score and tailored recommendations.',
    path: '/safety-assessment',
  },
  {
    icon: FileScan,
    title: 'Incident Reporting',
    description: 'Securely and confidentially report an online incident. Our team is here to support you.',
    path: '/incident-report',
  },
];

const SafetyTools = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Suite of Safety Tools</h1>
          <p className='text-lg text-muted-foreground'>Practical, easy-to-use tools designed to give you immediate insights and control over your digital safety.</p>
        </motion.div>

        <motion.div 
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {tools.map(tool => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SafetyTools;
