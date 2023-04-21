## bgc-react-form

A simple react form library

## Instalation 
```
  yarn add bgc-react-form 

  npm install bgc-react-form 

```

## Components
Form
FormInput

## Usage 

```
import { Form, FormInput, FieldValues } from 'bgc-react-form';


function App() {
    const [userInfo, setUserInfo] = useState<FieldValues>({
      email: 'example@alea.com',
      age: 30,
      name: 'John Doe',
      phone: {
        ext: '00387',
        number: '65/123-456',
      },
    });

  return (
    <Form initialValues={userInfo} onSubmit={setUserInfo}>
      <FormInput
        type="email"
        required
        name="email"
        placeholder="your@email.com"
      />
      <FormInput type="email" name="email" />
      <FormInput type="number" name="age" />
      <FormInput type="text" required name="name" />
      <FormInput type="text" name="phone.ext" />
      <FormInput type="text" name="phone.number" />
      <FormInput type="submit" value="Submit" />
    </Form>
  );
}

export default App

```

