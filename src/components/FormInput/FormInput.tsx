import React from "react";
import { useForm } from "../FormContext/FormContext";
import Button from "../Button/Button";
import "./FormInput.css"

interface FormInputProps {
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
}

 const FormInput: React.FC<FormInputProps> = ({
  type = 'text',
  name,
  required,
  placeholder,
  value,
}) => {
  const { data, handleChange } = useForm();

  return (
    <div >
      <input
        
        placeholder={
          placeholder ||
          name?.split('.').reduce((acc: string, val: string) => val)
        }
        value={
          value ||
          name
            ?.split('.')
            .reduce((val: any, propName: string) => val[propName], data)
        }
        onChange={(e) => handleChange(e)}
        type={type}
        name={name}
        required={required}
      />
    </div>
  );
};


export default FormInput;