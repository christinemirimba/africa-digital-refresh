import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin } from 'lucide-react';

const staticMapUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/static-map-5ikk2jp-1764281326036.webp';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', { description: 'Thank you for reaching out. We will get back to you shortly.' });
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
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Get in Touch</h1>
          <p className='text-lg text-muted-foreground'>We’re here to help. Whether you have a question about our platform, a partnership inquiry, or need support, please don’t hesitate to reach out.</p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <MapPin className='h-6 w-6 text-primary' />
                <span className='text-muted-foreground'>123 Ubuntu Lane, Nairobi, Kenya</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Mail className='h-6 w-6 text-primary' />
                <span className='text-muted-foreground'>contact@safespaceafrica.org</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Phone className='h-6 w-6 text-primary' />
                <span className='text-muted-foreground'>+254 712 345 678</span>
              </div>
            </div>
            <div className='mt-8 rounded-lg overflow-hidden shadow-lg'>
              <img src={staticMapUrl} alt='Location map' className='w-full h-64 object-cover' />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className='text-2xl font-bold mb-6'>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' type='text' required placeholder='Amina Yusuf' />
              </div>
              <div>
                <Label htmlFor='email'>Email Address</Label>
                <Input id='email' type='email' required placeholder='amina@example.com' />
              </div>
              <div>
                <Label htmlFor='message'>Message</Label>
                <Textarea id='message' required placeholder='Your message...' rows={5} />
              </div>
              <Button type='submit' className='w-full' size='lg'>Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
