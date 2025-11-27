import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IncidentReport = () => {
  return (
    <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <Card className='max-w-2xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>Report an Incident</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-6'>
            <div>
              <Label htmlFor='incident-type'>Type of Incident</Label>
              <Input id='incident-type' placeholder='e.g., Online Harassment, Phishing Scam' />
            </div>
            <div>
              <Label htmlFor='incident-description'>Description</Label>
              <Textarea id='incident-description' placeholder='Describe the incident in detail...' rows={6} />
            </div>
            <div>
              <Label htmlFor='evidence'>Upload Evidence (optional)</Label>
              <Input id='evidence' type='file' />
            </div>
            <Button type='submit' className='w-full'>Submit Report</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncidentReport;
