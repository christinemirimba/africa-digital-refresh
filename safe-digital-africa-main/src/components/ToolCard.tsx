import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description, path }) => {
  return (
    <motion.div 
      className='bg-card border border-border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col text-center p-8'
      whileHover={{ y: -5 }}
    >
      <div className='mx-auto bg-primary/10 p-4 rounded-full mb-6'>
        <Icon className='h-8 w-8 text-primary' />
      </div>
      <h3 className='text-xl font-bold mb-2 text-foreground'>{title}</h3>
      <p className='text-muted-foreground flex-grow mb-6'>{description}</p>
      <div className='mt-auto'>
        <Link to={path}>
          <Button className='group w-full'>
            Use Tool
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};