import Link from 'next/link';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { Email, Lock } from 'styled-icons/material-outlined';

import { FormLink, FormWrapper } from 'components/Form';

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

      <TextField
        placeholder="Confirm password"
        name="confirmPassword"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        <span>Already have an account?</span>{' '}
        <Link href="/sign-in" passHref>
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
