import './App.css';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { formSchema } from './schemas/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import MESSAGE from './utils/messages';
import { Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';

type Form = z.infer<typeof formSchema>;

const App = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Form> = async (data) => {
    console.log(data);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Submitted');
      }, 3000);
    });

    reset();
  };

  return (
    <main className='flex flex-col justify-center items-center h-screen w-screen'>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-xs"
      >
        <div className='w-full'>
          <label className="floating-label">
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className={`${(errors.email?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} w-full`}
            />
          </label>
          {errors.email?.message === MESSAGE.INVALID_EMAIL &&
            <span className='text-xs text-error'>
              {errors.email?.message}
            </span>}
        </div>

        <div className="w-full">
          <label className={`${(errors.password?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} floating-label`}>
            <span>Password</span>
            <input
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Password"
              {...register('password')}
              className={` w-full`}
            />
            {(showPassword) ? (
              <EyeOff
                className="cursor-pointer opacity-50 size-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="cursor-pointer opacity-50 size-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </label>
          {errors.password?.message === MESSAGE.MIN_PASSWORD &&
            <span className='text-xs text-error'>
              {errors.password?.message}
            </span>}
        </div>

        <div className="w-full">
          <label className={`${(errors.confirmPassword?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} floating-label`}>
            <span>Confirm Password</span>
            <input
              type={`${showConfirmPassword ? 'text' : 'password'}`}
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className="w-full"
            />
            {(showConfirmPassword) ? (
              <EyeOff
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="cursor-pointer opacity-50 size-5"
              />
            ) : (
              <Eye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="cursor-pointer opacity-50 size-5"
              />
            )}
          </label>
          {errors.confirmPassword?.message === MESSAGE.PASSWORDS_MUST_MATCH &&
            <span className='text-xs text-error'>
              {errors.confirmPassword?.message}
            </span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className='btn btn-primary w-full max-w-xs'
        >
          {isSubmitting && <span className="loading loading-spinner loading-xs" />}
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </main >
  );
};

export default App;