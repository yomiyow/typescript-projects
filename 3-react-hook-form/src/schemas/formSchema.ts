import { z } from 'zod';
import MESSAGE from '../utils/messages';

export const formSchema = z
  .object({
    email: z.string()
      .nonempty(MESSAGE.REQUIRED)
      .email(MESSAGE.INVALID_EMAIL),

    password: z.string()
      .nonempty(MESSAGE.REQUIRED)
      .min(10, MESSAGE.MIN_PASSWORD),

    confirmPassword: z.string()
      .nonempty(MESSAGE.REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: MESSAGE.PASSWORDS_MUST_MATCH,
    path: ['confirmPassword'],
  });
