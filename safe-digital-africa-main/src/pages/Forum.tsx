import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus } from 'lucide-react';

const Forum = () => {
  return (
    <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>Jukwaa la Majadiliano</h1>
        <Button>
          <Plus className='mr-2 h-4 w-4' />
          Start a Discussion
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Discussions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-start space-x-4'>
              <MessageSquare className='h-6 w-6 text-muted-foreground mt-1' />
              <div>
                <h3 className='font-semibold'>How to handle online harassment?</h3>
                <p className='text-sm text-muted-foreground'>Posted by Amina - 2 hours ago</p>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <MessageSquare className='h-6 w-6 text-muted-foreground mt-1' />
              <div>
                <h3 className='font-semibold'>Tips for securing social media accounts</h3>
                <p className='text-sm text-muted-foreground'>Posted by Folami - 1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forum;
