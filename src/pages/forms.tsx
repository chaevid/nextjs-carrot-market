import { useForm } from 'react-hook-form';

// Better validation
// Better Errors (set, clear, display error)
// Have Control over inputs

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log('Valid!');
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('username', { required: true, minLength: 4 })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register('password', { required: true })}
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
