import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Input from '@/components/input';
import InputImage from '@/components/input-image';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <Layout
      title="Edit Profile"
      canGoBack>
      <div className="space-y-4 py-6 px-4">
        <div className="mx-auto flex flex-col items-center space-y-4">
          <Avatar width={24}></Avatar>
          <InputImage
            name={'profile'}
            category={'profile'}></InputImage>
        </div>

        <Input
          label={'Email address'}
          name={'email'}
          placeholder="chaevid@gmail.com"></Input>

        <Input
          label={'Phone Number'}
          name={'phone'}
          category="phone"></Input>

        <Button text="Update Profile" />
      </div>
    </Layout>
  );
};

export default EditProfile;
