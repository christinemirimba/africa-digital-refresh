import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  learn: [
    { title: 'Digital Literacy', path: '/digital-literacy' },
    { title: 'Safety Assessment', path: '/safety-assessment' },
    { title: 'How It Works', path: '/how-it-works' },
  ],
  support: [
    { title: 'Community Forum', path: '/forum' },
    { title: 'Incident Report', path: '/incident-report' },
    { title: 'FAQ', path: '/faq' },
  ],
  company: [
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Privacy Policy', path: '/privacy' },
  ],
};

export const Footer = () => {
  return (
    <footer className='bg-muted/50 border-t border-border'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='col-span-2 md:col-span-1'>
             <Link to=\'/\' className=\'flex items-center space-x-2 transition-smooth hover:opacity-80\'>
                <svg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' xmlns=\'http://www.w3.org/2000/svg\' className=\'h-8 w-8\'>
                    <path d=\'M16 2 L28 8 L28 14 C28 22 20 30 16 30 C12 30 4 22 4 14 L4 8 Z\' fill=\'hsl(var(--primary))\'/>
                    <path d=\'M18 12 C18 12 20 14 20 16 C20 18 22 20 22 22 C22 24 20 24 20 24 C20 24 18 22 18 20 C18 18 16 18 16 20 C16 22 14 24 14 24 C14 24 12 22 12 20 C12 18 14 16 14 14 C14 12 16 12 16 12 C16 12 18 12 18 12 Z\' fill=\'white\'/>
                </svg>
                <span className=\'text-xl font-bold text-foreground\'>SafeSpace Africa</span>
            </Link>
            <p className='text-muted-foreground mt-4 text-sm'>A safer digital future for Africa's women.</p>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Learn</h3>
            <ul className='space-y-2'>
              {footerLinks.learn.map(link => (
                <li key={link.path}><Link to={link.path} className='text-sm text-muted-foreground hover:text-primary'>{link.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
              {footerLinks.support.map(link => (
                <li key={link.path}><Link to={link.path} className='text-sm text-muted-foreground hover:text-primary'>{link.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {footerLinks.company.map(link => (
                <li key={link.path}><Link to={link.path} className='text-sm text-muted-foreground hover:text-primary'>{link.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} SafeSpace Africa. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            <Link to='#' className='text-muted-foreground hover:text-primary'><Github size={20} /></Link>
            <Link to='#' className='text-muted-foreground hover:text-primary'><Twitter size={20} /></Link>
            <Link to='#' className='text-muted-foreground hover:text-primary'><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
