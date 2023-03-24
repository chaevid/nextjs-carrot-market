import { FieldErrors, useForm } from 'react-hook-form';

// Better validation
// Better Errors (set, clear, display error)
// Have Control over inputs

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log('Valid!');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 5,
            message: 'The username should be longer than 5 chars.',
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register('email', { required: 'Email is required' })}
        type="email"
        placeholder="Email"
      />
      {handleSubmit}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
      />
      <input
        type="submit"
        value="Create Account"
      />
    </form>
  );
}
