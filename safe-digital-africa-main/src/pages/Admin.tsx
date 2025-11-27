import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  return (
    <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold text-foreground mb-8'>Admin Panel</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>1,250</p>
            <p className='text-xs text-muted-foreground'>Total registered users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Incident Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>8</p>
            <p className='text-xs text-muted-foreground'>New reports awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
          </CardHeader>
          <CardContent>
             <p className='text-xs text-muted-foreground'>Manage courses and resources.</p>
          </CardContent>
        </card>
      </div>
    </div>
  );
};

export default Admin;
