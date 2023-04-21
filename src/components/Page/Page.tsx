import React from 'react'
import { FieldValues } from '../../types';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';

const Page = () => {
   const [userInfo, setUserInfo] = React.useState<FieldValues>({
     email: 'example@alea.com',
     age: 30,
     name: 'John Doe',
     size: "",
     phone: {
       ext: '00387',
       number: '65/123-456',
     },
   });
  return (
    <div>
      <Form initialValues={userInfo} onSubmit={setUserInfo}>
        <FormInput name="email" />
        <FormInput name="age" />
        <FormInput name="name" />
        <FormInput name="phone.ext" />
        <FormInput name="phone.number" />
        <FormInput type="submit" value="Submit" />
      </Form>
    </div>
  );
}

export default Page