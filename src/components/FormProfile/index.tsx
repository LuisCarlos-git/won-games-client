import React from 'react';
import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import * as S from './styles';

const FormProfile = () => (
  <React.Fragment>
    <Heading color="black" size="small" lineBottom lineColor="primary">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhow doe"
      />

      <TextField
        type="email"
        name="email"
        placeholder="Jhow@doe.com"
        label="E-mail"
        initialValue="Jhow@doe.com"
        disabled
      />
      <TextField
        type="password"
        name="password"
        placeholder="Your password"
        label="Password"
      />
      <TextField
        type="password"
        name="newpassword"
        placeholder="Your new password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </React.Fragment>
);

export default FormProfile;
