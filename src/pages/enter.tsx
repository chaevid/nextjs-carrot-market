import Button from '@/components/button';
import Input from '@/components/input';
import SocialLoginButton from '@/components/social-login-button';
import Tab from '@/components/tab';
import TabBar from '@/components/tab-bar';
import { classNameJoin } from '@/lib/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface EnterForm {
  email?: string;
  phone?: string;
}
export default function Enter() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const onEmailClick = () => {
    reset();
    setMethod('email');
  };
  const onPhoneClick = () => {
    reset();
    setMethod('phone');
  };
  const onValid = (data: EnterForm) => {
    setSubmitting(true);
    fetch('/api/users/enter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      setSubmitting(false);
    });
  };
  return (
    <div className="my-16 px-8">
      <h3 className="my-16 text-center text-3xl font-bold">Enter to Carrot</h3>
      <div className="flex flex-col items-center">
        <h5 className="text-sm text-gray-500">Enter using:</h5>
        <TabBar length={2}>
          <Tab
            label={'Email'}
            onClick={onEmailClick}
            isSelected={method === 'email' ? true : false}></Tab>
          <Tab
            label={'Phone'}
            onClick={onPhoneClick}
            isSelected={method === 'phone' ? true : false}></Tab>
        </TabBar>
      </div>
      <form
        onSubmit={handleSubmit(onValid)}
        className="mt-4 flex flex-col space-y-4">
        {method === 'email' ? (
          <>
            <Input
              register={register('email')}
              required
              label={'Email address'}
              name={'email'}
              type="email"
            />
            <Button text={submitting ? 'Loading' : 'Get login link'} />
          </>
        ) : null}
        {method === 'phone' ? (
          <>
            <Input
              register={register('phone')}
              required
              label={'Phone'}
              name={'phone'}
              type="tel"
              category="phone"
            />
            <Button text={submitting ? 'Loading' : 'Get one-time password'} />
          </>
        ) : null}
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute w-full border-t border-gray-300" />
          <div className="relative -top-3 text-center ">
            <span className="bg-white px-4 text-sm text-gray-500">OR</span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SocialLoginButton company="google"></SocialLoginButton>
          <SocialLoginButton company="github"></SocialLoginButton>
        </div>
      </div>
    </div>
  );
}
