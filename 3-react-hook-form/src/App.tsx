import './App.css';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { formSchema } from './schemas/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import MESSAGE from './utils/messages';
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
              className={`${(errors.email?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} w-full`}
              {...register('email')}
            />
          </label>
          {errors.email?.message === MESSAGE.INVALID_EMAIL &&
            <span className='text-xs text-error'>
              {errors.email?.message}
            </span>}
        </div>

        <div className="w-full">
          <label className="floating-label">
            <span>Password</span>
            <input
              type="password"
              placeholder="Password"
              className={`${(errors.password?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} w-full`}
              {...register('password')}
            />
          </label>
          {errors.password?.message === MESSAGE.MIN_PASSWORD &&
            <span className='text-xs text-error'>
              {errors.password?.message}
            </span>}
        </div>

        <div className="w-full">
          <label className="floating-label">
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${(errors.confirmPassword?.message === MESSAGE.REQUIRED) ? 'input input-error' : 'input'} w-full`}
              {...register('confirmPassword')}
            />
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
          {isSubmitting && <span className="loading loading-spinner" />}
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </main >
  );
};

export default App;