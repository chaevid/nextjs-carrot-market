import { useForm } from 'react-hook-form';

// Less code - done
// Better validation
// Better Errors (set, clear, display error)
// Have Control over inputs
// Don't deal with events - done
// Easier Inputs - done

export default function Forms() {
  const { register, watch } = useForm();
  // console.log(watch());
  // console.log(register('name'));
  return (
    <form>
      <input
        {...register('username')}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        {...register('email')}
        type="email"
        placeholder="Email"
        required
      />
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        required
      />
      <input
        type="submit"
        value="Create Account"
      />
    </form>
  );
}
