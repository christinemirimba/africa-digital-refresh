import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const heroBannerUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/hero-banner-ihyocc0-1764281061852.webp';
const featureAssessmentUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/feature-assessment-vh8olrn-1764281068549.webp';
const featureLiteracyUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/feature-literacy-2jo1wyj-1764281077275.webp';
const featureCommunityUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/feature-community-z2bkuqq-1764281083379.webp';
const testimonialAvatar1Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/testimonial-avatar-1-rgd4cel-1764281089382.webp';
const testimonialAvatar2Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/testimonial-avatar-2-knxx9w5-1764281096564.webp';
const testimonialAvatar3Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4d6ad4fb-73a2-446c-8907-4aa3b2125ebe/testimonial-avatar-3-6om5vwl-1764281102405.webp';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className='w-full bg-background text-foreground'>
      {/* Hero Section */}
      <motion.section 
        className='relative h-[600px] md:h-[700px] flex items-center justify-center text-center text-white'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='absolute inset-0'>
          <img src={heroBannerUrl} alt='Empowering African Women' className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/60'></div>
        </div>
        <motion.div className='relative z-10 max-w-4xl px-4' variants={itemVariants}>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4'>
            A Safer Digital Future for Africa's Women
          </h1>
          <p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8'>
            Equipping women and girls with the knowledge, tools, and community to thrive in the digital age. Confidently and securely.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/safety-assessment'>
              <Button size='lg' className='w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg'>
                Take Free Safety Assessment
                <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
            <Link to='/digital-literacy'>
              <Button size='lg' variant='secondary' className='w-full sm:w-auto shadow-lg'>
                Explore Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className='py-20 bg-muted/30'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Empowerment in Three Simple Steps</h2>
            <p className='text-muted-foreground text-lg'>Our platform provides a clear path to digital safety and confidence.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            {[ 
              { img: featureAssessmentUrl, title: 'Assess Your Risk', desc: 'Understand your digital safety score with our quick, confidential assessment.' },
              { img: featureLiteracyUrl, title: 'Learn & Grow', desc: 'Access bite-sized courses on privacy, threat detection, and safe online practices.' },
              { img: featureCommunityUrl, title: 'Join the Community', desc: 'Connect with peers, share experiences, and get support in a private, moderated forum.' },
            ].map((step, i) => (
              <motion.div key={i} className='p-6 rounded-lg' variants={itemVariants}>
                <img src={step.img} alt={step.title} className='h-32 w-32 mx-auto mb-6' />
                <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className='py-20'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Designed for You, Built for Africa</h2>
            <p className='text-muted-foreground text-lg'>We provide culturally relevant tools and resources to address the unique challenges faced by African women online.</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[ 
              'AI-Powered Threat Detection', 'Culturally-Relevant Scenarios', 'Swahili & Local Language Support',
              'Confidential Incident Reporting', 'Expert-Led Workshops', 'Peer Support Network'
            ].map((feature, i) => (
              <motion.div key={i} className='flex items-center space-x-4 p-4' variants={itemVariants}>
                <CheckCircle className='h-6 w-6 text-primary flex-shrink-0' />
                <span className='font-medium text-lg'>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className='py-20 bg-muted/30'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Trusted by Women Across Africa</h2>
            <p className='text-muted-foreground text-lg'>Hear from users who have transformed their digital lives with us.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[ 
              { avatar: testimonialAvatar1Url, name: 'Amina Yusuf', role: 'Entrepreneur, Nigeria', quote: 'This platform gave me the confidence to expand my business online without fear.' },
              { avatar: testimonialAvatar2Url, name: 'Wanjiru Kimani', role: 'Journalist, Kenya', quote: 'The incident reporting tool was a lifesaver. I felt heard and supported.' },
              { avatar: testimonialAvatar3Url, name: 'Thembeka Zulu', role: 'Student, South Africa', quote: 'I finally understand how to protect my privacy on social media. Thank you!' },
            ].map((testimonial, i) => (
              <motion.div key={i} className='bg-card p-6 rounded-lg shadow-sm' variants={itemVariants}>
                <p className='text-muted-foreground mb-4 italic'>'{testimonial.quote}'</p>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold'>{testimonial.name}</p>
                    <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className='py-24 text-center'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Take Control of Your Digital Safety?</h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto mb-8'>Join thousands of women who are building a safer online world. Create your free account today.</p>
          <Link to='/signup'>
            <Button size='lg' className='bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg'>
              Sign Up for Free
              <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
