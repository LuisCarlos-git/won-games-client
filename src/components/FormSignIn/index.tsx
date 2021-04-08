import Link from 'next/link';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { Email, Lock } from 'styled-icons/material-outlined';

import { ForgotPassword, FormLink, FormWrapper } from 'components/Form';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        placeholder="E-mail"
        name="email"
        type="email"
        icon={<Email />}
      />

      <TextField
        placeholder="Password"
        name="password"
        type="password"
        icon={<Lock />}
      />

      <ForgotPassword href="#">Forgot your password?</ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        <span>Don’t have an account?</span>{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
