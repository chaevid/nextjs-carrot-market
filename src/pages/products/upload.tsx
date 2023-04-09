import Button from '@/components/button';
import Input from '@/components/input';
import InputImage from '@/components/input-image';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <Layout
      title="Upload Product"
      canGoBack>
      <div className="space-y-4 px-4 py-4">
        <InputImage
          name={'product'}
          category={'product'}></InputImage>
        <Input
          label={'Title'}
          name={'title'}
          type="text"
          // register={}
          required></Input>
        <Input
          label={'Price'}
          name={'price'}
          type="number"
          category="price"></Input>
        <Textarea
          label={'Description'}
          name={'description'}
          rows={6}
          placeholder={
            'Describe your item in as much detail as you can.'
          }></Textarea>
        <Button text={'Upload'}></Button>
      </div>
    </Layout>
  );
};

export default Upload;
