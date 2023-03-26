import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
// Better Errors (set, clear, display error)
// Have Control over inputs

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });
  const [valid, setValid] = useState<boolean>(false);
  const onValid = (data: LoginForm) => {
    console.log('Valid!');
    setValid(true);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <span>Name: </span>
        <input
          {...register('username', {
            required: 'Please write down your name',
          })}
          type="text"
          placeholder=""
        />
        <span>{errors.username?.message}</span>
      </div>
      <div>
        <span>Email: </span>
        <input
          {...register('email', {
            required: 'Please write down your email.',
            validate: {
              notNaver: (value) =>
                value.includes('@naver.com') || 'Only @naver emails allowed',
            },
          })}
          type="email"
          placeholder="Only @naver.com"
        />
        <span>{errors.email?.message}</span>
      </div>

      <div>
        <span>Password: </span>

        <input
          {...register('password', {
            required: 'Please write down your password.',
            minLength: {
              value: 10,
              message: 'Password has to be more than 10 chars.',
            },
          })}
          type="password"
          placeholder="Min 10 characters"
        />
        <span>{errors.password?.message}</span>
      </div>
      <input
        type="submit"
        value="Log in"
      />
      <span>{errors.errors?.message}</span>
      <div>{valid ? 'Thank you' : ''}</div>
    </form>
  );
}
