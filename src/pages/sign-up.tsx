import { FormWrapper } from 'components/Form';
import FormSignUp from 'components/FormSignUp';

import Auth from 'templates/Auth';

const SignUp = () => {
  return (
    <Auth title="Sign up">
      <FormWrapper>
        <FormSignUp />
      </FormWrapper>
    </Auth>
  );
};

export default SignUp;
