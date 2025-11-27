import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  iconUrl: string;
  category: string;
  title: string;
  description: string;
  path: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ iconUrl, category, title, description, path }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className='bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col'
      variants={cardVariants}
    >
      <div className='p-6 flex-grow'>
        <div className='flex items-center space-x-4 mb-4'>
          <img src={iconUrl} alt={category} className='h-10 w-10' />
          <span className='text-primary font-semibold text-sm uppercase tracking-wider'>{category}</span>
        </div>
        <h3 className='text-xl font-bold mb-2 text-foreground'>{title}</h3>
        <p className='text-muted-foreground text-sm leading-relaxed'>{description}</p>
      </div>
      <div className='p-6 pt-0 mt-auto'>
        <Link to={path}>
          <Button variant='secondary' className='w-full group'>
            Start Learning
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};