import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPassword = () => {
  return (
    <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-foreground'>
            Forgot your password?
          </h2>
          <p className='mt-2 text-center text-sm text-muted-foreground'>
            Enter your email address and we will send you a link to reset your password.
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <Label htmlFor='email-address' className='sr-only'>
                Email address
              </Label>
              <Input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
          </div>

          <div>
            <Button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
              Send reset link
            </Button>
          </div>
        </form>
        <div className='text-sm text-center'>
          <p>Remember your password? <Link to='/login' className='font-medium text-primary hover:text-primary/90'>Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
