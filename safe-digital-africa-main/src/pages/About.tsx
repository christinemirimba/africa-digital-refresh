import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Shield, BookOpen } from 'lucide-react';

const teamAvatar1Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/team-avatar-1-evmtc4g-1764281306316.webp';
const teamAvatar2Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/team-avatar-2-ez016l3-1764281312598.webp';
const teamAvatar3Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/team-avatar-3-hslg6ww-1764281318880.webp';

const team = [
  { name: 'Chiamaka Nwosu', role: 'Lead Software Engineer', avatar: teamAvatar1Url },
  { name: 'Kwame Mensah', role: 'Head of UX/UI Design', avatar: teamAvatar2Url },
  { name: 'Zola Adebayo', role: 'Community & Support Lead', avatar: teamAvatar3Url },
];

const values = [
  { icon: Users, title: 'Empowerment', description: 'We equip women with tools and knowledge to foster independence and confidence.' },
  { icon: Shield, title: 'Safety', description: 'We create a secure and private space for learning and community interaction.' },
  { icon: BookOpen, title: 'Accessibility', description: 'Our resources are designed to be inclusive, culturally relevant, and easy to understand for all.' },
];

const About = () => {
  return (
    <div className='bg-background text-foreground'>
      {/* Mission Section */}
      <motion.div 
        className='py-20 text-center bg-muted/30'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Mission</h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            To build a digital world where every African woman and girl can operate with confidence, free from harassment and threats. We are dedicated to providing the education and tools necessary for digital empowerment.
          </p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div 
        className='py-20'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>The Story of <span className='text-primary'>SafeSpace</span></h2>
            <p className='text-muted-foreground leading-relaxed mb-4'>
              SafeSpace Africa was born from a simple yet powerful idea: digital safety is a fundamental right. Our founder, a survivor of online harassment, realized that millions of African women were navigating the internet without the necessary skills to protect themselves. Traditional safety advice often missed the cultural nuances and specific threats faced by women in Africa.
            </p>
            <p className='text-muted-foreground leading-relaxed'>
              We started as a small WhatsApp group, sharing tips and support. Today, we are a growing platform, but our core mission remains the same: to create a safe, supportive, and educational ecosystem for women across the continent.
            </p>
          </div>
          <div className='h-80 bg-gray-200 rounded-lg shadow-lg'>
             {/* Placeholder for an image of the team or community */}
             <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/hero-banner-ihyocc0-1764281061852.webp' alt='SafeSpace Community' className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div 
        className='py-20 bg-muted/30'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Our Core Values</h2>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            {values.map(value => (
              <div key={value.title}>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6'>
                  <value.icon className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
                <p className='text-muted-foreground'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div 
        className='py-20'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Meet the Team</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {team.map(member => (
              <div key={member.name} className='text-center'>
                <Avatar className='w-32 h-32 mx-auto mb-4 shadow-lg'>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className='text-xl font-semibold'>{member.name}</h3>
                <p className='text-primary'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
