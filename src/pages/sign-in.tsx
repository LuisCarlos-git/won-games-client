import { FormWrapper } from 'components/Form';
import FormSignIn from 'components/FormSignIn';
import Auth from 'templates/Auth';

const SignIn = () => {
  return (
    <Auth title="Sign in">
      <FormWrapper>
        <FormSignIn />
      </FormWrapper>
    </Auth>
  );
};

export default SignIn;
