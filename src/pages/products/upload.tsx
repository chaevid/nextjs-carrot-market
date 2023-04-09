import Button from '@/components/button';
import Input from '@/components/input';
import InputImage from '@/components/input-image';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import useMutation from '@/lib/client/useMutation';
import { Product } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>('/api/products');
  const onVaild = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <Layout
      title="Upload Product"
      canGoBack>
      <form
        className="space-y-4 px-4 py-4"
        onSubmit={handleSubmit(onVaild)}>
        <InputImage
          name={'product'}
          category={'product'}></InputImage>
        <Input
          register={register('name', { required: true })}
          label={'name'}
          name={'name'}
          type="text"
          required></Input>
        <Input
          register={register('price', { required: true })}
          label={'Price'}
          name={'price'}
          type="number"
          category="price"
          required></Input>
        <Textarea
          register={register('description', { required: true })}
          label={'Description'}
          name={'description'}
          rows={6}
          placeholder={'Describe your item in as much detail as you can.'}
          required></Textarea>
        <Button text={loading ? 'Loading...' : 'Upload'}></Button>
      </form>
    </Layout>
  );
};

export default Upload;
